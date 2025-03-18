# eslint-plugin-no-named-import-alias

ESLint plugin to enforce direct named imports without aliases

## Installation

```bash
npm install eslint-plugin-no-named-import-alias --save-dev
```

## Usage

Add the plugin to your ESLint configuration:

```json
{
  "plugins": ["eslint-plugin-no-named-import-alias"],
  "rules": {
    "eslint-plugin-no-named-import-alias/no-import-as": "error"
  }
}
```

## Rules

### no-import-as

Disallows using the `as` keyword in import statements, enforcing direct named imports.

❌ Incorrect:

```typescript
import { foo as bar } from "module";
```

✅ Correct:

```typescript
import { foo } from "module";
```

## Why?

Using direct named imports:

- Easier to search for uses in codebase
- Maintains codebase consistency
- Reduces indirection and hence cognitive overhead
