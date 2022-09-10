const Header = ({ schema }: any) => {
  const schemas : any = {
    portfolio: {
      title: "Valeh Ismayilov",
      subtitle: "Portoflio",
    },
  };

  return (
    <>
      <div className="text-light fs-1 text-center fw-bold pt-5">
        {schemas[schema].title}
      </div>
      <div className="text-center fs-5 fw-bold secondary-font pb-5 text-light">
        {schemas[schema].subtitle}
      </div>
    </>
  );
};

export default Header;
