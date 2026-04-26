<p align="center">
  <a href="https://salony-s-fitness-club.vercel.app" target="_blank" rel="noopener noreferrer">
    <img src="src/assets/images/banner.png" alt="Salony's Fitness Club Banner" width="100%" style="border-radius: 12px; border: 1px solid #333;" />
  </a>
</p>

<div align="center">
  <h1>🏋️‍♂️ Salony's Fitness Club</h1>
  <p>
    <b>A Cinematic AI-Driven Fitness Intelligence Terminal</b><br />
    <i>Discover 1,300+ Exercises with Real-Time YouTube Integration & Performance Analytics</i>
  </p>

  <p>
    <a href="https://salony-s-fitness-club.vercel.app"><b>Live Dashboard</b></a> •
    <a href="#features"><b>Core Features</b></a> •
    <a href="#tech-stack"><b>Tech Stack</b></a>
  </p>
</div>

<hr />

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)
[![RapidAPI](https://img.shields.io/badge/RapidAPI-000000?style=for-the-badge&logo=rapidapi&logoColor=white)](https://rapidapi.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Salony's Fitness Club** is a modern fitness application that helps users discover exercises tailored to specific body parts, target muscles, and equipment. Built with **React** and **Material UI 5**, it leverages the **ExerciseDB** and **YouTube Search and Download** APIs via RapidAPI to provide high-quality GIFs, technical details, and instructional videos.

---

## 🌐 Live Dashboard

[![Live Site](https://img.shields.io/badge/Live_Demo-🚀-FF2625?style=for-the-badge&logo=vercel&logoColor=white)](https://salony-s-fitness-club.vercel.app/)

> **Status:** Operational 🟢  
> **Host:** Vercel Edge Network  
> **Link:** [https://salony-s-fitness-club.vercel.app/](https://salony-s-fitness-club.vercel.app/)

---

## 🚀 Core Features

### 🔍 Advanced Neural Search
Seamlessly query a library of **1,300+ exercises**. The intelligent search engine indexes data based on exercise names, target muscles, and equipment types to provide instant, relevant results.

### 🧬 Biometric Categorization
Exercises are meticulously segmented into **10+ body part categories** (Chest, Back, Cardio, etc.). This allows users to build targeted routines based on specific biological sectors.

### 📹 Real-Time Instructional Mapping
Leveraging the **YouTube Search & Download API**, the system dynamically maps technical instructional videos to every exercise. Users receive real-time visual guidance to ensure perfect form and safety.

### 🦾 Equipment-Aware Suggestions
The application intelligently identifies the equipment required for a movement and suggests **alternative exercises** within the same muscle group or equipment category.

### 📱 Adaptive Cinematic UI
A fully responsive terminal experience built with **Material UI 5**. Whether on mobile or desktop, the interface maintains its cinematic glassmorphic aesthetic and high-performance scrolling.

### ⚡ Performance Optimization
- **Waterfall Data Fetching:** Optimized API calls to reduce latency.
- **Lazy Loading:** High-quality GIFs and media assets are loaded only when in view.
- **Secure Key Management:** Environment-level security for all RapidAPI credentials.

---

## 🛠️ Technical Architecture & Stack

### 🏗️ Frontend Core
* **React.js (v18):** Utilizing functional components, hooks (`useState`, `useEffect`), and the **Context API** for state management.
* **Material UI 5:** Implemented for its industrial-grade component library and flexible **Emotion**-based styling engine.
* **React Router 6:** Managing complex client-side routing and dynamic parameter handling for exercise details.

### 🧠 Intelligence & Data Systems
* **RapidAPI - ExerciseDB:** Primary data source providing structured JSON for over 1,300+ physiological movements and high-res GIFs.
* **RapidAPI - YouTube Search & Download:** Neural mapping system that fetches real-time instructional media based on exercise metadata.
* **Fetch API & Waterfall Logic:** Optimized data fetching patterns to handle interdependent API calls with minimal latency.

### 🎨 Design & UI/UX
* **Glassmorphism & Cinematic UI:** Custom CSS3 and MUI transitions to create a premium "Intelligence Terminal" aesthetic.
* **React Horizontal Scrolling Menu:** Providing a seamless, touch-responsive category navigation experience.
* **Responsive Engine:** Utilizing MUI breakpoints to ensure a "Code Your Body" experience on all screen dimensions.

### 🚀 DevOps & Security
* **Vercel Edge Network:** Continuous Integration and Deployment (CI/CD) for global high-speed delivery.
* **Environment Security:** `.env` protection for sensitive RapidAPI credentials to prevent unauthorized access.
* **Airbnb ESLint Standards:** Ensuring industry-standard code quality, readability, and maintainability.

---

## 🎨 Cinematic Visual Experience

<p align="center">
  <img src="https://raw.githubusercontent.com/salonyranjan/Salony-s-Fitness-Club/main/src/assets/images/readme.png" alt="Salony's Fitness Club UI" width="100%" style="border-radius: 15px; box-shadow: 0px 10px 30px rgba(0,0,0,0.5);">
</p>

### 🖥️ High-Fidelity UI/UX
* **Intelligence Terminal Aesthetic:** A premium dark-mode interface featuring glassmorphic cards and high-contrast red accents for a focused, "Command Center" feel.
* **Fluid Motion System:** Integrated **React Horizontal Scrolling** with custom-engineered navigation arrows for seamless category exploration.
* **Dynamic Muscle Mapping:** Visual feedback loops that highlight "Target Muscle Systems," making the biological data intuitive and easy to navigate.
* **Cinematic Banners:** High-impact typography and professional athletic imagery that motivate users the moment the "Terminal" initializes.

 "Code Your Body, Optimize Your Strength!" — The interface isn't just a website; it's a performance optimization tool designed for the modern athlete.

---

## 📦 Installation & Setup

1. **Clone the repository:**
 ```bash
 git clone [https://github.com/salonyranjan/GymVibe.git](https://github.com/salonyranjan/GymVibe.git)
 cd GymVibe
 ```

2. **Install dependencies:**
 ```bash
 npm install
 ```
   
3. **Set up Environment Variables:**
Create a .env file in the root directory and add your RapidAPI Key:
 ```bash
REACT_APP_RAPID_API_KEY=your_actual_api_key_here
 ```

4. **Start the development server:**
 ```bash
npm start
 ```
---
## 🏗️ Folder Structure
 ```Plaintext
src/
 ┣ assets/            # Icons and Images
 ┣ components/        # Reusable UI components (Navbar, Footer, Search, etc.)
 ┣ pages/             # Main views (Home, ExerciseDetail)
 ┣ utils/             # API fetching logic (fetchData.js)
 ┗ App.js             # Routing and layout
```
