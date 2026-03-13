# Node.js API with Express and Mongoose

A professional and modular RESTful API built with Node.js, Express, and MongoDB.

## Features

- **Authentication**: Secure JWT-based registration and login.
- **Authorization**: Role-based access control (User/Admin).
- **Product Management**: Full CRUD operations for manageable products.
- **Error Handling**: Global middleware for consistent error responses.
- **Input Validation**: Integrated `express-validator` support.
- **Environment Config**: Managed via `.env` files.
- **Docker Ready**: Includes `Dockerfile` for easy containerization.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/sheedrdh/Api-node.js>
   cd Api-node
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (using `.env.example` as a template):
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/api-node
   JWT_SECRET=yoursecretkey123
   NODE_ENV=development
   ```

### Running the App

- **Development mode (with nodemon):**
  ```bash
  npm run dev
  ```
- **Production mode:**
  ```bash
  npm start
  ```

## API Endpoints

### Auth
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| POST | `/api/v1/auth/register` | Register a new user | Public |
| POST | `/api/v1/auth/login` | Login user & get token | Public |
| GET | `/api/v1/auth/me` | Get current user info | Private |

### Products
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| GET | `/api/v1/products` | Get all products | Public |
| GET | `/api/v1/products/:id` | Get single product | Public |
| POST | `/api/v1/products` | Create a product | Private (Admin) |
| PUT | `/api/v1/products/:id` | Update a product | Private (Admin) |
| DELETE | `/api/v1/products/:id` | Delete a product | Private (Admin) |

## Docker

Build and run the container:
```bash
docker build -t node-api .
docker run -p 5000:5000 node-api
```

## Folder Structure

```text
/
├── src/
│   ├── config/         # Database connection
│   ├── models/         # Mongoose schemas
│   ├── controllers/    # Business logic
│   ├── routes/         # API endpoints
│   ├── middlewares/    # Security & Error handling
│   └── app.js          # Entry point
└── ...
```

## License

ISC
