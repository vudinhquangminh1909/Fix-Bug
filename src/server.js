// File dùng để chạy tới con server của chúng ta.
import express from "express";
import bodyParser from "body-parser";
import viewEngine from"./config (Là nơi ta cấu hình các tham số cái dự án)";
import initWebRoutes from'./route (Nơi chứa các đường link trên server)/web';
require('dotENV').config();
// let dotENV form 
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))

viewEngine(app);
initWebRoutes(app);

let port = process.ENV.PORT || 6969;
app.listen(port, () => {
    console.log("Backend Nodejs is runing on the port: " + port )
})