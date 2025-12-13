const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-sm">
                    © 2025 Flower Shop. All rights reserved.
                </span>

                <nav className="flex gap-6 text-sm">
                    <a href="/privacy" className="hover:text-white transition">
                        Privacy
                    </a>
                    <a href="/terms" className="hover:text-white transition">
                        Terms
                    </a>
                    <a href="/contact" className="hover:text-white transition">
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer