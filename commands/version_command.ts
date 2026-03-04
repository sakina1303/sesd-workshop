const chalk = require("chalk")

class version_command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("version")
            .action(() => this.showVersion())
    }

    showVersion() {
        console.log(chalk.blue("CLI Engine v1.0.0"))
    }
}

module.exports = version_command
