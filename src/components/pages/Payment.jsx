import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../hooks/useCart";
const stripePromise = loadStripe(`${import.meta.env.VITE_APP_PAYMENT_KEY}`);

const Payment = () => {
  const [data] = useCart();

  const chargeAmount = data.reduce(
    (previous, current) => previous + current.price,
    0
  );

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} chargeAmount={chargeAmount} />
      </Elements>
    </div>
  );
};

export default Payment;
