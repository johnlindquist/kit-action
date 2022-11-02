import "@johnlindquist/kit"

console.log(`👀 BEFORE NPM`)
console.log(`☝️ ${kenvPath()}`)
await $`which npm`

let { context } = await npm("@actions/github")
console.log({ context })
let { Octokit } = await npm("@octokit/rest")
console.log({ Octokit })

console.log(`🟢 AFTER NPM`)
