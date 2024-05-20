import express from "express"

import { getBooks, createBook, updateBook, getBookById, deleteBook } from "../controllers/books_controllers.js";

const router = express.Router();

router.route('/')
    .get(getBooks)
    .post(createBook)

router.route('/:id')
    .get(getBookById)
    .patch(updateBook)
    .delete(deleteBook)

export default router