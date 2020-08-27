function moneyInRegister(cid) {
    let totalMoney = 0
    for (let i = 0 ; i < cid.length ; i++) {
        totalMoney += cid[i][1]
    }
    return Math.ceil(totalMoney*100)/100
}

function checkCashRegister(price, cash, cid) {
    const denom = {
        "ONE HUNDRED": 100.00,
        "TWENTY": 20.00,
        "TEN": 10.00,
        "FIVE": 5.00,
        "ONE": 1.00,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01,
    }
    const change = cash-price
    const registerMoney = moneyInRegister(cid)
    // console.log("hello")
    if (change < 0 || change > registerMoney) return {status: "INSUFFICIENT_FUNDS", change: []} 
    if (change === registerMoney) return {status: "CLOSED", change: cid}
    // console.log(denom.length)
    let changeArr = []
    let changeArrValue = 0
    // console.log(change)

    // for (key in denom) {
    //     // console.log(denom[i])
    //     console.log(key)
    // }
    while (changeArrValue < change) {
        // break
        let currentDenomValue
        let currentDenom
        let cidIndex

        // get largest denomination that's less than the remaining amount of change
        let i = 0
        for (let key in denom) {
            let remainingChange = Math.round((change-changeArrValue)*100)/100

            if (denom[key] <= remainingChange && cid[cid.length-i-1][1] > 0) {
                // console.log(remainingChange)

                currentDenomValue = denom[key]
                currentDenom = key
                changeArr.push([currentDenom, 0])//initialize the value in the change array that will be returned
                // console.log(changeArr)
                break
            }
            i++
        }

        // could not find an available denomination for remaining change
        if (currentDenom === undefined) {
            // console.log("ono")
            return {status: "INSUFFICIENT_FUNDS", change: []}
        }

        // get the index where the remaining amount for current denomination is
        for (let i = 0 ; i < cid.length ; i++) {
            if (cid[i][0] === currentDenom) {
                cidIndex = i
                break
            }
        }
        // console.log(cidIndex)
        // console.log(cid[cidIndex][1])
        // console.log(currentDenom)
        // console.log(changeArrValue)
        // console.log(change)
        // console.log(currentDenomValue)
        // console.log("~~~~~~~~~~~~~~~~~")
        // while there are sufficient funds to draw from and haven't reached change amount
        while (cid[cidIndex][1] >= currentDenomValue && changeArrValue < change) {
            // work with the most recently pushed sub array in the change array. This will be the largest denomitation

            // if the amount about to be drawn gives customer extra cash, go on to next denom
            // console.log(Math.round(changeArrValue+currentDenomValue))
            if (Math.round((changeArrValue+currentDenomValue)*100)/100 > change) break
            // console.log("poop")
            cid[cidIndex][1] -= currentDenomValue
            changeArr[changeArr.length-1][1] += currentDenomValue
            changeArrValue += currentDenomValue
            // console.log("eh")
        }
        // console.log(changeArr)
        // console.log(Math.ceil(changeArrValue*100)/100)
        // if (cid[cidIndex][1] > currentDenomValue && changeArrValue < change) {
        //     let obtainAmount = cid[cidIndex][1]
        // }
    }
    // console.log(changeArrValue)

    console.log(changeArr)

    return {status: "OPEN", change: changeArr}
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])