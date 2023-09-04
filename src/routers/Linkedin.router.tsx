import { useEffect } from "react";
import RouterInfo from "./RouterInfo.router";

const Linkfold = () => {
  useEffect(() => {
    window.location.href = "https://linkedin.com/in/vismayilov";
  }, []);

  return <RouterInfo to="Linkedin page" />;
};

export default Linkfold;
