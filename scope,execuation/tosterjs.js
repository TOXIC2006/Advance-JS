function createtoster(config) {
    return function (str) {
        const div = document.createElement("div");
        div.textContent = str;
        div.className = "bg-gray-800 text-white px-6 py-3 rounded shadow-lg transition";
        document.querySelector(".parent").appendChild(div);
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);

    };

}


let toster = createtoster(
    {
        positionX: "right",
        positionY: "top",
        theme: "dark",
        duration: 3,

    }
)
toster("hello world")
setTimeout(() => {
    toster(" hello siddharth")
}, 1000)
setTimeout(() => {
    toster("  Done ")
}, 2000)

let h1 = document.querySelector("h1");

h1.addEventListener("click", toster(" jai shree ram"))