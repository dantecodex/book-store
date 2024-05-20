# Book Store Project

This is a beginner-level Node.js project for managing a book store. The project includes functionalities for CRUD operations on books, database interaction using MongoDB, error handling, and data import/export.

## Connect with Me

Feel free to connect with me on LinkedIn:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/anshulrajput237)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/dantecodex/book-store.git
   ```

2. Navigate to the project directory:
   ```bash
   cd book-store
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```plaintext
     CONN_STR=your-mongodb-connection-string
     PORT=3000
     ```

## Usage

- Start the server:
  ```bash
  npm run dev
  ```

- Access the API endpoints using a tool like Postman or by making HTTP requests from your client application.

### How to Use Controllers and API Features

The project uses controllers to handle different CRUD operations on books. Here's how you can use the controllers and leverage various API features:

1. **Get All Books**:
   - **Endpoint**: `/api/books`
   - **Method**: GET
   - **API Features**:
     - **Sorting**: To sort books, use the `sort` query parameter followed by field names, separated by commas. For example, `/api/books?sort=name,-release_year` sorts books by name in ascending order and release year in descending order.
     - **Filtering**: To filter books, provide filtering criteria as query parameters. Supported comparison operators include `gt` (greater than), `gte` (greater than or equal to), `lt` (less than), and `lte` (less than or equal to). For example, `/api/books?release_year[gte]=2000` filters books with a release year greater than or equal to 2000.
     - **Fields Selection**: To select specific fields for each book, use the `fields` query parameter followed by field names, separated by commas. For example, `/api/books?fields=name,author` returns only the `name` and `author` fields for each book.
     - **Pagination**: To paginate through the list of books, use the `page` and `limit` query parameters. `page` specifies the page number, and `limit` specifies the number of books per page. For example, `/api/books?page=2&limit=10` retrieves the second page of books with 10 books per page.
   - **Response**: Returns a list of all books.

2. **Get Single Book by ID**:
   - **Endpoint**: `/api/books/:id`
   - **Method**: GET
   - **Response**: Returns details of a single book identified by its ID.

3. **Create a New Book**:
   - **Endpoint**: `/api/books`
   - **Method**: POST
   - **Request Body**: Requires JSON data containing book details.
   - **Response**: Returns the created book with status code 201 (Created).

4. **Update an Existing Book**:
   - **Endpoint**: `/api/books/:id`
   - **Method**: PATCH
   - **Request Body**: Requires JSON data containing updated book details.
   - **Response**: Returns the updated book with status code 200 (OK).

5. **Delete a Book**:
   - **Endpoint**: `/api/books/:id`
   - **Method**: DELETE
   - **Response**: Deletes the specified book and returns status code 204 (No Content).


## File Structure

```
book-store/
│
├── app.js                # Main entry point of the Express.js application
├── server.js             # Starts the Express server and connects to MongoDB
├── package.json          # Project metadata and dependencies
│
├── controllers/          # Controller functions for handling CRUD operations
│   ├── books_controllers.js
│
├── models/               # Mongoose models and schemas
│   ├── books_model.js
│
├── router/               # Express router for defining API routes
│   ├── books_router.js
│
├── utils/                # Utility functions and middleware
│   ├── asyncErrorHandler.js
│   ├── customError.js
│   └── globalErrorHandler.js
│
├── files/                # Folder for additional files
│   ├── importData.js     # Script for importing data into MongoDB
│   └── books.json        # JSON file containing book data
│
├── .env.example          # Example .env file with environment variables
└── README.md             # Project documentation
```

## Dependencies

- [Express.js](https://expressjs.com/): Web framework for Node.js
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling tool
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file
- [nodemon](https://nodemon.io/): Utility that monitors changes in your source code and automatically restarts the server

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

