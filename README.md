# Simpler Technologies React Assignment

This project is a professional, accessible, and optimized React app built with Vite and Tailwind CSS.

## Assignment Tasks & Features

### 1. Sign-Up Page

- Responsive sign-up form with fields: Full Name, Email Address, Password
- Client-side validation with clear error and success messages
- Accessible (aria-labels, semantic HTML)
- Loading indicator and user feedback
- Neatly styled with Tailwind CSS

### 2. Navigation Bar

- Responsive navbar with links: Home, About, Contact, Sign Up
- Hamburger menu for mobile
- Accessible navigation (aria-labels, semantic <nav>)
- Smooth transitions and large touch targets

### 3. <UserCard /> Component

- Displays user name and email in a card layout
- Card uses border, shadow, padding, and subtle hover animation
- Image avatar is lazy-loaded for performance
- Uses PropTypes for type safety

### 4. Additional Features & Optimizations

- Code splitting with React.lazy and Suspense
- SEO meta tags with React Helmet
- ErrorBoundary for catching UI errors
- 404 Not Found page for unknown routes
- PWA-ready: manifest.json and favicon support
- Mobile-first, fully responsive design
- Code comments and best practices throughout

## Accessibility & UX

- All forms and buttons have aria-labels
- Color contrast checked for accessibility
- Semantic HTML: <main>, <nav>, <form>, <section>
- Large, easy-to-tap buttons and inputs
- Animations for focus/hover states

## Project Structure

```
src/
	components/
		Navbar.jsx
		UserCard.jsx
		ErrorBoundary.jsx
	pages/
		Home.jsx
		About.jsx
		Contact.jsx
		Signup.jsx
		NotFound.jsx
	App.jsx
	main.jsx
public/
	favicon.ico
	manifest.json
	index.html
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Notes

- Built with React, Vite, and Tailwind CSS
- Follows best practices for accessibility, performance, and code quality

---

**Assignment by Simpler Technologies.**
