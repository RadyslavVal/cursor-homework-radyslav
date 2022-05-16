let silver = 15.678;
let platinum = 123.965;
let gold = 90.2345;
let prices = [silver, platinum, gold]

let maxPrice = arr => {
    console.log(`Максимальна ціна: ${Math.max(...arr)}`)
}

let minPrice = arr => {
    console.log(`Мінімальна ціна: ${Math.min(...arr)}`)
}

let sum = arr => {
    let resSum = arr.reduce((a, b) => a + b, 0)
    console.log(`Вартість всіх товарів: ${resSum}`)
    return resSum;
}

let wholeAmount = arr => {
    let resSum = 0
    arr.forEach((element => resSum += Math.floor(element)))
    console.log(`Сума цілої частини вартості кожного товару: ${resSum}`)
}

let roundedSum100 = arr => {
    let resSum = 0
    arr.forEach((element => resSum += Math.floor(element)))
    console.log(`Сума товарів округлена до сотень: ${Math.ceil(resSum / 100) * 100}`)
}

let pairOrNot = resSum => {
    if (Math.floor(resSum) / 2 === 0) {
        return console.log('Чи є сума всіх товарів парною: true')
    }
    console.log('Чи є сума всіх товарів парною: false')
}

let balance = (resSum, pay) => {
    console.log(`Сума решти, якщо клієнт платить 500: ${pay - resSum}`)
}

let midlValue = arr => {
    let midlValue = arr.reduce((a, b) => a + b, 0) / arr.length;
    console.log(`Середнє значення цін: ${Number(midlValue.toFixed(2))}`)
}

let randomDiscount = (maxDiscount) => {
    let discount = Math.floor(Math.random() * maxDiscount)
    console.log(`Випадкова знижка: ${discount} %`)
    return discount;
};

let randomPay = (resSum, discount) => {
    let sumForPayWithDisc = Number((resSum - resSum * discount / 100).toFixed(2))
    console.log(`Сума до оплати, враховуючи випадкову знижу: ${sumForPayWithDisc}`)
    return sumForPayWithDisc;
}

let netProfit = (resSum, pay) => {
    console.log(`Чистий прибуток: ${pay - resSum / 2}`)
}

maxPrice(prices);
minPrice(prices);
let resSum = sum(prices);
wholeAmount(prices);
roundedSum100(prices);
pairOrNot(resSum);
balance(resSum, 500);
midlValue(prices, 500);
let discount = randomDiscount(100);
let pay = randomPay(resSum, discount);
netProfit(resSum, pay);

