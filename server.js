import mongoose from "mongoose";
import 'dotenv/config'

import app from "./app.js";

mongoose.connect(process.env.CONN_STR).then(() => {
    console.log('DB connection successfull');
}).catch(err => {
    console.log(err.errmsg);
})

app.listen(process.env.PORT || 4000, (req, res) => {
    console.log(`Server has been started on ${process.env.PORT ?? 4000}`);
})