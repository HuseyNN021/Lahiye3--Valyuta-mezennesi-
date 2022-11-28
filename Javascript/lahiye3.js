const div1=document.querySelector('.mezenne1')
const div2=document.querySelector('.mezenne2')
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const p1=document.createElement('p');
const p2=document.createElement('p');
div1.append(p1);
div2.append(p2);
let base="";
let rate="";
base=document.querySelector('.ul-mezenne1 li');
base.classList.add('li-mezenne1')
base=document.querySelector('.ul-mezenne1 li').innerText
console.log(base.innerText);
rate=document.querySelector('.ul-mezenne2 li:nth-child(2)');
rate.classList.add('li-mezenne2')
rate=document.querySelector('.ul-mezenne2 li').innerText
const btn1 = document.querySelectorAll('.ul-mezenne1 li');
btn1.forEach(item1=> {
    item1.addEventListener('click', (event) => {
        isDelete1();
        item1.classList.toggle('li-mezenne1');
        base=item1.innerText;
        console.log(input1.value);
        console.log(base);
        fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${rate}`).then(res => res.json()).then(data => {
            let deyer = data.rates;
            switch (base) {
                case 'RUB':
                console.log(input1.value);
                console.log(deyer.RUB);
                console.log((+input1.value)*deyer[`${rate}`]);
                console.log(data);
                input2.value = (+input1.value)*deyer[`${rate}`];
                p2.innerText=` 1 ${base}=${deyer[`${rate}`]} ${rate}`
                console.log(` 1 ${base}=${deyer[`${rate}`]} ${rate}`)
                break;

                case 'USD':
                console.log(deyer.USD);
                console.log((+input1.value)*deyer[`${rate}`]);
                console.log(data);
                input2.value = (+input1.value)*deyer[`${rate}`];
                console.log(` 1 ${base}=${deyer[`${rate}`]} ${rate}`)
                p2.innerText=` 1 ${base}=${deyer[`${rate}`]} ${rate}`
                break;

                case 'EUR':
                console.log(deyer.EUR);
                console.log((+input2.value)*deyer[`${rate}`]);
                console.log(data);
                input2.value = (+input1.value)*deyer[`${rate}`];
                console.log(` 1 ${base}=${deyer[`${rate}`]} ${rate}`)
                p2.innerText=` 1 ${base}=${deyer[`${rate}`]} ${rate}`
                break;

                case 'GBP':
                console.log(deyer.GBP);
                console.log(data);
                console.log((+input1.value)*deyer[`${rate}`]);
                input2.value = (+input1.value)*deyer[`${rate}`];
                console.log(` 1 ${base}=${deyer[`${rate}`]} ${rate}`)
                p2.innerText=` 1 ${base}=${deyer[`${rate}`]} ${rate}`
                break;
            }
        });
    })
    function isDelete1() {
        const btn1 = document.querySelectorAll('.ul-mezenne1 li');
        btn1.forEach(item1=> {
            item1.classList.remove('li-mezenne1');
        })
    }
}) 
console.log(base);
const btn2 = document.querySelectorAll('.ul-mezenne2 li');
btn2.forEach(item2=> {
    item2.addEventListener('click', (event) => {
        isDelete2();
        item2.classList.toggle('li-mezenne2')
        rate=item2.innerText;
        fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${rate}`).then(res => res.json()).then(data => {
            let deyer = data.rates;
            switch (item2.innerText) {
                case 'RUB':
                console.log(deyer.RUB);
                input2.value = (+input1.value)*deyer.RUB;
                p1.innerText=` 1 ${base}=${deyer[`${rate}`]} ${rate}`
                break;

                case 'USD':
                console.log(deyer.USD);
                input2.value = (+input1.value)*deyer.USD;
                p1.innerText=` 1 ${base}=${deyer[`${rate}`]} ${rate}`
                break;

                case 'EUR':
                console.log(deyer.EUR);
                input2.value = (+input1.value)*deyer.EUR;
                p1.innerText=` 1 ${base}=${deyer[`${rate}`]} ${rate}`
                break;

                case 'GBP':
                console.log(deyer.GBP);
                input2.value = (+input1.value)*deyer.GBP;
                p1.innerText=` 1 ${base}=${deyer[`${rate}`]} ${rate}`
                break;
            }
            console.log(data);
        });
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