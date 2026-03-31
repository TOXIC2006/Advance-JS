// class youtubeChanal {
//     constructor(name) {
//         this.name = name;
//         this.subscribers = [];
//     }

//     subscribe(user) {
//         this.subscribers.push(user);
//         console.log(`${user.name} is subscribed to ${this.name}`)
//     }
//     unsubscribe(user) {
//         this.subscribers = this.subscribers.filter(sub => sub !== user);
//         console.log(`${user.name} is unsubscribed from ${this.name}`);

//     }
//     notify(message) {
//         this.subscribers.forEach(user => user.update(message));

//     }


// }


// class user {
//     constructor(name) {
//         this.name = name
//     }
//     update(data) {
//         console.log(`${this.name} recive a notification ${data}`)
//     }
// }

// let chanal = new youtubeChanal("Toxic_SID");
// let user1 = new user("Ali");
// let user2 = new user("Sara");
// let user3 = new user("Ahmed");
// chanal.subscribe(user1);
// chanal.subscribe(user2);
// chanal.subscribe(user3);
// chanal.notify("new video is uploaded");
// chanal.unsubscribe(user2);
// chanal.notify("another video is uploaded");



// function debounce(fnc, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//       fnc(...args);
//     }, delay);
//   };
// }

//  function  throtttle(fnc, dealy){
//      let timmer=0;
//       return function(...args){
//          let now=Date.now;
//           if( now-timmer>dealy){
//              fnc(...args);
//              timmer=now;
//           }

//       }
//  }
// document.querySelector("input").addEventListener(
//   "input",debounce(function () { console.log("hey");}, 1000)
// );


// +++++++++++++++++++++++++++++++++++++



//   let img= document.querySelectorAll("image");  

//   const observer= new IntersectionObserver( function(entry, observer){
//     //  entry is an array structure 
//      entry.forEach((enrty)=>{
//         if(enrty.isIntersecting){
//              const img= enrty.target;
//             img.src= img.dataset.src;
//             img.classList.add("loaded");
//              observer.unobserve(img);
//         }
//      })
//   }, {
//      root:null,
//      rootMargin:"0px",
//      threshold:0.1
//   })

//   img.forEach(img=>{
//     observer.observe(img);
//   })


// +++++++++++++++++++++++++++++++


// const btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let hreavyfnc = await import("./heavy.js");  
//     hreavyfnc.anc();
// })
// +++++++++++++++++++++++++++++++++++++


let ul = document.querySelector("ul");
for (let i = 0; i < 100; i++) {
    ul.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
}
