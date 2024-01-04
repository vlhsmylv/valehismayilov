
const Navbar = () => {
  return (
    <nav className="flex flex-wrap p-4 gap-7 items-center justify-center bg-gray-100 border-[4px] border-black">
      <a href="#" className="text-xl hover:underline">
        Home
      </a>
      <a href="#about" className="text-xl hover:underline">
        About
      </a>
      <a href="#my-skills" className="hover:underline text-xl">
        My Skills
      </a>
      <a href="#portfolio" className="hover:underline text-xl">
        Portfolio
      </a>
      {/* TODO: ENABLE BLOG */}
      {/* <a href="/blog" className="hover:underline text-xl">
        Blog
      </a> */}
      {/* <a href="/github" className="hover:underline text-xl">
        Github
      </a> */}
      <a href="#contact" className="hover:underline text-xl">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
