const chalk = require("chalk")

class date_command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("date")
            .action(() => this.showDate())
    }

    showDate() {
        const now = new Date();
        console.log(chalk.cyan(`Current date: ${now.toLocaleDateString()}`))
    }
}

module.exports = date_command
