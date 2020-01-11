
'use strict'

let money, time;

function start() {
    money = +prompt(" Введите ваш бюджет"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while ( isNaN(money) || money == "" || money == null )  {
        money = +prompt(" Введите ваш бюджет");
    };
}
start();

let appData = {
    moneyMonth: money,
    timeData: time,
    expenses:  {},
    optionalExpenses: {}, // записать ввиде вопроса на js 
    income: [], // массив с данными
    savings: true,
};

function chooseExpenses () {
for (let i=0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?")
        //console.log(typeof(b));
        //console.log(b);
    if (((typeof(a)) === 'string') && (a != '') && ((typeof(a)) != null) && !(isNaN(b)) 
    && ((typeof(b)) != null) && (b != '') && (a.length < 50 )) {
        //console.log("i = " + i);
        appData.expenses[a] = b;
        //console.log(appData.expenses);
    } else {
        console.log("err");
        continue;
    }
}
};
chooseExpenses();

function chooseOptExpenses() {
    for ( let i=1; i != 4; i++) {
    let b = prompt(" Статья необязательных расходов?");
        //a = i +'';
    if (((isNaN(b)) && ((typeof(b) != null)) && (b != '') && (b.length < 50 ))) {
        appData.optionalExpenses[i] = b; 
        //console.log("i = " + i);
    } else {
        console.log("err");
        continue;
}  
}
};

chooseOptExpenses();
console.log(appData.optionalExpenses);

function detectDayBudget() {  
    appData.PerDay = (appData.moneyMonth / 30).toFixed(1);
    alert( "Бюджет на один день = " + appData.PerDay + " Руб. " );
};
detectDayBudget();

function detectLevel() {
if (appData.PerDay > 100 && appData.PerDay < 2000) {
    console.log("Средний достаток");
} else if (appData.PerDay < 100) {
    console.log("Маленький бюджет");
} else if (appData.PerDay > 2000) {
    console.log("Большой бюджет");
} else {
    console.log("Ошибка");
}
};
detectLevel();

function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt(" Какова сумма накоплений?"),
            percent = +prompt(" Под какой процент?")

            appData.monthIncome = (save/100/12*percent).toFixed(1);
            alert(" Доход с вашего депозита: " + appData.monthIncome)
    }
};

checkSavings();

//console.log(appData);
/*
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?")
        //console.log(typeof(b));
        //console.log(b);
    if (((typeof(a)) === 'string') && (a != '') && ((typeof(a)) != null) && (b >= 0)  && ((typeof(b)) === 'number')
    && ((typeof(b)) != null) && (a.length < 50 )) {
        //console.log("i = " + i);
        appData.expenses[a] = b;
        console.log(appData.expenses);
    } else {
        console.log("err");
        continue
    }
    i++
    //if (i = 2) { break;}
} while(i != 2); 


let i = 0;
while ( i != 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?")
        //console.log(typeof(b));
        //console.log(b);
    if (((typeof(a)) === 'string') && (a != '') && ((typeof(a)) != null) && (b >= 0)  && ((typeof(b)) === 'number')
    && ((typeof(b)) != null) && (a.length < 50 )) {
        //console.log("i = " + i);
        appData.expenses[a] = b;
        console.log(appData.expenses);
    } else {
        console.log("err");
        continue
    }
    i++
    //if (i = 2) { break;}
}
*/
/*
appData.expenses["oneStr"] = prompt("Введите обязательную статью расходов в этом месяце") + " : " + (appData.expenses["oneStrAsk"] = prompt("Во сколько обойдется?"));
    appData.moneyMonth = appData.moneyMonth - +appData.expenses["oneStrAsk"];
delete appData.expenses["oneStrAsk"];


appData.expenses["twoStr"] = prompt("Введите обязательную статью расходов в этом месяце") + " : " + (appData.expenses["oneStrAsk"] = prompt("Во сколько обойдется?"));
    appData.moneyMonth = appData.moneyMonth - +appData.expenses["oneStrAsk"];
delete appData.expenses["oneStrAsk"];
  
console.log(appData.expenses["oneStr"]);
console.log(appData.expenses["twoStr"]);
alert( "Бюджет на один день = " + appData.moneyMonth/30 + " Руб. " );

*/
/*'use strict'

let money = prompt(" Введите ваш бюджет"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    moneyMonth: money,
    timeData: time,
    expenses:  {
    },
    optionalExpenses: { // записать ввиде вопроса на js
    }, 
    income: [], // должен быть массив с данными
    savings: false,
};

appData.expenses["oneStr"] = prompt("Введите обязательную статью расходов в этом месяце") + " : " + (appData.expenses["oneStrAsk"] = prompt("Во сколько обойдется?"));
    appData.moneyMonth = appData.moneyMonth - +appData.expenses["oneStrAsk"];
delete appData.expenses["oneStrAsk"];


appData.expenses["twoStr"] = prompt("Введите обязательную статью расходов в этом месяце") + " : " + (appData.expenses["oneStrAsk"] = prompt("Во сколько обойдется?"));
    appData.moneyMonth = appData.moneyMonth - +appData.expenses["oneStrAsk"];
delete appData.expenses["oneStrAsk"];
  
console.log(appData.expenses["oneStr"]);
console.log(appData.expenses["twoStr"]);
alert( "Бюджет на один день = " + appData.moneyMonth/30 + " Руб. " );
*/
