# **E-commerce Frontend**

A React-based frontend for an e-commerce website, providing a user-friendly interface to browse products, add them to the cart, and complete purchases. It interacts with a backend API that handles authentication, file uploads, and secure data management.

---

## **Table of Contents**

1. [Features](#features)
2. [Tech Stack & Libraries](#tech-stack--libraries)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [Available Scripts](#available-scripts)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)

---

## **Features**

* Browse all products with real-time data from backend API
* Add/remove products to/from cart
* Persistent cart for logged-in users
* Dynamic calculation of total cart items and amount
* User authentication and session management
* File upload support (for product images in admin)
* Secure password storage and verification

---

## **Tech Stack & Libraries**

### **Frontend**

* **React.js** – UI framework
* **React Context API (`ShopContext`)** – Global state management
* **Fetch API / Axios** – HTTP requests to backend
* **React Router** – Routing
* **CSS / Tailwind** – Styling

### **Backend Integrations** (used by frontend)

* **bcrypt** – Password hashing
* **jsonwebtoken (JWT)** – Authentication tokens
* **Multer** – File uploads for images
* **MongoDB / Mongoose** – Database for products, users, and carts
* **Express.js** – REST API

---

## **Project Structure**

```
frontend/
├── public/                 # Public assets
├── src/
│   ├── components/         # UI components
│   ├── Context/            # ShopContext provider
│   ├── pages/              # React pages (Home, Product, Cart, etc.)
│   ├── App.js              # Main React component
│   └── index.js            # App entry point
├── .env                    # Environment variables (not pushed)
├── package.json
└── README.md
```

---

## **Getting Started**

### **Prerequisites**

* Node.js (v18+ recommended)
* npm (v9+)
* Backend API running with all dependencies installed

### **Clone the Repository**

```bash
git clone https://github.com/Andred17/Ecom-frontend.git
cd ecommerce-frontend
```

### **Install Dependencies**

```bash
npm install
```

### **Set Environment Variables**

Create a `.env` file in the root directory:

```
REACT_APP_API_URL=http://localhost:4000
```

> Replace with your production backend API when deployed.

### **Run Locally**

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

---

## **Available Scripts**

* **`npm start`** – Runs the app in development mode
* **`npm run build`** – Builds the app for production
* **`npm test`** – Runs tests (if implemented)

---

## **Deployment**

1. Run `npm run build` to create a production-ready build.
2. Serve the `build` folder using:

   * **Vercel / Netlify** (recommended for React)
   * Or serve via backend using `express.static()`
3. Update `.env` with the production backend URL.

---

## **Contributing**

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes and commit (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a Pull Request

---

## **License**

MIT License

---

\