let response = await get(`https://api.github.com/repos/johnlindquist/kit`)
console.log(response.data.full_name)
