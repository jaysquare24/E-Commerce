# 🛒 React E-Commerce Store

A modern, modular e-commerce front-end built with **React**, **Redux**, and **Vite**. Designed with scalability, maintainability, and performance in mind.

---

## ✨ Features

- 🛍️ Dynamic product inventory with currency switcher
- 💵 Multi-currency support with real-time price conversion
- 🧺 Fully functional shopping cart (add, remove, update quantity)
- 🔍 Search filtering for products
- ♻️ Global state management using Redux
- 🧱 Modular components with clear separation of concerns
- 🚀 Optimized for performance with Vite

---

## 📁 Project Structure

src/
├── components/
│ ├── Cart/
│ │ ├── Cart.jsx
│ │ ├── CartList.jsx
│ │ └── CartItem.jsx
│ ├── Currency/
│ │ ├── CurrencyFilter.jsx
│ │ └── CurrencyButton.jsx
│ ├── Inventory/
│ │ ├── Inventory.jsx
│ │ ├── InventoryList.jsx
│ │ └── InventoryItem.jsx
| |__ Header.jsx
│ |__ Modal.jsx
| |__ Footer.jsx
|  
├── features/
│ ├── cartSlice.js
│ ├── currencyFilterSlice.js
│ ├── inventorySlice.js
│ ├── searchTermSlice.js
│ └── data.js
├── App.jsx
└── main.jsx


---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react-ecommerce-store.git
cd react-ecommerce-store

# Install dependencies
npm install

# Start the development server
npm run dev

## 🧠 Technologies Used

- **React** (Component-based architecture)
- **Redux Toolkit** (State management)
- **Vite** (Build tool)
- **JavaScript** (ES6+)
- **CSS**

---

## ✅ Available Scripts

| Command           | Description                     |
|-------------------|---------------------------------|
| `npm run dev`     | Start local development server  |
| `npm run build`   | Build for production            |
| `npm run preview` | Preview production build        |

---

## 🧪 Future Improvements (Optional)

- ✅ Pagination for inventory
- ✅ Checkout integration
- ✅ Product detail pages with routing
- ✅ User login/authentication
- ✅ Backend API

---

## 🧑‍💻 Author

**Jamiu Olajide**  
Frontend Developer | React & Redux Enthusiast  
🔗 jamiuolajide.netlify.app 
📧 devjamiuolajide@gmail.com


## 📄 License

This project is open-source and available under the MIT License(LICENSE).
