export const maxPrice = arr => {
    return Math.max(...arr)
}

export const minPrice = arr => {
    return Math.min(...arr)
}

export const sum = arr => {
    return arr.reduce((a, b) => a + b, 0);
}

export const wholeAmount = arr => {
    let resSum = 0
    arr.forEach((element => resSum += Math.floor(element)))
    return resSum
}

export const roundedSum100 = arr => {
    let resSum = 0
    arr.forEach((element => resSum += Math.floor(element)))
    return Math.round(resSum / 100) * 100
}

export const pairOrNot = resSum => {
    if (Math.floor(resSum) % 2 === 0) {
        return 'true'
    }
    return 'false'
}

export const balance = (resSum, pay) => {
    return pay - resSum
}

export const midlValue = arr => {
    let midlValue = arr.reduce((a, b) => a + b, 0) / arr.length;
    return Number(midlValue.toFixed(2))
}

export const randomDiscount = (maxDiscount) => {
    let discount = Math.floor(Math.random() * maxDiscount) / 100;
    return discount;
};

export const randomPay = (resSum, discount) => {
    let payAfterDisc = (resSum - resSum * discount).toFixed(2)
    return payAfterDisc;
}

export const netProfit = (resSum, pay) => {
    return randomPay(pay, randomDiscount(100)) - sum(resSum) / 2
}

