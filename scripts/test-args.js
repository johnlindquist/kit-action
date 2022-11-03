let first = await arg("first name")
let last = await arg("last name")

core.setOutput("result", `${last} ${first}`)
