var x =10;// global var la bien toan cuc t dung o o dau cung ddk

let y=20; // init variable day la kieu khai bao bieen tuong tu bieen dia phuond
const  z=30; //khai bao mot hang so
k=10;//cung la khai bao hang so

// khai bao chuoi
x = "hello world"
console.log(x); //tuong duong vs print cua c
let f= y>10;
let u= false;
if(y>10){
    console.log("ylon hon 10");

}else {
    console.log("y nho hon 10")
}
for(let i=0;i<10;i++){
    console.log("xinchoa" +i);
}
x= "10";//dday la chuoi
y= 20;//day la gt so
x= parseInt(x) //bien chuoi thanh so
console.log(x+y);

k = "13hello5"
k= parseInt(k);
console.log(k)
if(isNaN(k)){//kieu tra k co phai dang so kog
    console.log("kog phai so")

}else {
    console.log(k)
}

let ary = [1,2,3]; //khai bao mang ary
ary[3]= "hello" // neu mon them gt thang thu3
ary[4] = [5,6,"xin chao"]//them gt thu4 cua mAng co th co ca chuoi
ary[4][3]=[3.14,1,"a"]
sayhello()
function sayhello() { //khai bao ham xong den ten ham va kog tra ve j ca
    console.log("hello everybody")

}
function sum(a,b) {// co a va b thi ham co tham so va co gt de tra ve
    return a+b;

}
//cac ham nay co the chay khi goi o bat cu dau khi dk goi tre web
c= sum(1,6);
console.log(c)

//de duyet mang ta co
let arr=[5,1,7,9,14,1];
arr.map(function (e) {//duyen mang kieu goi tung thang mot r de su ly lan luot tu thang dU TIEN DEN  THANG CUOI Cung
    console.log(e)
});
arr.push(77);// cai nay di v cai tren la mot cap ta duyrt cai nay la duyet toa bo so luong

function kiemtrasonguyento(n) {
    if(n<2) return false;
    if (n<=3) return false;
    for (let i=0;i<Math.sqrt9n;i++){
        if(n%i==0) return false;
    }
    return true;
}
for (let i=0;i<1000;i++y){
    if(kiemtrasonguyento(i))
        snt.push(i);

}
for(let i=0;i<snt.length;i++){
    console.log(snt[i]);
}
snt.map(function (e) {// su dug viet ham phai khai bao
    console.log(e);

});
snt.map(e=>{ //thuc thi ham luon,no tuong tu cach ben tren
    console.log(e)
});
