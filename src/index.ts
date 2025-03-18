import { noImportAsRule } from "./rules/no-import-as";

export const rules = {
  "no-import-as": noImportAsRule,
};

export const configs = {
  recommended: {
    plugins: ["your-plugin"],
    rules: {
      "your-plugin/no-import-as": "error",
    },
  },
};
