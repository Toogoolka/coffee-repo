// const button = document.querySelector("#delivery-btn")
// function delClick(){
//     alert("Click!")
// }
// button.addEventListener('click', delClick);


const btnPlus = document.querySelector("#plus__btn1");
const btnSub = document.querySelector("#sub__btn1");
const navDrinks = document.querySelector("#drinks");
const navDesserts = document.querySelector("#desserts");
const navFood = document.querySelector("#food")
let inpField = document.querySelector("#capuccino");
function plus(){
    if(inpField.value < 999){
        inpField.value ++;
    }else {
        inpField.value = 999;
        alert("Превышено максимально допустимое количество!")
    }
    console.log('Количество увеличилось на 1');
}
function sub(){
    if(inpField.value > 0){
        inpField.value --;
    }else {
        inpField.value = 0;
    }

    console.log("Количество уменьшилось на 1")
}
btnPlus.addEventListener('click', plus);
btnSub.addEventListener('click', sub);
