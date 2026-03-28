// function createbisc(name, price, color, taste, crunchy, category) {
//     this.name = " ParleG",
//         this.price = 10,
//         this.color = "brown",
//         this.taste = "sweet",
//         this.crunchy = true,
//         this.category = "biscuit"

// }

// let biscout1 = new createbisc("oreo", 100, "black", "sweet", true, "biscuit");
// let biscout2 = new createbisc("parle", 100, "white", "sweet", true, "biscuit");

// console.log(biscout1);
// console.log(biscout2);


// construction function


// Constructor function
// function Createpen(name, price, color, type) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.type = type;
// }

// Prototype method
// Createpen.prototype.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.append(h1);
// };

// // Creating objects (FIX: same name as constructor)
// let pen1 = new Createpen("cello", 10, "blue", "gel");
// let pen2 = new Createpen("reynolds", 20, "black", "ball");

// console.log(pen1);
// console.log(pen2);

// // Using method
// pen1.write("All is well");
// pen2.write("3 idiots");
// pen2.write("4 idiots");


// class CreatePenciel {
//     constructor(name, price, color, type) {
//         this.name = name;
//         this.price = price;
//         this.color = color;
//         this.type = type;
//     }

//     write(text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }

//     remove() {
//         let headings = document.querySelectorAll("h1");

//         headings.forEach(element => {
//             if (element.style.color === this.color) {
//                 element.remove();
//             }
//         });
//     }
// }

// let pen1 = new CreatePenciel("cello", 10, "blue", "gel");
// let pen2 = new CreatePenciel("reynolds", 20, "black", "ball");

// pen1.write("All is well");
// pen2.write("3 idiots");
// pen1.write("Blue text");
// pen2.write("Black text");


// pen1.remove();


class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${text} ${this.name}, email address: ${this.email}, password: ${this.password}`;
        h1.style.color = "blue";
        document.body.appendChild(h1);
    }
}

let user1 = new User("sid", "sid@123.email.com", "123456");
let user2 = new User("sid1", "sid@2123.email.com", "12d3456");

user1.write("Hello");
user2.write("Hello");


class Admin extends User {
    constructor(name, email, password) {
        super(name, email, password);
        this.role = "Admin";
    }

    removeByText(text) {
        let h1 = document.querySelectorAll("h1");
        h1.forEach(element => {
            if (element.textContent.includes(text)) {
                element.remove();
            }
        });
    }

    removeAll() {
        let h1 = document.querySelectorAll("h1");
        h1.forEach(element => element.remove());
    }
}

let admin1 = new Admin("admin", "admin@email.com", "admin123");

// protoltyal inheritance

let coffe = {
    name: "regular",
    price: "$20",
    Taste: "bitter"

};

let arabiacncoffe = Object.create(coffe);

arabiacncoffe.Taste = "sweet";

console.log(arabiacncoffe);


