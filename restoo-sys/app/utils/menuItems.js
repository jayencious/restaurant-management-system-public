import { Playfair } from "next/font/google"

const playfair = Playfair({
    subsets: ["latin"],
    weight: ['400', '600'],
    display: "swap",
});

async function MenuItems({
    category_name,
    title,
    getFunctionName,
    rupeeSymbol
}) {
    return (
        <>
            <h2
                className={`text-4xl font-semibold text-center ${playfair.className}`}
                id={category_name}
            >
                {title}
            </h2>
            <hr />
            <div
                className="flex flex-wrap"
            >
                {getFunctionName.map((item) => (
                    <div
                        className="w-1/4 p-2"
                        key={item.item_id}
                    >
                        <div
                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                        >
                            <div
                                className="flex flex-col p-4 justify-between"
                            >
                                <h3
                                    className="text-lg font-semibold"
                                >
                                    {item.item_name}
                                </h3>
                                <p
                                    className="text-sm text-gray-500"
                                >
                                    {item.description}
                                </p>
                                <p
                                    className="text-base font-bold mt-2"
                                >
                                    {rupeeSymbol}{item.price}
                                </p>
                                <div
                                    className="flex flex-row"
                                >
                                    <button
                                        className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <hr />
            <br />
        </>
    );
}

export default MenuItems;