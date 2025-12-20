import { useEffect, useEffectEvent, useState } from "react";
import { useAuth } from "../services/AuthContext";
import { useFetchData } from "../hooks/useFetchData";
import api from "../api/api";

const Checkout = () => {
    const { authId } = useAuth();

    const [refreshKey, setRefreshKey] = useState(0);
    const { data, error, loading } = useFetchData(
        authId ? `/cart/${authId}/item` : null,
        refreshKey
    );

    const [giftCode, setGiftCode] = useState("");
    const [giftCodeDetails, setGiftCodeDetails] = useState(null);
    const [activeSection, setActiveSection] = useState(1);

    //basic
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const [shippingDetails, setShippingDetails] = useState({
        name: "",
        price: 0,
        phone: "",
        delivery_date: "",
        delivery_time: "",
        apartament_nr: "",
        street: "",
    });

    const [paumentInfo, setPaymentInfo] = useState({
        card_number: "",
        month_year: "",
        cvv: "",
    });

    //amount calculation
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(
            (data?.reduce((sum, item) => sum + item.price * item.quantity, 0) +
                shippingDetails.price) *
                (giftCodeDetails ? 1 - giftCodeDetails.discount / 100 : 1)
        );
    }, [shippingDetails.price, data, giftCodeDetails]);

    useEffect(() => {
        if (shippingDetails.delivery_time == "morning") {
            setShippingDetails((prev) => ({ ...prev, price: 20 }));
        } else if (shippingDetails.delivery_time == "afternoon") {
            setShippingDetails((prev) => ({ ...prev, price: 15 }));
        } else if (shippingDetails.delivery_time == "evening") {
            setShippingDetails((prev) => ({ ...prev, price: 10 }));
        } else {
            setShippingDetails((prev) => ({ ...prev, price: 0 }));
        }
    }, [shippingDetails.delivery_time]);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const handleApplyCode = async () => {
        try {
            const id = parseInt(authId);
            const res = await api.post("/gift", {
                name: giftCode,
                customer_id: id,
            });
            setGiftCodeDetails(res.data);
            alert("Gift card applied:", res.data);
        } catch (err) {
            alert("Failed to apply gift card:", err);
        }
    };

    const handlePurchase = async () => {
        try {
            const res = await api.post("/order", {
                email: email,
                name: name,
                phone: phone,
                total_amount: Number(amount),
                customer_id: Number(authId),
                gift_card_id: giftCodeDetails ? giftCodeDetails.id : null,
                shipping: {
                    name: shippingDetails.name,
                    price: shippingDetails.price,
                    phone: shippingDetails.phone,
                    delivery_date: shippingDetails.delivery_date,
                    delivery_time: shippingDetails.delivery_time,
                    apartament_nr: shippingDetails.apartament_nr,
                    street: shippingDetails.street,
                },
                payment: {
                    card_number: paumentInfo.card_number,
                    month_year: paumentInfo.month_year,
                    cvv: paumentInfo.cvv,
                },
            });

            console.log("Purchase successful:", res.data);
        } catch (err) {
            console.error("Failed to purchase:", err);
        } finally {
            // Reset all form states
            setEmail("");
            setName("");
            setPhone("");
            setShippingDetails({
                name: "",
                price: 0,
                phone: "",
                delivery_date: "",
                delivery_time: "",
                apartament_nr: "",
                street: "",
            });
            setPaymentInfo({
                card_number: "",
                month_year: "",
                cvv: "",
            });
            setGiftCode("");
            setGiftCodeDetails(null);
            setAmount(0);
            setActiveSection(1);
            await api.delete(`/cart/${authId}/item`);
            setRefreshKey((prev) => prev + 1);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="max-w-7xl mx-auto border-l border-r">
            <div className="grid grid-cols-2">
                <div className="border-r py-8 px-12">
                    <p className="text-sm mb-4 uppercase text-gray-700">
                        <span
                            className={`${
                                activeSection === 1
                                    ? "text-black"
                                    : "text-gray-700"
                            }`}
                        >
                            Information {">"}{" "}
                        </span>
                        <span
                            className={`${
                                activeSection === 2
                                    ? "text-black"
                                    : "text-gray-700"
                            }`}
                        >
                            Shipping {">"}{" "}
                        </span>
                        <span
                            className={`${
                                activeSection === 3
                                    ? "text-black"
                                    : "text-gray-700"
                            }`}
                        >
                            Payment {">"}
                        </span>
                    </p>

                    {/* Login Banner */}
                    {!authId && (
                        <div className="bg-gray-100 p-4 mb-6">
                            <p className="text-sm text-gray-700">
                                Already have an account?{" "}
                                <a
                                    href="#"
                                    className="text-black underline hover:no-underline"
                                >
                                    Log in
                                </a>{" "}
                                for faster checkout
                            </p>
                        </div>
                    )}

                    {/* Section 1: Contact Information */}
                    <div className="border-b border-gray-300">
                        <button
                            onClick={() => toggleSection(1)}
                            className="w-full text-left py-4 flex items-center justify-between"
                        >
                            <h2 className="text-base font-normal">
                                <span className="mr-2">1</span>Contact
                                information
                            </h2>
                            <svg
                                className={`w-4 h-4 transition-transform ${
                                    activeSection === 1 ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {activeSection === 1 && (
                            <div className="pb-6">
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 px-4 py-3 mb-4 text-sm focus:outline-none focus:border-gray-900"
                                />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 px-4 py-3 mb-4 text-sm focus:outline-none focus:border-gray-900"
                                />
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    placeholder="Your Phone number *"
                                    className="w-full border border-gray-300 px-4 py-3 mb-4 text-sm focus:outline-none focus:border-gray-900"
                                />
                                <button
                                    onClick={() => toggleSection(2)}
                                    className="w-full bg-black text-white py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                                >
                                    Continue to Shipping
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Section 2: Shipping details */}
                    <div className="border-b border-gray-300">
                        <button
                            onClick={() => toggleSection(2)}
                            className="w-full text-left py-4 flex items-center justify-between"
                            disabled={activeSection === 1}
                        >
                            <h2
                                className={`text-base font-normal ${
                                    activeSection === 1
                                        ? "text-gray-400"
                                        : "text-gray-900"
                                }`}
                            >
                                <span className="mr-2">2</span>Shipping details
                            </h2>
                            <svg
                                className={`w-4 h-4 transition-transform ${
                                    activeSection === 2 ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {activeSection === 2 && (
                            <div className="pb-6">
                                <input
                                    value={shippingDetails.name}
                                    onChange={(e) =>
                                        setShippingDetails((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    placeholder="Recipients Name"
                                    className="w-full border border-gray-300 px-4 py-3 mb-4 text-sm focus:outline-none focus:border-gray-900"
                                />
                                <input
                                    value={shippingDetails.phone}
                                    onChange={(e) =>
                                        setShippingDetails((prev) => ({
                                            ...prev,
                                            phone: e.target.value,
                                        }))
                                    }
                                    type="tel"
                                    placeholder="Recipients Phone number *"
                                    className="w-full border border-gray-300 px-4 py-3 mb-4 text-sm focus:outline-none focus:border-gray-900"
                                />

                                {/* Date of Delivery */}
                                <div className="relative mb-4">
                                    <input
                                        value={shippingDetails.delivery_date}
                                        onChange={(e) =>
                                            setShippingDetails((prev) => ({
                                                ...prev,
                                                delivery_date: e.target.value,
                                            }))
                                        }
                                        type="date"
                                        placeholder="Data of Delivery"
                                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
                                    />
                                </div>

                                {/* Delivery Time Dropdown */}
                                <select
                                    value={shippingDetails.delivery_time}
                                    onChange={(e) =>
                                        setShippingDetails((prev) => ({
                                            ...prev,
                                            delivery_time: e.target.value,
                                        }))
                                    }
                                    className="w-full border border-gray-300 px-4 py-3 mb-4 text-sm text-gray-500 focus:outline-none focus:border-gray-900"
                                >
                                    <option value="">Delivery Time</option>
                                    <option value="morning">
                                        Morning (9AM - 12PM)
                                    </option>
                                    <option value="afternoon">
                                        Afternoon (12PM - 5PM)
                                    </option>
                                    <option value="evening">
                                        Evening (5PM - 8PM)
                                    </option>
                                </select>

                                {/* Street and Apartment Number */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <input
                                        value={shippingDetails.street}
                                        onChange={(e) =>
                                            setShippingDetails((prev) => ({
                                                ...prev,
                                                street: e.target.value,
                                            }))
                                        }
                                        type="text"
                                        placeholder="Street"
                                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
                                    />
                                    <input
                                        value={shippingDetails.apartament_nr}
                                        onChange={(e) =>
                                            setShippingDetails((prev) => ({
                                                ...prev,
                                                apartament_nr: e.target.value,
                                            }))
                                        }
                                        type="text"
                                        placeholder="Apartment Number"
                                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
                                    />
                                </div>

                                {/* Checkbox */}
                                <label className="flex items-start gap-2 mb-4 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="mt-1 w-4 h-4 border-gray-300 rounded"
                                    />
                                    <span className="text-sm text-gray-700">
                                        I don't know the address, please call
                                        the recipient.
                                    </span>
                                </label>

                                <button
                                    onClick={() => toggleSection(3)}
                                    className="w-full bg-black text-white py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                                >
                                    Continue to Payment
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Section 3: Payment */}
                    <div className="border-b border-gray-300">
                        <button
                            onClick={() => toggleSection(3)}
                            className="w-full text-left py-4 flex items-center justify-between"
                            disabled={
                                activeSection === 1 || activeSection === 2
                            }
                        >
                            <h2
                                className={`text-base font-normal ${
                                    activeSection === 1 || activeSection === 2
                                        ? "text-gray-400"
                                        : "text-gray-900"
                                }`}
                            >
                                <span className="mr-2">3</span>Payment
                            </h2>
                            <svg
                                className={`w-4 h-4 transition-transform ${
                                    activeSection === 3 ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {activeSection === 3 && (
                            <div className="pb-6">
                                {/* Payment Description */}
                                <p className="text-sm text-black mb-4">
                                    Pay by card. Your payment is secure.
                                </p>

                                {/* Card Number */}
                                <input
                                    value={paumentInfo.card_number}
                                    onChange={(e) =>
                                        setPaymentInfo((prev) => ({
                                            ...prev,
                                            card_number: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    placeholder="Card Number"
                                    className="w-full border border-gray-300 px-4 py-3 mb-4 text-sm focus:outline-none focus:border-gray-900"
                                />

                                {/* MM/YY and CVV Code */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <input
                                        value={paumentInfo.mm_yy}
                                        onChange={(e) =>
                                            setPaymentInfo((prev) => ({
                                                ...prev,
                                                month_year: e.target.value,
                                            }))
                                        }
                                        type="text"
                                        placeholder="MM / YY"
                                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
                                    />
                                    <input
                                        value={paumentInfo.cvv}
                                        onChange={(e) =>
                                            setPaymentInfo((prev) => ({
                                                ...prev,
                                                cvv: e.target.value,
                                            }))
                                        }
                                        type="text"
                                        placeholder="CVV Code"
                                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
                                    />
                                </div>

                                {/* Make a Purchase Button */}
                                <button
                                    onClick={handlePurchase}
                                    className="w-full bg-black text-white py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors mb-4"
                                >
                                    Make a Purchase
                                </button>

                                {/* Or pay using */}
                                <p className="text-sm text-black mb-3">
                                    Or pay using:
                                </p>

                                {/* Apple Pay and Google Pay Buttons */}
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="border border-gray-300 py-3 flex items-center justify-center gap-2 text-sm hover:bg-gray-50 transition-colors">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                        </svg>
                                        <span className="text-sm font-medium">
                                            Apple Pay
                                        </span>
                                    </button>

                                    <button className="border border-gray-300 py-3 flex items-center justify-center gap-2 text-sm hover:bg-gray-50 transition-colors">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#4285F4"
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            />
                                        </svg>
                                        <span className="text-sm font-medium">
                                            Google Pay
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="py-8 px-12 bg-gray-100">
                    <h2 className="text-sm font-medium mb-6">Order Summary</h2>
                    {/* Cart Items */}
                    <div className="space-y-4 mb-6">
                        {data.map((item) => (
                            <div key={item.id} className="flex gap-4 ">
                                {/* Product Image */}
                                <div className="w-32 h-32shrink-0 border bg-white">
                                    <img
                                        src={`/images/products/${item.img}`}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex-1 flex justify-between">
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-sm font-normal mb-1">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-gray-600">
                                            Quantity ({item.quantity})
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium ">
                                            ${item.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-300 py-3" />

                    {/* Gift Card Section */}
                    <div className="mb-6">
                        <p className="text-xs text-black 600 mb-3">
                            If you have our gift card, enter the code to get
                            discounts
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                type="text"
                                placeholder="Gift card"
                                value={giftCode}
                                onChange={(e) => setGiftCode(e.target.value)}
                                className="flex-1 border bg-white border-gray-300 px-4 py-2 text-sm h-12 focus:outline-none focus:border-gray-900"
                            />
                            <button
                                onClick={handleApplyCode}
                                className="bg-black text-white px-8 py-2 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                            >
                                Apply
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-gray-300 py-3" />

                    {/* Pricing Breakdown */}
                    <div className="space-y-3 mb-6 pb-6 border-b border-gray-300">
                        <div className="flex justify-between text-sm">
                            <span className="text-black">Subtotal</span>
                            <span className="font-medium">
                                $
                                {amount.toFixed(2) -
                                    shippingDetails.price.toFixed(2)}
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-black">Shipping</span>
                            <span className="font-medium">
                                ${shippingDetails.price.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between text-base mb-6">
                        <span className="font-medium">Total</span>
                        <span className="font-medium">
                            ${amount.toFixed(2)}
                        </span>
                    </div>

                    {/* Secure Checkout */}
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                        <span>Secure Checkout</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
