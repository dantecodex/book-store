import fs from 'fs'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import Book from '../models/books_model.js'

dotenv.config({ path: '../.env' });

mongoose.connect(process.env.CONN_STR).then((conn) => {
    console.log('DB connection successfull');
    deleteData(importData);


}).catch(err => {
    console.log('Failed to connect with DB');
})

let data = JSON.parse(fs.readFileSync('books.json', 'utf-8'))

const deleteData = async (importData) => {
     Book.deleteMany().then(() => {
        console.log('Data has been deleted Successfully');
        importData();
    }).catch(err => {
        console.log('Failed to delete Data');
    })
}

const importData = async () => {
     Book.create(data).then(() => {
        console.log("Data has been Imported successfully into DB");
    }).catch(err => {
        console.log('Failed to Import data into DB',err);
    })
}



