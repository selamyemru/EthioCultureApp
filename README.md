# EthioCultural App

EthioCultural is an Ethiopian cultural e-commerce and experience platform built using the MERN stack, Framer Motion for animations, and TailwindCSS for styling. The app includes user profile management, cultural sites exploration, an admin dashboard, events, cultural experiences, and a booking system.

## Features

### 1. User Profile Management
- User registration and authentication (JWT-based).
- Profile customization (update profile picture, personal details).
- View past experiences, bookings, and event participation.

### 2. Cultural Sites
- Browse Ethiopian cultural heritage sites.
- View site details including history, images, and visitor reviews.
- Map integration for locations of cultural sites.

### 3. Admin Dashboard
- Manage users, cultural sites, events, and experiences.
- View and manage bookings and transactions.
- Access to analytics for site visits, bookings, and user engagement.

### 4. Events and Experiences
- Discover cultural events and experiences.
- Book and participate in events (festivals, traditional music shows, etc.).
- Leave reviews and feedback for events and experiences.

### 5. Booking System
- Users can book tickets for cultural events and experiences.
- Payment integration (PayPal, Stripe).
- View booking history and receive reminders for upcoming events.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Framer Motion**: For smooth animations and transitions.
- **TailwindCSS**: A utility-first CSS framework for designing responsive UIs.

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user profiles, cultural sites, events, and booking information.
- **JWT**: For secure authentication of users.

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14+)
- **MongoDB** (Local instance or MongoDB Atlas)
- **Git**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ethiocultural-app.git
   cd ethiocultural-app


2, .env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=your-stripe-secret-key

3,Start the backend server:
cd server
npm run dev
4,Start the frontend server
cd ../frontend
npm start

