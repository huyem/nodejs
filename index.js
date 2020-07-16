// const express = require("express");
// const app = express();
//
// app.listen(5000,function () {
//     console.log("server is running...");
//
// });
// app.use(express.static("public"));
// app.set("view engine","ejs");// su dung ejs\bao ungg dung se dung view thanh ejs
// var counter = 0;
// app.get("/",function (req,res) {
//     counter++;
//     let city= req.query.cityname;
//     res.render("lab13",{
//         count: counter,
//         city:city,
//     });
//  // day la cach gui bien tu logic sang  views ejs
//
// });


// //tao cac bo dinh tuye
//
// var counter = 0;//la nhap bien cho no
// app.get("/",function (req,res) {
//     counter ++;
//   //day la ham su li cong viec viec khi nguoi dung di vao, ham get nay thi mac dinh co phuong thuc la get
//   res.send("xin chao vao nha cua huy.... ban la nguoi thu :"+counter);
//
// });
// app.get("/about-us",function (req,res) {
//     //day la ham su li cong viec viec khi nguoi dung di vao
//     res.send("gioi thieu nha huy");
//     // res co nghia la giu phan hoi cho nguoi dung
// });
// app.get("/",function (req,res) {
//     res.sendFile(__dirname+"/views/lab13.ejs");
// });
// const express = require("express")
// const app = express();
//
// app.listen(5000,function () {
//     console.log("server is running...");
// });
// app.use(express.static("public"));
// //sử dung ejs lam view engine
// app.set("view engine","ejs");
// var counter = 0;
// // app.get("/",function (req,res) {
// //     counter++;
// //     res.send("Xin chao, da vao den nha, ban la nguoi vao thu: "+ counter);
// // });
// // app.get("/",function (req,res) {
// //     counter++;
// //     res.sendFile(__dirname+"/views/home.ejs");
// // });
//
// app.get("/",function (req,res) {
//     counter++;
//     // res.sendFile(__dirname+"/views/home.ejs");
//     let city = req.query.cityname;
//     if(city === undefined){
//         city = "Hanoi,vietnam";
//     }
//     res.render("home",{
//         counter: counter,
//         city:city
//     });
//
// });
//
// app.get("/about-us",function (req,res) {  //req: tiep nhan yeu cau
//     res.send("Gioi thieu ve chung toi");
// });
// var cities = [
//     {
//         id: 1,
//         name: "hanoi",
//         label: "Ha Noi",
//         nd:"Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp. Trung tâm thành phố là Khu phố cổ nhộn nhịp, nơi các con phố hẹp được mang tên \"hàng\". Có rất nhiều ngôi đền nhỏ, bao gồm Bạch Mã, tôn vinh một con ngựa huyền thoại, cùng với chợ Đồng Xuân, bán hàng gia dụng và thức ăn đường phố.",
//         area: "3434"
//     },
//     {
//         id: 2,
//         name: "haiphong",
//         label: "Hai Phong",
//         nd:"Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp. Trung tâm thành phố là Khu phố cổ nhộn nhịp, nơi các con phố hẹp được mang tên \"hàng\". Có rất nhiều ngôi đền nhỏ, bao gồm Bạch Mã, tôn vinh một con ngựa huyền thoại, cùng với chợ Đồng Xuân, bán hàng gia dụng và thức ăn đường phố.",
//         area: "3434"
//     },
//     {
//         id: 3,
//         name: "cairo",
//         label: "Cairo, Ai Cap",
//         nd:"Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp. Trung tâm thành phố là Khu phố cổ nhộn nhịp, nơi các con phố hẹp được mang tên \"hàng\". Có rất nhiều ngôi đền nhỏ, bao gồm Bạch Mã, tôn vinh một con ngựa huyền thoại, cùng với chợ Đồng Xuân, bán hàng gia dụng và thức ăn đường phố.",
//         area: "233464"
//     },
//     {
//         id: 4,
//         name: "london",
//         label: "Luan dob, Anh",
//         nd:"Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp. Trung tâm thành phố là Khu phố cổ nhộn nhịp, nơi các con phố hẹp được mang tên \"hàng\". Có rất nhiều ngôi đền nhỏ, bao gồm Bạch Mã, tôn vinh một con ngựa huyền thoại, cùng với chợ Đồng Xuân, bán hàng gia dụng và thức ăn đường phố.",
//         area: "23784km"
//     },
//     {
//         id: 5,
//         name: "new york",
//         label: "New york, My",
//         nd:"Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp. Trung tâm thành phố là Khu phố cổ nhộn nhịp, nơi các con phố hẹp được mang tên \"hàng\". Có rất nhiều ngôi đền nhỏ, bao gồm Bạch Mã, tôn vinh một con ngựa huyền thoại, cùng với chợ Đồng Xuân, bán hàng gia dụng và thức ăn đường phố.",
//         area:"5000km"
//
//     },
//
// ];
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
//co nghia la neu kog co bieen nao khac thi c=van chajy qua cong 5000
app.listen(PORT,function () {
    console.log("server is running...");
});
app.use(express.static("public"));
// sử dụng ejs làm view engine
app.set("view engine","ejs");

var counter = 0;
app.get("/",function (req,res) {
    counter++;
    let city = req.query.cityname;
    if(city === undefined){
        city = "Hanoi,vietnam";
    }
    res.render("home",{
        counter: counter,
        city:city
    });
});

app.get("/about-us",function (req,res) {
    res.send("Gioi thieu ve chung toi");
});
const fs = require("fs");
app.get("/danh-sach-thanh-pho",function (req,res) {
    let data = fs.readFileSync("data/data.json","utf-8");
    let cities = JSON.parse(data);
    res.render("cities",{
        cities:cities
    })
});

app.get("/thanh-pho/:id",function (req,res) {
    let cityId = req.params.id;
    let city = {};
    let data = fs.readFileSync("data/data.json","utf-8");
    let cities = JSON.parse(data);
    cities.map(function (e) {
        if(e.id == cityId){
            city = e;
        }
    });
    res.render("city",{
        city:city
    });
});

app.get("/api/messages",function (req,res) {
    let data=[
        {
            msg:"xin chao",
            name:"luna"
        },
        {
            msg:"m di choi kog",
            name:"luna"
        }
    ];
    let rs = {
      status: true,
      message:"success",
      data: data
    };
    res.send(rs);
    // day la lam api va api chi su dung trong noi bo trang
});