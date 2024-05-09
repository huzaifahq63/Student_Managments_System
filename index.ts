#! /usr/bin/env node 

import inquirer from "inquirer";

const randomnumber: number =Math.floor(10000 + Math.random() * 9000)
console.log(randomnumber);

let myBalance :number = 0

let answer = await inquirer.prompt([{
     
    name :"students",
    type:"input",
    message:"Enter student name",
    validate :function(value) {
        if(value.trim() !== ""){
            return true;
        }
        return "Please enter an empty value."
    }
},
{
    name :"course",
    message:"select the course to enroll",
    type:"list",
    choices:["ms.office","html","javascript","python","typescript"]
}
]);
const tutionFee:{[key:string]:number}={
    "Ms.office":2000,
    "HTML":2500,
    "javascript":5000,
    "typescript":6000,
};
console.log(`\nTution fees: ${tutionFee[answer.course]}`);
console.log(`Balance:${myBalance}\n`);

let paymentType = await inquirer.prompt([{
    name:"payment",
    type:"list",
    message:"Select payment method",
    choices:["Bank Transfer", "EasyPaisa", "JazzCash"]
},
{
    name:"amount",
    type:"input",
message:"Transfer Money",
validate:function(value){
    return true;
if (value.trim()!==""){
    return true;
}
return "Please enter a non-empty value."
}
}]);

console.log(`\nyou select payment method${paymentType.payment}`)

const tutionFees = tutionFee[answer.course];
