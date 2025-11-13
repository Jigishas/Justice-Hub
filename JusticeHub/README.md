# JusticeHub

JusticeHub is a comprehensive full-stack platform dedicated to promoting social justice through education, community engagement, and actionable initiatives. It empowers users to learn about critical social issues, take meaningful actions, and connect with like-minded individuals working towards a more equitable world.

## Features

### 🔐 User Authentication
- Secure user registration and login
- JWT-based authentication with HTTP-only cookies
- Protected routes and user session management

### 🏠 Home Dashboard
- Personalized welcome message for authenticated users
- Search functionality across causes, actions, and resources
- Featured causes with funding progress tracking
- Call-to-action sections for immediate engagement

### 📋 Core Sections
- **Actions**: Sign petitions, volunteer opportunities, donation links, content sharing
- **Issues**: Racial equality, gender equity, climate justice, economic fairness
- **Events**: Community events and justice-related gatherings
- **Resources**: Curated educational materials including articles, videos, podcasts, books, and toolkits
- **About**: Platform mission and organizational information

### 🎨 Modern UI/UX
- Responsive design with mobile-first approach
- Beautiful gradient backgrounds and animations
- Intuitive navigation with React Router
- Accessible components using Radix UI primitives

### 🔍 Search & Discovery
- Real-time search across all content categories
- Filtered results with instant feedback
- External links to verified justice organizations

## Tech Stack

### Frontend
- **React 19** - Modern React with concurrent features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **cookie-parser** - Cookie handling middleware

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or cloud service like MongoDB Atlas)
- **Git**

## Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the Backend directory with the following variables:
   ```
   db_URI=mongodb://localhost:27017/justicehub
   # or your MongoDB Atlas connection string
   JWT_SECRET=your-super-secret-jwt-key-here
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd JusticeHub1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Usage

1. **Registration**: Create a new account using the registration form
2. **Login**: Sign in with your credentials
3. **Explore**: Browse through different sections (Actions, Issues, Resources)
4. **Search**: Use the search bar to find specific content
5. **Engage**: Click on action buttons to sign petitions, donate, or access resources
6. **Learn**: Access educational materials in various formats

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info (protected)
- `POST /api/auth/logout` - User logout

### Request/Response Examples

#### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### Login User
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

## Project Structure

```
Justice Hub1/
├── Backend/
│   ├── connect.js          # Main server file with Express setup
│   ├── crud.js             # Database operations (if implemented)
│   ├── package.json        # Backend dependencies
│   └── ...
├── JusticeHub1/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Auth/       # Authentication components
│   │   │   └── ui/         # Base UI components
│   │   ├── contexts/       # React contexts (AuthContext)
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # Application entry point
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   └── ...
└── README.md               # Project documentation
```

## Contributing

We welcome contributions to JusticeHub! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and structure
- Write clear, concise commit messages
- Test your changes thoroughly
- Update documentation as needed

## Environment Variables

### Backend (.env)
- `db_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token signing

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server with nodemon

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Contact

For questions or support, please reach out to:
- Email: info@justicehub.org
- Website: [JusticeHub](https://justicehub.org)

---

**JusticeHub** - Building a more just world, one action at a time.
