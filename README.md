# Login Frontend (Angular 17)

A cresponsive login & signup interface built using **Angular 17 (Standalone Components)**.  
This frontend connects with a Node.js + Express backend to perform authentication, rate-limited login attempts, and protected routing.

Deployed publicly using **Render Static Hosting**.

---

## ✨ Features

- Login form (email + password)
- Signup form (name, email, password)
- Angular Route Guard for protected `success` page
- Centralized API service (`AuthService`)
- Mobile-responsive UI
- Communicates with backend over REST API
- Client-side routing (Login → Signup → Success)
- Render deployment (Static Site)

---

## 🛠 Tech Stack

- **Angular 17** (Standalone Components)
- **TypeScript**
- **HTML / CSS**
- **Render (Static Hosting)**

---

## 📁 Folder Structure

├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── login/
│ │ │ ├── signup/
│ │ │ └── success/
│ │ ├── guards/
│ │ ├── services/
│ │ ├── app.routes.ts
│ │ ├── app.config.ts
│ │ └── app.component.*
│ ├── index.html
│ ├── main.ts
│ └── styles.css
├── angular.json
├── package.json
└── tsconfig.json
