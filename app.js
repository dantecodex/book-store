import express from "express"

import booksRouter from "./router/books_router.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";

const app = express();
app.use(express.json())


app.use('/api/books', booksRouter)


app.all('*', (req, res) => {
    res.status(404).json({
        status: "Falied",
        message: `Invalid ${req.originalUrl} URL on the server`
    })
})


app.use(globalErrorHandler)

export default app