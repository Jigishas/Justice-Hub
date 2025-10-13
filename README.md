# Justice Hub

Justice Hub is a comprehensive full-stack platform dedicated to promoting social justice through education, community engagement, and actionable initiatives. It empowers users to learn about critical social issues, take meaningful actions, and connect with like-minded individuals working towards a more equitable world.

## Project Structure

This repository contains two main components:

### Frontend (JusticeHub1/)
A modern React application built with Vite, featuring:
- User authentication and authorization
- Interactive dashboard with search functionality
- Educational resources (articles, videos, podcasts, books, toolkits)
- Actionable items for social justice advocacy
- Responsive design with Tailwind CSS and Radix UI components

[View Frontend README](./JusticeHub1/README.md)

### Backend (Backend/)
A Node.js/Express API server providing:
- User authentication with JWT tokens
- MongoDB database integration
- RESTful API endpoints for user management
- CORS-enabled for frontend communication

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "Justice Hub1"
   ```

2. **Setup Backend:**
   ```bash
   cd Backend
   npm install
   # Create .env file with your MongoDB URI and JWT secret
   npm start
   ```

3. **Setup Frontend:**
   ```bash
   cd ../JusticeHub1
   npm install
   npm run dev
   ```

4. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## Features

- 🔐 Secure user authentication
- 🏠 Personalized dashboard
- 🔍 Real-time search across content
- 📚 Curated educational resources
- 📋 Actionable social justice initiatives
- 📱 Mobile-responsive design
- 🌐 External links to verified organizations

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS, Radix UI, Framer Motion
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt
- **Deployment:** Ready for Vercel/Netlify (frontend) and Heroku/Railway (backend)

## Contributing

We welcome contributions! Please see the [Frontend README](./JusticeHub1/README.md) for detailed contribution guidelines.

## License

ISC License - see individual component READMEs for details.

## Contact

For questions or support:
- Email: info@justicehub.org
- Website: [JusticeHub](https://justicehub.org)

---

**Justice Hub** - Building a more just world, one action at a time.
