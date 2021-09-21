console.log(`👀 BEFORE NPM`)
console.log(`☝️ ${kenvPath()}`)
await $`which npm`

let { context } = await npm("@actions/github")

console.log({ context })

console.log(`🟢 AFTER NPM`)
