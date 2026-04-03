# 📚 Book Library API

A comprehensive RESTful API for managing a library system with book borrowing, user management, and access control. Built with Node.js, Express, and MongoDB.

## ✨ Features

- **User Authentication** - Secure registration and login with JWT tokens
- **Book Management** - Create, read, and manage books in the library
- **Book Borrowing System** - Track book borrowing and returns with student and attendant records
- **Author Management** - Manage book authors
- **Student Management** - Handle student information and borrowing history
- **Attendant Management** - Manage library attendants who issue books
- **Search & Pagination** - Advanced search with pagination support
- **Password Hashing** - Secure password storage with bcrypt

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcrypt (v6.0.0)
- **Environment**: dotenv
- **Development**: nodemon

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (local or cloud)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Book-LibraryAPI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/library
   JWT_SECRET=your_jwt_secret_key_here
   PORT=3000
   ```

4. **Start the server**

   **Development mode** (with hot-reload):
   ```bash
   npm run dev
   ```

   **Production mode**:
   ```bash
   npm start
   ```

The server will run on `http://localhost:3000`

## 📌 API Routes

### Authentication Routes (`/auth`)
- `POST /auth/register` - Register a new user
  - Body: `{ email, password }`
  
- `POST /auth/login` - Login user
  - Body: `{ email, password }`
  - Response: `{ token }`

### Book Routes (`/book`)
- `POST /book` - Create a new book
- `GET /book` - Get all books with pagination and search
  - Query: `?page=1&search=keyword`
  
- `GET /book/:id` - Get a specific book by ID
- `POST /book/:id/borrow` - Borrow a book
  - Body: `{ studentId, attendantId, returnDate }`
  
- `POST /book/:id/return` - Return a borrowed book

### Author Routes (`/author`)
- `GET /author` - Get all authors
- `POST /author` - Create a new author
- `GET /author/:id` - Get a specific author
- `PUT /author/:id` - Update an author
- `DELETE /author/:id` - Delete an author

### Student Routes (`/student`)
- `GET /student` - Get all students
- `POST /student` - Create a new student
- `GET /student/:id` - Get a specific student
- `PUT /student/:id` - Update a student
- `DELETE /student/:id` - Delete a student

### Attendant Routes (`/attendant`)
- `GET /attendant` - Get all attendants
- `POST /attendant` - Create a new attendant
- `GET /attendant/:id` - Get a specific attendant
- `PUT /attendant/:id` - Update an attendant
- `DELETE /attendant/:id` - Delete an attendant

## 📊 Database Models

### User
```javascript
{
  email: String (required, unique),
  password: String (required, hashed)
}
```

### Book
```javascript
{
  title: String (required),
  isbn: String (required, unique),
  authors: ObjectId (reference to Author),
  status: String (enum: "available", "borrowed"),
  borrowedBy: ObjectId (reference to Student),
  issuedBy: ObjectId (reference to Attendant),
  returnDate: Date,
  createdAt: Date,
  timestamps: true
}
```

### Author
```javascript
{
  name: String,
  bio: String,
  createdAt: Date
}
```

### Student
```javascript
{
  name: String,
  email: String,
  rollNumber: String,
  borrowedBooks: [ObjectId],
  createdAt: Date
}
```

### Attendant
```javascript
{
  name: String,
  email: String,
  employeeId: String,
  createdAt: Date
}
```

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Passwords are hashed using bcrypt with 10 salt rounds
- **Environment Variables** - Sensitive data stored in `.env` file
- **Input Validation** - Request validation through Express middleware

## 🧪 Testing

Run tests:
```bash
npm test
```

## 📁 Project Structure

```
Book-LibraryAPI/
├── config/
│   └── endpoints.js
├── controllers/
│   ├── authController.js
│   └── bookController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── Attendant.js
│   ├── Author.js
│   ├── Book.js
│   ├── Student.js
│   └── User.js
├── routes/
│   ├── attendantRoutes.js
│   ├── authorRoutes.js
│   ├── authRoutes.js
│   ├── bookRoutes.js
│   └── studentRoutes.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🛣️ Typical Workflow

1. **Register User**
   ```bash
   POST /auth/register
   { "email": "user@example.com", "password": "password123" }
   ```

2. **Login**
   ```bash
   POST /auth/login
   { "email": "user@example.com", "password": "password123" }
   ```

3. **Create a Book**
   ```bash
   POST /book
   { "title": "The Great Gatsby", "isbn": "978-0-7432-7356-5", "authors": "authorId" }
   ```

4. **Borrow a Book**
   ```bash
   POST /book/:id/borrow
   { "studentId": "studentId", "attendantId": "attendantId", "returnDate": "2024-04-15" }
   ```

5. **Return a Book**
   ```bash
   POST /book/:id/return
   ```

## 🐛 Error Handling

Common error responses:
- `400 Bad Request` - Invalid input or book already borrowed
- `401 Unauthorized` - Missing or invalid JWT token
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

## 🚀 Future Enhancements

- [ ] Fine calculation for late returns
- [ ] Email notifications for reminders
- [ ] Book reservations system
- [ ] Admin dashboard
- [ ] API documentation with Swagger
- [ ] Rate limiting
- [ ] Request logging
- [ ] Unit and integration tests

## 📝 License

ISC License

## 👤 Author

Mustapha Odebiyi

## 🤝 Contributing

Contributions are welcome! Please follow the existing code structure and conventions.

## 💬 Support

For issues or questions, please create an issue in the repository.

---

**Happy coding!** 🎉
