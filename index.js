// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?

function Primes() {
let n = 10;
let m = 0;
let  primeNumbers = "";
    for (let index = 1; index <= n-1; index++)
    {
        let counter = 0;
        for(m = index; m >= 1; m--)
        {
            if(index % m == 0)
            {
                counter = counter + 1;
            }
        }
        if (counter ==  2)
        {
            primeNumbers = primeNumbers + index + " ";
        }
    }
    console.log("Các số nguyên tố từ 1 đến n là:");
    console.log(primeNumbers);  
}
// Primes();

// 5. Viết chương trình tính tổng từ 1 đến n?


function sumPrimes() {
    let n = 10;
    let sum = 0;
    for (let index = 1; index <= n; index++)  {
        sum = sum + index;
    }
console.log("Tổng các số từ 1 đến n là:");
console.log(sum);
}
// sumPrimes();

// 6. Viết chương trình tính tổng bình phương của các số từ 1 đến n?

function sumSquares() {
    let n = 3;
    let sum = 0;
    for (let index = 1; index <= n; index++)  {
            sum = sum + index * index;
        }
    console.log("Tổng bình phương các số từ 1 đến n là:");
    console.log(sum);
}
// sumSquares();

// 7. Tính tổng các số lẻ trong khoảng 1 đến n?

function sumOdds() {
    let n = 5;
    let sum = 0;
    for(let index = 1; index <= n; index++){
        if (index % 2 != 0){
            sum = sum + index;
        }
    }
    console.log("Tổng các số lẻ trong khoảng từ 1 đến n là:");
    console.log(sum);
}
// sumOdds();

// 8. Kiểm tra số n có toàn số lẻ tạo thành hay không?

function oddNumbers() {
    let n = 15;
    let m = 0;
    let result = "";
    console.log("Số n là số có toàn số lẻ tạo thành hay không");
    while (n > 0) {
        m = m * 10 + n % 10;
        n = Math.floor(n / 10);
        if (m % 2 == 0) {
            result = "NO"
            break;
        } 
        else {
            result = "YES"
    }
}
console.log(result);
}
// oddNumbers();

// 9. Kiểm tra n có phải là số đối xứng?
// Cách 1:

function isPaindrome() {
    let n = 125321;
    let m = 0;
    let s = n;
    let result ="";
    console.log("Số n có phải số đối xứng không");
    while (n > 0) {
        m = m * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    if (m == s) {
        result = "YES";
    }
    else {
        result = "NO";
    }
    console.log(result);
}
isPaindrome();

// Cách 2:
// dùng for chạy từ đầu đến giữa
// check các phần tử có bằng các phần tử cuối hay không 

// let n = 12345321;
// // n.length = 9 / 2 = 4.5 => chạy từ 0 => 4

// function isPaindrome() {
//     let n = 1234;
//     for (let index = 0; index < n.length / 2; index++) {
//         if(n[index] !== n[n.length - index - 1]){
//             return false;
//         }   
//     }
//     return true;
// isPaindrome();

// 10. In bảng cửu chương ra màn hình?

function multiplications(params) {
    console.log("BẢNG CỬU CHƯƠNG");
for (let i = 2; i <= 9; i++) {
    for( let j = 1; j <= 9; j++) {    
        console.log( i+" x",j,"= "+i*j);
    }
    console.log("=====================");
    }
}
// multiplications();
