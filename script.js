/*Choose All*/
function chAll() {
    let chooseArr = document.getElementsByClassName('chAll');
    let choseAll = document.getElementById('chooseAll');
    if (choseAll.checked === true) {
        for (let i = 0; i < chooseArr.length; i++) {
            chooseArr[i].checked = true;
        }
    } else {
        for (let i = 0; i < chooseArr.length; i++) {
            chooseArr[i].checked = false;
        }
    }
    date1.style.display = 'flex';
    date2.style.display = 'flex';
    changeDel(good1, goodDel1);
    changeDel(good2, goodDel2);
    changeDel(good3, goodDel3);
    changeVis(block1, date1);
    changeVis(block2, date2);
}

/*Total pay*/
function checkTotal() {
    let choose_total = document.getElementById('choose_total');
    let text = document.getElementById('total_text');
    let textBtnTotal = document.getElementById('text-btn-total');
    let totalPrice = document.getElementById('total_price').textContent;
    if (choose_total.checked === true) {
        text.style.display = 'none';
        textBtnTotal.innerText = 'Оплатить ' + totalPrice + ' сом';
    } else {
        text.style.display = 'block';
        textBtnTotal.innerText = 'Заказать';
    }

}

/*Input setting*/
function checkInput(input, label, reg, textOne, textTwo) {
    const form = document.getElementById('form');
    if (!input.value.match(/^.+$/)) {
        label.innerText = textOne;
        label.classList.add('errorLabel');
        input.classList.add('errorInput');
        form.scrollIntoView({behavior: "smooth"});
        input.addEventListener('input', function () {
            checkInput(input, label, reg, textOne, textTwo);
        });
    } else if (!input.value.match(reg)) {
        label.innerText = textTwo;
        label.classList.add('errorLabel');
        input.classList.add('errorInput');
        form.scrollIntoView({behavior: "smooth"});
        input.addEventListener('input', function () {
            checkInput(input, label, reg, textOne, textTwo);
        });
    } else {
        label.innerText = '';
        label.classList.remove('errorLabel');
        input.classList.remove('errorInput');
    }

}


let emailInput = document.getElementById('email');
let emailLabel = document.getElementById('label_email');

let phoneInput = document.getElementById('tel');
let phoneLabel = document.getElementById('label_tel');

let innInput = document.getElementById('inn');
let innLabel = document.getElementById('label_inn');

let firstNameInput = document.getElementById('first_name');
let firstNameLabel = document.getElementById('label_first_name');

let secondNameInput = document.getElementById('second_name');
let secondNameLabel = document.getElementById('label_second_name');


let btnTotal = document.getElementById('btn-total');

const regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regTel = /^[\d\+][\d\(\)\ -]{14,30}\d+$/;
const regInn = /\d{14}$/;
const regName = /^[а-яА-ЯёЁa-zA-Z]+$/;


btnTotal.addEventListener('click', function () {
    checkInput(phoneInput, phoneLabel, regTel, 'Укажите номер телефона', 'Формат: +9 999 999 99 99');
    checkInput(innInput, innLabel, regInn, 'Укажите ИНН', 'Проверьте ИНН');
    checkInput(firstNameInput, firstNameLabel, regName, 'Укажите имя', 'Укажите имя');
    checkInput(secondNameInput, secondNameLabel, regName, 'Введите фамилию', 'Введите фамилию');
    checkInput(emailInput, emailLabel, regEmail, 'Укажите электронную почту', 'Проверьте адрес электронной почты');
});


phoneInput.addEventListener('input', handleInput, false)

function handleInput(e) {
    e.target.value = phoneMask(e.target.value)
}

