let first = await arg("first name")
let last = await arg("last name")

let core = await npm("@actions/core")
core.setOutput("result", `${last} ${first}`)
