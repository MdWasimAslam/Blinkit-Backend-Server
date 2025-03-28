# Blinkit App - Node.js Server

## Project Setup

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.
- Install [MongoDB](https://www.mongodb.com/) or use a cloud-based MongoDB service.

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd blinkit-app-server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Server
To start the project, run:
```sh
npm start
```
This will launch the server using the configurations set in `app.js`.

## Database Seeding
We use `seedData` as sample data for MongoDB. To upload the initial data, run the seed script:
```sh
node seedScript.js
```

## Project Structure
The project follows a modular structure with the following main folders:

- `app.js` - The main entry point connecting all modules together.
- `routes/` - Defines the API endpoints.
- `controllers/` - Handles the business logic for each endpoint.
- `middlewares/` - Contains middleware functions for authentication, etc.
- `config/` - Stores configuration files for database connections and other settings.
- `config/setup.js` - Provides an easy data management interface using AdminJS UI.

## Technologies Used
- Node.js
- Fastify
- MongoDB
- Mongoose
- AdminJS
- Jwt

## Contributions
Feel free to contribute by creating a pull request or reporting issues.


