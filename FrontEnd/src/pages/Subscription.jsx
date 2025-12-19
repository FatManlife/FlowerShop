import api from "../api/api";
import SubscriptionFAQ from "../components/subscription/SusbscriptionFaq";
import { useFetchData } from "../hooks/useFetchData";
import SubscriptionCard from "../components/card/SubscriptionCard";
import Counter from "../components/Counter";
import { useAuth } from "../services/AuthContext";
import { useState } from "react";
import { subscriptionImgs } from "../constants/img";

const Subscription = () => {
    const { data, loading, error } = useFetchData("/subscription");
    const { authId } = useAuth();

    const [subscriptionId, setSubscriptionId] = useState(0);
    const [frequency, setFrequency] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleCheckout = async () => {
        if (!authId) {
            alert("Please log in to proceed to checkout.");
            return;
        }
        if (frequency === 0 || quantity === 0) {
            alert("Please select delivery frequency and quantity.");
            return;
        }
        try {
            await api.post("/subscription", {
                frequency: frequency,
                quantity: quantity,
                customer_id: authId,
                subscription_id: subscriptionId,
            });
            alert("Checkout successful!.");
            setFrequency(0);
            setQuantity(0);
            setSubscriptionId(0);
        } catch (error) {
            console.error("Checkout error:", error);
            alert("An error occurred during checkout. Please try again.");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="max-w-7xl mx-auto border-l border-r">
            {/*Fower Subscription*/}
            <div className="grid grid-cols-2 border-b">
                <img
                    src={subscriptionImgs.img1}
                    className="h-full object-cover"
                />
                <div className="flex flex-col justify-center items-start py-26 px-10 border-l">
                    <h1 className="text-5xl mb-8">Flower Subscription</h1>
                    <ul>
                        <li className="mb-6">
                            <h2 className="text-black">For Yourself</h2>
                            <div className="flex items-start gap-3 mt-1">
                                <span className="w-1 h-1 bg-black rounded-full mt-2 shrink-0" />
                                <p className="text-gray-800 font-normal">
                                    The perfect way to keep your home fresh and
                                    beautiful, Get a regular delivery of
                                    stunning bouquets straight to your doorstep
                                    without lifting a finger. Enjoy the beauty
                                    and fragrance of fresh flowers hassle-free!
                                </p>
                            </div>
                        </li>
                        <li className="mb-6">
                            <h2 className="text-black">As a Gift</h2>
                            <div className="flex items-start gap-3 mt-1">
                                <span className="w-1 h-1 bg-black rounded-full mt-2 shrink-0" />
                                <p className="text-gray-800 font-normal">
                                    Simply provide us with their address and let
                                    us take care of the rest, delivering
                                    beautiful blooms straight to their doorstep
                                    at the frequency and duration of your
                                    choosing.
                                </p>
                            </div>
                        </li>
                        <li className="mb-6">
                            <h2 className="text-black">For Business</h2>
                            <div className="flex items-start gap-3 mt-1">
                                <span className="w-1 h-1 bg-black rounded-full mt-2 shrink-0" />
                                <p className="text-gray-800 font-normal">
                                    s a great way to create a pleasant
                                    atmosphere and leave a good impression on
                                    your guests and customers. Fresh floral
                                    arrangements will improve the aesthetic
                                    image of your business, and our service
                                    guarantees timely replacement without extra
                                    care or effort on your part.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <button className="bg-white border text-black px-8 py-5 text-xl font-medium tracking-wide hover:bg-black hover:text-white transition-colors">
                        EXPLORE PLANS
                    </button>
                </div>
            </div>

            {/*How does it work*/}
            <div className="grid grid-cols-2 h-full border-b">
                {/* Right half */}
                <div className="pl-16 pt-18">
                    <h1 className="text-4xl font-semibold mb-6">
                        How does it work?
                    </h1>
                </div>
                {/* Left half */}
                <div className="grid grid-rows-3 border-l border-black">
                    <div className="p-13 pb-0 pl-16 pt-16 border-b">
                        <div className="max-w-lg">
                            <h1 className="text-4xl  text-black mb-8 leading-tight">
                                Choose a plan
                            </h1>
                            <p className="text-sm leading-relaxed text-black mb-14">
                                Select the subscription plan that suits you best
                                from our three bouquet designs: classic,
                                seasonal, and deluxe. Each plan comes with a
                                designer vase, free delivery, and a discount of
                                up to 30%. Our seasonal and deluxe plans also
                                include a luxurious scented candle to enhance
                                the ambiance.
                            </p>
                        </div>
                    </div>
                    <div className="p-13 pb-0 pl-16 pt-16 border-b">
                        <div className="max-w-lg ">
                            <h1 className="text-4xl  text-black mb-8 leading-tight">
                                Frequency and Duration
                            </h1>
                            <p className="text-sm leading-relaxed text-black mb-14">
                                Choose delivery frequency: once a week, every
                                two weeks, or once a month. Then, select your
                                subscription duration from 3 to 12 months. Enjoy
                                savings with a longer subscription. We
                                understand that every customer has different
                                needs, and we aim to provide flexible
                                subscription options that cater to your specific
                                preferences.
                            </p>
                        </div>
                    </div>
                    <div className="p-13 pb-0 pl-16 pt-16">
                        <div className="max-w-lg ">
                            <h1 className="text-4xl  text-black mb-8 leading-tight">
                                Pay once
                            </h1>
                            <p className="text-sm leading-relaxed text-black mb-14">
                                After entering your contact and delivery
                                information and paying for your subscription,
                                you can sit back and relax, knowing that you
                                have secured a regular supply of fresh, stunning
                                flowers for yourself or your loved ones
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*Selecting a plan*/}
            <div className="grid grid-cols-2 border-b">
                {/* Left half */}
                <div className="flex flex-col px-9 py-18 border-r items-center">
                    <div className="max-w-lg">
                        <p className="text-xs mb-4 text-black ">
                            BUILD YOUR SUBSCRIPTION
                        </p>
                        <h1 className="text-4xl text-black mb-5 leading-tight">
                            Selecting a plan
                        </h1>
                        <p className="text-sm leading-relaxed text-black mb-6">
                            Choose the subscription that best fits your needs.
                            Whether you’re looking for a simple starter plan or
                            a premium experience with all the perks, we have a
                            plan designed to give you the most value and
                            flexibility. Upgrade anytime as your needs grow!
                        </p>
                        {data.map((subscription) => (
                            <SubscriptionCard
                                subscriptionId={subscriptionId}
                                setSubscriptionId={setSubscriptionId}
                                subscription={subscription}
                                key={subscription.id}
                            />
                        ))}
                        <div className="border-t border-gray-300 my-8" />
                        {/* Flowers Delivery Note */}
                        <div>
                            <h1 className="text-2xl mb-4">
                                How do you want your flowers delivered?
                            </h1>
                            <p className="text-sm mb-4">
                                Select delivery frequency
                            </p>
                            <div className="grid grid-cols-3 mb-4">
                                <button
                                    className={`${
                                        frequency === 7
                                            ? "bg-black text-white"
                                            : "bg-white text-black"
                                    } border px-5 py-3 mr-4`}
                                    onClick={() => setFrequency(7)}
                                >
                                    Weekly
                                </button>
                                <button
                                    className={`${
                                        frequency === 14
                                            ? "bg-black text-white"
                                            : "bg-white text-black"
                                    } border px-5 py-3 mr-4`}
                                    onClick={() => setFrequency(14)}
                                >
                                    Bi-weekly
                                </button>
                                <button
                                    className={`${
                                        frequency === 28
                                            ? "bg-black text-white"
                                            : "bg-white text-black"
                                    } border px-5 py-3 mr-4`}
                                    onClick={() => setFrequency(28)}
                                >
                                    Monthly
                                </button>
                            </div>
                        </div>
                        <div className="border-t border-gray-300 my-8" />
                        <div>
                            {/* How often Note */}
                            <div>
                                <h1 className="text-2xl mb-4">
                                    How many deliveries would you like?
                                </h1>
                                <p className="text-sm mb-4">
                                    Pay once and don't worry about flowers, our
                                    bouquets will be delivered automatically
                                    according to your selected frequency.
                                </p>
                                <Counter
                                    val={quantity}
                                    onChange={setQuantity}
                                />
                            </div>
                        </div>
                        <div className="border-t border-gray-300 my-8" />
                        <button
                            onClick={handleCheckout}
                            className="w-full bg-black text-white py-3 uppercase"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
                {/* Right half */}
                <div>
                    <img
                        src={subscriptionImgs.img2}
                        className="w-full object-cover"
                    />
                </div>
            </div>

            {/*Faq */}
            <div className="flex justify-center items-center py-20 bg-gray-100">
                <SubscriptionFAQ />
            </div>
        </div>
    );
};

export default Subscription;
