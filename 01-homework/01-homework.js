const silver = 15.678;
const platinum = 123.965;
const gold = 90.2345;
const prices = [silver, platinum, gold]

const maxPrice = arr => {
    console.log(`Максимальна ціна: ${Math.max(...arr)}`)
}

const minPrice = arr => {
    console.log(`Мінімальна ціна: ${Math.min(...arr)}`)
}

const sum = arr => {
    let resSum = arr.reduce((a, b) => a + b, 0)
    console.log(`Вартість всіх товарів: ${resSum}`)
    return resSum;
}

const wholeAmount = arr => {
    let resSum = 0
    arr.forEach((element => resSum += Math.floor(element)))
    console.log(`Сума цілої частини вартості кожного товару: ${resSum}`)
}

const roundedSum100 = arr => {
    let resSum = 0
    arr.forEach((element => resSum += Math.floor(element)))
    console.log(`Сума товарів округлена до сотень: ${Math.round(resSum / 100) * 100}`)
}

const pairOrNot = resSum => {
    if (Math.floor(resSum) % 2 === 0) {
        return console.log('Чи є сума всіх товарів парною: true')
    }
    console.log('Чи є сума всіх товарів парною: false')
}

const balance = (resSum, pay) => {
    console.log(`Сума решти, якщо клієнт платить 500: ${pay - resSum}`)
}

const midlValue = arr => {
    let midlValue = arr.reduce((a, b) => a + b, 0) / arr.length;
    console.log(`Середнє значення цін: ${Number(midlValue.toFixed(2))}`)
}

const randomDiscount = (maxDiscount) => {
    let discount = Math.floor(Math.random() * maxDiscount)
    console.log(`Випадкова знижка: ${discount} %`)
    return discount;
};

const randomPay = (resSum, discount) => {
    console.log(`Сума до оплати, враховуючи випадкову знижу: ${(resSum - resSum * discount).toFixed(2)}`)
    return (resSum - resSum * discount).toFixed(2);
}

const netProfit = (resSum, pay) => {
    console.log(`Чистий прибуток: ${pay - resSum / 2}`)
}

maxPrice(prices);
minPrice(prices);
const resSum = sum(prices);
wholeAmount(prices);
roundedSum100(prices);
pairOrNot(resSum);
balance(resSum, 500);
midlValue(prices, 500);
const discount = randomDiscount(100) / 100;
const pay = randomPay(resSum, discount);
netProfit(resSum, pay);

