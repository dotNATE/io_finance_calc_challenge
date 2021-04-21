var borrowAmount = 10000;
var expectedSalary = 25000;
var repaymentPc = 10 / 100;
function calcTotalBorrowAmount(borrowAmount) {
    if (borrowAmount > 9000) {
        return borrowAmount + 1000;
    }
    if (borrowAmount > 8000) {
        return borrowAmount + 500;
    }
    return borrowAmount;
}
function calcAdminFee(totalBorrowAmount) {
    return totalBorrowAmount * 0.05;
}
function calcTotalFee(totalBorrowAmount) {
    return totalBorrowAmount *= 0.05;
}
function calcPaymentPeriodMonths(totalBorrowAmount, expectedSalary, repaymentPc) {
    var monthlySalary = expectedSalary / 12;
    var monthlyPayment = monthlySalary * repaymentPc;
    var remainingMonths = totalBorrowAmount / monthlyPayment;
    return remainingMonths;
}
function calcPaymentPeriodYears(months) {
    var displayYears = Math.floor(months / 12);
    var displayMonths = months % 12;
    return {
        years: displayYears,
        months: displayMonths
    };
}
var repaymentAmount = calcTotalBorrowAmount(borrowAmount);
var adminFee = calcAdminFee(borrowAmount);
