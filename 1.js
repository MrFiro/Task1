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
'use strict'

let money = +prompt(" Введите ваш бюджет"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    moneyMonth: money,
    timeData: time,
    expenses:  {},
    optionalExpenses: {}, // записать ввиде вопроса на js 
    income: [], // массив с данными
    savings: false,
};

for (let i=0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?")
        //console.log(typeof(b));
        //console.log(b);
    if (((typeof(a)) === 'string') && (a != '') && ((typeof(a)) != null) && (b >= 0)  && ((typeof(b)) === 'number')
    && ((typeof(b)) != null) && (a.length < 50 )) {
        //console.log("i = " + i);
        appData.expenses[a] = b;
        //console.log(appData.expenses);
    } else {
        console.log("err");
        continue
    }
};
appData.PerDay = appData.moneyMonth / 30;

alert( "Бюджет на один день = " + appData.PerDay + " Руб. " );

if (appData.PerDay > 100 && appData.PerDay < 2000) {
    console.log("Средний достаток");
} else if (appData.PerDay < 100) {
    console.log("Маленький бюджет");
} else if (appData.PerDay > 2000) {
    console.log("Большой бюджет");
} else {
    console.log("Ошибка");
}
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
>>>>>>> Второй коммит
