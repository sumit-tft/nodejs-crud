# Node.js CRUD Example with Users Operations

This repository contains a Node.js CRUD application showcasing Users CRUD operations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sumit-tft/nodejs-crud.git
   ```

2. Navigate to the project directory:
   ```bash
   cd nodejs-crud
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the database:
   - Ensure you have MSSQL installed and running on your system.
   - Update the database configuration in `DAL/db.js` if necessary.

5. Start the server:
   ```bash
   npm start
   ```

6. Access the application in your browser at `http://localhost:5000`.

## Usage

The application provides endpoints for CRUD operations on users:

- **Create User:** `POST /users`
- **Read Users:** `GET /users`
- **Read Single User:** `GET /users/:email`
- **Update User:** `PUT /users/:id`
- **Delete User:** `DELETE /users/:id`

## Interactive Demo

To interact with the API, you can use tools like Postman or cURL. Here's a quick demo using cURL:

### Create User

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com"}' http://localhost:5000/users
```

### Read Users

```bash
curl http://localhost:5000/users
```

### Read Single User

Replace `:email` with the Email of the user you want to retrieve.

```bash
curl http://localhost:3000/users/:email
```

### Update User

Replace `:id` with the ID of the user you want to update.

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Name","email":"updated@example.com"}' http://localhost:3000/users/:id
```

### Delete User

Replace `:id` with the ID of the user you want to delete.

```bash
curl -X DELETE http://localhost:3000/users/:id
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
