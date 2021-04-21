## Challenge

#### Build a finance calculator that accepts:
- The amount you would like to borrow (£)
- Your expected salary (£): default £25,000
- Monthly repayment percentage: default/minimum 10%

The calculator should tell you the admin fee required to borrow the money, how long it will take you to pay off and the total amount that you will have borrowed.

*Requirements:*
- Borrow amount between £1 and £10,000
- If borrowing above 80% (£8000) add £500 to repayment amount
- If borrowing above 90% (£9000) add a further £500 to repayment amount
- Display 5% of total borrowed amount as upfront admin fee
- Must be written in TypeScript
- Must use a CSS preprocessor

`./node_modules/gulp/bin/gulp.js watch`