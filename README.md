# 🎲 Tenzies Game

An interactive, fast-paced dice rolling game built with **React** and **Vite**. Roll until all 10 dice match, freeze your favorite numbers, and race against the clock to set the ultimate high score!

---

## 🚀 Live Demo

👉 **https://tenzies-react-game-wheat.vercel.app/** 

---

## ✨ Features

- **⏱️ High-Precision Millisecond Stopwatch:** A smooth, live stopwatch (`MM:SS:MS`) tracking your speed from the very first click to the winning roll.
- **🏆 Persistent Best Time Record:** Automatically saves and tracks your fastest record locally using the browser's `localStorage` API.
- **🎉 Victory Celebration:** Shouts of joy with falling confetti (`react-confetti`) when you achieve Tenzies.
- **🔊 Audio Effects:** Built-in victory sound effects played through the HTML5 Audio API upon winning.
- **📱 Fully Responsive Design:** Modern 3D-styled dice board with smooth hover transitions, built using CSS Grid and Flexbox for mobile, tablet, and desktop screens.
- **⚡ Modern React Architecture:** Built using React Functional Components, Hooks (`useState`, `useEffect`, `useRef`), and Lazy State Initialization.

---

## 🎯 How to Play

1. **Roll the Dice:** Click the **"Roll"** button to generate random numbers (1 to 6) on all 10 dice.
2. **Freeze Numbers:** Click on any die to **"hold"** it (it turns green and freezes its current value between rolls).
3. **Match All 10:** Keep rolling until all 10 dice show the **exact same number**.
4. **Beat Your Record:** Once you get Tenzies, check your completion time and click **"New Game"** to try and beat your best record!

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Icons & Unique IDs:** [nanoid](https://github.com/ai/nanoid)
- **Effects:** [react-confetti](https://github.com/alampros/react-confetti)
- **Styling:** Modern CSS3 (Grid, Flexbox, Custom Shadows & Transitions)
- **Storage:** Browser Web Storage API (`localStorage`)
- **Hosting:** [Vercel](https://vercel.com/)

---

## 💻 Local Setup & Installation

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/tenzies-react-game.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd tenzies-react-game
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Visit `http://localhost:5173` to play!

---

## 👤 Author

- **GitHub:** https://github.com/Dheerajkamat14/tenzies-react-game
- **Project:** React Practice Portfolio

---

⭐ If you liked this project, don't forget to give it a star on GitHub!