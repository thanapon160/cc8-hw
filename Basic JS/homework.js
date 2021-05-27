//คำตอบแบบฝึกหัด 4
//Ex4.1
// function draw(n) {
//     let star = "";
//     for (let i = 1; i <= n; i++){
//         star = star + "*"
//     }
//         console.log(star)
// }

//Ex4.2
// function draw(n) {
//     let star = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             star += '*'
//         }
//         star += '\n'
//     }
//     console.log(star)
// }


//Ex4.3 Done
// function draw(n) {
//     let num = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             num += j
//         }
//         num += '\n'
//     }
//     console.log(num)
// }

//Ex4.4 Done
// function draw(n) {
//     let num = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             num = num+i;
//         }
//         num = num+'\n';
//     }
//     console.log(num)
// }

//Ex4.5 Done
// function draw(n) {
//     let num = "";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             num = num+(n-i);
//         }
//         num = num + '\n';
//     }
//     console.log(num);
// }

//Ex 4.6----
// function draw(n) {
//     let num = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             num = num + j + num + j + 1;
//         }
//         num = num + '\n';
//     }
//     console.log(num);
// }
// draw(1)
// console.log(draw(2))

//Ex4.7

//Ex4.8


//Ex4.9
// function draw(n) {
//     let num = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             num = num + (2 * j)
//         }
//         num = num + '\n';

//     }
//     console.log(num);
// }

//Ex4.10 Done
// function draw(n) {
//     let num = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             num = num+(i*j);
//         }
//         num = num + '\n';
//     }
//     console.log(num);
// }

//Ex4.11 Done
// function draw(n) {
//     let num = '';
//     let a = "-";
//     let b = "*";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (i == j) { num += a } else {num += b}; 
//         }
//         num = num + '\n';
//     }
//     console.log(num);
// }

//Ex4.12 Done
// function draw(n) {
//     let num = '';
//     let a = "-";
//     let b = "*";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (n+1 == i+j) { num += a } else { num += b };
//         }
//         num = num + '\n';
//     }
//     console.log(num);
// }

//Ex13 Done
// function draw(n) {
//     let num = '';
//     let a = "-";
//     let b = "*";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (j-i>0) { num += a } else { num += b };
//         }
//         num = num + '\n';
//     }
//     console.log(num);
// }

//Ex14 Done
// function draw(n) {
//     let num = '';
//     let a = "-";
//     let b = "*";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i+j<n) { num += b } else { num += a };
//         }
//         num = num + '\n';
//     }
//     console.log(num);
// }

//Ex15 Done
// function draw(n) {
//     let num = '';
//     let a = "-";
//     let b = "*";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (j - i > 0) { num += a } else { num += b };
//         }
//         num = num + '\n';
//     }
//     for (let i = 1; i < n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (j + i <= n) { num += b } else { num += a };
//         }
//         num = num + '\n';
//     }
//     console.log(num);
// }

//Ex16
// function draw(n) {
//     let num = '';
//     let b = '-';
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (i+j<=n) { num+=i } else { num += b };
//         }
//         num = num + '\n';
//     }
//     console.log(num);
// }

//Ex17 Done
// function draw(n) {
//     let num = '';
//     let a = "-";
//     let b = "*";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (i + j <= n) { num += a } else { num += b };
//         }
//         num = num + '\n';
//     }
//     console.log(num);
// }

//EX18 Done
// function draw(n) {
//     let num = '';
//     let a = "-";
//     let b = "*";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i - j >= 1) { num += a } else { num += b };
//         }
//         num = num + '\n';
//     }
//     console.log(num);
// }

//Ex19


//Ex20 Done
function draw(n) {
    let num = '';
    let a = 1
    let b = '-';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i+j>n) { num +=a; a++ } else { num += b };
        }
        num = num + '\n';
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i-j>=0) { num += b } else { num +=a; a++  };
        }
        num = num + '\n';
    }
    console.log(num);
}

draw(2);
draw(3);
draw(4);

//Array Ex
//Ex1 Done
// array1 = [1, 2, 30, 400];
// const array2 = array1.map(function(num){
//     return num*2;
// });

// //Ex2 Done
// array1 = [1, 2, 3, 4]
// const array2 = array1.map(function (num) {
//     return num += '';
// });

// //Ex3 Done
// array1 = [1, "1", 2, {}]
// const array2 = array1.map(function(num){
//     return typeof(num);
// });

//Ex4 Done
// array1 = ["apple", "banana", "orange"]
// const array2 = array1.map(function(num){
//     return num.toUpperCase();
// });

//Ex5 Done
// array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//   ]

// const array2 = array1.map((value) => {
//     return value.name;
// });

//Ex6 Done
// array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//   ]
//   const array2 = array1.map((value) => {
//         return value.age;
//     });

//Ex7 Done
// array1 = [
//         { name: "apple", surname: "London" },
//         { name: "banana", surname: "Bangkok" },
//         { name: "watermelon", surname: "Singapore" },
//       ]
// const array2 = array1.map((value) => {
//         return value.name+' '+value.surname;
//     });  



//Ex8 Done
// array1 = [1,3,4,5,6,7,8]
// const array2 = array1.map((value) => {
//     if (value%2) {
//         return 'odd'
//     } else {
//         return 'even'
//     }
// })

//Ex9 Done
// array1 = [1, -3, 2, 8, -4, 5]
// const array2 = array1.map((value) => {
//     if (value < 0) {return value*(-1);} else {return value};// Math.abs(value)
// })

//Ex10 Done
// array1 = [100, 200.25, 300.84, 400.3]
// const array2 = array1.map((value) => {
//     return value.toFixed(2);
// })

//Ex11 Done
// array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-01" },
//     { name: "watermelon", birth: "1985-12-01" },
// ]
// const array2 = array1.map((value) => {
//     value.age = 2019 - value.birth.slice(0,4)
//     return value;
// })

//Ex12
// array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
// ]
// const mapMonth = [
//     'jan',
//     'feb',
//     'mar',
//     'apr',
//     'may',
//     'jun',
//     'jul',
//     'auh',
//     'sep',
//     'aug',
//     'oct',
//     'nov',
//     'dec'
// ];

// const array2 = array1.map((value) => {
//     const birth = new Date(value.birth);
//     return (
//         `<tr>
//             <td>${value.name}</td>
//             <td>${birth.getDate()} ${mapMonth[birth.getMonth()]} ${birth.getFullYear()}</td>
//          </tr>   
//         `
//     )
// })