import { icons } from "../constants/icons"
import { aboutImgs } from "../constants/img";
import { Link } from "react-router-dom";

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
                                <img src={icons.instagram} className="w-5" />
                            </a>
                            <a href="#" className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:border-gray-500 transition-colors">
                                <img src={icons.printerest} className="w-5" />
                            </a>
                            <a href="#" className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:border-gray-500 transition-colors">
                                <img src={icons.facebook} className="w-5" />
                            </a>
                            <a href="#" className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:border-gray-500 transition-colors">
                                <img src={icons.twitter} className="w-5" />
                            </a>
                            <a href="#" className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:border-gray-500 transition-colors">
                                <img src={icons.telegram} className="w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="border-l">
                    <img src={aboutImgs.img1} className="w-full h-full object-cover " />
                </div>
            </div>

            {/* Section 2: Our Founder's Passion */}
            <div className="bg-white py-16 px-8 text-center border-b">
                <p className="text-sm text-black uppercase tracking-wide mb-3">OUR STORY</p>
                <h2 className="text-3xl md:text-4xl font-normal mb-6">Our Founder's Passion</h2>
                <p className="text-black leading-relaxed max-w-3xl mx-auto">
                    Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the goal of bringing unique and
                    exquisite bouquets to the people of Kyiv. Natalia
                    has always had a passion for flowers and design, and his vision was to create a local floral studio
                    that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.
                </p>
            </div>

            {/* Section 3: Expertly Crafted Bouquets */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b">
                {/* Left - Image */}
                <div className="border-r">
                    <img src={aboutImgs.img2} className="w-full h-150 object-cover " />
                </div>
                {/* Right - Text */}
                <div className="bg-white p-16 flex-col justify-start">
                    <h2 className="text-3xl md:text-4xl font mb-6">Expertly Crafted Bouquets</h2>
                    <p className="text-black leading-relaxed">
                        At Kyiv LuxeBouquets, we take pride in our team of talented and experienced
                        florists who carefully select each bloom, ensuring that only the freshest and most
                        stunning flowers make it into our bouquets. We work directly with farms to source the highest quality
                        flowers, and our skilled florists expertly craft each bouquet to perfection.
                    </p>
                </div>
            </div>

            {/* Section 4: Bouquets, Gifts & Ambiance */}
            <div className=" border-b border-black grid grid-cols-1 md:grid-cols-2 ">
                {/* Left - Text */}
                <div className="bg-white p-12 md:p-16 flex flex-col border-r">
                    <h2 className="text-3xl md:text-4xl font-normal mb-6">Bouquets, Gifts & Ambiance</h2>
                    <p className="text-black leading-relaxed">
                        In addition to our stunning bouquets, we also offer a collection of dried bouquets,
                        house plants, and fragrant candles from luxury brands to create the perfect ambiance.
                        We believe that sending flowers, plants, and gifts should be easy and stress-free, which
                        is why we offer same or next-day delivery throughout Kyiv.
                    </p>
                </div>

                {/* Right - Image */}
                <img src={aboutImgs.img3} className="h-150 w-full object-cover" />
            </div>

            {/* Section 5: Making Every Day Special */}
            <div className="border-b border-black grid grid-cols-1 md:grid-cols-2">
                {/* Left - Image */}
                <img src={aboutImgs.img4} className="w-full h-150 object-cover" />

                {/* Right - Text */}
                <div className="bg-white p-12 md:p-16 flex flex-col ">
                    <h2 className="text-3xl md:text-4xl font-normal mb-6">Making Every Day Special</h2>
                    <p className="text-black leading-relaxed">
                        At Kyiv LuxeBouquets, we believe that every day is an opportunity to express love, gratitude and appreciation to the people who matter most. Whether it's a birthday, anniversary, wedding or just because, our bouquets are the perfect way to show someone you care. Let us help you make every day special with our beautiful and stunning bouquets.
                    </p>
                </div>
            </div>

            {/* Section 6: Call to Action */}
            <div className="bg-white py-20 px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-semibold mb-4">Discover Our Beautiful Bouquets</h2>
                <p className="text-black mb-8 max-w-2xl mx-auto">
                    Explore our collection of exquisite bouquets and surprise your loved ones with
                    the perfect gift. Click the button below to start shopping
                </p>
                <Link to="/category">
                    <button className="bg-black text-white px-10 py-3 hover:bg-gray-800 transition-colors uppercase tracking-wide text-sm">
                        Shop Now
                    </button>
                </Link>
            </div>
        </div >
    );
}

export default About;