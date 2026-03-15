# 🎁 Donation Management System

A Full-Stack Donation Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

This project allows users to add, edit, delete, search, sort, and filter donations dynamically. It is designed to help manage donated items in an organized and user-friendly way.

---

## 🚀 Features

- ➕ Add New Donation
- ✏️ Edit Donation Details
- 🗑️ Delete Donation with Custom Confirmation Modal (No browser alert)
- 🔎 Search by Item Name or Donor Name
- 📂 Dynamic Category Filter (Auto updates when donations are added or deleted)
- 📅 Sort by Latest or Oldest
- 📊 Real-time Total Donation Count
- 🔔 Toast Notifications for Success & Error Messages
- 🎨 Fully Responsive Modern UI

---

## 🛠️ Tech Stack

### 💻 Frontend
- React.js
- React Router
- Axios
- Tailwind CSS
- DaisyUI
- React Hot Toast
- Lucide React Icons

### 🌐 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

Donation-Management-System/
│
├── backend/
|   |__ config/
|   |   |__ db.js
│   ├── models/
│   │   └── Donation.js
│   ├── routes/
│   │   └── donationRoutes.js
│   ├── controllers/
│   │   └── donationController.js
│   └── server.js
│
├── frontend/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── DonationCard.jsx
│   │   └── DonationNotFound.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── DonationDetailPage.jsx
│   │   └── CreateDonationPage.jsx
│   ├── lib/
│   │   |── axios.js
|   |   |__ utils.js
│   |── App.jsx
│   |__ index.css
|   |__ main.jsx
|
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/donation-management-system.git

---

### 2️⃣ Setup Backend

cd backend  
npm install  
npm run dev  

Make sure MongoDB is running locally or update your MongoDB connection string in `.env`.

Example `.env` file:

PORT=3000  
MONGO_URI=your_mongodb_connection_string  

---

### 3️⃣ Setup Frontend

cd frontend  
npm install  
npm run dev  

Frontend runs on:  
http://localhost:5173  

Backend runs on:  
http://localhost:3000  

---

## 🧠 How It Works

1. User fills out the donation form.
2. Donation data is stored in MongoDB.
3. Donations are displayed as cards on the homepage.
4. Category filter is generated dynamically from donation categories.
5. When a donation is deleted:
   - Card disappears instantly
   - Category count decreases automatically
   - Category disappears if no items remain
6. Search and sort update results in real-time.

---

## 📊 Donation Fields

Each donation contains:

- Item Name
- Donor Name
- Category
- Quantity
- Item Condition
- Donation Date
- Donor Contact

---

## 🎯 Learning Outcomes

Through this project, I learned:

- Full CRUD operations
- REST API development
- Frontend-backend integration
- Dynamic filtering and sorting
- State management in React
- Building reusable components
- Creating responsive UI with Tailwind CSS

---

## 🔮 Future Improvements

- User Authentication (Login / Signup)
- Admin Dashboard
- Image Upload Feature
- Donation Status Tracking
- Analytics Dashboard
- Deployment on Render or Vercel

---

## 👩‍💻 Developed By

Shreya Shinde  
S.Y.B.Sc Computer Science Student  

---

## 📜 License

This project is developed for educational purposes.

