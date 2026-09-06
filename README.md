# 💼 Personal Portfolio

A full-stack personal portfolio application built to showcase my **skills, projects, experience, services, blog/events, and contact information**.

The application is divided into two main parts:

* **Frontend:** React.js
* **Backend:** Node.js with an Express-style API architecture
* **Database:** MongoDB through Mongoose models

The frontend provides the user interface and communicates with the backend through API requests. The backend handles authentication, user data, portfolio events/blog content, and contact/feedback functionality.

---

# 🚀 Features

## Portfolio Website

The frontend contains different sections for presenting professional information:

* Hero/introduction section
* About section
* Skills
* Services
* Projects
* Testimonials
* Blog/events
* Contact section
* Footer
* Responsive navigation

---

## 🔐 Authentication

The application includes authentication functionality.

Users can:

* Authenticate with the backend
* Store authentication tokens
* Update authentication-related information
* Remove authentication credentials
* Access protected functionality

Authentication state is handled between the React frontend and backend.

The frontend authentication utilities are located in:

```text
src/context/auth.js
```

with functions such as:

```text
getToken()
saveToken()
```

The backend authentication logic is located in:

```text
portfolio-backend/controllers/auth.js
```

---

# 📅 Blog / Events Management

The portfolio includes an events/blog section that communicates with the backend.

The frontend can:

* Fetch events
* Create events
* Delete events

The main functionality is implemented in:

```text
src/view/blog.jsx
```

The backend provides the corresponding controller logic:

```text
portfolio-backend/controllers/event.js
```

with operations such as:

```text
getEvents()
createEvent()
deleteEvent()
```

This allows portfolio content to be managed dynamically instead of hard-coding everything into the React application.

---

# 📩 Contact & Feedback

The portfolio includes a contact section where visitors can submit information or feedback.

Frontend logic:

```text
src/view/contact.jsx
```

Backend feedback controller:

```text
portfolio-backend/controllers/feedback.js
```

The frontend handles:

```text
handleChange()
handleSubmit()
```

while the backend processes the submitted feedback through:

```text
HandleFeedBack()
```

---

# 🔔 Notifications

The application includes a notification system for displaying feedback and application events to the user.

Frontend notification functionality is organized around:

```text
src/components/notifications.jsx
src/context/notificationContext.js
```

The notification component supports removing notifications through:

```text
HandleRemoveKey()
```

This keeps notification state separate from the individual UI components that trigger it.

---

# 🧭 Frontend Architecture

The frontend is built with React and organized by responsibility.

```text
potfolio-app/
└── src/
    │
    ├── components/
    │
    ├── view/
    │
    ├── routes/
    │
    ├── context/
    │
    ├── util/
    │
    ├── App.jsx
    ├── index.js
    ├── App.test.js
    ├── setupTests.js
    └── reportWebVitals.js
```

---

# 📂 Frontend Structure

## `src/components/`

Contains reusable React components that are used throughout the application.

### `App.jsx`

The main React application component.

```text
App()
```

It acts as the entry point for composing the application's UI.

### `navbar.jsx`

Responsible for the portfolio navigation.

```text
HandleClick()
```

handles navigation-related interactions.

### `layout.jsx`

Provides the primary application layout.

```text
Home()
```

### `coolIntroduction.jsx`

Contains the animated/introduction content.

```text
TextSwitcher()
```

is responsible for changing or switching introductory text.

### `auth.jsx`

Handles frontend authentication interactions.

```text
HandleSubmit()
```

### `notifications.jsx`

Displays application notifications.

```text
HandleRemoveKey()
```

removes notifications from the notification state.

---

# 📄 `src/view/`

Contains the main portfolio sections/pages.

```text
view/
├── testimonials.jsx
├── service.jsx
├── section2.jsx
├── section.jsx
├── projects.jsx
├── footer.jsx
├── contact.jsx
└── blog.jsx
```

### `testimonials.jsx`

Displays testimonials or feedback from users/clients.

### `service.jsx`

Contains the services/skills section.

```text
Skills()
```

### `section.jsx`

Contains a major portfolio section.

### `section2.jsx`

Contains another portfolio section.

### `projects.jsx`

Displays projects that demonstrate development experience and technical skills.

### `footer.jsx`

Contains the website footer.

### `contact.jsx`

Provides the contact/feedback interface.

### `blog.jsx`

