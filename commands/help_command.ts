const chalk = require("chalk")

class help_command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("help")
            .action(() => this.showHelp())
    }

    showHelp() {
        console.log(chalk.green("Available commands:"))
        console.log(chalk.white("  greet <name>  - Greet someone"))
        console.log(chalk.white("  joke           - Tell a random joke"))
        console.log(chalk.white("  time           - Show current time"))
        console.log(chalk.white("  date           - Show current date"))
        console.log(chalk.white("  calc <op> <a> <b> - Perform calculation"))
        console.log(chalk.white("  echo <message> - Echo a message"))
        console.log(chalk.white("  version        - Show version"))
        console.log(chalk.white("  list           - List all items"))
    }
}

module.exports = help_command
