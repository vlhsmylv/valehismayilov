import { useEffect } from "react";
import RouterInfo from "./RouterInfo.router";

const Linkfold = () => {
  useEffect(() => {
    window.location.href = "https://linkfold-phi.vercel.app/valehismayilov";
  }, []);

  return <RouterInfo to="Linkfold page" />;
};

export default Linkfold;
