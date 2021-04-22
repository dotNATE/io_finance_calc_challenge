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

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    let borrowAmount: number = Number(e.target[0].value)
    let expectedSalary: number = Number(e.target[1].value)
    let repaymentPc: number = e.target[2].value / 100

    let totalBorrowAmount: number = calcTotalBorrowAmount(borrowAmount)
    let paymentPeriodMonths: number = calcPaymentPeriodMonths(totalBorrowAmount, expectedSalary, repaymentPc)
    let paymentDisplayInfo: DisplayObject = calcPaymentPeriodDisplayInfo(paymentPeriodMonths)

    document.querySelector('#repaymentAmt').textContent = String(totalBorrowAmount)
    document.querySelector('#adminFee').textContent = String(calcAdminFee(borrowAmount))
    document.querySelector('#paymentPeriod').textContent = generatePaymentPeriodDisplayHTML(paymentDisplayInfo)
})