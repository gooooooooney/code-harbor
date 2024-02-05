import { Stripe, loadStripe } from '@stripe/stripe-js';
import { env } from '../env.mjs';

let stripePromise: Promise<Stripe | null>;
const getStripe = (connectedAccountId?: string) => {
  if (!stripePromise) {
    stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""), {
      stripeAccount: connectedAccountId,
    };
  }
  return stripePromise;
};

export default getStripe;
