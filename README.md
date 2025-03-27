# Node.js Backend API Boilerplate (TypeScript)

A modern and scalable boilerplate for building RESTful APIs using **Node.js**, **TypeScript**, **Fastify**, **Prisma ORM**, and **PostgreSQL**, with automatic API documentation generated via **Swagger**.

This project is designed to accelerate the development of robust backend.

## Features

- **TypeScript**: Static typing for enhanced safety and productivity.
- **Fastify**: Lightweight and high-performance framework for API development.
- **Prisma ORM**: Simplified integration with PostgreSQL databases.
- **Swagger**: Automatic API documentation with `@fastify/swagger` and `@fastify/swagger-ui`.
- **Zod**: Schema validation for data inputs.
- **CORS**: Configured support for cross-origin requests.
- **Development Environment**: Auto-reloading with `tsx watch`.
- **Optimized Build**: Efficient compilation with `tsup`.

## Installation

Follow the steps below to set up the project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/nodejs-backend-api-boilerplate-ts.git
    ```
2. **Open project:**
    ```bash
    cd nodejs-backend-api-boilerplate-ts
    ```
3. **Install dependencies:**
    ```bash
    pnpm install
    ```
4. **Set up the .env file: Create a .env file in the project root based on the .env.example template:**
    ```bash
    DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
    
    PORT=3000
    ```
5. **Initialize the database: Run Prisma migrations to set up PostgreSQL:**
    ```bash
    npx prisma migrate dev --name init
    ```

## How to Use and Access the API

### Starting the Server

1. **Development Mode: Use the dev script to start the server with auto-reloading:**
    ```bash
    pnpm run dev
    ```
    The server will be available at `http://localhost:8080` (or the port defined in .env).

2. **Production Mode: Build the project and start the server:**
    ```bash
    pnpm run build
    ```

3. **Accessing the API:**
    - **Base Endpoint:** `http://localhost:8080/`

    - **Swagger Documentation:** Access the interactive API interface at: `http://localhost:8080/docs`

    **PS:** The documentation is automatically generated and details all configured endpoints.

4. **Example Request**
    To test the API, you can use tools like curl, Postman, or the Swagger UI.

    Example with curl:
    ```bash
    curl -X GET http://localhost:3000/health
    ```
    Assuming a `/health` endpoint is configured as a status check.

## Project Structure
```bash
├── prisma/
│   └── schema.prisma      # Database schema definition
├── src/                   # Source folder
├──── routes/              # API route definitions
├──── utils/               # Utilities for API
│     └── prisma.ts        # File that exports prisma client
│   ├── env.ts             # Environment schema with Zod
│   ├── server.ts          # Application entry point
├── .env                   # Environment variables
├── .gitignore             # Git configuration for igonre files and folders
├── biome.json             # Biome configuration
├── LICENSE.txt            # License for the project
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
├── tsconfig.json          # TypeScript configuration
└── tsup.config.ts         # Tsup configuration
```

## Dependencies

**Production Dependencies**

- `@fastify/cors`: Enables CORS support.
- `@fastify/swagger`: Swagger documentation generation.
- `@fastify/swagger-ui`: Graphical interface for Swagger.
- `@prisma/client`: Prisma client for database interaction.
- `fastify`: Core framework for the API.
- `fastify-type-provider-zod`: Integration between Fastify and Zod.
- `zod`: Schema validation library.

**Development Dependencies**

- `@biomejs/biome`: Linting and formatting tool.
- `@types/node`: Type definitions for Node.js.
- `prisma`: Prisma CLI for migrations and schema generation.
- `tsup`: TypeScript build tool.
- `tsx`: TypeScript execution for development.
- `typescript`: TypeScript compiler.

### How to Contribute

Fork the repository: Click the `"Fork"` button on GitHub.

**Clone your fork locally:**
    ```bash
    git clone https://github.com/your-username/nodejs-backend-api-boilerplate-ts.git
    ```

**Create a feature branch:**
    ```bash
    git checkout -b feature/new-feature
    ```

**Commit your changes:**
    ```bash
    git commit -m "Add new feature"
    ```
    
**Push to the remote repository:**
    ```bash
    git push origin feature/new-feature
    ```
    
**Open a Pull Request:**
    On GitHub, create a PR describing your changes.

## License
This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.