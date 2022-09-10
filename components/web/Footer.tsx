import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center text-light secondary-font pb-5">
      &copy; Dev by{" "}
      <Link href="/">
        <a className="text-light fw-bold">Valeh Ismayilov</a>
      </Link>
    </div>
  );
};

export default Footer;
