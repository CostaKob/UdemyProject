let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if ((typeof (a)) === 'string' && ((typeof (a) != null)) && ((typeof (b) != null)) &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("Something wrong");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert('Daily Budget: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный доход");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний доход');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий доход');
        } else {
            console("Что то пошло не так!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
        }
    },
    chooseIncome: function () {

        let items = prompt("Что принесет доп доход? Перечислите через запятую.", "");

        if (typeof (items) != "string" || items == "" || typeof (items) == null) {
            console.log("Only String");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что то еще?"));
            appData.income.sort();
        }

        appData.income.forEach(function (itemmassive, i) {
            alert("Способы доп дохода: " + (i + 1) + " - " + itemmassive);
        });

    }
};

for (let key in appData) {
    console.log("Все что есьб на сайте: " + key + " - " + appData[key]);
}