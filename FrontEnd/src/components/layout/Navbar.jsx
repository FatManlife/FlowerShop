import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white border-b border-black">
            <div className="max-w-7xl mx-auto h-16">
                <div className="flex justify-between items-center h-full">
                    {/* Left side - Shop and Contact */}
                    <div className="flex h-full">
                        {/* Shop */}
                        <a
                            href="#"
                            className="px-8 h-full flex items-center border-r border-l border-black text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                            Shop
                        </a>
                        {/* Contact */}
                        <a
                            href="#"
                            className="px-8 h-full flex items-center border-r border-black text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Right side - Sign in and Cart */}
                    <div className="flex h-full">
                        {/* Sign in */}
                        <a
                            href="#"
                            className="px-8 h-full flex items-center border-l border-black text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                            Sign in
                        </a>
                        {/* Cart */}
                        <a
                            href="#"
                            className="px-8 h-full flex items-center border-l border-r border-black text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                            Cart
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
