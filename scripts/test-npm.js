console.log(`👀 BEFORE NPM`)
console.log(`☝️ ${kenvPath()}`)

let { context } = await npm("@actions/github")

console.log({ context })

console.log(`🟢 AFTER NPM`)