Provides the dynamic blog/events interface.

It communicates with the backend to:

```text
Fetch events
Create events
Delete events
```

---

# 🧠 React Context

The application uses React context to share state between components.

```text
src/context/
├── notificationContext.js
├── handleContext.js
└── auth.js
```

### `notificationContext.js`

Provides notification-related state and functionality.

### `handleContext.js`

Contains shared application handling/state logic.

### `auth.js`

Provides authentication utilities.

```text
getToken()
saveToken()
```

This prevents authentication logic from being duplicated throughout the application.

---

# 🛠️ Utilities

```text
src/util/
├── util.js
└── skills.js
```

These files contain reusable helper functionality and portfolio-related data such as skills.

---

# 🛣️ Routing

Application routes are organized inside:

```text
src/routes/app-routes.jsx
```

This keeps routing logic separate from the individual components and pages.

---

# 🧪 Testing

The React application includes the standard testing setup:

```text
src/App.test.js
src/setupTests.js
```

`App.test.js` contains frontend application tests, while `setupTests.js` provides the testing environment configuration.

---

# ⚙️ Backend Architecture

The backend is responsible for handling server-side operations and communicating with the database.

```text
portfolio-backend/
│
├── server.js
├── routes.js
│
├── controllers/
│   ├── feedback.js
│   ├── event.js
│   └── auth.js
│
└── model/
    ├── user.js
    ├── model.js
    └── event.js
```

---

# 🖥️ Server

## `server.js`

This is the main backend entry point.

The server is structured around an `App` class containing responsibilities such as:

```text
constructor()
dbConnect()
server()
serverCallback()
```

The server is responsible for:

1. Initializing the application
2. Connecting to the database
3. Registering routes
4. Starting the HTTP server
5. Handling incoming requests

---

# 🛣️ Backend Routes

```text
routes.js
```

Defines the application's API routes and connects incoming requests to the appropriate controllers.

The architecture follows:

```text
HTTP Request
      ↓
Route
      ↓
Controller
      ↓
Model
      ↓
Database
      ↓
Response
```

This separation keeps business logic away from the route definitions.

---

# 🎮 Controllers

Controllers contain the application's backend request-handling logic.

## Authentication

```text
controllers/auth.js
```

Provides functionality such as:

```text
UserAuthenticated()
HandleUpdateKey()
HandleRemoveKey()
```

These functions handle authentication-related operations and user credential/key management.

---

## Events

```text
controllers/event.js
```

Provides:

```text
getEvents()
createEvent()
deleteEvent()
```

These operations allow the frontend to dynamically manage portfolio events/blog content.

---

## Feedback

```text
controllers/feedback.js
```

Contains:

```text
HandleFeedBack()
```

This processes feedback/contact information submitted from the portfolio.

---

# 🗄️ Database Models

Database models are located in:

```text
portfolio-backend/model/
```

### `user.js`

Defines the structure for user-related database records.

### `model.js`

Contains additional database model/schema functionality.

### `event.js`

Defines the structure used for portfolio events/blog content.

The backend follows a model-based architecture so database structures are separated from request-handling logic.

---

# 🔄 Application Flow

A typical request flows through the application like this:

```text
             Visitor
                │
                ▼
        React Portfolio
                │
                │ HTTP Request
                ▼
          Backend Route
                │
                ▼
           Controller
                │
                ▼
             Model
                │
                ▼
            Database
                │
                ▼
             Result
                │
                ▼
           Controller
                │
                ▼
          React Frontend
                │
                ▼
          Updated UI
```

---

# 📊 Example: Loading Blog Events

When a visitor opens the blog/events section:

```text
User opens Blog
       ↓
blog.jsx
       ↓
fetchEvents()
       ↓
API Request
       ↓
Backend Route
       ↓
getEvents()
       ↓
Event Model
       ↓
Database
       ↓
Events returned
       ↓
React state updated
       ↓
Events displayed
```

---

# 📩 Example: Contact Form

When a visitor submits the contact form:

```text
Visitor
   ↓
Contact Form
   ↓
handleChange()
   ↓
handleSubmit()
   ↓
Backend API
   ↓
HandleFeedBack()
   ↓
Database / Processing
   ↓
Response
   ↓
Notification
   ↓
User receives feedback
```

---

# 🔐 Example: Authentication

