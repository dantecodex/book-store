import Book from "../models/books_model.js";
import customError from "../utils/customError.js";
import asyncErrorHandler from "../utils/asycErrorHandler.js";

const getBooks = asyncErrorHandler(async (req, res) => {
    let { sort, fields, page = 1, limit = 10, ...filters } = req.query;

    let queryStr = JSON.stringify(filters);
    const regex = /\b(gt|gte|lt|lte)\b/g;
    const queryObj = JSON.parse(queryStr.replace(regex, (match) => `$${match}`));

    let booksQueryObj = Book.find(queryObj);

    // Sorting Logic
    if (sort) {
        sort = sort.split(',').join(' ')
        booksQueryObj = booksQueryObj.sort(sort);
    }
    else {
        booksQueryObj = booksQueryObj.sort('-createdAt')
    }

    // Limiting Fields Logic
    if (fields) {
        fields = fields.split(',').join(' ')
        booksQueryObj = booksQueryObj.select(fields)
    }
    else {
        booksQueryObj = booksQueryObj.select('-__v')
    }

    // Pagination
    if (page) {
        const skip = (page - 1) * limit
        booksQueryObj = booksQueryObj.skip(skip).limit(limit)
    }


    const books = await booksQueryObj;
    if (!books.length) {
        throw new customError("Cannot fetch books with the given condition");
    }

    res.status(200).json({
        status: "Success",
        count: books.length,
        data: {
            books
        }
    });
});


const createBook = asyncErrorHandler(async (req, res) => {
    const book = await Book.create(req.body)
    res.status(201).json({
        status: "Success",
        data: {
            book
        }
    })
})

const getBookById = asyncErrorHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)
    if (!book) {
        throw new customError("Cannot find book by the given ID")
    }

    res.status(200).json({
        staus: "Success",
        data: {
            book
        }
    })
})

const updateBook = asyncErrorHandler(async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!updatedBook) {
        throw new customError("Failed to update movie, Please try again", 400)
    }
    res.status(200).json({
        status: "Success",
        data: {
            book: updatedBook
        }
    })
})

const deleteBook = asyncErrorHandler(async (req, res) => {
    // await Book.findByIdAndDelete(req.params.id)
    const deletedBook = await Book.findByIdAndUpdate(req.params.id, { active: false }, { new: true })
    console.log(deletedBook);
    res.status(204).json({
        status: "success",
        data: null
    })
})

export { getBooks, createBook, updateBook, getBookById, deleteBook }