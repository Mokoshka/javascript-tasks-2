'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите
var note;
var rePhone = /^((8|\+?\d{1,3})[\- ]?)?(\(\d{3}\)|\d{3}[\- ]?)[\d\- ]{7,10}$/;
var reEmail = /^[-\w.]+@([A-z0-9А-Я][-A-z0-9А-Я]+\.)+[A-zА-Я]{2,4}$/i;
/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/

function checkPhone(phone) {
    return rePhone.test(phone);
}

function checkEmail(email) {
    return reEmail.test(email);
}

module.exports.add = function add(name, phone, email) {

    // Ваша невероятная магия здесь
    //console.log(checkPhone(phone), );
    if (checkPhone(phone) && checkEmail(email)) {
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
            console.log(phoneBook[i].name + ", " + phoneBook[i].phone + ", " + phoneBook[i].email);
        }
    } else {
        var q = new RegExp(query);
        for (i=0; i<len; i++){
            if (q.test(phoneBook[i].name) || q.test(phoneBook[i].email) || q.test(phoneBook[i].phone)){
                console.log(phoneBook[i].name + ", " + phoneBook[i].phone + ", " + phoneBook[i].email);
            }
        }
    }

};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {

    // Ваша необьяснимая магия здесь
    var len = phoneBook.length;
    var q = new RegExp(query);
    if (query != undefined) {
        for (var i=0; i<len; i++){
            if (q.test(phoneBook[i].name) || q.test(phoneBook[i].email) || q.test(phoneBook[i].phone)){
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
