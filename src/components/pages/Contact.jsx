import { Helmet } from "react-helmet-async";
import banner from "../../assets/contactbanner.jpg";
import CoverPhoto from "../shared/CoverPhoto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Helmet>
        <title>Contact - Ashta Banjan</title>
      </Helmet>
      <CoverPhoto
        image={banner}
        title={"Contact Us"}
        bio={"Would you like to try a dish?"}
      />
      <div className="text-center my-20">
        <p className="text-beer italic">---Visit Us---</p>
        <h1 className="text-4xl font-bold mt-2">
          OUR <span className="text-beer">LOCATION</span>
        </h1>
      </div>
      <div className="flex justify-center space-x-5">
        <div className="w-3/12 text-center border">
          <p className="py-2 bg-beer text-white">
            <FontAwesomeIcon icon={faPhone} />
          </p>
          <div className="py-10 mx-3 mb-3 bg-base-200">
            <h1 className="text-xl font-bold uppercase">Phone</h1>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="w-3/12 text-center border">
          <p className="py-2 bg-beer text-white">
            <FontAwesomeIcon icon={faPhone} />
          </p>
          <div className="py-10 mx-3 mb-3 bg-base-200">
            <h1 className="text-xl font-bold uppercase">Address</h1>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="w-3/12 text-center border">
          <p className="py-2 bg-beer text-white">
            <FontAwesomeIcon icon={faPhone} />
          </p>
          <div className="py-10 mx-3 mb-3 bg-base-200">
            <h1 className="text-xl font-bold uppercase">Working Our</h1>
            <p>Mon - Fri: 08:00 - 22:00</p>
          </div>
        </div>
      </div>

      <div className="text-center my-20">
        <p className="text-beer italic">---Send Us a Message---</p>
        <h1 className="text-4xl font-bold mt-2">
          CONTACT <span className="text-beer">FORM</span>
        </h1>
      </div>
      <div className="my-20 p-5 lg:p-10 bg-base-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            <input
              type="text"
              {...register(
                "name",
                { required: true },
                { pattern: /^[A-Z a-z]+$/i }
              )}
              className="w-[49%] p-3 mb-3 border-none focus:outline-beer"
              placeholder="Enter your name"
            />
            <input
              type="email"
              {...register(
                "email",
                { required: true },
                { pattern: /^[\S+@\S]+$/i }
              )}
              className="w-[49%] p-3 mb-3 border-none focus:outline-beer"
              placeholder="Enter your email"
            />
          </div>
          <input
            type="text"
            {...register("phone", { required: true })}
            className="w-full p-3 mb-3 border-none focus:outline-beer"
            placeholder="Enter your phone"
          />
          <textarea
            rows="10"
            {...register("message", { required: true })}
            className="w-full p-3 mb-3 border-none focus:outline-beer"
            placeholder="Type your message here"
          ></textarea>
          <p className="text-center">
            <button className="w-3/6 lg:w-3/12 p-3 border-none outline-none bg-beer hover:bg-deepbeer text-white">
              Submit <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
