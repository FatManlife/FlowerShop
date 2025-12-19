import { useState } from "react";
import { socialIcons, icons } from "../../constants/icons";
import api from "../../api/api";
import { useAuth } from "../../services/AuthContext";

const AuthModal = ({ isOpen, onClose }) => {
    const [password, setPassword] = useState("");
    const [step, setStep] = useState("phone");
    const [phoneNumber, setPhoneNumber] = useState("");
    const { token, setToken } = useAuth();

    const handleContinue = async () => {
        try {
            const res = await api.post("/auth/phone", { phone: phoneNumber });
            setStep(res.data.available ? "signup" : "login");
        } catch (e) {
            console.log(e);
        }
    };

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", {
                phone: phoneNumber,
                password: password,
            });
            setToken(res.data.access_token);
            setPassword("");
            setPhoneNumber("");
            setStep("phone");
            onClose();
        } catch (e) {
            console.log(e);
        }
    };

    const handleJoinUs = async () => {
        try {
            const res = await api.post("/auth/signup", {
                phone: phoneNumber,
                password: password,
            });
            setPassword("");
            setStep("login");
        } catch (e) {
            console.log(e);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop with blur */}
            <div
                className="absolute inset-0 bg-white/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative px-20 pt-20 bg-white border border-black shadow-2xl w-full max-w-3xl mx-4 p-8">
                {/* Close Button */}
                {step === "phone" && (
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-gray-400 hover:text-gray-600"
                        aria-label="Close"
                    >
                        <img src={icons.close} className="w-5" />
                    </button>
                )}

                {/* Back Button */}
                {step !== "phone" && (
                    <button
                        onClick={() => setStep("phone")}
                        className="absolute top-8 right-8 text-gray-400 hover:text-gray-600"
                        aria-label="Close"
                    >
                        <img src={icons.back} className="w-5" />
                    </button>
                )}

                {step === "phone" && (
                    <>
                        {/* Title */}
                        <h2 className="text-5xl font-semibold mb-2">
                            Greetings! Welcome to
                            <br />
                            luxury gift shop.
                        </h2>

                        {/* Subtitle */}
                        <p className="text-sm text-black mb-2 mt-5">
                            Use your mobile number to sign up or log in
                        </p>

                        {/* Phone Input */}
                        <input
                            type="tel"
                            placeholder="+380 XX XXX XX XX"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-3 mb-4 text-sm focus:outline-none focus:border-gray-400"
                        />

                        {/* Continue Button */}
                        <button
                            onClick={handleContinue}
                            className="w-full bg-black text-white py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors mb-6"
                        >
                            Continue
                        </button>

                        {/* Divider "or" */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex-1 border-t border-gray-300"></div>
                            <span className="text-gray-400 text-sm">or</span>
                            <div className="flex-1 border-t border-gray-300"></div>
                        </div>

                        {/* Social Login Buttons */}
                        <p className="text-sm text-black mb-2">
                            Instantly login or sign up via Google
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            <button className="border border-gray-300 py-3 flex items-center justify-center gap-2 text-sm hover:bg-gray-50 transition-colors">
                                <img src={socialIcons.google} className="h-5" />
                                <span className="text">
                                    Continue with Google
                                </span>
                            </button>
                            <button className="border border-gray-300 py-3 flex items-center justify-center gap-2 text-sm hover:bg-gray-50 transition-colors">
                                <img src={socialIcons.apple} className="w-5" />
                                <span className="text-md">
                                    Continue with Apple
                                </span>
                            </button>
                        </div>
                    </>
                )}

                {step == "signup" && (
                    <>
                        {/* Title */}
                        <h2 className="text-5xl font-semibold mb-4">Sign up</h2>
                        {/* Subtitle */}
                        <p className="text-md text-black mb-6">
                            Become a member and enjoy personalized gift
                            recommendations, fast checkout, and more.
                        </p>
                        {/* Phone Number Display */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <img src={icons.check} className="w-4" />
                                <span className="text-lg">+{phoneNumber}</span>
                            </div>

                            <button className="text-gray-600 hover:text-gray-800">
                                <img src={icons.edit} className="w-5" />
                            </button>
                        </div>
                        {/* Password Input Label */}

                        <div className="border-t mb-2" />

                        <label className="block text-sm text-black mb-2">
                            Enter Password
                        </label>
                        {/* Password Input */}
                        <input
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-3 mb-2 text-sm focus:outline-none focus:border-gray-400"
                            maxLength="8"
                        />
                        {/* Join Button */}
                        <button
                            onClick={handleJoinUs}
                            className="w-full bg-black text-white py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors mb-4"
                        >
                            Join Us
                        </button>
                    </>
                )}

                {step == "login" && (
                    <>
                        {/* Title */}
                        <h2 className="text-5xl font-semibold mb-4">Log in</h2>

                        {/* Phone Number Display */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <img src={icons.check} className="w-4" />
                                <span className="text-lg">+{phoneNumber}</span>
                            </div>

                            <button className="text-gray-600 hover:text-gray-800">
                                <img src={icons.edit} className="w-5" />
                            </button>
                        </div>
                        {/* Password Input Label */}

                        <div className="border-t mb-2" />

                        <label className="block text-sm text-black mb-2">
                            Enter Password
                        </label>
                        {/* Password Input */}
                        <input
                            type="text"
                            placeholder="XX XX XX"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-3 mb-2 text-sm focus:outline-none focus:border-gray-400"
                            maxLength="8"
                        />
                        {/* Join Button */}
                        <button
                            onClick={handleLogin}
                            className="w-full bg-black text-white py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors mb-4"
                        >
                            Log in
                        </button>
                    </>
                )}
                {/* Footer Links */}
                <div className="text-center text-xs text-black mt-30 underline justify-baseline">
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                    <span className="mx-2">|</span>
                    <a href="#" className="hover:underline">
                        Terms and Conditions
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
