# 🚀 Zerodha Clone (MERN Stack)

A full-stack web application inspired by Zerodha, built using the MERN stack.
It includes user authentication, dashboard, and trading UI components.




## 📌 Features

* 🔐 User Authentication (Signup / Login / Logout)
* 🍪 JWT-based authentication with cookies
* 🛡️ Protected Dashboard Routes
* 📊 Dashboard UI (Holdings, Orders, Positions, Funds)
* ⚡ Responsive UI (Zerodha-inspired design)
* 🔄 Persistent login using cookies



## 🏗️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Bootstrap / Custom CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (password hashing)



## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone
```



### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_secret_key
```

Run backend:

```bash
npm start
```



### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs on:
👉 http://localhost:3000



### 4️⃣ Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

Runs on:
👉 http://localhost:3001



## 🔐 Authentication Flow

1. User signs up / logs in
2. Backend generates JWT token
3. Token stored in cookies
4. Dashboard verifies user via `/verify` route
5. Unauthorized users are redirected to login



## 🧠 Key Learnings

* Handling authentication using JWT + cookies
* CORS configuration with credentials
* Secure password hashing with bcrypt
* Protecting frontend routes
* Managing multiple React apps (frontend + dashboard)



## 🚀 Future Improvements

* 👤 Show logged-in username in UI
* 🔐 Role-based authentication (admin/user)
* 📈 Real-time stock data integration
* 🎨 UI enhancements & animations

---

