import { TSESTree, ESLintUtils } from "@typescript-eslint/utils";

type MessageIds = "noImportAs";
type Options = [];

export const noImportAsRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/your-repo/eslint-plugin-your-plugin/blob/main/docs/rules/${name}.md`,
)({
  name: "no-import-as",
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow using 'as' keyword in import statements",
      recommended: "strict",
    },
    messages: {
      noImportAs:
        "Avoid using 'as' in import statements. Use direct named imports instead.",
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      ImportSpecifier(node: TSESTree.ImportSpecifier) {
        if (node.imported.name !== node.local.name) {
          context.report({
            node,
            messageId: "noImportAs",
          });
        }
      },
    };
  },
});