function phoneMask(phone) {
    return phone.replace(/\D/g, '')
        .replace(/^(\d)/, '+$1')
        .replace(/^(\+\d{1})(\d)/, '$1 $2')
        .replace(/(\d{3})(\d{1,3})/, '$1 $2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(\d{3})(-\d{2})(\d{1,2})/, '$1$2-$3')
        .replace(/(-\d{2})(-\d{2})\d+?$/, '$1$2');
}


/*Counter*/
let minValueCount = 1;
let maxValueCountTwo = 2;
let maxValueCountThree = 215; /*example*/

let value1 = 1;
let value2 = 200;
let value3 = 2;

let count1 = document.getElementById('count1');
let minCount1 = document.getElementById('minCount1');
let plusCount1 = document.getElementById('plusCount1');

let count2 = document.getElementById('count2');
let minCount2 = document.getElementById('minCount2');
let plusCount2 = document.getElementById('plusCount2');

let count3 = document.getElementById('count3');
let minCount3 = document.getElementById('minCount3');
let plusCount3 = document.getElementById('plusCount3');

//==For change price==
let priceOneGood1 = 1051;
let priceOneGood2 = 475;
let saleOneGood1 = 522;
let saleOneGood2 = 247;

let newPriceConteiner1 = document.getElementById('price1').querySelector(".price").querySelector("h3");
let oldPriceConteiner1 = document.getElementById('price1').querySelector(".old_price").querySelector("span");

let newPriceMobConteiner1 = document.getElementById('mob_price1').querySelector(".price").querySelector("h4");
let oldPriceMobConteiner1 = document.getElementById('mob_price1').querySelector(".old_price").querySelector("span");

let newPriceConteiner2 = document.getElementById('price2').querySelector(".price").querySelector("h3");
let oldPriceConteiner2 = document.getElementById('price2').querySelector(".old_price").querySelector("span");

let newPriceMobConteiner2 = document.getElementById('mob_price2').querySelector(".price").querySelector("h4");
let oldPriceMobConteiner2 = document.getElementById('mob_price2').querySelector(".old_price").querySelector("span");


let newPriceConteiner3 = document.getElementById('price3').querySelector(".price").querySelector(".good2_price");
let oldPriceConteiner3 = document.getElementById('price3').querySelector(".old_price").querySelector("span");

let str = ' сом';
//====End=====
function checkActive(signMinus, signPlus, value, maxValue) {
    if (value <= minValueCount) {
        signMinus.classList.remove('active');
    } else {
        signMinus.classList.add('active');
    }
    if (value === maxValue) {
        signPlus.classList.remove('active');
    } else {
        signPlus.classList.add('active');
    }
}

function changeValue(signBool, value, count, maxValue) {
    if (signBool && value < maxValue) {
        value++;
    } else if (value > minValueCount) {
        value--;
    }
    count.innerText = value.toString();
    return value;
}

checkActive(minCount1, plusCount1, value1, maxValueCountTwo);
checkActive(minCount2, plusCount2, value2, maxValueCountThree);
checkActive(minCount3, plusCount3, value3, maxValueCountTwo);

minCount1.addEventListener('click', function () {
    if (minCount1.classList.contains('active')) {
        value1 = changeValue(false, value1, count1, maxValueCountTwo);
        checkActive(minCount1, plusCount1, value1, maxValueCountTwo);
        //For change price
        let curSalePrice = newPriceConteiner1.textContent.replace(' ', '');
        minusOne(Number(curSalePrice), saleOneGood1, newPriceConteiner1, newPriceMobConteiner1);
        let curPrice = oldPriceConteiner1.textContent.replace(str, '').replace(' ', '');
        minusOne(Number(curPrice), priceOneGood1, oldPriceConteiner1, oldPriceMobConteiner1);
        oldPriceMobConteiner1.innerText = oldPriceMobConteiner1.textContent.concat(str);
        oldPriceConteiner1.innerText = oldPriceConteiner1.textContent.concat(str);
        //for totalChange
        changeTotal();
    }
});
plusCount1.addEventListener('click', function () {
    if (plusCount1.classList.contains('active')) {
        value1 = changeValue(true, value1, count1, maxValueCountTwo);
        checkActive(minCount1, plusCount1, value1, maxValueCountTwo);
        //For change price
        let curSalePrice = newPriceConteiner1.textContent.replace(' ', '');
        plusOne(Number(curSalePrice), saleOneGood1, newPriceConteiner1, newPriceMobConteiner1);
        let curPrice = oldPriceConteiner1.textContent.replace(str, '').replace(' ', '');
        plusOne(Number(curPrice), priceOneGood1, oldPriceConteiner1, oldPriceMobConteiner1);
        oldPriceMobConteiner1.innerText = oldPriceMobConteiner1.textContent.concat(str);
        oldPriceConteiner1.innerText = oldPriceConteiner1.textContent.concat(str);
        //for totalChange
        changeTotal();
    }
});
minCount2.addEventListener('click', function () {
    if (minCount2.classList.contains('active')) {
        value2 = changeValue(false, value2, count2, maxValueCountThree);
        checkActive(minCount2, plusCount2, value2, maxValueCountThree);
        //for totalChange
        changeTotal();
    }
});
plusCount2.addEventListener('click', function () {
    if (plusCount2.classList.contains('active')) {
        value2 = changeValue(true, value2, count2, maxValueCountThree);
        checkActive(minCount2, plusCount2, value2, maxValueCountThree);
        //for totalChange
        changeTotal();
    }
});
minCount3.addEventListener('click', function () {
    if (minCount3.classList.contains('active')) {
        value3 = changeValue(false, value3, count3, maxValueCountTwo);
        checkActive(minCount3, plusCount3, value3, maxValueCountTwo);
        //For change price
        let curSalePrice = newPriceConteiner2.textContent.replace(' ', '');
        minusOne(Number(curSalePrice), saleOneGood2, newPriceConteiner2, newPriceMobConteiner2);
        let curPrice = oldPriceConteiner2.textContent.replace(str, '').replace(' ', '');
        minusOne(Number(curPrice), priceOneGood2, oldPriceConteiner2, oldPriceMobConteiner2);
        oldPriceMobConteiner2.innerText = oldPriceMobConteiner2.textContent.concat(str);
        oldPriceConteiner2.innerText = oldPriceConteiner2.textContent.concat(str);
        //for totalChange
        changeTotal();
    }
});
plusCount3.addEventListener('click', function () {
    if (plusCount3.classList.contains('active')) {
        value3 = changeValue(true, value3, count3, maxValueCountTwo);
        checkActive(minCount3, plusCount3, value3, maxValueCountTwo);
        //For change price
        let curSalePrice = newPriceConteiner2.textContent.replace(' ', '');
        plusOne(Number(curSalePrice), saleOneGood2, newPriceConteiner2, newPriceMobConteiner2);
        let curPrice = oldPriceConteiner2.textContent.replace(str, '').replace(' ', '');
        plusOne(Number(curPrice), priceOneGood2, oldPriceConteiner2, oldPriceMobConteiner2);
        oldPriceMobConteiner2.innerText = oldPriceMobConteiner2.textContent.concat(str);
        oldPriceConteiner2.innerText = oldPriceConteiner2.textContent.concat(str);
        //for totalChange
        changeTotal();
    }
});
function prettify (num) {
    let n = num.toString();
    let separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
}

function plusOne(oldPrice, priceOne, conteiner, conteinerMob){
    conteiner.innerText = prettify(oldPrice+priceOne);
    conteinerMob.innerText = prettify(oldPrice+priceOne);
}
function minusOne(oldPrice, priceOne, conteiner, conteinerMob){
    conteiner.innerText = prettify(oldPrice-priceOne);
    conteinerMob.innerText = prettify(oldPrice-priceOne);
}
/*=========counter end=========*/

/*Total price change*/
let totalConteiner = document.getElementById('total_price');
let totalMobConteiner = document.getElementById('mob_total_price');
let totalNumGoodsConteiner = document.getElementById('total_num_goods');
let totalPriceNotSaleConteiner = document.getElementById('total_price_not_sale');
let totalSaleConteiner = document.getElementById('total_sale');

function changeTotal (){
    let curOldPrice1 = oldPriceConteiner1.textContent.replace(str, '').replaceAll(' ', '');
    let curOldPrice3 = oldPriceConteiner2.textContent.replace(str, '').replaceAll(' ', '');
    let curOldPrice2 = oldPriceConteiner3.textContent.replace(str, '').replaceAll(' ', '');

    let curNewPrice1 = newPriceConteiner1.textContent.replace(str, '').replaceAll(' ', '');
    let curNewPrice3 = newPriceConteiner2.textContent.replace(str, '').replaceAll(' ', '');
    let curNewPrice2 = newPriceConteiner3.textContent.replace(str, '').replaceAll(' ', '');


    let countGood1 = count1.textContent;
    let countGood2 = count2.textContent;
    let countGood3 = count3.textContent;

    let oldPrice = 0;
    let newPrice = 0;
    let goodNumber = 0;
    if(good1.checked){
        oldPrice = oldPrice + Number(curOldPrice1);
        newPrice = newPrice + Number(curNewPrice1);
        goodNumber = goodNumber + Number(countGood1);
    }
    if(good2.checked){
        oldPrice = oldPrice + Number(curOldPrice2);
        newPrice = newPrice + Number(curNewPrice2);
        goodNumber = goodNumber + Number(countGood2);
    }
    if(good3.checked){
        oldPrice = oldPrice + Number(curOldPrice3);
        newPrice = newPrice + Number(curNewPrice3);
        goodNumber = goodNumber + Number(countGood3);
    }
    let sale = newPrice - oldPrice;

    totalConteiner.innerText = prettify(newPrice);
    totalMobConteiner.innerText = prettify(newPrice).concat(' сом');
    totalNumGoodsConteiner.innerText = prettify(goodNumber).concat(' ' + declOfNum(goodNumber, ['товар', 'товара', 'товаров']));
    totalPriceNotSaleConteiner.innerText = prettify(oldPrice).concat(' сом');
    totalSaleConteiner.innerText = prettify(sale).concat(' сом');
    checkTotal();
}

function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
}

