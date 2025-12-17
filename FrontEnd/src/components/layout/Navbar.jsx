import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white border-b border-black">
            <div className="max-w-7xl mx-auto h-16">
                <div className="flex justify-between items-center h-full">
                    {/* Left side - Shop and Contact */}
                    <div className="flex h-full">
                        {/* Shop */}
                        <Link to={"/shop"}>
                            <button className="px-8 h-full flex items-center border-r border-l border-black text-gray-900 hover:bg-gray-50 transition-colors">
                                Shop
                            </button>
                        </Link>

                        {/* Contact */}
                        <Link to={"/about"}>
                            <button className="px-8 h-full flex items-center border-r border-black text-gray-900 hover:bg-gray-50 transition-colors">
                                Contact
                            </button>
                        </Link>
                    </div>

                    {/* Right side - Sign in and Cart */}
                    <div className="flex h-full">
                        {/* Sign in */}
                        <button className="px-8 h-full flex items-center border-l border-black text-gray-900 hover:bg-gray-50 transition-colors">
                            Sign in
                        </button>
                        {/* Cart */}
                        <button className="px-8 h-full flex items-center border-l border-r border-black text-gray-900 hover:bg-gray-50 transition-colors">
                            Cart
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
