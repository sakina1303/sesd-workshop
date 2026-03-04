#!/usr/bin/env node
const { Command} = require("commander")
const program = new Command();


const cli = require("./cli_engine/cli_engine")
const greet = require("./commands/greet_command")
const joke= require("./commands/joke_command")

const engine = new cli_engine()
engine.registorCommand([greet_command, joke_command])
engine.run()

// // made an object of commander
// program
//   .command('greet <name>')
//   .action((name: string) => {
//     console.log(`Hello, ${name}!`);
//   });

// program
//   .command('add <n1> <n2>')
//   .action((n1: string, n2: string) => {
//     const sum = parseFloat(n1) + parseFloat(n2);
//     console.log(`The sum of ${n1} and ${n2} is: ${sum}`);
//   });

// program
//     .command('subtract <n1> <n2>')
//     .action((n1: string, n2: string) => {
//         const difference = parseFloat(n1) - parseFloat(n2);
//         console.log(`The difference between ${n1} and ${n2} is: ${difference}`);
//     });

// program
//     .command('multiply <n1> <n2>')
//     .action((n1: string, n2: string) => {
//         const product = parseFloat(n1) * parseFloat(n2);
//         console.log(`The product of ${n1} and ${n2} is: ${product}`);
//     }); 
// program
//     .command('divide <n1> <n2>')
//     .action((n1: string, n2: string) => {
//         const quotient = parseFloat(n1) / parseFloat(n2);
//         console.log(`The quotient of ${n1} and ${n2} is: ${quotient}`);
//     }); 

// program 
//     .command('power <base> <exponent>')
//     .action((base: string, exponent: string) => {
//         const result = Math.pow(parseFloat(base), parseFloat(exponent));
//         console.log(`The result of ${base} raised to the power of ${exponent} is: ${result}`);
//     });

// program
//     .command('sqrt <n>')
//     .action((n: string) => {
//         const result = Math.sqrt(parseFloat(n));
//         console.log(`The square root of ${n} is: ${result}`);
//     });

//     program
//     .command('log <n>')
//     .action((n: string) => {
//         const result = Math.log(parseFloat(n));
//         console.log(`The natural logarithm of ${n} is: ${result}`);
//     }); 

//     program
//     .command('exp <n>')
//     .action((n: string) => {
//         const result = Math.exp(parseFloat(n));
//         console.log(`The exponential of ${n} is: ${result}`);
//     }); 

//     program
//     .command('sin <n>')
//     .action((n: string) => {
//         const result = Math.sin(parseFloat(n));
//         console.log(`The sine of ${n} is: ${result}`);
//     }); 
    
// program.parse();