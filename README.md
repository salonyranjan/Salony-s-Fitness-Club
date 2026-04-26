# 🏋️‍♂️ Salony's Fitness Club

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)
[![RapidAPI](https://img.shields.io/badge/RapidAPI-000000?style=for-the-badge&logo=rapidapi&logoColor=white)](https://rapidapi.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Salony's Fitness Club** is a modern fitness application that helps users discover exercises tailored to specific body parts, target muscles, and equipment. Built with **React** and **Material UI 5**, it leverages the **ExerciseDB** and **YouTube Search and Download** APIs via RapidAPI to provide high-quality GIFs, technical details, and instructional videos.

---

## 🚀 Features

- **Advanced Search:** Search from over 1,300+ exercises by name or category.
- **Categorization:** Filter exercises by target muscle groups (abs, chest, back, etc.) and equipment.
- **Visual Learning:** View high-resolution animated GIFs of every exercise.
- **Video Tutorials:** Integrated YouTube API to fetch real-time instructional videos for each movement.
- **Related Content:** Discover similar exercises based on the same muscle group or equipment.
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
- **Pagination:** Smooth browsing experience for extensive exercise lists.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Hooks, Context API)
- **UI Framework:** Material UI (MUI 5)
- **Data Fetching:** Fetch API / Axios
- **APIs:** - [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
  - [YouTube Search and Download](https://rapidapi.com/h0p3-h0p3-default/api/youtube-search-and-download)
- **Styling:** CSS3, Emotion (MUI)

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