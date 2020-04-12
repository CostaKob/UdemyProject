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
    savings: true

};

function chooseExpenses() {
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
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert('Daily Budget: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный доход");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний доход');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий доход');
} else {
    console("Что то пошло не так!");
}

console.log(appData);

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}
checkSavings();






// let i = 0;

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ((typeof (a)) === 'string' && ((typeof (a) != null)) && ((typeof (b) != null)) &&
//         a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Something wrong");
//            i--;
//     }
//      i++;
// }

// let i = 0;

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ((typeof (a)) === 'string' && ((typeof (a) != null)) && ((typeof (b) != null)) &&
//         a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Something wrong");
//          i--;
//     }
//      i++;
// }
//     while(i<2);





// if (num < 49) {
//     console.log("False")
// } else if (num > 100) {
//     console.log("Too much")
// } else {
//     console.log("True!")
// };

// (num == 50) ? console.log("True!"): console.log("False");

// switch (num) {
//     case num < 49:
//         console.log("False!");
//         break;
//     case num > 100:
//         console.log("Too much");
//         break;
//     case num > 80:
//         console.log("Too much");
//         break;
//     case 50:
//         console.log("True!");
//         break;
//     default:
//         console.log("Something wrong!");
//         break;
// };

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//   console.log(num);
//   num++;  
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }

// function showFirstMessage(text) {
//     alert(text);
//     let num = 20;
// }

// showFirstMessage("Hello world");

// function calc(a,b) {
//     return (a+b);
// }