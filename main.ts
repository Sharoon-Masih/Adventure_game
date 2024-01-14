import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.bold.bgWhite.greenBright("\n\t\t\tPUBG 2.0"));
let player = await inquirer.prompt({
    type: "input",
    name: "userName",
    message: chalk.bold.italic.blue("Enter your name:"),
})
let Action;
let inputName: string = player.userName
let playerName: string = inputName.charAt(0).toUpperCase() + inputName.slice(1)
let playerHp = Math.floor(Math.random() * (150 - 40) + 40)
let opponentHp = Math.floor(Math.random() * (150 - 40) + 40)
let newoppoHp = opponentHp;
let newplayHp: number = 0; //here we initialize it with a default value "0" bcuz In TypeScript, variables must be assigned a value before they are used. This rule is in place to prevent potential runtime errors that could occur if you try to use a variable that hasn't been initialized with a value.
let isAttack: boolean = false;
let isEnergy: boolean = false;;
let energyDrink: number = 3;
let afterEnergyDose: number = playerHp;
let afterEnergyDoseNotAttack: number = playerHp;
console.log(chalk.italic.yellow(`\nHey,${chalk.red.italic(playerName)} welcome to PUBG 2.0`));
console.log(chalk.italic.yellow(`${chalk.red.italic(playerName)} your HP is: ${chalk.red.italic(playerHp)}`));
console.log(chalk.italic.yellow(`Your Opponent player HP is: ${chalk.red.italic(opponentHp)}`));
console.log(chalk.italic.yellow(`You have Total 3 Energy Drinks`));

