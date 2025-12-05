# Elysia API Template

## Getting Started

### Requirements

- [**git**](https://git-scm.com)
- [**bun**](https://bun.com)

### Installation

1. Clone the repository or use the template option.
2. Go to the `root` folder within a terminal of your choice and type `bun i`.

### Env File

This are the default values, even if you don't specify them in the `.env` file, the api will execute.

```bash
API_PORT="3000"
JWT_SECRET="secret"
JWT_ALGORITHM="EdDSA"
```

Want a different algorithm?
Check the [**elysia docs**](https://elysiajs.com/plugins/jwt).

## Scripts

### Develop

```bash
bun run dev
```

### Deploy

If you want you can deploy for a specific target.
For more info: [**bun docs**](https://bun.com/docs/bundler/executables#cross-compile-to-other-platforms).

```bash
bun run build
```
