const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="p-4 bg-[#FFB2EF] border-[4px] border-black flex justify-between">
      <div>&copy; {year}. All rights reserved.</div>
      <div className="flex gap-3">
        <a
          target="_blank"
          href="https://linkedin.com/in/vismayilov"
          className="external hover:underline"
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          href="https://instagram.com/ismavaleh"
          className="external hover:underline"
        >
          Instagram
        </a>
        <a
          target="_blank"
          href="mailto:valeh@opencnt.com"
          className="external hover:underline"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
