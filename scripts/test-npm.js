let { titleCase } = await npm("title-case")
let result = titleCase(await arg("Enter a string to title case:"))

core.setOutput("result", result)
