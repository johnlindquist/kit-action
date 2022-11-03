console.log(`Current working directory: ${cwd()}`)

let contents = await readFile("README.md", "utf-8")

core.setOutput("result", contents.startsWith("#") ? "success" : "fail")
