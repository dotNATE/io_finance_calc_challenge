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
    return totalBorrowAmount / monthlyPayment;
}
function calcPaymentPeriodDisplayInfo(months) {
    var displayYears = Math.floor(months / 12);
    var displayMonths = months % 12;
    return {
        years: displayYears,
        months: displayMonths
    };
}
function generatePaymentPeriodDisplayHTML(displayInfo) {
    return displayInfo.years + " years, " + Math.round(displayInfo.months) + " months";
}
var paymentPeriodMonths = calcPaymentPeriodMonths(calcTotalBorrowAmount(borrowAmount), expectedSalary, repaymentPc);
var paymentDisplayInfo = calcPaymentPeriodDisplayInfo(paymentPeriodMonths);
document.querySelectorAll('form input').forEach(function (el) {
    el.addEventListener('keypress', function () {
        borrowAmount = document.querySelectorAll('.inputContainer')[0].value;
        expectedSalary = document.querySelectorAll('.inputContainer')[1].value;
        repaymentPc = (document.querySelectorAll('.inputContainer')[2].value) / 10;
        document.querySelector('#repaymentAmt').textContent = String(calcTotalBorrowAmount(borrowAmount));
        document.querySelector('#adminFee').textContent = String(calcAdminFee(borrowAmount));
        document.querySelector('#paymentPeriod').textContent = generatePaymentPeriodDisplayHTML(paymentDisplayInfo);
    });
});
