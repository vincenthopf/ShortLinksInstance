# cf deploy for l.vjh.io

Deploys this fork to the `vjh.io` Cloudflare account with the `cf` CLI. The repo root is a pnpm workspace, which `cf` refuses to build from, so the deploy config lives here and points at the root build output.

```bash
mise exec node@24 -- env SHARP_IGNORE_GLOBAL_LIBVIPS=1 pnpm install
mise exec node@24 -- env SHARP_IGNORE_GLOBAL_LIBVIPS=1 pnpm build
cd cf-deploy
mise exec node@24 -- pnpm install --ignore-workspace
CLOUDFLARE_ACCOUNT_ID=9088c073078f3ddda7eacd3caf8363d7 mise exec node@24 -- pnpm exec cf d1 migrations apply 969a1081-df82-4e10-84a9-ca636ddaca7d --dir ../drizzle
CLOUDFLARE_ACCOUNT_ID=9088c073078f3ddda7eacd3caf8363d7 mise exec node@24 -- pnpm exec cf deploy
```

Upgrade: sync `master` with upstream `miantiao-me/Sink`, merge `master` into `deploy/vjh-io`, then run the steps above. The dashboard token is the KeePassXC entry `sink-l-vjh-io`.
