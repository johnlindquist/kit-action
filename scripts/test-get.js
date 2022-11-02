let core = await npm("@actions/core")

let response = await get(`https://api.github.com/repos/johnlindquist/kit`)

core.setOutput("result", response.data.full_name)
