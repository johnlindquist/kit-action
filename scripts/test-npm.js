let { stdout } = await $`which npm`
let { Octokit } = await npm("express")
let json = await readJson("package.json")

// if json includes @octkit/rest, then log "found"
if (json.dependencies["express"]) {
  console.log("found")
} else {
  console.log("not found")
}
