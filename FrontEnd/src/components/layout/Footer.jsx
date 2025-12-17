import { useState } from "react";
import { socialIcons } from "../../constants/icons";
import { Link } from "react-router-dom";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        setEmail("");
    };

    return (
        <footer className="bg-neutral-50 border border-black ">
            <div className="max-w-7xl mx-auto border-l border-r">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    {/* Newsletter Section */}
                    <div className="space-y-4 p-6  h-100">
                        <p className="text-black leading-relaxed">
                            Remember to offer beautiful flowers from Kyiv
                            LuxeBouquets Valentines Day, Mothers Day,
                            Christmas... Reminds you 7 days before. No spam or
                            sharing your address
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-4 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-black text-white py-4 px-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                            >
                                REMIND
                            </button>
                        </div>
                    </div>

                    {/* Contact Us Section */}
                    <div className="space-y-4 border-b-0 border border-t-0 border-l-0 p-6">
                        <h3 className="font-semibold text-gray-400 text-xl">
                            Contact Us
                        </h3>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-sm">Address</p>
                            <p>10 A. Khreshchatyk Street, Kyiv</p>
                            <p className="pt-2 text-gray-500 text-sm">Phone</p>
                            <p>+380960609777</p>
                            <p className="pt-2 text-gray-500 text-sm">
                                General Enquiry:
                            </p>
                            <a
                                href="mailto:Kiev.Florist.Studio@gmail.com"
                                className="text-black"
                            >
                                Kiev.Florist.Studio@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-400 text-xl mb-3">
                                Follow Us
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
                                >
                                    <img
                                        src={socialIcons.instagram}
                                        className="w-4"
                                    />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
                                >
                                    <img
                                        src={socialIcons.printerest}
                                        className="w-4"
                                    />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
                                >
                                    <img
                                        src={socialIcons.facebook}
                                        className="w-4"
                                    />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
                                >
                                    <img
                                        src={socialIcons.twitter}
                                        className="w-4"
                                    />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
                                >
                                    <img
                                        src={socialIcons.telegram}
                                        className="w-4"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Shop Section */}
                    <div className="space-y-4 border border-b-0 border-t-0 border-l-0 p-6">
                        <h3 className="text-xl font-semibold text-gray-400">
                            Shop
                        </h3>
                        <ul className="text-md text-black">
                            <li>
                                <Link to={"/shop"}>
                                    <p className="hover:text-gray-900">
                                        All Products
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/shop/fresh"}>
                                    <p className="hover:text-gray-900">
                                        Fresh Flowers
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/shop/dried"}>
                                    <p className="hover:text-gray-900">
                                        Dried Flowers
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/shop/live"}>
                                    <p className="hover:text-gray-900">
                                        Live Plants
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/shop/vase"}>
                                    <p className="hover:text-gray-900">
                                        Designer Vases
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/shop/candle"}>
                                    <p className="hover:text-gray-900">
                                        Aroma Candles
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/shop/freshener"}>
                                    <p className="hover:text-gray-900">
                                        Freshener Diffuser
                                    </p>
                                </Link>
                            </li>
                        </ul>
                        <div className="pt-4">
                            <p className="text-xl font-semibold text-gray-400 mb-2">
                                Services
                            </p>
                            <ul className="text-md text-black">
                                <li>
                                    <Link to={"/subscription"}>
                                        <p className="hover:text-gray-900">
                                            Flower Subscription
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/subscription"}>
                                        <p className="hover:text-gray-900">
                                            Wedding & Event Decor
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* About Us Section */}
                    <div className="space-y-4 p-6">
                        <h3 className="text-xl font-semibold text-gray-400">
                            About Us
                        </h3>
                        <ul className="space-y-2 text-md text-black">
                            <li>
                                <Link to={"/"}>
                                    <p href="#" className="hover:text-gray-900">
                                        Our story
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/about"}>
                                    <p className="hover:text-gray-900">Blog</p>
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link to={"/about"}>
                                    <p className="hover:text-gray-900">
                                        Shipping & returns
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/about"}>
                                    <p className="hover:text-gray-900">
                                        Terms & conditions
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/about"}>
                                    <p className="hover:text-gray-900">
                                        Privacy policy
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
