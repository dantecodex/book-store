import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Book name is required field"],
        unique: true,
        minLength: [3, "Book name is too short"]
    },
    description: {
        type: String,
    },
    author: {
        type: String,
        required: [true, "Author name is required field"],
        minLength: [3, "Author name is too short"]
    },
    release_year: {
        type: Number,
        required: [true, "Release Year is a required field"],
        validate: function (value) {
            return value.toString().length == 4
        },
        message: "Release year must me in Year format which is 4 digit"
    },
    genres: {
        type: [String],
        required: [true, "Genre is a required field"]
    },
    ratings: {
        type: Number,
        validate: {
            validator: function (value) {
                return value > 1 && value < 5
            },
            message: "Ratings {{VALUE}} must be between 1 to 5"
        }
    },
    price: {
        type: Number
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    }
}, { timestamps: true })

bookSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } })
    next()
})

const Book = mongoose.model("Book", bookSchema)

export default Book