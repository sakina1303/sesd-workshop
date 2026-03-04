const {command} = require("commander")

class cli_engine{
    program;
    constructor(){
        this.program = new Command()
    }

    registorCommand(commands){
        commands.forEach((cmdClass)=>{
            const cmdInstance = new cmdClass(this.program)
            cmdInstance.register()
        })
    }

    run(){
        this.program.parse()
    }
}
module.exports = cli_engine