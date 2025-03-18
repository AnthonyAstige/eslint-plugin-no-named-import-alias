import { RuleTester } from "eslint";
import * as path from "path";
const rule = require(
  path.join(__dirname, "../dist/rules/no-import-as.js"),
).noImportAsRule;

const ruleTester = new RuleTester();

ruleTester.run("no-import-as", rule, {
  valid: [
    "import { extend } from 'dayjs';",
    "import dayjs from 'dayjs';",
    "import * as dayjs from 'dayjs';",
  ],
  invalid: [
    {
      code: "import { extend as dayJSExtend } from 'dayjs';",
      errors: [{ messageId: "noImportAs" }],
    },
    {
      code: "import { format as dateFormat } from 'date-fns';",
      errors: [{ messageId: "noImportAs" }],
    },
  ],
});
