//полученные данные
var restAPI = [
    { "id": 2, "parentId": 0, "isActive": true, "balance": "$1,247.87", "name": "Navarro Levy", "email": "navarrolevy@isoplex.com" }, { "id": 3, "parentId": 2, "isActive": true, "balance": "$2,559.85", "name": "Wooten Hartman", "email": "wootenhartman@isoplex.com" }, { "id": 4, "parentId": 3, "isActive": false, "balance": "$3,474.20", "name": "Mack Hess", "email": "mackhess@isoplex.com" }, { "id": 5, "parentId": 0, "isActive": false, "balance": "$2,231.49", "name": "Jocelyn Burch", "email": "jocelynburch@isoplex.com" }, { "id": 6, "parentId": 5, "isActive": false, "balance": "$3,955.44", "name": "Prince Daniel", "email": "princedaniel@isoplex.com" }, { "id": 7, "parentId": 5, "isActive": false, "balance": "$1,994.83", "name": "Newton Medina", "email": "newtonmedina@isoplex.com" }, { "id": 8, "parentId": 0, "isActive": true, "balance": "$1,311.17", "name": "Arnold Steele", "email": "arnoldsteele@isoplex.com" }, { "id": 9, "parentId": 0, "isActive": false, "balance": "$2,313.46", "name": "Kitty Glover", "email": "kittyglover@isoplex.com" }, { "id": 10, "parentId": 9, "isActive": false, "balance": "$3,314.14", "name": "Pruitt Spencer", "email": "pruittspencer@isoplex.com" }, { "id": 11, "parentId": 0, "isActive": false, "balance": "$1,778.44", "name": "Stefanie Quinn", "email": "stefaniequinn@isoplex.com" }, { "id": 12, "parentId": 0, "isActive": true, "balance": "$1,141.37", "name": "Fox Mcpherson", "email": "foxmcpherson@isoplex.com" }, { "id": 13, "parentId": 0, "isActive": false, "balance": "$2,662.03", "name": "Rodriquez Young", "email": "rodriquezyoung@isoplex.com" }, { "id": 14, "parentId": 0, "isActive": false, "balance": "$2,573.84", "name": "Love Byers", "email": "lovebyers@isoplex.com" }, { "id": 15, "parentId": 14, "isActive": false, "balance": "$1,254.07", "name": "Banks Short", "email": "banksshort@isoplex.com" }, { "id": 16, "parentId": 14, "isActive": true, "balance": "$3,820.34", "name": "Guthrie Brown", "email": "guthriebrown@isoplex.com" }, { "id": 17, "parentId": 16, "isActive": true, "balance": "$2,884.74", "name": "Kirsten Mcmahon", "email": "kirstenmcmahon@isoplex.com" }, { "id": 18, "parentId": 1, "isActive": false, "balance": "$1,694.76", "name": "Mcbride Sykes", "email": "mcbridesykes@isoplex.com" }, { "id": 19, "parentId": 1, "isActive": true, "balance": "$3,644.56", "name": "Juanita Camacho", "email": "juanitacamacho@isoplex.com" }, { "id": 20, "parentId": 17, "isActive": false, "balance": "$1,179.25", "name": "Carlene Little", "email": "carlenelittle@isoplex.com" }, { "id": 21, "parentId": 0, "isActive": true, "balance": "$3,506.90", "name": "Caitlin Bernard", "email": "caitlinbernard@isoplex.com" }, { "id": 22, "parentId": 21, "isActive": false, "balance": "$2,924.31", "name": "Vargas Lowe", "email": "vargaslowe@isoplex.com" }, { "id": 23, "parentId": 22, "isActive": false, "balance": "$1,211.95", "name": "Mae Santiago", "email": "maesantiago@isoplex.com" }, { "id": 24, "parentId": 22, "isActive": true, "balance": "$2,959.37", "name": "Gallagher Burnett", "email": "gallagherburnett@isoplex.com" }, { "id": 25, "parentId": 0, "isActive": false, "balance": "$1,880.20", "name": "Reyna Mayo", "email": "reynamayo@isoplex.com" }, { "id": 26, "parentId": 0, "isActive": false, "balance": "$1,639.69", "name": "Hardy Townsend", "email": "hardytownsend@isoplex.com" }, { "id": 27, "parentId": 0, "isActive": false, "balance": "$3,211.26", "name": "Cohen Best", "email": "cohenbest@isoplex.com" }, { "id": 28, "parentId": 27, "isActive": true, "balance": "$2,270.94", "name": "Sherrie Berger", "email": "sherrieberger@isoplex.com" }, { "id": 29, "parentId": 27, "isActive": false, "balance": "$2,049.45", "name": "Gentry Robbins", "email": "gentryrobbins@isoplex.com" }, { "id": 30, "parentId": 0, "isActive": true, "balance": "$1,177.86", "name": "Etta Sampson", "email": "ettasampson@isoplex.com" }, { "id": 1, "parentId": 0, "isActive": true, "balance": "$3,655.34", "name": "Yolanda Chavez", "email": "yolandachavez@isoplex.com" },
]

