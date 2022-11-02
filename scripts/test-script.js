let core = await npm("@actions/core")
let value = await arg("hello")
core.setOutput("result", value)
