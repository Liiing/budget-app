import Budget from '../components/dashboard/budget.js';
import fetchUserBudget from '../components/dashboard/budget.js';
import checkEmptyBudget from '../components/dashboard/budget.js';

//Test to check if the Budget class works.
test ('BudgetTest',
       () => {
       const testFunction = Budget();
       expect(testFunction).test;
     });

// Test to check the function "checkEmptyBudget" to see if the expect result match.
test ('isBudgetEmpty',
       () => {
       const testFunction = checkEmptyBudget();
       expect(testFunction).to.be.arguments(true);
     });

// Test to check the function "fetchUserBudget" to see if it returns a number.
test ('whatIsBudgetOfUser',
       () => {
       const testFunction = fetchUserBudget();
       expect(testFunction).to.be.arguments(number);
     });
