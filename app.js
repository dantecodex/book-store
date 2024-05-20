import express from "express"
import rateLimit from "express-rate-limit";
import helmet from "helmet";

import booksRouter from "./router/books_router.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";

const app = express();
app.use(express.json({limit: '10kb'}))
app.use(helmet())

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "We have received too many requests from this IP. Please try again after one hour"
})

app.use('/', limiter)
app.use('/api/books', booksRouter)


app.all('*', (req, res) => {
    res.status(404).json({
        status: "Falied",
        message: `Invalid ${req.originalUrl} URL on the server`
    })
})


app.use(globalErrorHandler)

export default app