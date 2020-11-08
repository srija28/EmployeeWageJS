const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS =10;
const MAX_HRS_IN_A_MONTH =100;
function getWorkingHours(empCheck){
switch(empCheck){
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;    
    default:
        return 0;    
} 
}
 function calculateDailyWage(empHrs){
     return empHrs * WAGE_PER_HOUR;
 }
let totalEmpHrs =0;
let totalWorkingDays =0;
let empDailyWageArr = new Array();
let empHrs = 0;
while(totalEmpHrs<= MAX_HRS_IN_A_MONTH && totalWorkingDays< NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs=getWorkingHours(empCheck);
    totalEmpHrs += getWorkingHours(empCheck);
    empDailyWageArr.push(calculateDailyWage(empHrs));
}
let empWage = calculateDailyWage(totalEmpHrs);
console.log("UC6-- Employee total working days in a Month :"+totalWorkingDays);
console.log("UC6 - Employee total working hours in a Month : "+totalEmpHrs);
console.log("UC6 - Employee Wage for a Month is : "+empWage);