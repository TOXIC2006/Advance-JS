let form = document.querySelector("form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

const userManager = {
    users: [],

    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },

    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },

    addUser: function () {
        console.log("form submitted");
        this.users.push({
            name: name.value,
            email: email.value,
            password: password.value
        });
        console.log(this.users);
        form.reset();
    },
    renderuser: function () {
        this.users.forEach(function (user) {

        })
    },
    removeUser: function () { },
};

userManager.init();