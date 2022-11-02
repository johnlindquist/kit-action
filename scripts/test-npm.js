let { stdout } = await $`which npm`
let { context } = await npm("@actions/github")
let { Octokit } = await npm("@octokit/rest")
console.log(stdout)
