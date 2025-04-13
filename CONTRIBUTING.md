```markdown:c%3A%5CUsers%5CAnas%5Clottiepro-web%5CCONTRIBUTING.md
# Contribution Guide 👩💻

We welcome contributions! Here's how to get started:

## Setup Environment
```bash
pnpm install
cd packages\core && pnpm build --watch
```

## Development Workflow

1. Clone the repo
2. Install dependencies with pnpm install
3. Start core package watcher:

```bash
cd packages\core
pnpm build --watch
```

## Coding Standards

- TypeScript : Strict mode enforced
- ESLint : Follow rules from `eslint.config.js`
- Testing : Add Jest tests for new features
- Documentation : Update relevant Markdown files

## Commit Messages

Use conventional commit format:

```plaintext
feat: add new renderer component
fix(core): resolve memory leak
docs: update installation guide
```

## PR Process

1. Create a feature branch from main
2. Include tests and documentation updates
3. Open PR with clear description of changes
4. Ensure all CI checks pass

## Code of Conduct

Be respectful and inclusive. All contributions must adhere to our Code of Conduct .
