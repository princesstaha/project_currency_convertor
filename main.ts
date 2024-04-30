#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


const Currency :any ={
"USD" : 1,
"EUR" :0.9,
"GBP" : 0.76,
"INR":74.57,
"PKR" :280


};
//PROMPT THE USE TO SELECT CURRENCIES TO CONVERT FORMAL TO
let user_answer = await inquirer.prompt(
    [
    {
        name: "from",
        type: "list",
        message: (chalk.yellow("Enter From Currency")),
        choices: ["USD","EUR","GBP","INR","PKR"]
    },
    {
        name: "to",
        type: "list",
        message: (chalk.gray("Enter To Currency")),
        choices: ["USD","EUR","GBP","INR","PKR"]
    },
    {
        name:"amount",
        type:"number",
        message: (chalk.cyan("Enter Your Amount"))
    }
]
);


    let fromAmount = Currency[user_answer.from]
    let toAmount = Currency[user_answer.to]
    let amount = user_answer.amount;

    let baseAmount= amount / fromAmount
    let convertedAmount = baseAmount*toAmount
    console.log(convertedAmount);
