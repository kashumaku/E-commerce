
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const productRouter = require('./router/productrouter');
const cartRouter = require('./router/cartrouter');
const userRouter = require('./router/userroute');
const adminRouter = require('./router/adminrouter');
const app = express();
mongoose.connect(process.env.MONGODB).then(() => console.log("Database connection established"))
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static("upload"))
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)



app.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}`))
