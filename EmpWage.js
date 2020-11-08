const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck){
switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        break;
    default:
        return 0;
}
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total working days : "+ totalWorkingDays +" Total Hours : "+ totalEmpHrs +" Emp Wage : "+ empWage);

let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("Using forEach : ");
console.log("Total working days : "+ totalWorkingDays +" Total Hours : "+ totalEmpHrs +" Emp Wage : "+ totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("Using forEach : ");
console.log("Total working days : "+ totalWorkingDays +" Total Hours : "+ totalEmpHrs +" Emp Wage : "+ empDailyWageArray.reduce(totalWages, 0));

let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr +" = "+ dailyWage;
}
let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
console.log("Daily Wage Map : ");
console.log(mapDayWithWageArr);

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArr.filter(fullTimeWage);
console.log("Daily Wage Filter When Full Time Wage Earned : ");
console.log(fullDayWageArray);

console.log("First time full time wage : "+ mapDayWithWageArr.find(fullTimeWage));

console.log("Checking all elemnts are full time : "+ fullDayWageArray.every(fullTimeWage));

function partTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("Check if any part time wage : "+ mapDayWithWageArr.some(partTimeWage));

function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days employee worked : "+ empDailyWageArray.reduce(totalDaysWorked, 0));

console.log(empDailyWageMap);
console.log("Emp wage map total wages : "+ Array.from(empDailyWageMap.values()).reduce(totalWages, 0));