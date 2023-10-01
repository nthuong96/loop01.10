// // luyện tập vòng lặp 1 *
// bai tập 1 da lam duoc
// for(let i = 1; i <100; i++) {
//     document.write(i+"<br>")
// } alert ("hoan thanh")

// bai tập 2 da lam duoc
// let x= +prompt("nhap vao nhiet do")
// if(x >=100){alert("yeu cau giam nhiet do")}
// else if(x <=20){alert("yeu cau tang nhiet do")}
// else{alert("nhiet do dung")}

// bai tap 3,4,5 day fibonacci
// let i = [0, 1,];
// for (let a = 0; a <= 17; a++) {
//     i[a + 2] = i[a] + i[a + 1]
//     document.write(i[a + 2] + "<br>")
// }
// for (let x = 1; x <= 19; x++) {
//     if (i[x] % 5 == 0) {
//         alert(x)
//         break
//     }
// }
// let T = 0;
// for (let y = 0; y < 19; y++) {
//     T += i[y]
// }
// alert(T)

//bai tap 6 da lam duoc
// let T=0;
// for (let i=0; i<7; i++) {
//     T+=(i*7)
// } alert(T)

// bai tap 7 da lam duoc
// for (let i=1;i<=100;i++){
//     if(i%3==0){if(i%5==0){
//         document.write('fizz buzz'+"<br>")}
//         else{
//             document.write('fizz'+"<br>")}
// } else if(i%5==0){document.write('buzz' +"<br>")}
//     else{document.write(i +"<br>")}}

// bai tâp 8 game doan so da lam duoc
// function start() {
//     let x = +prompt("nhap vao khoang so muon doan")
//     if (x <= 0) {
//         alert("hay nhap so duong")
//     } else {
//         let i = Math.ceil(Math.random() * (x++));
//         console.log(i)
//         for (let a = 1; a <= 3; a++) {
//             let guess = +prompt("nhap vao so ban doan")
//             if (guess == i) {
//                 alert("thanh cong")
//                 break
//             } else if
//             (guess > i) {
//                 alert("ban doan lon hon roi")
//             } else if (guess < i) {
//                 alert("ban doan nho hon roi")
//             }
//         }
//         alert("ban da het luot choi")
//     }
// }
// // luyện tập vòng lặp 2 *
// bai tap 1 da lam duoc
// let x=+prompt("nhap vao tong so fibonaxi can in")
// let i=[0,1,];
// if(x<=0) {alert("hay nhap so duong")}
// else {
// for(let a=0;a<x;a++){
//     i[a+2]=i[a]+i[a+1]
//     document.write(i[a+2]+"<br>")
// }
// }

//bai tap 2 da lam duoc
// let x=+prompt("nhap vao x")
// if(x<=0) {alert("hay nhap so duong")}
// else {let T=1;
//     for(let a=1;a<=x;a++) {
//         T=T*a
//     } document.write(T)
// }

// bai tap 5 da lam duoc

// let interest=+prompt("nhap vao lai suat")
// let money=+prompt("nhap vao so tien ban dau")
// let month=+prompt("nhap vao so thang")
// for(let i=0;i<=month;i++) {
//     money+=money*interest}
//     document.write(money+"<br>")


//bai tạp thực hành sử dụng vòng lặp for:
// bài 1:
// for(let i=0; i<=5; i++) {
//     document.write("The number is "+ i+"<br>")
// }


///bai tap 2:
// let x=+prompt("nhap vao x")
// if(x<=0) {alert("hay nhap so duong")}
// else {let T=0;
//     for(let a=1;a<=x;a++) {T+=a}
//
//      document.write(T)}

//bai tạp thực hành sử dụng vòng lặp while:
// bài tập 1:
// let x=+prompt("nhap vao x")
// let T=0;
// while(x!=-1) {
//     T+=x
//     x=+prompt("nhap vao x")
//    }
//    document.write(T)

// //bai tap 2:
// let i = 1;
// while (i < 100) {
//     document.write("<hr width = '" + i + "px'>")
//     i++
// }
//
// bafi tập thực hành sử dụng vòng lặp do while:
// let x;
// do {x= +prompt("nhap vao x")}
//     while (x<10 || x>0) { alert("gia tri ban vưa nhap la "+x )
// }


// bai tạp thực hành vòng lặp lồng nhau:
// bai tạp 1: hiển thị bảng cửa chương


