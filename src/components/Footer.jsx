function Footer() {
  return (
    <footer
      className="w-full mt-10 py-6 px-4 text-center"
      style={{
        backgroundColor: "var(--card-bg)",
        color: "var(--text-color)",
      }}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Utkarsh Turkane. All rights reserved.
      </p>
      <p className="text-sm mt-1">
        📍 406, Bhavani View, Virar West, Mumbai 401303 | 📞 +91 9004993358 | 📧{" "}
        <a
          href="mailto:utkarshturkane@gmail.com"
          className="underline hover:text-blue-600"
        >
          utkarshturkane@gmail.com
        </a>
      </p>
    </footer>
  );
}

export default Footer;
