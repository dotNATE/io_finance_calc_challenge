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
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var borrowAmount = Number(e.target[0].value);
    var expectedSalary = Number(e.target[1].value);
    var repaymentPc = e.target[2].value / 100;
    var totalBorrowAmount = calcTotalBorrowAmount(borrowAmount);
    var paymentPeriodMonths = calcPaymentPeriodMonths(totalBorrowAmount, expectedSalary, repaymentPc);
    var paymentDisplayInfo = calcPaymentPeriodDisplayInfo(paymentPeriodMonths);
    document.querySelector('#repaymentAmt').textContent = String(totalBorrowAmount);
    document.querySelector('#adminFee').textContent = String(calcAdminFee(borrowAmount));
    document.querySelector('#paymentPeriod').textContent = generatePaymentPeriodDisplayHTML(paymentDisplayInfo);
});
