
# Amazone clone by  React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This project is the replica of  Amazone website developed by reactjs.  

It contains backend (Firebase), Frontend and Stripe API (for payment) that is built using React.js + vite and Node.js.

For the backend, I used express server to use the stripe functionality using stripe API KEY and  Firebase  for user auth, and to store database (firestore). The Stripe API is used to implement the payment using sripe functionality.

Any user can create account and login.  Login user can add items to cart, can checkout to payment and can access his/her orders. 

And non users can not access unless create account and login (ask credentials)

# Stack

- Node
- React + Vite
- Firebase from [firebase](https://firebase.google.com/)

  Firebase is a Backend-as-a-Service (BaaS) platform that provides various tools and services for building and managing web and mobile applications.
  
- Stripe API  from [stipe](https://stripe.com/)

  Stripe is a payment processing platform that allows businesses to accept a variety of payment methods

 Note: need to create account to use  firebase and  stripe

# Build Status

live: [Here](https://amazone-clone-byreact.netlify.app/) on Netflix

# Requirements
- VScode
- Node
- dotenv
- Nodemon
- react-icon
- axios
- firebase
- react-toastify
  
# Setup

clone to computer using:

  https://github.com/mamokebe/Amazon-clone-react.git

run npm install to initialize the dependencies



  
  

