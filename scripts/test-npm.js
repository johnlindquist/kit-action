console.log({ args })
let { titleCase } = await npm("title-case")
let result = titleCase(await arg("Enter a string to title case:"))
console.log({ args })

console.log("typeof titleCase", typeof titleCase)
console.log("result", { result })

core.setOutput("result", result)
