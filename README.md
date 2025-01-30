# HyperSpace

A platform for connecting clients with rented warehouses for AI-driven product management and hyperlocal deliveries.

This project is split into two parts:
1. **Backend** (located at `HyperSpace/Backend`)  
2. **Frontend** (located at `HyperSpace/Frontend`)

Below is a brief overview, setup steps, file structure, and references to help you get the application running quickly—especially useful for hackathons.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [References](#references)
- [License](#license)

---

## Project Overview
HyperSpace provides:
- An inventory management system allowing products to be tracked across multiple warehouses.
- A client-facing interface to view, add, or update product and warehouse data.
- A warehouse-facing interface to manage stock levels, transactions, etc.

---

## Tech Stack

| Area     | Technology            | Website/Docs                                                     |
|----------|-----------------------|------------------------------------------------------------------|
| Frontend | [Next.js & React](https://nextjs.org/docs)  | Built with Next.js (React-based framework).                      |
| Backend  | Python (with SQLite) | Uses Python for backend logic and a lightweight SQLite database. |
| Styling  | Tailwind CSS         | [Tailwind Docs](https://tailwindcss.com/docs).                   |
| Toasts   | React Toastify       | [React Toastify](https://fkhadra.github.io/react-toastify/)      |

---

## Backend Setup
1. **Requirements**  
   - Python 3.x installed.
   - (Optional) A virtual environment to keep dependencies clean.

2. **Install Dependencies**  
   - Navigate to `HyperSpace/Backend1` in the terminal.
   - If dependencies exist in a `requirements.txt` (or within the notebook), install them via:
     ```bash
     pip install -r requirements.txt
     ```
   - Alternatively, install relevant libraries (like `sqlite3`, `hashlib`, etc.) as needed.

3. **Run the Backend**  
   - If the backend is just a Python file (e.g., `main.py` or a function within [test.ipynb](http://_vscodecontentref_/8)), launch it:
     ```bash
     python main.py
     ```
   - Or open [test.ipynb](http://_vscodecontentref_/9) in a Jupyter environment to run specific notebook cells.
   - Confirm the backend is listening or ready (for example, if you set up Flask or FastAPI, ensure the app runs on a chosen port).

---

## Frontend Setup
1. **Requirements**  
   - Node.js (16+) and npm or yarn.

2. **Install Dependencies**  
   - Navigate to [Frontend](http://_vscodecontentref_/10) in the terminal.
   - Run:
     ```bash
     npm install
     ```
     or
     ```bash
     yarn
     ```

3. **Run the Frontend**  
   - While still in [Frontend](http://_vscodecontentref_/11), start the dev server:
     ```bash
     npm run dev
     ```
     or
     ```bash
     yarn dev
     ```
   - Open [http://localhost:3000](http://localhost:3000/) to view the application in your browser.

---

## References
- **Next.js Documentation**:  
  [https://nextjs.org/docs](https://nextjs.org/docs)
- **React**:  
  [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
- **Tailwind CSS**:  
  [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Python**:  
  [https://docs.python.org/3/](https://docs.python.org/3/)
- **SQLite**:  
  [https://sqlite.org/docs.html](https://sqlite.org/docs.html)

---

## License
MIT License. Free to use, modify, and distribute.

---


Enjoy building with HyperSpace!
