//  module pattern
//  iffe

// let bank = (function () {
//     let balance = 12000;
//     function checkbalnce() {
//         console.log(balance);

//     }
//     function addbalance(amount) {
//         balance += amount;
//         console.log(balance);
//     }
//     function withdrawal(amount) {
//         if (amount < balance) {
//             balance = balance - amount;
//             console.log(balance);
//         }else{
//              console.log(" not valid")
//         }
//     }
//     return {
//         checkbalnce,
//         withdrawal,
//         addbalance

//     };

// })();

//   checkbalnce();  can not acces it

// bank.checkbalnce();
// bank.addbalance(2000);
// bank.withdrawal(500);


// factory function
function createpraduct(name, price) {
    let qty = 10;
    return {
        name,
        price,
        addqty(refil) {
            qty += refil;
            console.log(` added total quantity ${qty}`)

        },
        Buy(order) {
            if (qty < order) {
                qty -= order;
                console.log(`total quantity  buy ${qty}`)
            }
        }
    }

}
let lpatop = createpraduct("laptop", 50000);
lpatop.addqty(5);
lpatop.Buy(3);