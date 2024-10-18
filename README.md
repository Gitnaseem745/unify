# Contact Management App
**Note:** Demo Image Contact Data Is Fake! and Final Project Design Differs Slightly from Figma.

![demoImg](https://github.com/Gitnaseem745/unify/blob/main/src/assets/demoImg.png)

A Contact Management web app built using **Vite** and **React**, with **Firebase** as the backend for managing contacts. This app allows users to add, update, delete, and favorite their contacts, while maintaining the contact data in a Firebase Firestore database.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Setup](#project-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Live Demo](#live-demo)
- [Notes for Live Demo](#notes-for-live-demo)

---

## Features
- **Add Contact:** Users can add new contacts with details such as name, phone number, email, tag, and type.
- **Update Contact:** Existing contact details can be updated.
- **Delete Contact:** Contacts can be deleted.
- **Favorite Contacts:** Mark contacts as favorite and filter them accordingly.
- **Modal Forms:** Adding and updating contacts are done through modals to enhance user experience.
- **Responsive Design:** Fully responsive design using Tailwind CSS for optimal viewing on different screen sizes.
- **Animation:** Framer Motion for Modal Animation

---

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Firebase (Firestore for database, Storage for image uploads)
- **Deployment:** Vercel

---

## Getting Started

These instructions will help you set up the project locally.

### Prerequisites
- Node.js installed on your machine
- Firebase project set up (for database and storage)

---

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Gitnaseem745/unify.git
   cd unify
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project.
   - Set up Firebase Firestore and Firebase Storage.
   - Get the Firebase config from the Firebase console.

4. **Add environment variables:**

   In the root directory, create a `.env` file and add your Firebase environment variables. 

   Example:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

   This will start the app locally at [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Make sure you create a `.env` file in your root directory for local development and add the Firebase keys like this:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

**Note:** If you deploy on Vercel, you need to add these same variables in Vercel's Environment Variables section.

---

## Usage

- After setting up the project, navigate to the application in your browser.
- You can add, update, delete, and favorite contacts.
- All contact data is stored in Firebase Firestore.
- You can search for contacts and filter favorites.

---

## Live Demo

You can check out a live demo of the app here: [Live Demo](https://unify-kappa.vercel.app/)
And Design of this app is available here: [Figma Design](https://www.figma.com/design/Q8ilZFMmxkr11AppBNG5HN/Contact-App-UI?node-id=0-1&t=4AUAQODkf1H1ecLr-1)


---

## Notes for Live Demo

- The **Add Contact** feature works in the live demo, but only for text fields (Name, Number, Email, etc.).
- **Image upload is disabled** in the live demo. Any attempt to upload images will not be processed.
- Contacts added through the live demo are temporary and will not persist.



