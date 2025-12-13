import img1 from "../assets/images/home/1.png"
import img2 from "../assets/images/home/2.png"
import img3 from "../assets/images/home/3.png"
import img4 from "../assets/images/home/4.png"
import img5 from "../assets/images/home/5.png"
import img6 from "../assets/images/home/6.png"
import img7 from "../assets/images/home/7.png"

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 pr">
            {/*Row1 */}
            <div className="grid grid-cols-2 h-full">
                {/* Left half */}
                <div className="p-13 pt-16 pb-0 flex flex-col justify-between border border-gray-600">
                    <div>
                        <h1 className="text-5xl font-semibold mb-6">Kyiv<br /> LuxeBouquets®</h1>
                        <p className="text-black font-light mb-6">
                            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service
                        </p>
                        <hr className="border-black mt-10" />
                    </div>
                    <div className="flex items-stretch w-full h-full mt-5 mb-25">
                        <div className="w-1/2 pr-5">
                            <div className="aspect-square w-full h-full">
                                <img
                                    src={img1}
                                    alt="Florist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-0.5 bg-gray-400" />
                        <div className="w-1/2 flex items-end pl-5">
                            <p className="text-black text-sm">
                                Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Right half */}
                <div className="grid grid-cols-2 grid-rows-2 h-full">
                    <div className="bg-white p-6 flex flex-col items-center h-full border-l-0 border border-black relative">
                        <h2 className="text-3xl font-semibold text-center absolute top-1/2 -translate-y-1/2 w-full">
                            Fresh Flowers
                        </h2>
                        <button className="text-balck font-semibold mt-auto z-10">
                            Shop now →
                        </button>
                    </div>
                    <div className="bg-white  lex justify-center items-center border-l-0 border border-black">
                        <img src={img3} alt="Fresh Flowers" className="w-full h-full object-cover " />
                    </div>
                    <div className="bg-white  flex justify-center items-center border-l-0 border-t-0 border border-black">
                        <img src={img2} alt="Dried Flowers" className="w-full h-full object-cover " />
                    </div>
                    <div className="bg-white p-6 flex flex-col items-center h-full border-l-0 border-t-0 border border-black relative">
                        <h2 className="text-3xl font-semibold text-center absolute top-1/2 -translate-y-1/2 w-full">
                            Dried Flowers
                        </h2>
                        <button className="text-balck font-semibold mt-auto z-10">
                            ← Shop now
                        </button>
                    </div>
                </div>
            </div>

            {/*Row2 */}
            <div className="grid grid-cols-2 h-full">
                {/* Left half */}
                <div className="border-t-0 border border-gray-600"></div>
                {/* Right half */}
                <div className="grid grid-cols-2 grid-rows-2 h-full">
                    <div className="bg-white p-6 flex flex-col items-center h-full border-l-0 border-t-0 border border-black relative">
                        <h2 className="text-3xl font-semibold text-center absolute top-1/2 -translate-y-1/2 w-full">
                            Live Plants
                        </h2>
                        <button className="text-balck font-semibold mt-auto z-10">
                            Shop now →
                        </button>
                    </div>
                    <div className="bg-white  lex justify-center items-center border-l-0 border-t-0 border border-black">
                        <img src={img4} alt="Fresh Flowers" className="w-full h-full object-cover " />
                    </div>
                    <div className="bg-white  flex justify-center items-center border-l-0 border-t-0 border border-black">
                        <img src={img5} alt="Dried Flowers" className="w-full h-full object-cover " />
                    </div>
                    <div className="bg-white p-6 flex flex-col items-center h-full border-l-0 border-t-0 border border-black relative">
                        <h2 className="text-3xl font-semibold text-center absolute top-1/2 -translate-y-1/2 w-full">
                            Aroma Candles
                        </h2>
                        <button className="text-balck font-semibold mt-auto z-10">
                            ← Shop now
                        </button>
                    </div>
                    <div className="bg-white p-6 flex flex-col items-center h-full border-l-0 border-t-0 border border-black relative">
                        <h2 className="text-3xl font-semibold text-center absolute top-1/2 -translate-y-1/2 w-full">
                            Freshners
                        </h2>
                        <button className="text-balck font-semibold mt-auto z-10">
                            Shop now →
                        </button>
                    </div>
                    <div className="bg-white  lex justify-center items-center border-l-0 border-t-0 border border-black">
                        <img src={img6} alt="Fresh Flowers" className="w-full h-full object-cover " />
                    </div>
                </div>
            </div>

            {/*Row3 */}
            <div className="grid grid-cols-2 h-full">
                {/* Right half */}
                <div className=" p-13 pl-16 pt-16 border-t-0 border border-gray-600">
                    <h1 className="text-4xl font-semibold mb-6">About us</h1>
                </div>
                {/* Left half */}
                <div className=" p-13 pl-16 pt-16  border-l-0 border-t-0 border border-gray-600">
                    <div className="max-w-lg ">
                        <div className="text-xs font-semibold tracking-widest text-gray-800 mb-6">
                            OUR STORY
                        </div>

                        <h1 className="text-4xl  text-black mb-8 leading-tight">
                            Kyiv LuxeBouquets
                        </h1>

                        <p className="text-sm leading-relaxed text-black mb-14">
                            We are a modern local floral studio, which specializes in the design and
                            delivery of unique bouquets. We have the best florists who carefully select
                            each look, our studio cooperates directly with farms for growing different
                            flowers, so we always have fresh flowers, which are collected by our florists
                            in exquisite bouquets. We have a collection of fresh bouquets, collections
                            of dried bouquets, house plants, as well as fragrant candles from luxury
                            brands to create the perfect atmosphere. Make someone's day amazing
                            by sending flowers, plants and gifts the same or next day. Ordering flowers
                            online has never been easier.
                        </p>

                        <button className="px-10 py-4 border border-black bg-transparent text-black text-sm font-medium tracking-wider hover:bg-black hover:text-white transition-all duration-300 mb-7">
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>

            {/*Row4 */}
            <div className="grid grid-cols-2 h-full">
                {/* Right half */}
                <div className=" p-13 pl-16 pt-16 border-t-0 border border-gray-600">
                    <h1 className="text-4xl font-semibold mb-6">Why choose us ?</h1>
                </div>
                {/* Left half */}
                <div className="grid grid-rows-4">
                    <div className="p-13 pb-0 pl-16 pt-16  border-l-0 border-t-0 border border-gray-600">
                        <div className="max-w-lg ">
                            <h1 className="text-4xl  text-black mb-8 leading-tight">
                                Stylish bouquets by florists
                            </h1>
                            <p className="text-sm leading-relaxed text-black mb-14">
                                At our floral studio, our professional florists craft the most elegant
                                and stylish bouquets using only the freshest and highest quality materials
                                available. We stay up-to-date with the latest floral design trends and offer
                                unique arrangements that are sure to impress. Let us brighten up your day with
                                our stunning bouquets and same-day delivery service.
                            </p>
                        </div>
                    </div>
                    <div className="p-13 pb-0 pl-16 pt-16  border-l-0 border-t-0 border border-gray-600">
                        <div className="max-w-lg ">
                            <h1 className="text-4xl  text-black mb-8 leading-tight">
                                On-time delivery
                            </h1>
                            <p className="text-sm leading-relaxed text-black mb-14">
                                Never miss a moment with our on-time flower delivery service.
                                Our couriers will deliver your bouquet personally, without boxes,
                                to ensure it arrives in perfect condition. Trust us to deliver your
                                thoughtful gift reliably.
                            </p>
                        </div>
                    </div>
                    <div className="p-13 pb-0 pl-16 pt-16  border-l-0 border-t-0 border border-gray-600">
                        <div className="max-w-lg ">
                            <h1 className="text-4xl  text-black mb-8 leading-tight">
                                Safe payment
                            </h1>
                            <p className="text-sm leading-relaxed text-black mb-14">
                                You can feel secure when placing an order with us, as we use
                                industry- standard security measures to protect your payment information.
                                Your transaction will be safe and hassle-free, so you can shop with confidence.
                            </p>
                        </div>
                    </div>
                    <div className="p-13 pb-0 pl-16 pt-16  border-l-0 border-t-0 border border-gray-600">
                        <div className="max-w-lg ">
                            <h1 className="text-4xl  text-black mb-8 leading-tight">
                                Subscription by your needs
                            </h1>
                            <p className="text-sm leading-relaxed text-black mb-14">
                                With our subscription service tailored to your specific needs,
                                you can enjoy the convenience of having beautiful bouquets delivered
                                straight to your door at regular intervals. Our flexible service is perfect
                                for busy individuals or those who want to ensure they always have fresh flowers on hand.
                                You'll save time and money with this hassle-free solution to your floral needs.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/*Row5 */}
            <div className="grid grid-cols-2">
                {/* Left Column */}
                <div className="grid grid-cols-1">
                    <div className=" border-t-0 border border-black p-15 pt-17">
                        <h2 className="text-4xl font-semibold mb-4">To Contact Us</h2>
                        <p className="text-md mb-3">We will call you back</p>

                        <div className="flex gap-4 mb-7">
                            <input
                                type="text"
                                placeholder="+380 XX XXX XX XX"
                                className="flex-1 border w-1/2 border-gray-300 px-4 py-3 text-sm"
                            />
                            <button className="bg-black w-1/2 text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors">
                                BOOK A CALL
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="flex flex-col border-t-0 border border-black  h-full">
                            <div className=" border-b flex items-center justify-center p-4">
                                <h3 className="text-3xl font-normal text-center">Phone</h3>
                            </div>

                            <div className="flex-1  flex flex-col items-center justify-center space-y-6 p-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold">+380980099777</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold">+380980099111</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border border-l-0 border-t-0 border-black h-70">
                            <div className="border-b border-black flex items-center justify-center p-4">
                                <h3 className="text-3xl font-normal text-center">Adress</h3>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-4">
                                <div className="flex items-center gap-3">
                                    <p className="text-sm text-center">OPENING HOURS: 8 TO 11 P.M.</p>
                                </div>

                                <div className="flex items-center gap-3">


                                    <span className="text-sm font-semibold">15/4 Khreshchatyk Street, Kyiv</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Column */}
                <div className="grid grid-cols-1">
                    {/* Top: Store Image */}
                    <div className="relative bg-gray-900">
                        <img
                            src=""
                            alt="Kyiv LuxeBouquets Store"
                            className="w-full h-full object-cover opacity-70"
                        />
                    </div>

                    {/* Bottom: Social Media Grid */}
                    <div className="grid grid-cols-2">
                        {/* Follow us text */}
                        <div className="border border-gray-300 flex items-center justify-center">
                            <h3 className="text-2xl font-light">Follow us</h3>
                        </div>

                        {/* Social icons */}
                        <div className="border border-gray-300 flex items-center justify-center gap-6">
                            <a href="#" className="hover:opacity-70 transition-opacity">

                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">

                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">

                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home