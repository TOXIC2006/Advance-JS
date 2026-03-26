
// //   lexial scoping
//  function abc(){
//      let a=12;
//      function abcd(){
//          console.log(a);

//      }
//  }
//  // colure function

//   function abcd(){
//       let b=13;
//        return  function (){
//           console.log( b);
//        };
//   }
//    let fnc = abcd()
//     fnc();



//     function countfome(){
//          let count=0;
//           return function (){
//              count++;
//              console.log(c);
//           }
//     }
//      let fnc1= countfome();
//      fnc1;



//      // encapulation

//       function cliklimmter(){
//          let click=0;
//           return  function(){
//              if(click<5){
//                  click++;
//                   console.log(`clicked ${click} times`);
//              }else{
//                 console.log("try again after some times");
//              }
//           }
//       }
//        let click = cliklimmter();
//        click()
//        click()
//        click()
//        click()
//        click()
//        click()



