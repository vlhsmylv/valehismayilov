const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="p-4 bg-[#FFB2EF] border-[4px] border-black flex justify-between">
      <div>&copy; {year}. All rights reserved.</div>
      <div>
        <a
          target="_blank"
          href="https://linkfold-phi.vercel.app/valehismayilov"
          className="hover:underline"
        >
          Links
        </a>
      </div>
    </footer>
  );
};

export default Footer;
