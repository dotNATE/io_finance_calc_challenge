interface DisplayObject {
    years: number
    months: number
}

function calcTotalBorrowAmount(borrowAmount: number): number {
    if (borrowAmount > 9000) {
        return borrowAmount + 1000
    }
    if (borrowAmount > 8000) {
        return borrowAmount + 500
    }
    return borrowAmount
}

function calcAdminFee(totalBorrowAmount: number): number {
    return totalBorrowAmount * 0.05
}

function calcPaymentPeriodMonths(totalBorrowAmount: number, expectedSalary: number, repaymentPc: number): number {
    let monthlySalary: number = expectedSalary / 12
    let monthlyPayment: number = monthlySalary * repaymentPc
    return totalBorrowAmount / monthlyPayment
}

function calcPaymentPeriodDisplayInfo(months: number): DisplayObject {
    let displayYears = Math.floor(months / 12)
    let displayMonths = months % 12
    return {
        years: displayYears,
        months: displayMonths
    }
}

function generatePaymentPeriodDisplayHTML(displayInfo: DisplayObject): string {
    return `${displayInfo.years} years, ${Math.round(displayInfo.months)} months`
}

document.querySelectorAll('form input').forEach((el) => {
    el.addEventListener('keypress', () => {
        let borrowAmount: number = document.querySelectorAll('.inputContainer')[0].value
        let expectedSalary: number = document.querySelectorAll('.inputContainer')[1].value
        let repaymentPc: number = (document.querySelectorAll('.inputContainer')[2].value) / 10

        let paymentPeriodMonths = calcPaymentPeriodMonths(calcTotalBorrowAmount(borrowAmount), expectedSalary, repaymentPc)
        let paymentDisplayInfo = calcPaymentPeriodDisplayInfo(paymentPeriodMonths)

        document.querySelector('#repaymentAmt').textContent = String(calcTotalBorrowAmount(borrowAmount))
        document.querySelector('#adminFee').textContent = String(calcAdminFee(borrowAmount))
        document.querySelector('#paymentPeriod').textContent = generatePaymentPeriodDisplayHTML(paymentDisplayInfo)
    })
})