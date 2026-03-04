const chalk = require("chalk")

class calc_command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("calc <operation> <a> <b>")
            .action((operation, a, b) => this.calculate(operation, a, b))
    }

    calculate(operation, a, b) {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        let result;

        switch(operation) {
            case "add":
                result = numA + numB;
                break;
            case "sub":
                result = numA - numB;
                break;
            case "mul":
                result = numA * numB;
                break;
            case "div":
                result = numB !== 0 ? numA / numB : "Error: Division by zero";
                break;
            default:
                result = "Unknown operation";
        }

        console.log(chalk.yellow(`Result: ${result}`))
    }
}

module.exports = calc_command