if (opponentHp > playerHp) {
    console.log(chalk.italic.yellow(`Your opponent player Hp is greater be ready!`));

}
do {

    Action = await inquirer.prompt({
        type: "list",
        name: "playAct",
        message: chalk.italic.bold.blue("\nPerform the Action"),
        choices: [chalk.red.bold("Attack"), chalk.greenBright.bold("Energy Drink"), chalk.blue.bold("Quit")]
    })
    if (Action.playAct === chalk.red.bold("Attack")) {
        let Arm = await inquirer.prompt({
            type: "list",
            name: "playArm",
            message: chalk.italic.bold.blue("Select your Arm:"),
            choices: ["M416(damage 30)", "DP(damage 40)", "Pan(damage 10)", "Uzi(damage 20)"]
        })
        if (!isEnergy) {

            if (Arm.playArm === "M416(damage 30)") {
                newoppoHp -= 30;
                if (newoppoHp > 0) {
                    console.log(`Now your opponent Hp is:${newoppoHp}`);
                }
                newplayHp = Math.floor(Math.random() * (afterEnergyDose - 1) + 1)
                console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDose - newplayHp}`);
                afterEnergyDose -= newplayHp;
            }
            else if (Arm.playArm === "DP(damage 40)") {
                newoppoHp -= 40;
                if (newoppoHp > 0) {
                    console.log(`Now your opponent Hp is:${newoppoHp}`);
                }
                newplayHp = Math.floor(Math.random() * (afterEnergyDose - 1) + 1)
                console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDose - newplayHp}`);
                afterEnergyDose -= newplayHp;
            }
            else if (Arm.playArm === "Pan(damage 10)") {
                newoppoHp -= 10;
                if (newoppoHp > 0) {
                    console.log(`Now your opponent Hp is:${newoppoHp}`);
                }
                newplayHp = Math.floor(Math.random() * (afterEnergyDose - 1) + 1)
                console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDose - newplayHp}`);
                afterEnergyDose -= newplayHp;
            }
            else if (Arm.playArm === "Uzi(damage 20)") {
                newoppoHp -= 20;
                if (newoppoHp > 0) {
                    console.log(`Now your opponent Hp is:${newoppoHp}`);
                }
                newplayHp = Math.floor(Math.random() * (afterEnergyDose - 1) + 1)
                console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDose - newplayHp}`);
                afterEnergyDose -= newplayHp;
            }

        }
        else if (isEnergy) {
            if (!isAttack) {
                if (Arm.playArm === "M416(damage 30)") {
                    newoppoHp -= 30;
                    if (newoppoHp > 0) {
                        console.log(`Now your opponent Hp is:${newoppoHp}`);
                    }
                    newplayHp = Math.floor(Math.random() * (afterEnergyDoseNotAttack - 1) + 1)

                    console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDoseNotAttack - newplayHp}`);
                    afterEnergyDoseNotAttack -= newplayHp;
                }
                else if (Arm.playArm === "DP(damage 40)") {
                    newoppoHp -= 40;
                    if (newoppoHp > 0) {
                        console.log(`Now your opponent Hp is:${newoppoHp}`);
                    }
                    newplayHp = Math.floor(Math.random() * (afterEnergyDoseNotAttack - 1) + 1)

                    console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDoseNotAttack - newplayHp}`);
                    afterEnergyDoseNotAttack -= newplayHp;
                }
                else if (Arm.playArm === "Pan(damage 10)") {
                    newoppoHp -= 10;
                    if (newoppoHp > 0) {
                        console.log(`Now your opponent Hp is:${newoppoHp}`);
                    }
                    newplayHp = Math.floor(Math.random() * (afterEnergyDoseNotAttack - 1) + 1)

                    console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDoseNotAttack - newplayHp}`);
                    afterEnergyDoseNotAttack -= newplayHp;
                }
                else if (Arm.playArm === "Uzi(damage 20)") {
                    newoppoHp -= 20;
                    if (newoppoHp > 0) {
                        console.log(`Now your opponent Hp is:${newoppoHp}`);
                    }
                    newplayHp = Math.floor(Math.random() * (afterEnergyDoseNotAttack - 1) + 1)

                    console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDoseNotAttack - newplayHp}`);
                    afterEnergyDoseNotAttack -= newplayHp;
                }
                afterEnergyDose = afterEnergyDoseNotAttack;//yaha humna iss lia afterEnergyDose ko "afterEnergyDoseNotAttack" ki value assign ki hai bcuz jasa first time "afterEnergyDoseNotAttack" hogya phr second time jab user attack krega toh wo iss block pa nahi ayega bcuz "isAttack=true" hogya hoga iss lia wo nicha wala block pa jayega jab uspa jayega toh "afterEnergyDose=0" hoga toh phr wo kasa work krega sai sa iss lia humna yaha "afterEnergyDose=afterEnergyDoseNotAttack" krdia taka jab user 2nd time attack krega toh "afterEnergyDose" ka pass jo value "afterEnergyDoseNotAttack" ma hogi wohi value sa wo agay continue krega.
            }

            else if (isAttack) {
                if (Arm.playArm === "M416(damage 30)") {
                    newoppoHp -= 30;
                    if (newoppoHp > 0) {
                        console.log(`Now your opponent Hp is:${newoppoHp}`);
                    }
                    newplayHp = Math.floor(Math.random() * (afterEnergyDose - 1) + 1)
                    afterEnergyDose -= newplayHp;
                    console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDose}`);
                }
                else if (Arm.playArm === "DP(damage 40)") {
                    newoppoHp -= 40;
                    if (newoppoHp > 0) {
                        console.log(`Now your opponent Hp is:${newoppoHp}`);
                    }
                    newplayHp = Math.floor(Math.random() * (afterEnergyDose - 1) + 1)
                    afterEnergyDose -= newplayHp;
                    console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDose}`);
                }
                else if (Arm.playArm === "Pan(damage 10)") {
                    newoppoHp -= 10;
                    if (newoppoHp > 0) {
                        console.log(`Now your opponent Hp is:${newoppoHp}`);
                    }
                    newplayHp = Math.floor(Math.random() * (afterEnergyDose - 1) + 1)
                    afterEnergyDose -= newplayHp;
                    console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDose}`);

                }
                else if (Arm.playArm === "Uzi(damage 20)") {
                    newoppoHp -= 20;
                    if (newoppoHp > 0) {
                        console.log(`Now your opponent Hp is:${newoppoHp}`);
                    }
                    newplayHp = Math.floor(Math.random() * (afterEnergyDose - 1) + 1)
                    afterEnergyDose -= newplayHp;
                    console.log(`And in return you get Damage of ${newplayHp}, Now your Hp is: ${afterEnergyDose}`);

                }

            }
        }
        isAttack = true;
    }
    else if (Action.playAct === chalk.greenBright.bold("Energy Drink")) {
        if (isAttack) {
            if (energyDrink > 0) {
                energyDrink--;
                afterEnergyDose += 20; //yaha "newplayHpafterDamage" ko agar hum uper "0" sa intialize nahi krtay toh wo yaha error deta kiu kay wo kahega ka "newplayHpafterDamage" ma jab koi value hi nahi hai toh ma kasa usme "20" add krdo bcuz "newplayHpafterDamage" ko humna uper be condition ma hi use kia hai so agar incase wo sb conditions false hojati hai toh phr "newplayHpafterDamage" ma toh kuch be nahi hoga na toh iss wajah sa humna yaha usko ek value "0" assign ki hai taka agar uper ki conditions false be hoti hai toh at least wo "newplayHpafterDamage" ma jab "0" hoga to wo usma "20" add krdega. 
                console.log(`Your Hp is increase by 20 and now its ${afterEnergyDose} After Energy Drink.`);
                console.log(`You have ${energyDrink} drink left`);
            }
            else {
                console.log(`Insufficient Drink !!!`);

            }
        }
        else if (!isAttack) {
            if (energyDrink > 0) {
                afterEnergyDoseNotAttack += 20;
                console.log(`Your Hp is increase by 20 and now its ${afterEnergyDoseNotAttack} After Energy Drink.`);
                energyDrink--;
                console.log(`You have ${energyDrink} drink left`);
            }
            else {
                console.log(`Insufficient Drink !!!`);

            }
        }
        isEnergy = true;
    }
    if (newoppoHp <= 0) {
        console.log(chalk.yellow.bold.italic.underline("Winner Winner Chicken Dinner!!"));
    }
    else if(afterEnergyDose <=0 || afterEnergyDoseNotAttack <=0)
    {
         console.log(chalk.red.bold.italic.underline("You are Defeated, you loose the game!"));
         
    }
}
while (Action.playAct !== chalk.blue.bold("Quit") && newoppoHp > 0 && afterEnergyDose > 0 && afterEnergyDoseNotAttack > 0) //yaha par && operator iss lia use kiya hai bcuz humna yaha while ko yeh btya haka tab tk loop chalta rahega jab tk "Action.playAct !== "Quit" && "newoppoHp > 0" agr in dono condition ma sa ek be condition false hojayegi loop terminate hojayega. han agr hum "||" yeh operator use krty toh phr dono ma sa ek condition be true hoti toh loop chlta rehta iss lia we have used "&&".



