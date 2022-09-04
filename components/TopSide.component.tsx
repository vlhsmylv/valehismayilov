import Link from "next/link";

const TopSide = () => {
  const social: { ref: string; icon: string; title: string }[] = [
    {
      ref: "https://instagram.com",
      icon: "fa-brands fa-instagram",
      title: "Instagram",
    },
    {
      ref: "https://www.linkedin.com/in/valeh-ismayilov-453576224/",
      icon: "fa-brands fa-linkedin-in",
      title: "Linkedin",
    },
  ];

  return (
    <header className="text-center" style={{
      marginTop: "100px"
    }}>
      <div className={"fs-1 fw-bold"}>Valeh Ismayilov</div>
      <div className={"d-flex gap-3 justify-content-center mt-3"}>
        {social.map((acc: any, i: number) => (
          <Link href={acc.ref} key={i}>
            <a target="_blank" className={"btn btn-dark text-light border rounded-circle fs-5"} title={acc.title} rel={"noreferrer"}>
              <i className={acc.icon}></i>
            </a>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default TopSide;