// let html=""
// for (let x  =1; x < 10; x++) {
//     html += "<tr>"
//
//     for(let y=2; y < 10; y++) {
//         html += "<td>";
//         html += x+ "x" + y + "=" + x*y
//
//         html +="</td>";
//     }
//     html += "</tr>"
//
// } document.getElementById("main").innerHTML = html
//

//
// // bai tạp 2: hiển thị day số nguyên tố
// let z = 2;
// for (let x = 3; x <= 1000; x++) {
//
//     let t = x % z
//     for (z = 2; z <= x; z++) {
//         if (t == 0) continue; else {
//             document.write(x)
//         }
//     }


// in ra các số nguyên tố theo số lượng ban đầu:

// let m = +prompt("Nhap so luong so nguyen to can in ra")
// let n = 2;
// let count = 0;
// while (count < m) {
//     let check = true
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             check = false;
//             break
//         }
//     }
//     if (check) {
//         document.write(n + "  ")
//         count++;
//     }
//     n++
// }

// nhap vào a,b . In ra số chính phương trong a-b DA LAM ĐƯỢC
// let a= +prompt("nhap vao a")
// let b= +prompt("nhap vao b")
// if (a>=0&&b>=0) {if (a<b) {
//     let i = 1;
//     let x = 1;
//     for (i = a; i <= b; i++) {
//         for (x = 1; x <= b; x++) {
//             if (i == (x * x)) {
//                 document.write(i + " là số chính phương")
//                 break
//             }
//         }
//
//     }
// } else {let i = 1;
//     let x = 1;
//     for (i = a; i <= b; i++) {
//         for (x = 1; x <= b; x++) {
//             if (i == (x * x)) {
//                 document.write(i + " là số chính phương")
//                 break
//             }
//         }
//
//     }}}
// else {alert("HAY NHAP VAO 2 SỐ DƯƠNG")}

// // NHAP VAO A,B VA TINH TONG CÁC SỐ TỪ A ĐẾN B
// let a= +prompt("nhập vào a")
// let b= +prompt("nhập vào b")
// let T=0
// if (a%1==0&&b%1==0&&a<=b) {
//
//     for (let i = a; i <= b; i++) {
//         T += i
//     }
//     document.write(T)
// } else if (a%1==0&&b%1==0&&a>b) {
//
//     for (let i = b; i <= a; i++) {
//         T += i
//     }
//     document.write(T)
// } else (alert("nhap vao so nguyen"))

// tính tổng số chẵn từ a đến b
// let a= +prompt("nhap vao a")
// let b= +prompt("nhap vao b")
// let T=0;
// for (let i=a; i<=b; i++) {if (i%2==0) {T+=i}
// } document.write(T)

// - Nhập 2 số nguyên x và y. Viết chương trình tính tổng bình phương các số từ x đến y.
// let x= +prompt("nhap vao x")
// let y= +prompt("nhap vao y")
// let T=0;
// for (let i=x; i<=y;i++){
//     T+=i*i
// } document.write(T)



// Nhập vào n. Tính S = 1.2 + 2.3 + 3.4 + ... + n(n+1).
//
// let n=+prompt("nhập vào n")
// let T=0
// for(let i=1; i<=n; i++){T+=i*(i+1)}
// document.write(T)

//nhập vào n tính tổng S = ½ + ¾ + 5/6 + … + 2n + 1/ 2n + 2
// let n=+prompt("nhập vào n");
// let S=0
// for(let i=0; i<=n; i++){
//     S+=(2*i+1)/(2*i+2)
// } document.write(S)

//Nhập vào n. Tính
// S = 100 +1/3 + 1/2 + 3/5 + … + n*(n + 1)/ (n+1)*(n + 2);
// let n=+prompt("nhập vào n");
// let S=100
// for(let i=0; i<=n; i++){
//     S+=i/(i+2)
// } document.write(S)

// - Cho 2 số nguyên dương a và b. Hãy tìm ước chung lớn nhất của 2 số này.
// - Cho 2 số nguyên dương a và b. Hãy tìm bội chung nhỏ nhất của 2 số này
// let a= +prompt("nhap vao a")
// let b= +prompt("nhap vao b")
// let check = false;
// for(let i=a; i<2; i--){
//     if(a%i==0 && b%i== 0) {check = true;
//         document.write(i+" là ước chung ln nhất của 2 số")
//                break}
//
// } if(check){ document.write("2 số có ước chung")}
// else{document.write("2 số không có ước chung")}

