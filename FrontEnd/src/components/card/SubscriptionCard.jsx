const SubscriptionCard = ({
    subscription,
    setSubscriptionId,
    subscriptionId,
}) => {
    const features = subscription.description
        .split("\n")
        .filter((f) => f.trim());

    return (
        <div className="border border-gray-400 bg-white mb-4">
            <div className="grid h-50 grid-cols-2">
                {/* Images Section - Left Half */}
                <img
                    src={"/images/" + subscription.img.trim()}
                    className="w-full h-full object-cover"
                />

                {/* Content Section - Right Half */}
                <div className="p-4 flex flex-col bg-white">
                    {/* Title */}
                    <h3 className="text-base font-medium mb-4">
                        {subscription.name}
                    </h3>

                    {/* Features List */}
                    <ul className="space-y-1">
                        <li className="text-xs text-gray-700 flex items-start">
                            <span className="mr-1">•</span>
                            <span>Price ${subscription.price}</span>
                        </li>
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="text-xs text-gray-700 flex items-start"
                            >
                                <span className="mr-1">•</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Select Button - Full Width */}
            <button
                onClick={() => setSubscriptionId(subscription.id)}
                className={`w-full ${
                    subscriptionId === subscription.id
                        ? "bg-gray-800"
                        : "bg-black"
                } text-white py-3 text-xs font-medium uppercase tracking-widest hover:bg-gray-800 transition-colors`}
            >
                Select
            </button>
        </div>
    );
};

export default SubscriptionCard;
