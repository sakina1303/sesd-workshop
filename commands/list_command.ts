const chalk = require("chalk")

class list_command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("list")
            .action(() => this.listItems())
    }

    listItems() {
        const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
        console.log(chalk.green("Available items:"))
        items.forEach((item, index) => {
            console.log(chalk.white(`  ${index + 1}. ${item}`))
        })
    }
}

module.exports = list_command
