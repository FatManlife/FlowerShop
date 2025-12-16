import twitterIco from "../assets/icons/socials/twitter.png";
import facebookIco from "../assets/icons/socials/facebook.png";
import instagramIco from "../assets/icons/socials/instagram.png"
import printerestIco from "../assets/icons/socials/printerest.png"
import telegramIco from "../assets/icons/socials/telegram.png"
import img1 from "../assets/images/about/1.png"


const About = () => {
    return (
        <div className="max-w-7xl border-black  border-r border-l mx-auto">
            {/* Section 1: Our Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b">
                {/* Left - Text */}
                <div className="bg-white flex flex-col justify-center items-center">
                    <div className="text-center pt-36 pb-36">
                        <h1 className="text-4xl md:text-5xl font-semibold mb-6">Our Story</h1>
                        <h1 className="text-4xl md:text-5xl font-thin mb-6 italic">About</h1>
                        <h1 className="text-4xl md:text-5xl font-semibold mb-6">Kyiv LuxeBouquets</h1>
                        <p className="text-black leading-relaxed mb-12 text-lg max-w-lg">
                            Discover Uniquely Crafted Bouquets and Gifts for Any
                            Occasion: Spread Joy with Our Online Flower Delivery Service
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4 justify-center">
                            <a href="#" className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                                <img src={instagramIco} className="w-5" />
                            </a>
                            <a href="#" className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:border-gray-500 transition-colors">
                                <img src={printerestIco} className="w-5" />
                            </a>
                            <a href="#" className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:border-gray-500 transition-colors">
                                <img src={facebookIco} className="w-5" />
                            </a>
                            <a href="#" className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:border-gray-500 transition-colors">
                                <img src={twitterIco} className="w-5" />
                            </a>
                            <a href="#" className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:border-gray-500 transition-colors">
                                <img src={telegramIco} className="w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="border-l">
                    <img src={img1} className="w-full h-full object-cover " />
                </div>
            </div>

            {/* Section 2: Our Founder's Passion */}
            <div className="bg-white py-16 px-8 text-center border-b">
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