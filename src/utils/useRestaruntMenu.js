import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/const.js";
const useRestaurauntMenu = (resid) => {
  const [resinfo, setResinfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resid);

    const json = await response.json();

    setResinfo(json.data);
  };
  return resinfo;
};
export default useRestaurauntMenu;
