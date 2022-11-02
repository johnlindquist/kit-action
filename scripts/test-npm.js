let { titleCase } = await npm("title-case")
console.log(titleCase(await arg("Enter a string to title case:")))
