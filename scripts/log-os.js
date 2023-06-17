import os from "os"

console.log(`Current platform details:`)
// Log out all the "OS" details

console.log(`Architecture: ${os.arch()}`)
console.log(`CPU: ${os.cpus()[0].model}`)
console.log(`Free Memory: ${os.freemem()}`)
console.log(`Total Memory: ${os.totalmem()}`)
console.log(`Home Directory: ${os.homedir()}`)
console.log(`Hostname: ${os.hostname()}`)
console.log(`Platform: ${os.platform()}`)
console.log(`Release: ${os.release()}`)
console.log(`Temp Directory: ${os.tmpdir()}`)
console.log(`Uptime: ${os.uptime()}`)
console.log(`User Info: ${os.userInfo()}`)
console.log(`Network Interfaces: ${os.networkInterfaces()}`)
