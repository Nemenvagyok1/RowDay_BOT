function init() {
    const { spawn } = require("child_process")
    var proc = spawn("node", ["index"])
    proc.stdout.on("data", (d) => {
        console.log(d.toString())
    })
    proc.stderr.on("data", (d) => {
        console.log(d.toString())
    })
proc.on("end", init)
proc.on("exit", init)

}init()