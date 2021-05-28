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