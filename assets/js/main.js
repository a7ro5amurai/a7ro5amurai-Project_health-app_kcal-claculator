function calc() {
    let BodySize = document.querySelector("#bodySize").valueAsNumber;
    let Age = document.querySelector("#age").valueAsNumber;
    let Weight = document.querySelector("#weight").valueAsNumber;
    
    let isMale = document.querySelector("#male").checked;
    let isFemale = document.querySelector("#female").checked;    

    let BMRateOutput = 0;
    let BMRateKjOutput = 0;

    if (isFemale === false) {
        let BMRateMen = 66.47 + BodySize * 5 + Age * 6.8 + Weight * 13.7;
        BMRateOutput = BMRateMen;
        BMRateKjOutput = 4.2 * BMRateMen;
    } else {
        let BMRateWoman = 655.1 + BodySize * 1.8 + Age * 4.7 + Weight * 9.6;
        BMRateOutput = BMRateWoman;
        BMRateKjOutput = 4.2 * BMRateWoman;
    }

    document.querySelector(".Grundumsatz").innerText = BMRateOutput;
    document.querySelector(".Umrechnung").innerText = BMRateKjOutput;

    let activityLevel = document.querySelector("#activity").value;

    let dailyEnergyOutput = 0;
    let dailyEnergyOutputKj = 0;

    if (activityLevel === "sleep") {
        dailyEnergyOutput = 0.95 * BMRateOutput;
        dailyEnergyOutputKj = 0.95 * BMRateKjOutput;
    } else if (activityLevel === "sit or sleep") {
        dailyEnergyOutput = 1.2 * BMRateOutput;
        dailyEnergyOutputKj = 1.2 * BMRateKjOutput;
    } else if (activityLevel === "sedentary activities") {
        dailyEnergyOutput = 1.5 * BMRateOutput;
        dailyEnergyOutputKj = 1.5 * BMRateKjOutput;
    } else if (activityLevel === "sedentary activities including walking activities") {
        dailyEnergyOutput = 1.7 * BMRateOutput;
        dailyEnergyOutputKj = 1.7 * BMRateKjOutput;
    } else if (activityLevel === "mostly walking or standing activities") {
        dailyEnergyOutput = 1.9 * BMRateOutput;
        dailyEnergyOutputKj = 1.9 * BMRateKjOutput;
    } else if (activityLevel === "physically demanding jobs") {
        dailyEnergyOutput = 2.2 * BMRateOutput;
        dailyEnergyOutputKj = 2.2 * BMRateKjOutput;
    }
    
    document.querySelector(".Total").innerText = dailyEnergyOutput;
    document.querySelector(".TotalUmrechnung").innerText = dailyEnergyOutputKj;
}

function monthlyYearly() {
    let basic = document.querySelector(".basicPlan");
    let premium = document.querySelector(".premiumPlan");
    let ultimate = document.querySelector(".ultimatePLan");

    basic.innerHTML = `<strong>$588 </strong>/yearly`
    premium.innerHTML = `<strong>$948 </strong>/yearly`
    ultimate.innerHTML = `<strong>$1188 </strong>/yearly`
}
function Yearlymonthly() {
    let basic = document.querySelector(".basicPlan");
    let premium = document.querySelector(".premiumPlan");
    let ultimate = document.querySelector(".ultimatePLan");

    basic.innerHTML = `<strong>$49 </strong>/month`
    premium.innerHTML = `<strong>$79 </strong>/month`
    ultimate.innerHTML = `<strong>$99 </strong>/month`
}

function appearDropdownMenu() {
    let dropDownMenu = document.querySelector(".dropdownmenu");

    if (dropDownMenu.classList.contains('visible')) {
        dropDownMenu.classList.remove('visible');
    } else {
        dropDownMenu.classList.add('visible');
    }
}

