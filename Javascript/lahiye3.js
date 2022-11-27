const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2');
function change(){
const btn1 = document.querySelectorAll('.ul-mezenne1 li');
btn1.forEach(item1=> {
    item1.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(item1.innerText)
        const button2 = document.querySelectorAll('.ul-mezenne2 li');
        isDelete1();
        item1.classList.toggle('li-mezenne1');
    })
    function isDelete1() {
        const btn1 = document.querySelectorAll('.ul-mezenne1 li');
        btn1.forEach(item1=> {
            item1.classList.remove('li-mezenne1');
        })
    }
}) 
}

const btn2 = document.querySelectorAll('.ul-mezenne2 li');
btn2.forEach(item2=> {

    item2.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(item2.innerText)
        isDelete2();
        item2.classList.toggle('li-mezenne2')
        fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=${item2.innerText}`).then(res => res.json()).then(data => {
            let deyer = data.rates;
            switch (item2.innerText) {
                case 'RUB':
                console.log(deyer.RUB);
                console.log((+input1.value)*deyer.RUB);
                input2.value = (+input1.value)*deyer.RUB;
                break;

                case 'USD':
                console.log(deyer.USD);
                console.log((+input1.value)*deyer.USD);
                input2.value = (+input1.value)*deyer.USD;
                break;

                case 'EUR':
                console.log(deyer.EUR);
                console.log((+input1.value)*deyer.EUR);
                input2.value = (+input1.value)*deyer.EUR;
                break;

                case 'GBP':
                console.log(deyer.GBP);
                console.log((+input1.value)*deyer.GBP);
                input2.value = (+input1.value)*deyer.GBP;
                break;
            }
        });
        input2.value = input1.value;
        console.log(input1.value);
    })
    function isDelete2() {
        const btn2 = document.querySelectorAll('.ul-mezenne2 li');
        btn2.forEach(item => {
            item.classList.remove('li-mezenne2');
        })
    }
})






// const btn2=document.querySelectorAll('.ul-mezenne2 li');
// btn2.forEach(item=>{
//     item.addEventListener('click',(event)=>{
//         event.preventDefault();
//         fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=${item.innerText}`).then(res=>res.json()).then(data=>console.log(data))
//         console.log(item.innerText)
//         isDelete2();
//         item.classList.toggle('li-mezenne2')
//     })
// })

// function isDelete2(){
//     const btn2=document.querySelectorAll('.ul-mezenne2 li');
//     btn2.forEach(item=>{
//         item.classList.remove('li-mezenne2');
//     })
// }


// fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD').then(res=>res.json()).then(data=>console.log(data))