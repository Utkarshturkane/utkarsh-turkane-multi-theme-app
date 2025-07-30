function Contact() {
  return (
    <section className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      <p className="text-lg contact-paragraph">
        We'd love to hear from you! Feel free to reach out using the details
        below or drop us a message through the contact form.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Phone</h2>
          <p className="text-base">📞 +91 9004993358</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-base">
            📧{" "}
            <a
              href="mailto:utkarshturkane@gmail.com"
              className="underline hover:text-blue-500"
            >
              utkarshturkane@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Address</h2>
          <p className="text-base">
            🏠 406, Bhavani View, Virar West,
            <br />
            Mumbai - 401303
          </p>
        </div>
      </div>

      {/* Optional Contact Form (Non-functional, placeholder) */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold mb-2">Send us a message</h2>
        <form
          action="https://formspree.io/f/xgvzzvbb" // ⬅️ Replace with your actual Formspree form URL
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded dark:bg-gray-900 dark:border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded dark:bg-gray-900 dark:border-gray-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full p-3 border rounded dark:bg-gray-900 dark:border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
