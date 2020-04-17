'use strict';

let startButton = document.getElementById("start"),
    // values
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName("expenses-item"),
    // buttons
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    // optional expenses
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    // income
    chooseIncome = document.querySelector('.choose-income'),
    // checkbox
    checkSavings = document.querySelector('#savings'),
    // sum and percent
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    // year month day
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money,
    time,
    expItemSum = 0;

//turn off the buttons
expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

startButton.addEventListener('click', function () {
    //turn on buttons when start button clicked
    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;

    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function () {

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' && ((typeof (a) != null)) && ((typeof (b) != null)) &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            expItemSum += +b;
        } else {
            console.log("Something wrong");
            i = i - 1;
        }
    }
    expensesValue.textContent = expItemSum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget-expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный доход";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний доход';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий доход';
        } else {
            console.log("Что то пошло не так!");
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sumNow = +sum.value,
            percentNow = +percent.value;

        appData.monthIncome = sumNow / 100 / 12 * percentNow;
        appData.yearIncome = sumNow / 100 * percentNow;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sumNow = +sum.value,
            percentNow = +percent.value;

        appData.monthIncome = sumNow / 100 / 12 * percentNow;
        appData.yearIncome = sumNow / 100 * percentNow;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

// while (startButton.value == 'disabled') {
//     expensesItemBtn.value = 'disabled';
// }

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};