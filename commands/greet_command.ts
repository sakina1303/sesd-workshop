const chalk = require("chalk")

class greet_command{
    program;

    constructor(program){
        this.program = program;
    }

    register(){
        this.program
        .command("greet <name>")
        .action((name=>this.sayHello(name)))

    }
    sayHello(name){
        console.log(chalk.green(`Hello ${name}`))
    }
}
module.exports = greet_command