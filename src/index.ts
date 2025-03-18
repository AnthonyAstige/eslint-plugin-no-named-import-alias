import { noImportAsRule } from "./rules/no-import-as";

export const rules = {
  "no-import-as": noImportAsRule,
};

export const configs = {
  recommended: {
    rules: {
      "eslint-plugin-no-named-import-alias/no-import-as": "error",
    },
  },
};
