```markdown
# 🚀 DevTinder

DevTinder is a full-stack social networking platform tailored for developers. Think of it as **Tinder for Devs** — where developers can discover, connect, and collaborate. Users can create profiles, explore others, send connection requests, chat, and manage their profile — all in a smooth and interactive interface.

This project is a practical implementation of various core concepts in **Node.js** and **React**, including JWT authentication, Redux state management, REST APIs, middleware, secure user data handling, and dynamic routing.

---
## 📁 Folder Structure / Topics Covered

Each folder or file corresponds to a key concept or milestone in the development journey.

1. **01_Introduction_to_Nodejs** — Introduction to Node.js.
2. **02_JS_on_server** — Understanding JS on the server.
3. **03_Lets_write_code** — Getting hands-on with code.
4. **04_module.exports_require** — Modules system in Node.js.
5. **05_Diving_Into_Nodejs_GithubRepo** — Exploring GitHub repo structure.
6. **06_libuv_async_io** — Async I/O with Libuv.
7. **07_sync_async_setTimeoutzero** — Deep dive into V8 and async.
8. **08_Deep_dive_into_V8_Engine** — Engine internals (notes).
9. **09_Libuv_and_EventLoop** — Event loop phases.
10. **10_Thread_Pool_In_Libuv** — Thread pool in Node.js.
11. **11_Creating_a_server** — Creating a basic HTTP server.
12. **12_Databases_SQL_NoSQL** — Overview of SQL vs NoSQL.
13. **13_Microservices_vs_Monolith** — System design patterns.
14. **14_features_HLD_LLD_planning** — Feature planning and design choices (PUT vs PATCH).
15. **15_creating_a_server** — Server implementation (extended).
16. **16_Routing_and_Request_Handlers** — Creating routes and handlers.
17. **17_Middlewares_And_ErrorHandlers** — Middleware & error handling logic.
18. **18_Database_Schema_Models_Mongoose** — Mongoose schemas & models.
19. **19_Diving_into_the_apis** — API development.
20. **20_Data_Sanitization_And_Schema_Validations** — Data sanitization and validation.
21. **21_Encrypting_passwords** — Password encryption.
22. **22_Authentication_JWT_And_Cookies** — Auth using JWT and cookies.
23. **23_Diving_into_the_APls_and_express_Router** — More APIs with Express Router.
24. **24_Logical_DB_Query_Compound_Indexes** — Logical queries and indexing.
25. **25_Ref_Populate_Thought_process_of_writing_APIs** — MongoDB ref and populate usage.
26. **26_Building_Feed_API_Pagination** — Feed API with pagination.
27. **27_DevTinder** — Final version.

## 📸 Features

- 🔐 **Authentication** using JWT
- 🧠 **Redux** for global state management
- 💬 **Send/Delete Requests** to connect with other devs
- 📝 **Edit/Update Profile** with real-time state updates
- 🌍 **Explore Feed** to discover other developers
- 📡 **Secure REST APIs** built with Express & Mongoose
- 🧼 **Password Encryption** using bcrypt
- 🔄 **API Calls** with Axios
- ⚙️ Fully integrated **Frontend + Backend**
---

## 🛠️ Tech Stack

### 🔧 Backend
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing

### 💻 Frontend
- **React**
- **Redux** (for state management)
- **Axios** (for API communication)
- **React Router DOM**
---

---

## 🚦 How It Works

- **Authentication:** Sign up/login with encrypted passwords & JWT tokens.
- **Profile Management:** View and update your developer profile.
- **Connections:** Send or cancel connection requests to other users.
- **Feed System:** Browse other devs in the feed and interact.
- **Real-Time Sync:** Redux ensures app state stays up to date across components.

---

## 🔧 Getting Started

1. **Clone the Repo**

```bash
git clone https://github.com/lav-kushwaha/devtinder.git
cd devtinder
```

2. **Install Backend Dependencies**

```bash
cd server
npm install
npm run dev
```

3. **Install Frontend Dependencies**

```bash
cd ../client
npm install
npm start
```
---

## 🧪 API Endpoints

Some major API routes (more available in Postman collection):

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user
- `GET /api/user/:id` – Get user profile
- `PUT /api/user/:id` – Update user profile
- `POST /api/request/send/:targetId` – Send request
- `DELETE /api/request/cancel/:targetId` – Cancel request
- `GET /api/feed` – Get feed of users

---

## 🎯 What I Learned

While building DevTinder, I covered:

- Deep dive into **Node.js** internals: modules, event loop, async, libuv, etc.
- Creating scalable RESTful APIs
- Using **Mongoose** for data modeling and relationships (`ref`, `populate`)
- Handling **authentication/authorization** securely
- Building a responsive and intuitive **React frontend**
- Implementing **Redux** for state and side-effect management
- API consumption and error handling with **Axios**

---

## 🧠 Future Plans

- ✅ Add Chat Feature (using Socket.io)
- ✅ Better UI/UX (Material UI or Tailwind)
- 🔄 Real-time Request Status
- 🌐 Deployment (Render/Vercel + MongoDB Atlas)
- 🧪 Unit & Integration Testing

---

## 📬 Contact

Built with ❤️ by **Lav Kushwaha**

- 🌐 LinkedIn: [linkedin.com/in/lavkushwaha](https://www.linkedin.com/in/lavkushwaha/)
- 🐙 GitHub: [github.com/lav-kushwaha](https://github.com/lav-kushwaha)

---

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE).

---

## ©️ Copyright

© 2025 Lav Kushwaha. All rights reserved.
