import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import moment from "moment/moment";

const CheckoutForm = ({ data, chargeAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(null);
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const [address, setAddress] = useState(null);
  const [processing, setProcessing] = useState(false);
  const { register, handleSubmit } = useForm();
  const time = moment().format("LLLL");

  const onSubmit = (data) => {
    setAddress(data);
  };

  useEffect(() => {
    if (chargeAmount > 0) {
      axiosSecure
        .post("/create-payment-intent", { chargeAmount })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [axiosSecure, chargeAmount]);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setProcessing(false);
      setErrMsg(error.message);
    } else {
      setErrMsg("");
    }

    const { paymentIntent, err } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      }
    );
    if (err) {
      setProcessing(false);
      setErrMsg(err.message);
    } else {
      setSuccessMsg(paymentIntent);
      const paymentInfo = {
        uid: user?.uid,
        displayName: user?.displayName,
        email: user?.email,
        transactionId: paymentIntent?.id,
        chargeAmount,
        orderItems: data,
        address,
        time,
        status: false,
      };
      axiosSecure.post("/payment", paymentInfo).then((res) => {
        if (res.data.acknowledged) {
          setProcessing(false);
        }
      });
    }
  };

  return (
    <div className="min-h-[70vh] grid place-items-center">
      {successMsg ? (
        <div className="text-center">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-5xl text-green-600 mb-3"
          />
          <p>Your payment {successMsg.status}</p>
          <p>Your transactionID: {successMsg.id}</p>
          {}
        </div>
      ) : (
        <>
          {address ? (
            <form
              onSubmit={handlePaymentSubmit}
              className="w-11/12 lg:w-2/5 bg-base-300 p-5"
            >
              <h1 className="text-2xl mb-5 font-semibold">Payment Details</h1>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />

              <div className="flex justify-between items-center mt-5">
                <button
                  type="submit"
                  disabled={!stripe || !clientSecret}
                  className={`w-3/4 p-2 ${
                    stripe && clientSecret
                      ? "bg-cyan-500 hover:bg-cyan-600"
                      : "bg-gray-400"
                  }  text-white flex justify-center items-center`}
                >
                  {processing ? (
                    <>
                      <span className="me-2">Pay Now</span>
                      <span className="loading loading-spinner loading-xs"></span>
                    </>
                  ) : (
                    "Pay Now"
                  )}
                </button>
                <button
                  onClick={() => setAddress(null)}
                  className="w-[24%] p-2 text-white border bg-red-600 hover:bg-red-700"
                >
                  Cancle
                </button>
              </div>
              {errMsg && (
                <p className="mt-3 text-center text-red-500">{errMsg}</p>
              )}
              {successMsg && (
                <p className="mt-3 text-center text-green-500">
                  Your payment {successMsg}
                </p>
              )}
            </form>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-11/12 lg:w-2/5 p-5 border"
            >
              <h1 className="my-5 text-center">Add Delivery Address</h1>
              <input
                type="text"
                defaultValue={user?.displayName}
                {...register("displayName", { required: true })}
                className="w-full p-3 mb-3 border focus:outline-beer"
                placeholder="Name"
              />
              <input
                type="email"
                defaultValue={user?.email}
                {...register("email", { required: true })}
                className="w-full p-3 mb-3 border focus:outline-beer"
                placeholder="Email"
              />
              <input
                type="text"
                {...register("address", { required: true })}
                className="w-full p-3 mb-3 border focus:outline-beer"
                placeholder="Address"
              />
              <button className="w-full p-3 bg-beer hover:bg-deepbeer text-white">
                CONFIRM ORDER
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
