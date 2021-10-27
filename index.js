// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?

// let n = 10;
// let m = 0;
// let  primeNumbers = "";
// for (let index = 1; index <= n-1; index++)
// {
//     let counter = 0;
//     for(m = index; m >= 1; m--)
//     {
//         if(index % m == 0)
//         {
//             counter = counter + 1;
//         }
//     }
//     if (counter ==  2)
//     {
//         primeNumbers = primeNumbers + index + " ";
//     }
// }
// console.log("Các số nguyên tố từ 1 đến n là:");
// console.log(primeNumbers);

// 5. Viết chương trình tính tổng từ 1 đến n?

// let n = 10;
// let sum = 0;
// for (let index = 1; index <= n; index++)  {
//         sum = sum + index;
//     }
// console.log("Tổng các số từ 1 đến n là:");
// console.log(sum);

// 6. Viết chương trình tính tổng bình phương của các số từ 1 đến n?

// let n = 3;
// let sum = 0;
// for (let index = 1; index <= n; index++)  {
//         sum = sum + index * index;
//     }
// console.log("Tổng bình phương các số từ 1 đến n là:");
// console.log(sum);

// 7. Tính tổng các số lẻ trong khoảng 1 đến n?

// let n = 5;
// let sum = 0;
// for(let index = 1; index <= n; index++){
//     if (index % 2 != 0){
//         sum = sum + index;
//     }
// }
// console.log("Tổng các số lẻ trong khoảng từ 1 đến n là:");
// console.log(sum);

// 8. Kiểm tra số n có toàn số lẻ tạo thành hay không?

// let n = 1235;
// let m = 0;
// let result = "";
// console.log("Số n là số có toàn số lẻ tạo thành hay không");
// while (n > 0) {
//     m = m * 10 + n % 10;
//     n = Math.floor(n / 10);
//     if (m % 2 == 0) {
//         result = "NO"
//         break;
//     } 
//     else {
//         result = "YES"
//     }
// }
// console.log(result);

// 9. Kiểm tra n có phải là số đối xứng?

// let n = 1242343;
// let m = 0;
// let s = n;
// let result ="";
// console.log("Số n có phải số đối xứng không");
// while (n > 0) {
//     m = m * 10 + n % 10;
//     n = Math.floor(n / 10);
// }
// if (m == s) {
//     result = "YES";
// }
// else {
//     result = "NO";
// }
// console.log(result);

// 10. In bảng cửu chương ra màn hình?

// console.log("BẢNG CỬU CHƯƠNG");
// for (let i = 2; i <= 9; i++) {
//     for( let j = 1; j <= 9; j++) {    
//         console.log( i+" x",j,"= "+i*j);
//     }
//     console.log("=====================");
// }

