console.log(`Hello, world! 🌎`)
let value = await arg("hello")
// only required when you want to use the output of this script in another step
core.setOutput("result", value)
console.log(`Goodbye, world! ${value} 🌍`)
