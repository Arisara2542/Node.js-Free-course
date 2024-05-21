// run main application
const express = require('express')
// debug แบบrealtime ใน console ด้านนอก
const debug = require('debug')('app')
const morgan = require('morgan')
const app = express()
const port = 3000

// middle ware Middleware คือ software computer ที่คอยช่วยเหลือดูแล application ที่รันอยู่บน OS หรือจะเรียกว่าตัวเชื่อมระหว่าง APP และ OS ก็ได้ ซึงมันช่วยให้ developer สามารถเชื่อมต่อสื่อสารกับภายนอกได้ง่ายขึ้น ทำให้ลดภาระในการดูแลรายละเอียดรอบข้างและเน้นแต่งานหลักที่ต้องการได้
app.use(morgan('combined'))


app.get("/" , (req , res) =>{
    res.send("Hello Jaa")
})

app.listen(port ,async() =>{
    // chalk ใส่สี
    const chalk = await import('chalk')
    debug("Listening on port : " + chalk.default.green(port))
})