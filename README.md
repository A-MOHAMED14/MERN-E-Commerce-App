# MERN E-Commerce App

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

TechHive is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The app features a responsive user interface, allowing customers to browse products by category, add items to their cart, and securely complete purchases. It includes authentication, cart management with local storage, and Stripe integration for payment processing. The application also provides an admin panel to manage products, categories, and user orders.

## User Story

As a tech enthusiast, I want to browse and purchase various electronic products such as phones, laptops, and accessories from an intuitive and responsive online store. I want a smooth shopping experience that includes adding products to my cart, adjusting quantities, and securely completing my order.

## Acceptance Criteria

- **Product Browsing**: Users can view a list of available products categorized by type (e.g., phones, laptops, monitors).
- **Product Details**: Users can see detailed information about each product, including descriptions, price, and quantity available.
- **Add to Cart**: Users can add products to their shopping cart, update product quantities, or remove items.
  Persistent Cart: The shopping cart data is saved even after refreshing or navigating away from the site.
- **Checkout Process**: Users can proceed to checkout, and complete their purchase securely, receiving a confirmation of their order.
- **Order Success Page**: After a successful purchase, users are shown an order success page and redirected to the home page.
- **Responsive Design**: The application is fully responsive, providing a seamless experience across different devices.
- **Admin Management**: Admins can seed product and category data into the database using a seeding script.

## 🚀 Installation

1. Clone the Repository:

```sh
git clone https://github.com/A-MOHAMED14/MERN-E-Commerce-App.git
```

2. Navigate to the Project Directory:

```sh
cd MERN-E-Commerce-App
```

3. Install dependencies:

```sh
npm install
```

## 🏗️ Usage

To start the application, run the following command:

```sh
npm run dev
```

### Notes

- Use npm run dev for development, which starts the app in development mode with Vite's fast refresh using HMR.
- Use npm run build to create a production build.

## ⚒️ Technologies Used

- **MongoDB**: NoSQL database for storing user, product, and order data.
- **Express.js**: Back-end web framework for handling API requests and routing.
- **React.js**: Front-end JavaScript library for building the user interface.
- **Node.js**: JavaScript runtime for building the back-end server.
- **GraphQL**: API query language for efficient data fetching and manipulation.
- **Stripe**: Payment processing platform for handling secure transactions.
- **JWT (JSON Web Token)**: Authentication mechanism for securing API requests.
- **Apollo Client**: GraphQL client for managing queries and mutations in the front end.
- **Vite**: Front-end build tool for fast development and production build setup.
- **Concurrently**: Utility for running multiple npm scripts simultaneously (back-end and front-end).
- **CSS**: Custom styling to create a modern and responsive user interface.
- **Testing Library (React)**: Used for writing unit tests for the front-end components.
  Vitest: A fast unit testing framework for the front end.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:

```sh
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them with descriptive messages:

```sh
git commit -m "Add new feature: your feature description"
```

4. Push your changes to your forked repository:

```sh
git push origin feature/your-feature-name
```

5. Open a pull request to the main repository, describing your changes in detail.

## 📄 License

This project is licensed under the MIT License. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, provided that the original copyright notice and permission notice are included in all copies or substantial portions of the software. For more details, see the MIT [LICENSE](https://opensource.org/licenses/MIT) file.

## ❓ Questions

If you have any questions about the project, please feel free to contact me directly:

GitHub: <a href="https://github.com/A-MOHAMED14">A-MOHAMED14</a>

Email: <a href="mailto:amin800@hotmail.co.uk">amin800@hotmail.co.uk</a>
