const chalk = require("chalk")

class quote_command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("quote")
            .action(() => this.getQuote())
    }

    getQuote() {
        const quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Innovation distinguishes between a leader and a follower. - Steve Jobs",
            "Life is what happens when you're busy making other plans. - John Lennon",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "It is during our darkest moments that we must focus to see the light. - Aristotle"
        ];
        
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(chalk.cyan(`Quote: ${randomQuote}`))
    }
}

module.exports = quote_command
