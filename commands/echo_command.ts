const chalk = require("chalk")

class echo_command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("echo <message>")
            .action((message) => this.echo(message))
    }

    echo(message) {
        console.log(chalk.magenta(`Echo: ${message}`))
    }
}

module.exports = echo_command
