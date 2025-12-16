import img1 from "../assets/images/subscription/1.png";
import img2 from "../assets/images/subscription/2.png";
import SubscriptionFAQ from "../components/subscription/SusbscriptionFaq";

const Subscription = () => {
  return (
    <div className="max-w-7xl mx-auto border-l border-r">
      {/*Fower Subscription*/}
      <div className="grid grid-cols-2 border-b">
        <img src={img1} className="h-full object-cover" />
        <div className="flex flex-col justify-center items-start py-26 px-10 border-l">
          <h1 className="text-5xl mb-8">Flower Subscription</h1>
          <ul>
            <li className="mb-6">
              <h2 className="text-black">For Yourself</h2>
              <div className="flex items-start gap-3 mt-1">
                <span className="w-1 h-1 bg-black rounded-full mt-2 shrink-0" />
                <p className="text-gray-800 font-normal">
                  The perfect way to keep your home fresh and beautiful, Get a
                  regular delivery of stunning bouquets straight to your
                  doorstep without lifting a finger. Enjoy the beauty and
                  fragrance of fresh flowers hassle-free!
                </p>
              </div>
            </li>
            <li className="mb-6">
              <h2 className="text-black">As a Gift</h2>
              <div className="flex items-start gap-3 mt-1">
                <span className="w-1 h-1 bg-black rounded-full mt-2 shrink-0" />
                <p className="text-gray-800 font-normal">
                  Simply provide us with their address and let us take care of
                  the rest, delivering beautiful blooms straight to their
                  doorstep at the frequency and duration of your choosing.
                </p>
              </div>
            </li>
            <li className="mb-6">
              <h2 className="text-black">For Business</h2>
              <div className="flex items-start gap-3 mt-1">
                <span className="w-1 h-1 bg-black rounded-full mt-2 shrink-0" />
                <p className="text-gray-800 font-normal">
                  s a great way to create a pleasant atmosphere and leave a good
                  impression on your guests and customers. Fresh floral
                  arrangements will improve the aesthetic image of your
                  business, and our service guarantees timely replacement
                  without extra care or effort on your part.
                </p>
              </div>
            </li>
          </ul>
          <button className="bg-white border text-black px-8 py-5 text-xl font-medium tracking-wide hover:bg-black hover:text-white transition-colors">
            EXPLORE PLANS
          </button>
        </div>
      </div>

      {/*How does it work*/}
      <div className="grid grid-cols-2 h-full border-b">
        {/* Right half */}
        <div className="pl-16 pt-18">
          <h1 className="text-4xl font-semibold mb-6">How does it work?</h1>
        </div>
        {/* Left half */}
        <div className="grid grid-rows-3 border-l border-black">
          <div className="p-13 pb-0 pl-16 pt-16 border-b">
            <div className="max-w-lg">
              <h1 className="text-4xl  text-black mb-8 leading-tight">
                Choose a plan
              </h1>
              <p className="text-sm leading-relaxed text-black mb-14">
                Select the subscription plan that suits you best from our three
                bouquet designs: classic, seasonal, and deluxe. Each plan comes
                with a designer vase, free delivery, and a discount of up to
                30%. Our seasonal and deluxe plans also include a luxurious
                scented candle to enhance the ambiance.
              </p>
            </div>
          </div>
          <div className="p-13 pb-0 pl-16 pt-16 border-b">
            <div className="max-w-lg ">
              <h1 className="text-4xl  text-black mb-8 leading-tight">
                Frequency and Duration
              </h1>
              <p className="text-sm leading-relaxed text-black mb-14">
                Choose delivery frequency: once a week, every two weeks, or once
                a month. Then, select your subscription duration from 3 to 12
                months. Enjoy savings with a longer subscription. We understand
                that every customer has different needs, and we aim to provide
                flexible subscription options that cater to your specific
                preferences.
              </p>
            </div>
          </div>
          <div className="p-13 pb-0 pl-16 pt-16">
            <div className="max-w-lg ">
              <h1 className="text-4xl  text-black mb-8 leading-tight">
                Pay once
              </h1>
              <p className="text-sm leading-relaxed text-black mb-14">
                After entering your contact and delivery information and paying
                for your subscription, you can sit back and relax, knowing that
                you have secured a regular supply of fresh, stunning flowers for
                yourself or your loved ones
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Selecting a plan*/}
      <div className="grid grid-cols-2 border-b">
        <div className="px-9 py-18 border-r">
          <div className="max-w-lg">
            <p className="text-xs mb-4 text-black ">BUILD YOUR SUBSCRIPTION</p>
            <h1 className="text-4xl text-black mb-5 leading-tight">
              Choose a plan
            </h1>
            <p className="text-sm leading-relaxed text-black mb-14">
              Select the subscription plan that suits you best from our three
              bouquet designs: classic, seasonal, and deluxe. Each plan comes
              with a designer vase, free delivery, and a discount of up to 30%.
              Our seasonal and deluxe plans also include a luxurious scented
              candle to enhance the ambiance.
            </p>
          </div>
        </div>

        <div>
          <img src={img2} className="w-full object-cover" />
        </div>
      </div>

      {/*Faq */}
      <div className="flex justify-center items-center py-20 bg-gray-100">
        <SubscriptionFAQ />
      </div>
    </div>
  );
};

export default Subscription;