// for(let i=a; i<=b*a; i++){
//     if(i%a==0 && i%b==0) {document.write(i+ " là bội chung nhỏ nhất của a và b");
//         break}
// }

//Liệt kê các ước số nguyên dương của a
// Liệt kê các bội số nhỏ hơn 100 của a
// let a = +prompt("nhap vao a")
// for(let i = 1; i <a; i++) {
//     if(a%i==0){document.write(i + " la uoc cua a" + "<br>")}
// }
// for(let i = 1;i<=100; i++){
//     if (i%a==0){document.write(i + " la boi cua a <br>")}
// }



// Tìm ước số nguyên lẻ lớn nhất của a
// Liệt kê bội chẵn nhỏ nhất của a
// let a = +prompt("nhap vao a")
// let check= false
// for(let i = (a-1); i <1; i--) {
//     if(a%i==0 && i%2!=0){check = true
//         document.write(i + " la uoc so nguyen le lon nhat cua a" + "<br>")
//     break}
// }
// if(check){document.write(" ")}
// else{document.write(a + " khong co uoc là so le ")}
// for(let i = 1;i<=2; i++){
//     if (i%a==0){document.write(i + " la boi chan nho nhat cua a <br>")
//     break}
// }
//
// /Bạn được cho 2 số nguyên N và S. Nhiệm vụ của bạn là đếm số bộ 3 X, Y, Z , (0<=x,y,z<=n)
// thỏa mãn x+y+z=S
// let n=+prompt("nhập vao n")
// let s=+prompt("nhap vao s")
// let a=0
// let b=0;
// if(n*3<s){alert("không tồn tại cặp 3 số cần tìm")}
// else {
//     for (let a = 0; a < n ; a++) {
//         for (let b = 0; b < n ; b++) {
//             for(let c=0; c<n; c++){if (a + b+c==s) {document.write( a+" và"+b+" và"+c+" là cặp số cần tìm <br>")}}}
//     }
// }



//Cần có tổng 20000 đồng từ 3 loại giấy bạc 1000 đồng, 2000 đồng, 5000 đồng.
// Lập chương trình để tìm ra tất cả các phương án có thể
//  let number5=0;
// let number1=0
// let number2=0
// for (number5=1; number5*5000<=20000; number5++){
//     for(number2=1; number2*2000<=20000;number2++){
//         for(number1=1; number1*1000<=20000; number1++){
//             if(number1*1000+number2*2000+number5*5000==20000){
//                 document.write("ta cần" + number1 + " tờ 1000 " + number2 + " tờ 2000 " + number5 + " tờ 5000 <br>")}
//         }
//     }
// }

//"- Cần có tổng 20000 đồng từ 3 loại giấy bạc 1000 đồng, 2000 đồng, 5000 đồng.
// Lập chương trình để tìm ra phương án ít số lượng tiền nhất" sai ở đoạn br
// let number5= 0;
// let number1=0
// let number2=0
// for (number5= 5; number5>0; number5--){
//     for(number2=10; number2>=0;number2--){
//         for(number1=200; number1>=0; number1--){
//             if(number1*1000+number2*2000+number5*5000==20000){
//                 document.write("ta cần ít nhất" + number1 + " tờ 1000 " + number2 + " tờ 2000 " + number5 + " tờ 5000 <br>")}
//             break
//         }
//     }
// }


// Nhập a,b,c (không trùng, khác 0). In ra các số 3 chữ số có thể tạo ra từ a,b,c
// let x=+prompt("nhap vao x")
// let y=+prompt("nhap vao y")
// let z=+prompt("nhap vao z")
// let a=[x,y,z]
// for (let i=0; i<3; i++) {
//     for (let j=0; j<3; j++) {
//         for (let k=0; k<3; k++) {
//             document.write("số"+a[i]+a[j]+a[k]+"<br>")
//         }
//     }
// }

//Nhập a,b,c (không trùng, khác 0). In ra số lượng các số 3 chữ số có thể tạo ra từ a,b,c
// let x=+prompt("nhap vao x")
// let y=+prompt("nhap vao y")
// let z=+prompt("nhap vao z")
// let a=[x,y,z]
// let count=0;
// for (let i=0; i<3; i++) {
//     for (let j=0; j<3; j++) {
//         for (let k=0; k<3; k++) {
//
//             count++;
//         }
//     }
// } document.write("tổng các số 3 chữ số được tạo nên từ 3 số này là "+count)


//Nhập a,b,c (có thể trùng, khác 0). In ra các số 3 chữ số có thể tạo ra từ a,b,c

