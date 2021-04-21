let borrowAmount: number = 10000
let expectedSalary: number = 25000
let repaymentPc: number = 10 / 100

interface displayObject {
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

function calcTotalFee(totalBorrowAmount: number): number {
    return totalBorrowAmount *= 0.05
}

function calcPaymentPeriodMonths(totalBorrowAmount: number, expectedSalary: number, repaymentPc: number): number {
    let monthlySalary: number = expectedSalary / 12
    let monthlyPayment: number = monthlySalary * repaymentPc
    let remainingMonths = totalBorrowAmount / monthlyPayment
    return remainingMonths
}

function calcPaymentPeriodYears(months: number): displayObject {
    let displayYears = Math.floor(months / 12)
    let displayMonths = months % 12
    return {
        years: displayYears,
        months: displayMonths
    }
}

let repaymentAmount = calcTotalBorrowAmount(borrowAmount)
let adminFee = calcAdminFee(borrowAmount)