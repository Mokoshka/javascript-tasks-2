'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите
var note;
var rePhone = /^(\+?(\d{1,3})[\- ]?)?((\(\d{3}\))|(\d{3}))[\- ]?([\d\- ]{7,10})$/;
var reEmail = /^[-\w.]+@([A-z0-9А-Я][-A-z0-9А-Я]+\.)+[A-zА-Я]{2,4}$/i;
var reNumb = /\D/ig;
/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/

function checkPhone(phone) {
    var match = rePhone.exec(phone);
    if (match == null){
        return ""
    }
    var format = "";

    //Форматирование кода страны
    if (match[2] == "8" || match[1] == undefined){
        format += "+7";
    } else {
        format += "+" + match[2];
    }

    //Форматирование кода города
    if (match[4] != undefined){
        format += " " + match[4] + " ";
    } else {
        format += " (" + match[5] + ") ";
    }

    //Форматирование телефона
    var number = "";
    var char;
    for (var i=0; i<match[6].length; i++){
        char = match[6][i];
        if (char != "-" && char != " "){
            number += char;
            if (number.length == 3 || number.length == 5){
                number += "-";
            }
        }
    }

    return format + number;
}

function checkEmail(email) {
    return reEmail.test(email);
}

function printNote(index){
    console.log(phoneBook[index].name + ", " + phoneBook[index].phone + ", " + phoneBook[index].email);
}

module.exports.add = function add(name, phone, email) {

    // Ваша невероятная магия здесь
    var resultPhone = checkPhone(phone);
    if (resultPhone != "" && checkEmail(email) && name != "" && name != undefined) {
        note = {
            name: name,
            phone: phone,
            email: email
        };
        phoneBook.push(note);
    } else {
        console.log("Invalid data");
    }
};

/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {

    // Ваша удивительная магия здесь
    var len = phoneBook.length;
    var i;
    if (query === undefined) {
        for (i=0; i<len; i++){
            printNote(i);
        }
    } else {
        var q = new RegExp(query.replace(reNumb, ""));
        for (i=0; i<len; i++){
            if (q.test(phoneBook[i].name) || q.test(phoneBook[i].email) || q.test(phoneBook[i].phone.replace(reNumb, ""))){
                printNote(i);
            }
        }
    }
};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {

    // Ваша необьяснимая магия здесь
    if (query != undefined) {
        var q = new RegExp(query.replace(reNumb, ""));
        for (var i=phoneBook.length-1; i>=0; i--){
            if (q.test(phoneBook[i].name) || q.test(phoneBook[i].email) || q.test(phoneBook[i].phone.replace(reNumb, ""))){
                phoneBook.splice(i, 1);
            }
        }
    }

};

/*
   Функция импорта записей из файла (задача со звёздочкой!).
*/
module.exports.importFromCsv = function importFromCsv(filename) {
    var data = require('fs').readFileSync(filename, 'utf-8');

    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу
};

/*
   Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
*/
module.exports.showTable = function showTable() {

    // Ваша чёрная магия здесь

};

