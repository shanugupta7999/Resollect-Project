# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. 


# Dashboard Project

## 📌 Overview
This project is a **Dashboard Application** built with **React.js**, featuring a sidebar navigation, filters, and a responsive table displaying loan data. The dashboard provides a clean UI with different sections for managing loans, notifications, user management, and more.

## 🚀 Features
- **Sidebar Navigation** with multiple sections.
- **Mobile-responsive design** with a collapsible sidebar.
- **Filters** to refine loan data.
- **Dynamic Table** to display loan details.
- **Dark Mode Ready** (if implemented in future versions).

## 🛠️ Technologies Used
- **React.js** (Functional Components, Hooks)
- **Tailwind CSS** (for styling & responsiveness)
- **React Icons** (for UI icons)
- **JSON Data** (as a mock database)

## 📂 Project Structure
```
📦 dashboard-project
├── 📂 src
│   ├── 📂 components
│   │   ├── Dashboard.js  # Main Dashboard Component
│   │   ├── Sidebar.js    # Sidebar Navigation
│   │   ├── Filters.js    # Filters Section
│   │   ├── Table.js      # Loan Data Table
│   ├── 📂 assets
│   │   ├── ResollectIcon.png  # App Logo
│   ├── 📂 Data
│   │   ├── loans.json   # Sample loan data
│   ├── App.js          # Main App Component
│   ├── index.js        # React Entry Point
├── 📜 package.json     # Dependencies & Scripts
├── 📜 README.md        # Documentation
```

## 🎯 How to Run the Project
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/dashboard-project.git
   cd dashboard-project
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run the Project**
   ```bash
   npm start
   ```
4. Open **http://localhost:3000/** in your browser.

## 📊 Loan Data Sample (JSON Format)
The loan data is stored in a JSON file and follows this structure:
```json
{
  "loans": [
    {
      "Loan ID": "12345",
      "Loan Type": "Home",
      "Current DPD": "30",
      "Status": "Not Defaulted"
    },
    {
      "Loan ID": "67890",
      "Loan Type": "Car",
      "Current DPD": "90+",
      "Status": "Defaulted"
    }
  ]
}
```

## 🎨 UI Enhancements
- **Sidebar Navigation**: The sidebar slides in/out on mobile.
- **Table Responsive**: Scrollable table for smaller screens.
- **Filters**: Dropdowns for selecting DPD range, loan type, and status.

## 🔥 Future Enhancements
- **Backend Integration** with Node.js & MongoDB.
- **Dark Mode Support**.
- **User Authentication & Role-Based Access**.
- **Export Data Feature** (CSV/PDF).

## 🤝 Contributing
Feel free to contribute! Fork the repository, create a feature branch, and submit a pull request.

## 📜 License
This project is licensed under the **MIT License**.

---

🔗 **Author:** [Shanu Kumar Gupta](https://github.com/shanugupta7999)  
📧 **Contact:** shanukumargupta.224ca056@nitk.edu.in


