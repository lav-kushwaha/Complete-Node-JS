# 🚀 DevTinder

DevTinder is a full-stack social networking platform tailored for developers. Think of it as **Tinder for Devs** — where developers can discover, connect, and collaborate. Users can create profiles, explore others, send connection requests, chat, and manage their profile — all in a smooth and interactive interface.

This project is a hands-on implementation of core concepts in **Node.js** and **React**, including JWT authentication, Redux state management, REST APIs, middleware, secure user data handling, and dynamic routing.

---

## 📁 Folder Structure / Topics Covered

Each folder or file corresponds to a key concept or milestone in the development journey:

1. `01_Introduction_to_Nodejs` – Introduction to Node.js  
2. `02_JS_on_server` – Understanding JS on the server  
3. `03_Lets_write_code` – Getting hands-on with code  
4. `04_module.exports_require` – Modules system in Node.js  
5. `05_Diving_Into_Nodejs_GithubRepo` – Exploring GitHub repo structure  
6. `06_libuv_async_io` – Async I/O with Libuv  
7. `07_sync_async_setTimeoutzero` – Deep dive into V8 and async  
8. `08_Deep_dive_into_V8_Engine` – Engine internals (notes)  
9. `09_Libuv_and_EventLoop` – Event loop phases  
10. `10_Thread_Pool_In_Libuv` – Thread pool in Node.js  
11. `11_Creating_a_server` – Creating a basic HTTP server  
12. `12_Databases_SQL_NoSQL` – Overview of SQL vs NoSQL  
13. `13_Microservices_vs_Monolith` – System design patterns  
14. `14_features_HLD_LLD_planning` – Feature planning & design choices  
15. `15_creating_a_server` – Server implementation (extended)  
16. `16_Routing_and_Request_Handlers` – Creating routes and handlers  
17. `17_Middlewares_And_ErrorHandlers` – Middleware & error handling logic  
18. `18_Database_Schema_Models_Mongoose` – Mongoose schemas & models  
19. `19_Diving_into_the_apis` – API development  
20. `20_Data_Sanitization_And_Schema_Validations` – Data sanitization & validation  
21. `21_Encrypting_passwords` – Password encryption  
22. `22_Authentication_JWT_And_Cookies` – Auth using JWT and cookies. 
23. `23_Diving_into_the_APls_and_express_Router` – Express router APIs. 
24. `24_Logical_DB_Query_Compound_Indexes` – Logical queries and indexing. 
25. `25_Ref_Populate_Thought_process_of_writing_APIs` – MongoDB ref & populate.  
26. `26_Building_Feed_API_Pagination` – Feed API with pagination.
27. `27_DevTinder-UI` – UI of DevTinder.
28. `28_Season_03` – AWS, Ngnix, Payment Gateway Integration, Web Socket and Socket.io etc. 
29. `29_DevTinder-Complete` – Devtinder Production Ready.
---

## 📸 Features

- 🔐 Authentication with JWT
- 🧠 Global state management with Redux
- 💬 Send/Delete requests to connect with other devs
- 📝 Edit/Update user profiles
- 🌍 Explore feed to discover developers
- ⚙️ Fully integrated frontend + backend
- 🧼 Password encryption with bcrypt
- 🔄 Secure API handling with Axios & Express
- 💬 Real-time chat with Socket.io
---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT
- bcrypt.js

### Frontend
- React
- Redux
- Axios
- React Router DOM
---

## 🚦 How It Works

- 🔑 **Authentication:** Sign up/login using encrypted passwords and JWT.
- 👤 **Profile Management:** Users can view and update their own profiles.
- 🤝 **Connection System:** Send or cancel connection requests.
- 📰 **Explore Feed:** Browse and discover other dev profiles.
- 🔁 **Real-Time State:** Managed using Redux across components.

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/lav-kushwaha/devtinder.git
cd devtinder
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
npm run dev
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
npm start
```

---

## 🧪 API Endpoints (Sample)

- `POST /api/auth/register` – Register a user  
- `POST /api/auth/login` – Login a user  
- `GET /api/user/:id` – Get user profile  
- `PUT /api/user/:id` – Update profile  
- `POST /api/request/send/:targetId` – Send request  
- `DELETE /api/request/cancel/:targetId` – Cancel request  
- `GET /api/feed` – Get all user feed  

---

## 🎯 What I Learned

- Node.js internals (event loop, modules, async I/O, libuv)
- Creating RESTful APIs with Express
- Using Mongoose for data modeling and database queries
- Secure authentication with JWT and bcrypt
- React fundamentals and component-based architecture
- Redux for state management
- Building real-world full-stack apps

---

## 🧠 Future Enhancements

- ✅ UI overhaul with Tailwind CSS or Material UI
- 🔄 Real-time request/connection status updates
- 🌍 Deployment on Vercel or Render with MongoDB Atlas
- 🧪 Add unit & integration testing
- 💬 Show online status and last seen in chat
- 🔍 User search functionality
- 💎 Premium user features (e.g., boost visibility, unlimited swipes, blue tick etc)

---

## 📬 Contact

Built with ❤️ by **Lav Kushwaha**

- 🌐 [LinkedIn](https://www.linkedin.com/in/lavkushwaha/)
- 🐙 [GitHub](https://github.com/lav-kushwaha)

---

## 🪪 License

This project is open-source under the [MIT License](LICENSE).

---

## ©️ Copyright

© 2025 Lav Kushwaha. All rights reserved.
