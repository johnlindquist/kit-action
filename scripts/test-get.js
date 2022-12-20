let response = await get(`https://www.scriptkit.com/api/get-sponsor-url`)

core.setOutput("result", response.data.full_name)
