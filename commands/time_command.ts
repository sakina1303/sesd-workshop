const chalk = require("chalk")

class time_command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("time")
            .action(() => this.showTime())
    }

    showTime() {
        const now = new Date();
        console.log(chalk.blue(`Current time: ${now.toLocaleTimeString()}`))
    }
}

module.exports = time_command
