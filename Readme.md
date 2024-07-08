# Microservice

This repository contains three basic microservices that simulate an ordering system. It is developed in Node.js and can run in a Docker container.

### Product Service

- **Dwriting**: Manage orders.
- **Endpoints**:
  - `GET /products`: Returns a list of all orders.
  - `GET /products/:id`: Returns the details of a specific order.

## Project Configuration

### Previous requirements

- Node.js
- Docker

### Installation and Execution

For each microservice, follow these steps:

1. Clone the repository:
      git clone https://github.com/Diego232323A/microservice1.git
2. Go to the folder:
      cd microservice1
3. Install Dependency:
      npm install
4. Build and run the Docker container:
      docker build -t microservice1 
      docker run -d -p 3002:3002 microservice1
5. Run the project:
      node index.js
6. URL:
      http://localhost:3002/orders


