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
// isPaindrome();

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

// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?

function bai11(){
    let name = "Hello  world";
    let dem = 0;
    for(let index = 0; index < name.length; index++)
    {
        if(name[index] == " ")
        {
           dem++;
        }
    }
    console.log("Có "+ dem +" khoảng trắng trong chuỗi. ");
}
// bai11();

// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi

function bai12(){
    let name = "Hello  world";
    name = name.split(" ").join("");
    console.log("Kết quả sau khi xoá khoảng trắng:", name);
  }
// bai12();

// 13. Hãy viết chương trình đảo ngược

function bai13(){
    let chuoi = "This is a beautiful day";
    chuoi = chuoi.split(" ");
    chuoi = chuoi.reverse();
    for(let index = 0; index < chuoi.length; index++)
    {
        chuoi[index] = chuoi[index].split("");
        chuoi[index] = chuoi[index].reverse();
        chuoi[index] = chuoi[index].join("");
    }
    chuoi = chuoi.join(" ");
    console.log("Chuỗi đảo ngược:");
    console.log(chuoi);
}
// bai13();

// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.

function bai14(){
    var s1 = "This is a beautiful day";
    var s2 = "is";
    s1 = s1.split(" ");
    s2 = s2.split(" ");
    var x;
    for(let index = 0; index < s1.length; index++)
    {
        if(s1[index] == s2[0])
        {
          x = index;
        }
    }
    if(x > 0)
    {
      console.log("Vị trí của s2 trong s1: " + (x + 1));
    }
    else{
      console.log("Chuỗi s2 không có trong s1");
    }
}
// bai14();

// 15. Viết chương trình chuẩn hóa họ tên.

function bai15(){
    var name = "NguyeN THI tho tHu hA";
    name = name.toLowerCase();
    name = name.split("");
    for(let index = 0; index < name.length; index++)
    {
       if(index == 0)
       {
        name[index] = name[index].toUpperCase();
       }
       if(name[index] == " ")
       {
        name[index + 1] = name[index + 1].toUpperCase();
       }
    }
    name = name.join("");
    console.log(name);
}
// bai15();

// 16. Viết chương trình lấy  id name của fb.

// function bai16(){
//     let chuoi1 = "https://www.facebook.com/ngothucdat";
//     chuoi1 = chuoi1.split("");
//     let chuoi2 = "";
//     for(let index = chuoi1.length - 1; index >= 0; index--)
//     {
//        if(chuoi1[index] == '/')
//        {
//         chuoi2 += chuoi1.slice(index + 1, chuoi1).join("");
//          break;
//        }
//     }
//     console.log("Idname của link FB:");
//     console.log(chuoi2);
// }
function bai16(){
    var link = "https://www.facebook.com/ngothucdat";
    link = link.split("");
    var idName = "";
    for(let index = link.length - 1; index >= 0; index--)
    {
       if(link[index] == '/')
       {
        idName += link.slice(index + 1, link.length).join("");
         break;
       }
    }
    console.log("Id của link Fb:");
    console.log(idName);
  }
bai16();

// 17.  Viết hàm số tính min, max của 3 số?

// 18. 18. Viết hàm tìm vị trí xâu X tồn tại kề cuối trong xâu Y?