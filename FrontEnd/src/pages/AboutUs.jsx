const About = () => {
    return (
        <div className="max-w-7xl border-black border border-b-0 border-t-0 mx-auto">
            {/* Section 1: Our Story */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left - Text */}
                <div className="bg-gray-50 p-12 md:p-16 flex flex-col justify-center">
                    <div className="max-w-md">
                        <p className="text-sm text-gray-600 mb-2">Our Story</p>
                        <h1 className="text-4xl md:text-5xl font-light mb-6">Kyiv LuxeBouquets</h1>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We follow world trends and do not stand still, we are always in search of new products and flowers. We guarantee that our bouquets will not only be beautiful but will also last more than a week.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                            </a>
                            <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                            </a>
                            <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                            </a>
                            <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                            </a>
                            <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="bg-gray-300 h-96 md:h-auto bg-cover bg-center"></div>
            </div>

            {/* Section 2: Our Founder's Passion */}
            <div className="bg-white py-16 px-8 text-center">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">Discover</p>
                <h2 className="text-3xl md:text-4xl font-light mb-6">Our Founder's Passion</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Kyiv LuxeBouquets was founded in 2010 by Angelina Ivanova in the center of Kyiv. Angelina has always loved flowers and the power of bringing people together. She opened the first Kyiv LuxeBouquets store in downtown Kyiv, an welcoming space where customers could feel the passion and commitment. Today Kyiv LuxeBouquets continues to serve the community with the same commitment to excellence and creativity.
                </p>
            </div>

            {/* Section 3: Expertly Crafted Bouquets */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left - Image */}
                <div className="bg-gray-300 h-96 md:h-auto bg-cover bg-center"></div>

                {/* Right - Text */}
                <div className="bg-white p-12 md:p-16 flex flex-col justify-center">
                    <div className="max-w-md">
                        <h2 className="text-3xl md:text-4xl font-light mb-6">Expertly Crafted Bouquets</h2>
                        <p className="text-gray-600 leading-relaxed">
                            At Kyiv LuxeBouquets, we take pride in our commitment to excellence, creativity and customer satisfaction. Our expert florists craft each bouquet with care and attention to detail, ensuring that every creation is a true work of art. We offer same day delivery throughout Kyiv, making it easy for you to send the perfect gift to your loved ones.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 4: Bouquets, Gifts & Ambiance */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left - Text */}
                <div className="bg-white p-12 md:p-16 flex flex-col justify-center">
                    <div className="max-w-md">
                        <h2 className="text-3xl md:text-4xl font-light mb-6">Bouquets, Gifts & Ambiance</h2>
                        <p className="text-gray-600 leading-relaxed">
                            At Kyiv LuxeBouquets, we offer a wide range of flower arrangements and gifts to suit all tastes and occasions, with a special attention on customer service. We pride ourselves in creating beautiful and stunning bouquets that will leave a lasting impression. Our bouquets are available in different sizes and at different prices, in order to suit the needs and budgets of all our customers.
                        </p>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="bg-gray-300 h-96 md:h-auto bg-cover bg-center"></div>
            </div>

            {/* Section 5: Making Every Day Special */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left - Image */}
                <div className="bg-gray-300 h-96 md:h-auto bg-cover bg-center"></div>

                {/* Right - Text */}
                <div className="bg-white p-12 md:p-16 flex flex-col justify-center">
                    <div className="max-w-md">
                        <h2 className="text-3xl md:text-4xl font-light mb-6">Making Every Day Special</h2>
                        <p className="text-gray-600 leading-relaxed">
                            At Kyiv LuxeBouquets, we believe that every day is an opportunity to express love, gratitude and appreciation to the people who matter most. Whether it's a birthday, anniversary, wedding or just because, our bouquets are the perfect way to show someone you care. Let us help you make every day special with our beautiful and stunning bouquets.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 6: Call to Action */}
            <div className="bg-white py-20 px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-4">Discover Our Beautiful Bouquets</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Explore our collection of gorgeous bouquets and surprise your loved ones with the perfect flowers. Choose from elegant arrangements suitable for any occasion and make every moment special.
                </p>
                <button className="bg-black text-white px-10 py-3 hover:bg-gray-800 transition-colors uppercase tracking-wide text-sm">
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default About;