function init() {
    const { spawn } = require("child_process")
    var proc = spawn("node", ["index"])
    proc.stdout.on("data", (d) => {
        console.log(d)
    })
    proc.stderr.on("data", (d) => {
        console.log(d)
    })
proc.on("end", init)
proc.on("exit", init)

}init()