
# 📰 **NewsMania**

**NewsMania** is a modern, full-stack news aggregator that delivers real-time **Business News Headlines** from trusted sources using the **NewsAPI**.
The project uses a combination of **backend middleware (Express.js)** and **direct frontend API calls**.
It also integrates:

* 🔐 **Google Authentication (Firebase)**
* 🧑‍💻 **GitHub API** to fetch user/admin details
* 📩 **Web3Forms** for sending emails to the admin
* ⚙️ **Custom Express middleware** to bypass CORS limitations of NewsAPI in production

---

## ✨ **Features**

### 🔥 Core Features

* 📰 Fetches **Business News Headlines** from platforms like Times of India and others
* 🔐 **Google Login/Logout** using Firebase Authentication
* 🧑‍💻 Fetches GitHub profile details using **GitHub API**
* 📩 Sends emails using **Web3Forms integration**
* 🚀 Uses Express middleware to bypass **CORS restrictions** of NewsAPI
* ⚡ Responsive UI built with React + Vite + Tailwind
* 🎬 Smooth animations using **GSAP**

---

## 🔧 **Middleware Explanation**

NEWSAPI restricts API calls on production due to **CORS blocking**.
To solve this:

* An **Express.js middleware** is created
* The backend fetches NewsAPI data
* The frontend consumes the backend instead of calling NewsAPI directly
* This ensures smooth API calls in production (Vercel + Railway)

---

## 🛠️ **Technologies Used**

### **Frontend**

* React + Vite
* Tailwind CSS
* React Router DOM
* Axios
* GSAP

### **Backend**

* Express.js (CORS middleware/proxy)
* Firebase Authentication
* Railway (Backend hosting)

### **APIs**

* **NEWSAPI** – Fetch news
* **GitHub API** – Fetch profile/admin data
* **Google Auth** – Login/Logout
* **Web3Forms** – Trigger admin email

### **Deployment**

* **Frontend** → Vercel
* **Backend** → Railway.app

---

## 🚀 **Getting Started**

Follow the steps to run the project locally.

---

## ✅ **Prerequisites**

* Node.js installed
* NewsAPI key
* GitHub API key
* Firebase project (Google Authentication enabled)
* Web3Forms account
* TailwindCSS + React + Vite environment

---

## 📦 **Installation**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/KrVikashGupta/NewsMania.git
```

### 2️⃣ Navigate to frontend folder

```bash
cd NewsMania
npm install
```

### 3️⃣ Navigate to backend folder

```bash
cd server
npm install
```

---

## 🔐 **Setup Environment Variables**

### In **/server/.env**

```
NEWS_API_KEY=your_newsapi_key
PORT=your_port_number
```

### In **frontend**

Add Firebase config in:

```
/src/components/Header/FireBaseConfig.js
```

---

## ▶️ **Run Backend Server**

```bash
cd server
node server.js
```

## ▶️ **Run Frontend App**

```bash
cd NewsMania
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

Backend runs at:

```
http://localhost:PORT
```

---

## ☁️ **Deployment Guide**

### **Backend → Railway.app**

1. Create a new project
2. Add **environment variables** from `.env`
3. Deploy directly from GitHub

### **Frontend → Vercel**

1. Import your GitHub repo
2. Add:

```
VITE_NEWS_API_KEY=your_key
```

3. Deploy

---

## 📌 **Usage**

* Open the app in your browser
* Login using **Google Authentication**
* View latest business news
* Fetch GitHub user details
* Send message to admin via Web3Forms

---

## 🤝 **Contributing**

1. Fork the repo
2. Create a new branch
3. Commit your feature
4. Push and open a Pull Request

---
### 🙏 Thank you for checking out **NewsMania!**

Stay updated. Stay informed.

---
