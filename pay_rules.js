let payRate = 12.50;
let hoursWorked = 20;
let grossPay = payRate * hoursWorked;
let overtime = hoursWorked - 40;
let fullTimeHours = 40;

if  (hoursWorked >= 40) {
    grossPay = (overtime * 1.5 * (payRate)) + (payRate * fullTimeHours);
}



/* if (hoursWorked >= 40) {
    (grossPay = (payRate * 40) + (payRate * 1.5 * )
} else {
    grossPay = payRate * hoursWorked
} */





/* if (hoursWorked > 40 ) {
    overtime = hoursWorked - 40 ;
} else {
    grossPay = payRate * hoursWorked
} */



/* if (hoursWorked > 40 ) {
    overtime = payRate * 1.5;
} */