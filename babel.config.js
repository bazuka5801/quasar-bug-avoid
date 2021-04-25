/* eslint-env node */

module.exports = api => {
  return {
    presets: [
      [
        '@quasar/babel-preset-app',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
        api.caller(caller => caller && caller.target === 'node')
          ? { targets: { node: 'current' } }
          : {}
      ]
    ]
  }
}