//#region Глобальные переменные
let filter = 2
let isTrue = false
//#endregion

//Первоначальный вызов для заполнения таблицы
fill_table(restAPI)

//Функция для заполнения таблицы на сайте
function fill_table(data) {
    let table = document.getElementById('myTable')
    table.innerHTML = ''
    table.innerHTML += fill_rows(data, 0)
    isTrue = false
}

//Заполнение строками
function fill_rows(data, parentId) {
    let row = ``;
    for (let i = 0; i < data.length; i++) {
        //При итерации будет создаваться с нужными данными строка в таблице
        if (data[i].parentId === parentId && (filter > 1 ? filter : data[i].isActive == filter)) {
            isTrue = true
            row += ` 
            <tr tr_id="${data[i].id}">
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].balance}</td>
                <td>${data[i].email}</td>
                <td>${data[i].isActive}</td>
                <td class="acc-modal">
                <div>
                    <button onclick="onOpen(${i})" type="button" class="btn btn-primary">
                    Child view
                    </button>
                </div>
                </td>   
            </tr>
          </div>
            `
        }
    }
    return row
}

//Создание модального окна (передача настроек)
function onOpen(posNmberInData) {
    let options = {
        title: 'Child elements: ' + restAPI[posNmberInData].name,
        closable: true,
        content: `
        
    `,
        width: '1000px',
        footerButtons: [
            {
                text: 'Ok', type: 'primary', handler() {
                    console.log('Primary btn clicked')
                    modal.close()
                    modal.destroy()
                }
            }
        ]
    }
    let innerOptions = fill_rows(restAPI, restAPI[posNmberInData].id)
    if (!isTrue)
        options.content = `
        <h4>No child elements</h4>
        `
    else {
        options.content = `
            <table class="table table-dark bg-info">
                <thead>
                    <tr class="ths">
                        <th data-column="#" data-order="desc">#</th>
                        <th data-column="name" data-order="desc">Name</th>
                        <th data-column="balance" data-order="desc">Balance</th>
                        <th data-column="email" data-order="desc">E-mail</th>
                        <th data-column="isActive" data-order="desc">isActive</th>
                        <th data-column="parentId" data-order="desc">ParentId</th>
                    </tr>
                </thead>
                <tbody id="myTable">
                </tbody>
            </table>
        `
        let token = `<tbody id="myTable">`
        options.content = options.content.split(token).join(token + innerOptions)
    }
    isTrue = false
    const modal = $.modal(options)

    modal.open()
}

//Функция мод фильтра
function filter_mode() {
    filter > 1 ? fill_table(restAPI, filter = 1) : fill_table(restAPI, filter = 2)
}

//Функция фильтрации
function Filtered() {
    if (filter == 2)
        alert('Filter mod is off!!!')
    else {
        let order = document.getElementById(`filter`)
        if (order.dataset.order == 'desc') {
            order.dataset.order = 'asc'
            fill_table(restAPI, filter = 0)
        } else {
            order.dataset.order = 'desc'
            fill_table(restAPI, filter = 1)
        }
    }
}
