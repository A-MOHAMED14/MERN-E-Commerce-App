# MERN E-Commerce App

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
