import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://ashta-banjan-restaurant-server-mehedihasan95.vercel.app",
});

const useAxiosSecure = () => {
  const { userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.authorization = token;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          userSignOut().then(() => {
            navigate("/auth");
          });
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, userSignOut]);

  return [axiosSecure];
};

export default useAxiosSecure;
