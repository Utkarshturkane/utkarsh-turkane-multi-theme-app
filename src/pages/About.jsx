function About() {
  return (
    <section className="max-w-4xl mx-auto p-6 pt-20 md:pt-0 space-y-6">
      <h1 className="text-3xl font-bold">About Us</h1>

      <p className="text-lg leading-relaxed">
        Welcome to our multi-themed React application! This app is designed to
        showcase how you can switch between completely different UI themes using
        React, Tailwind CSS, and Context API.
      </p>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-2">What’s This App About?</h2>
        <p className="text-base">
          This app allows users to toggle between three distinct themes — a
          minimalist light layout, a dark mode with a sidebar style, and a
          colorful, card-based grid layout. Each theme changes fonts, spacing,
          layout, and color schemes completely.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>React + JSX</li>
          <li>React Router for navigation</li>
          <li>Tailwind CSS for styling and responsiveness</li>
          <li>Context API for global theme management</li>
          <li>LocalStorage for theme persistence</li>
          <li>Framer Motion for subtle animations</li>
          <li>Fake Store API for product data</li>
        </ul>
      </div>

      <p className="text-center text-sm mt-10 opacity-60 footer-text">
        Developed as a part of a frontend assignment by Utkarsh Turkane.
      </p>
    </section>
  );
}

export default About;
