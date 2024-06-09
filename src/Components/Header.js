import { LOGO_URL } from "../utils/const";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnreact, setbtnreact] = useState("Login");
  const onlinestatus = useOnlineStatus();
  //const { login } = useContext(userContext);

  //const [userName, setuserName] = useState();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // useEffect(() => {
  //   const data = { login: "Uday Shankar Paidimarri" };
  //   setuserName(data);
  // }, []);

  return (
    <div className="flex justify-between shadow-xl  m-3 bg-slate-400">
      <div className="w-40">
        <img src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">OnlineStatus:{onlinestatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>

          <li className="px-4">
            <Link to="/grocery" style={{ textDecoration: "none" }}>
              Grocery
            </Link>
          </li>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <li className="text-2xl px-4 font-bold ">🛒 ({cartItems.length})</li>
          </Link>
          <li className="px-4">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              Contact
            </Link>
          </li>

          <li className="px-4">
            <button
              onClick={() => {
                setbtnreact(btnreact === "Login" ? "Logout" : "Login");
              }}
            >
              {btnreact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
