console.log(`👀 BEFORE NPM`)

let { context } = await npm("@actions/github")
let { Octokit } = await npm("@octokit/rest")

console.log({ context })
console.log({ Octokit })

console.log(`🟢 AFTER NPM`)
