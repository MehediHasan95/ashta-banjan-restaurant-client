import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faShop,
  faShoppingBag,
  faStar,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const MyDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1 className="text-3xl">Hi, Welcome Back!</h1>
      <div className="grid gap-3 lg:grid-cols-3 my-5">
        <div className="col-span-1 bg-beer text-white p-8 flex space-x-3 justify-center items-center bg-gradient-to-r from-[#C651F7] to-[#FCDBFF]">
          <FontAwesomeIcon icon={faWallet} className="text-6xl" />
          <p className="text-2xl">
            205 <br /> Menu
          </p>
        </div>
        <div className="col-span-1 bg-beer text-white p-8 flex space-x-3 justify-center items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
          <FontAwesomeIcon icon={faShop} className="text-6xl" />
          <p className="text-2xl">
            103 <br /> Shop
          </p>
        </div>
        <div className="col-span-1 bg-beer text-white p-8 flex space-x-3 justify-center items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
          <FontAwesomeIcon icon={faPhoneVolume} className="text-6xl" />
          <p className="text-2xl">
            03 <br /> Contact
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="col-span-1 bg-[#FFEDD5] flex justify-center items-center h-96 border-r-4 border-beer">
          <div className="text-center">
            <div className="avatar">
              <div className="w-52 rounded-full border-4 border-beer">
                <img
                  src={
                    (user && user?.photoURL) ||
                    "https://i.pinimg.com/564x/0b/bf/e9/0bbfe96d4949d0c7732008839535b7a3.jpg"
                  }
                  alt="profile"
                />
              </div>
            </div>
            <h1 className="text-center text-2xl uppercase mt-5">
              {user && user?.displayName}
            </h1>
          </div>
        </div>
        <div className="col-span-1 bg-[#FEF9C3] flex justify-center items-center h-96">
          <div>
            <h1 className="text-3xl mb-5">My Activities </h1>
            <p className="my-1 text-blue-600">
              <FontAwesomeIcon icon={faShoppingBag} /> Orders: 6
            </p>
            <p className="my-1 text-green-600">
              <FontAwesomeIcon icon={faStar} /> Reviews: 2
            </p>
            <p className="my-1 text-red-600">
              <FontAwesomeIcon icon={faWallet} /> Payments: 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
