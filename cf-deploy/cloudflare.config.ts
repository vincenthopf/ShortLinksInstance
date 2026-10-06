import { bindings, defineConfig } from 'cf/config'

export default defineConfig({
  worker: {
    name: 'sink',
    compatibilityDate: '2025-05-08',
    compatibilityFlags: [
      'nodejs_compat',
    ],
    entrypoint: '../.output/server/index.mjs',
    workersDev: true,
    previewUrls: false,
    observability: {
      logs: {
        enabled: true,
        headSamplingRate: 0.1,
      },
    },
    assets: {
      htmlHandling: 'drop-trailing-slash',
    },
    env: {
      NUXT_CF_ACCOUNT_ID: bindings.text('9088c073078f3ddda7eacd3caf8363d7'),
      NUXT_PUBLIC_HOME_URL: bindings.text('https://vjh.io'),
      NUXT_NOT_FOUND_REDIRECT: bindings.text('https://vjh.io'),
      NUXT_REDIRECT_STATUS_CODE: bindings.text('302'),
      NUXT_DISABLE_BOT_ACCESS_LOG: bindings.text('true'),
      NUXT_DISABLE_AUTO_BACKUP: bindings.text('true'),
      NUXT_SITE_TOKEN: bindings.secret(),
      DB: bindings.d1({
        name: 'sink',
        id: '969a1081-df82-4e10-84a9-ca636ddaca7d',
      }),
      KV: bindings.kv({
        id: '66ac94a34d544ffd9d8b81bd68b70507',
      }),
      AI: bindings.ai({}),
      ASSETS: bindings.assets(),
    },
  },
})