/*good change delevery*/
function changeDel(good, goodCards) {
    if (good.checked !== true) {
        for (const el of goodCards) {
            el.style.display = 'none';
        }
    } else {
        for (const el of goodCards) {
            el.style.display = 'block';
        }
    }
}

let good1 = document.getElementById('choose1');
let good2 = document.getElementById('choose2');
let good3 = document.getElementById('choose3');

let goodDel1 = document.getElementsByClassName('good_del1');
let goodDel2 = document.getElementsByClassName('good_del2');
let goodDel3 = document.getElementsByClassName('good_del3');

const block1 = document.getElementById("data1_conteiner");
const block2 = document.getElementById("data2_conteiner");

let date1 = document.getElementById('date1');
let date2 = document.getElementById('date2');

good1.addEventListener('click', function () {
    date1.style.display = 'flex';
    date2.style.display = 'flex';
    changeDel(good1, goodDel1);
    changeVis(block1, date1);
    changeVis(block2, date2);
    //for totalChange
    changeTotal();
});
good2.addEventListener('click', function () {
    date1.style.display = 'flex';
    date2.style.display = 'flex';
    changeDel(good2, goodDel2);
    changeVis(block1, date1);
    changeVis(block2, date2);
    //for totalChange
    changeTotal();
});
good3.addEventListener('click', function () {
    date1.style.display = 'flex';
    date2.style.display = 'flex';
    changeDel(good3, goodDel3);
    changeVis(block1, date1);
    changeVis(block2, date2);
    //for totalChange
    changeTotal();
});

