var myMoney = prompt("Сколько у вас с собой денег?:");
var appleNumber = prompt("Сколько вы купили яблок?:");
var breadNumber = prompt("Сколько вы купили батонов хлеба?:");
var appleCost = prompt("Сколько стоило одно яблоко?:");
var appleMoney = appleNumber * appleCost;
var breadCost = prompt("Сколько стоил один батон?:");
var breadMoney = breadNumber * breadCost;
document.body.innerHTML = ((breadMoney + appleMoney) <= myMoney)