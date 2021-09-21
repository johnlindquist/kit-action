console.log(`👀 BEFORE NPM`)

let { context } = await npm("@actions/github")

console.log({ context })

console.log(`🟢 AFTER NPM`)