function changeVis(block, date) {
    if (!hasVisEl(block)) {
        date.style.display = 'none'
    } else {
        date.style.display = 'flex'
    }
}

function hasVisEl(block) {
    const elements = block.querySelectorAll("div");
    let flag = false;
    elements.forEach(function (element) {
        if (element.offsetHeight > 0) {
            flag = true;
        }
    });
    return flag;
}


const img = document.getElementById('img-hide');
const img2 = document.getElementById('img-hide2');
const newHeader = document.getElementById('new_header');
const marginNis = document.getElementById('margin_nis');
marginNis.classList.add('marginTop');
newHeader.style.display = 'none';
const oldHeader = document.getElementById('old_header');

img.addEventListener('click', function () {
    changeVisible('block_goods');
    transformIMG(img);
    if (newHeader.style.display === 'none') {
        changeHeader(oldHeader, newHeader);
        marginNis.classList.toggle('marginTop');
    } else {
        changeHeader(newHeader, oldHeader);
        marginNis.classList.toggle('marginTop');
    }

})

img2.addEventListener('click', function () {
    changeVisible('block_goods2');
    transformIMG(img2);
})

function changeVisible(id) {
    let conteiner = document.getElementById(id);
    if (conteiner.style.display !== 'none') {
        conteiner.style.display = 'none';
    } else {
        conteiner.style.display = 'flex';
    }
}

function transformIMG(img) {
    if (img.style.transform === 'rotate(-180deg)') {
        img.style.transform = 'rotate(0deg)';
    } else {
        img.style.transform = 'rotate(-180deg)';
    }
}

function changeHeader(header1, header2) {
    header1.style.display = 'none';
    header2.style.display = 'block';
}


/*open/close module*/
let btn = document.getElementById('open_modal');
btn.addEventListener('click', function () {
    close();
});
let btn2 = document.getElementById('btn-open_modal');
btn2.addEventListener('click', function () {
    close();
});
let mod_window = document.getElementById('modul_pay');
let mod = document.getElementById('module_window');
mod.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(mod_window);
    if (!withinBoundaries) {
        close(); // скрываем элемент т к клик был за его пределами
    }
});
let closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', function () {
    close();
});

function close() {
    let modul = document.getElementById('module_window');
    modul.classList.toggle('modal_active');

}

/*обработка данных*/
let btnChoose = document.getElementById('btn-choose');
let allRadioBtn = document.getElementsByClassName('pay_card_radio');

for (let radioBtn of allRadioBtn) {
    radioBtn.addEventListener('click', function () {
        for (let radioBtn of allRadioBtn) {
            radioBtn.checked = false;
        }
        radioBtn.checked = true;
    });
}
let currentImgCard = document.getElementById('current_card');
let curImgSrc = currentImgCard.src;
let currentNumCard = document.getElementById('current_card_num');
let curNumCard = currentNumCard.textContent;
let currentImgCard2 = document.getElementById('current_card2');
let currentNumCard2 = document.getElementById('current_card_num2');


