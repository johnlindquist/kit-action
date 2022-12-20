let response = await get(`https://www.scriptkit.com/api/kit-action`)

core.setOutput("result", response.data.kit)
