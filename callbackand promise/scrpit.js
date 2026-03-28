// console.log(Math.floor(Math.random() * 10));

// function kuccjisdb(val) {
//     setTimeout(val, (Math.floor(Math.random() * 10) * 1000));

// }

// kuccjisdb(function () {
//     console.log("hello");
// });

// ye function kahi bana hua hai abstract hai
// function userinformation(username, cb) {
//     setTimeout(() => {
//         console.log(username);
//         cb({
//             id: 1243, username, email: `${username}@123.com`, password: 123456
//         });
//     }, 2000);

// }
// function userpost(id, cb) {
//     setTimeout(() => {
//         console.log(id);
//         cb({ id: id, post: ["hello world", " hola", " world"] });
//     }, 3000);
// }
// // callback function kar sakte hai
// userinformation("sid", function (data) {
//     console.log(data);
//     userpost(data.id, function (data) {
//         console.log(data.post)
//     })
// })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// --- Using .then() / .catch() ---
let pr = new Promise(function (res, rej) {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10);
        if (num > 5) res(`the resolved number: ${num}`)
        else
            rej(`the rejected number: ${num}`)
    }, 3000);
})

pr.then(function (data) {
    console.log(data);
}).catch(function (data) {
    console.log(data);
})


async function abcd() {
    let pr2 = new Promise(function (res, rej) {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10);
            if (num > 5) res(`the resolved number: ${num}`)
            else
                rej(`the rejected number: ${num}`)
        }, 3000);
    })

    try {
        let val = await pr2;
        console.log(val);
    }
    catch (err) {
        console.log(err);
    }
}
abcd();