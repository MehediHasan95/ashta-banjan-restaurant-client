import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Authentication = () => {
  const [toggle, setToggle] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { userSignUp, userSignIn, userProfileUpdate, signInWithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleAuthentication = (e) => {
    e.preventDefault();
    setLoader(true);
    const displayName = e?.target?.displayName?.value;
    const email = e?.target?.email?.value;
    const password = e?.target?.password?.value;
    const agree = e?.target?.agree?.checked;

    if (agree) {
      userSignUp(email, password)
        .then((res) => {
          userProfileUpdate(displayName)
            .then(() => {
              const data = {
                uid: res?.user?.uid,
                displayName,
                email,
                photoURL: null,
              };
              axios
                .post(
                  "https://ashta-banjan-restaurant-server-mehedihasan95.vercel.app/user",
                  data
                )
                .then((res) => {
                  if (res.status === 200) {
                    navigate(from, { replace: true });
                  }
                });
              setLoader(false);
            })
            .catch((err) => {
              setLoader(false);
              setErrMsg(err.code);
            });
        })
        .catch((err) => {
          setLoader(false);
          setErrMsg(err.code);
        });
    } else {
      userSignIn(email, password)
        .then(() => {
          navigate(from, { replace: true });
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
          setErrMsg(err.code);
        });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        const { uid, displayName, email, photoURL } = res.user;
        const data = { uid, displayName, email, photoURL };
        axios
          .post(
            "https://ashta-banjan-restaurant-server-mehedihasan95.vercel.app/user",
            data
          )
          .then((res) => {
            if (res.status === 200) {
              navigate(from, { replace: true });
            }
          });
      })
      .catch((err) => {
        setErrMsg(err.code);
      });
  };

  return (
    <div className="min-h-[80vh] max-w-screen-2xl mx-auto grid place-items-center">
      <Helmet>
        <title>Login - Ashta Banjan</title>
      </Helmet>
      <div className="w-11/12 md:w-3/6 lg:w-2/6 p-5 bg-chineseBlack">
        <form onSubmit={handleAuthentication}>
          <h1 className="text-2xl text-white my-5 text-center uppercase">
            {toggle ? "Sign Up" : "Sign In"}
          </h1>
          {toggle && (
            <input
              type="text"
              name="displayName"
              className="w-full p-3 mb-3 border focus:outline-deepbeer"
              placeholder="Username"
              required
            />
          )}
          <input
            type="email"
            name="email"
            className="w-full p-3 mb-3 border focus:outline-deepbeer"
            placeholder="Email ID"
            required
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="w-full p-3 mb-3 border focus:outline-deepbeer"
              placeholder="Password"
              required
            />
            <FontAwesomeIcon
              onClick={() => setShowPass(!showPass)}
              icon={showPass ? faLockOpen : faLock}
              className="absolute top-4 right-4 cursor-pointer"
            />
          </div>
          <button className="w-full p-3 border-none bg-beer hover:bg-deepbeer text-white">
            {toggle ? (
              <>
                {loader ? (
                  <span className="loading loading-bars loading-xs"></span>
                ) : (
                  "Sign Up"
                )}
              </>
            ) : (
              <>
                {loader ? (
                  <span className="loading loading-bars loading-xs"></span>
                ) : (
                  "Sign In"
                )}
              </>
            )}
          </button>

          {toggle && (
            <div className="text-white my-2">
              <input type="checkbox" name="agree" className="me-2" required />I
              agree to the{" "}
              <span className="text-beer underline cursor-pointer">
                terms & conditions
              </span>
            </div>
          )}
        </form>

        <p className="text-center my-3 text-red-500">{errMsg}</p>

        <div className="flex flex-col w-full">
          <div className="text-center text-white my-5">
            <span>
              {toggle ? "Already have an account" : "Don't have an account"}
            </span>
            <button
              onClick={() => setToggle(!toggle)}
              className="text-beer hover:underline hover:text-deepbeer ms-2"
            >
              {toggle ? "Sign In" : "Sign Up"}
            </button>
          </div>
          {toggle || (
            <button
              onClick={handleGoogleSignIn}
              className="w-3/6 mx-auto p-2  border hover:bg-white bg-opacity-90 text-white hover:text-chineseBlack rounded-full"
            >
              Google
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
