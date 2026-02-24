# Eat-'N-Split

![Eat and Split](/eat-n-split.png)

Eat-N-Split is a utility application designed to help friends track expenses and balance split bills. It features a dynamic user interface that manages a list of friends, tracks individual balances, and handles complex calculations for shared expenses.

**[Live Preview](https://yuzstack-eat-n-split.netlify.app/)**

## 🛠️ Technical Stack

- **Frontend Library:** React.js
- **Styling:** Vanilla CSS

## 🧠 The "Build-to-Verify" Workflow

This project followed my established learning strategy for course-led curriculum. I independently architected the state logic for adding friends and splitting bills before auditing my solution against the course walkthrough. This process helped me master the nuances of Lifting State Up and managing derived state in a real world context.

## ✨ Key Features

- **Dynamic Friend Management:** Allows users to add new friends to a list and select them to initiate a bill split.
- **Real-Time Balance Tracking:** Automatically calculates and displays who owes whom, updating the global state instantly after a bill is split.
- **State-Driven Forms:** Implements controlled components for data entry, ensuring that inputs are always in sync with the application state.
- **Conditional Rendering:** Dynamically toggles the "Add Friend" and "Split Bill" forms to maintain a clean and focused user interface.
- **Reusable UI Components:** Built with a modular structure, utilizing shared buttons and input fields to keep the codebase clean and maintainable.

## 🚀 Getting Started

To run this project locally:

1. Clone the repository: `git clone https://github.com/YuzStack/52_Eat-N-Split.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