```text
User
 ↓
Login/Auth Component
 ↓
HandleSubmit()
 ↓
Backend API
 ↓
Authentication Controller
 ↓
User Model
 ↓
Database
 ↓
Authentication Result
 ↓
Token
 ↓
saveToken()
 ↓
Authenticated Application
```

---

# 🧱 Architectural Approach

The project separates responsibilities into different layers:

```text
Frontend
   │
   ├── Components
   ├── Views
   ├── Context
   ├── Routes
   └── Utilities
           │
           ▼
        API Layer
           │
           ▼
Backend
   │
   ├── Routes
   ├── Controllers
   └── Models
           │
           ▼
       Database
```

This makes the application easier to maintain and extend.

---

# 🛠️ Technologies

### Frontend

* React.js
* JavaScript
* React Context
* React Router
* CSS
* Fetch/API requests

### Backend

* Node.js
* Express-style server architecture
* JavaScript
* REST API

### Database

* MongoDB
* Mongoose

### Development

* Git
* GitHub
* npm
* Jest / React testing tools

---

# 📁 Complete Project Structure

```text
portfolio/
│
├── potfolio-app/
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── notifications.jsx
│   │   │   ├── navbar.jsx
│   │   │   ├── layout.jsx
│   │   │   ├── coolIntroduction.jsx
│   │   │   ├── auth.jsx
│   │   │   └── App.jsx
│   │   │
│   │   ├── view/
│   │   │   ├── testimonials.jsx
│   │   │   ├── service.jsx
│   │   │   ├── section2.jsx
│   │   │   ├── section.jsx
│   │   │   ├── projects.jsx
│   │   │   ├── footer.jsx
│   │   │   ├── contact.jsx
│   │   │   └── blog.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── notificationContext.js
│   │   │   ├── handleContext.js
│   │   │   └── auth.js
│   │   │
│   │   ├── routes/
│   │   │   └── app-routes.jsx
│   │   │
│   │   ├── util/
│   │   │   ├── util.js
│   │   │   └── skills.js
│   │   │
│   │   ├── App.test.js
│   │   ├── setupTests.js
│   │   ├── reportWebVitals.js
│   │   └── index.js
│   │
│   └── package.json
│
└── portfolio-backend/
    │
    ├── controllers/
    │   ├── feedback.js
    │   ├── event.js
    │   └── auth.js
    │
    ├── model/
    │   ├── user.js
    │   ├── model.js
    │   └── event.js
    │
    ├── server.js
    ├── routes.js
    └── package.json
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone <repository-url>
cd portfolio
```

## 2. Install Frontend Dependencies

```bash
cd potfolio-app
npm install
```

Start the frontend:

```bash
npm start
```

---

## 3. Install Backend Dependencies

Open another terminal:

```bash
cd portfolio-backend
npm install
```

Start the backend using the project's configured start command.

For development, this may be:

```bash
npm run dev
```

or:

```bash
npm start
```

---

# 🔑 Environment Variables

The backend should use environment variables for configuration and sensitive credentials.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
```

Do not commit real credentials or secrets to GitHub.

Use:

```text
.env
```

and add it to:

```text
.gitignore
```

---

# 🎯 Purpose of the Project

This project serves two purposes.

### Personal Branding

It provides a central place to showcase:

* Projects
* Technical skills
* Services
* Experience
* Testimonials
* Articles/events
* Contact information

### Full-Stack Development Demonstration

The project also demonstrates practical experience with:

* React application architecture
* Component-based development
* State management
* Authentication
* REST APIs
* Backend controllers
* Database models
* CRUD operations
* Client/server communication
* Dynamic content
* Form handling
* Notifications
* Testing
* Full-stack application structure

---

# 🔮 Future Improvements

Potential improvements include:

* TypeScript migration
* Improved API validation
* Better authentication and authorization
* Admin dashboard
* Rich blog editor
* Image uploads
* Project management
* Analytics
* SEO improvements
* Automated testing
* CI/CD
* Docker deployment
* API documentation
* Improved accessibility
* Performance optimization
* Cloud deployment

---

# 👨‍💻 Author

Built as a personal portfolio and full-stack development project.

The project demonstrates how a React frontend can communicate with a backend API to provide a dynamic, data-driven portfolio experience.

---

# ⭐ If You Find This Project Useful

Feel free to explore the code, review the architecture, and provide feedback.

If you like the project, consider giving the repository a ⭐.
