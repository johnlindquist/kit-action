let { titleCase } = await npm("title-case")
console.log({ titleCase })
let result = titleCase(await arg("Enter a string to title case:"))

core.setOutput("result", result)
