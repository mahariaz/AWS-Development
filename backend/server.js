import  express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
dotenv.config()
connectDB()
const app = express()



app.get('/',(req,res)=>{
    res.send('API is running..b.')
})
app.use('/api/products',productRoutes)
const PORT=process.env.PORT || 5001
app.listen(
    PORT,
    console.log(`running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
)