btnChoose.addEventListener('click', function () {
    for (let radioBtn of allRadioBtn) {
        if (radioBtn.checked === true) {
            let parentBlock = radioBtn.parentNode;
            curNumCard = parentBlock.querySelector("span").textContent;
            curImgSrc = parentBlock.querySelector("img").src;
        }
    }
    currentNumCard.innerText = curNumCard;
    currentImgCard.src = curImgSrc;
    currentNumCard2.innerText = curNumCard;
    currentImgCard2.src = curImgSrc;
    close();
});

/*Open/Close Modal Del*/

function closeDel() {
    let modal = document.getElementById('modal_window_del');
    modal.classList.toggle('modal_active');
}

let close_del = document.getElementById('close2');
close_del.addEventListener('click', function () {
    closeDel();
});
let close_del2 = document.getElementById('modal_window_del');
let modal_del = document.getElementById('modal_del');
close_del2.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(modal_del);
    if (!withinBoundaries) {
        closeDel(); // скрываем элемент т к клик был за его пределами
    }
});
let open_del1 = document.getElementById('change_del');
open_del1.addEventListener('click', function () {
    closeDel();
});
let open_del2 = document.getElementById('change_del2');
open_del2.addEventListener('click', function () {
    closeDel();
});

let btnAddress = document.getElementsByClassName('btn-address');
for (let btn of btnAddress) {
    btn.addEventListener('click', function () {
        for (const btn of btnAddress) {
            btn.classList.remove('btn-address_active');
        }
        btn.classList.add('btn-address_active');
        checkListAddress();
    });
}

let address1 = document.getElementById('address1');
let address2 = document.getElementById('address2');
let couriersAddress = document.getElementById('courier');
let picPointAddress = document.getElementById('pic_point');

function checkListAddress() {
    if (address1.classList.contains('btn-address_active')) {
        couriersAddress.classList.add('list_hidden');
        picPointAddress.classList.remove('list_hidden');
    } else {
        couriersAddress.classList.remove('list_hidden');
        picPointAddress.classList.add('list_hidden');
    }
}

checkListAddress();

let allRadioBtnCourier = document.getElementsByClassName('radioCourier');
for (let radioBtn of allRadioBtnCourier) {
    radioBtn.addEventListener('click', function () {
        for (let radioBtn of allRadioBtnCourier) {
            radioBtn.checked = false;
        }
        radioBtn.checked = true;
    });
}

let allRadioBtnPoint = document.getElementsByClassName('radioPoint');
for (let radioBtn of allRadioBtnPoint) {
    radioBtn.addEventListener('click', function () {
        for (let radioBtn of allRadioBtnPoint) {
            radioBtn.checked = false;
        }
        radioBtn.checked = true;
    });
}


let btnChooseAddress = document.getElementById('btn-choose-address');

let currentAddress = document.getElementById('address_del');
let currentAddress2 = document.getElementById('address_del2');
let curAddress = currentAddress.textContent;

let currentTypeDel = document.getElementById('type_del');
let currentTypeDel2 = document.getElementById('type_del2');

let info_picup = document.getElementById('info_picup');
let rait = info_picup.querySelector("span");
let curRait = rait.textContent;
btnChooseAddress.addEventListener('click', function () {
    //if pic_point
    if (address1.classList.contains('btn-address_active')) {
        for (const el of allRadioBtnPoint) {
            if (el.checked === true) {
                let parentBlock = el.parentNode;
                curAddress = parentBlock.querySelector("span").textContent;
                curRait = parentBlock.querySelector('.rating').textContent;
            }
        }
        currentTypeDel.innerText = "Пункт выдачи";
        currentAddress.innerText = curAddress;
        currentTypeDel2.innerText = "Доставка в пункт выдачи";
        currentAddress2.innerText = curAddress;
        info_picup.style.display='block';
        rait.innerText=curRait;
    } else {
        //if courier
        for (const el of allRadioBtnCourier) {
            if (el.checked === true) {
                let parentBlock = el.parentNode;
                curAddress = parentBlock.querySelector("span").textContent;
            }
        }
        currentTypeDel.innerText = "Курьером";
        currentAddress.innerText = curAddress;
        currentTypeDel2.innerText = "Доставка курьером";
        currentAddress2.innerText = curAddress;
        info_picup.style.display='none';
    }
    closeDel();
});
















