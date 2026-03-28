
//global
console.log(this);
// functiona
// l
function abc() {
    console.log(this)
}
abc();

//object and method
let obj = {
    name: " harh",
    sayname: function () {
        console.log(this.name
        )
    }
}
obj.sayname();
// event handler

document.querySelector("h1")
    .addEventListener("click", function () {
        console.log(this.style.color = "red");
    });



// call apply and blind
let obj1 = {
    name: "harsh",
    age: 20,

}
function abc() {
    console.log(this, a, b, c);
}

abc.call(obj1, 1, 2, 3);

