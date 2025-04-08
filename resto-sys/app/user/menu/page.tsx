import { NavBar } from "@/app/utils/navbar";
import { SideBar } from "@/app/utils/sidebar";
import { FooterComponent } from "@/app/utils/footer";
import { Playfair } from "next/font/google";
import { rupeeSymbol } from "@/app/api/menu/menu";
import {
  getVegStarters,
  getNonVegStarters,
  getVegPlatters,
  getNonVegPlatters,
  getVegMainCourse,
  getNonVegMainCourse,
  getVegBiryani,
  getNonVegBiryani,
  getVegRice,
  getNonVegRice,
  getRotisAndBreads,
  getChaats,
  getSalads,
  getRaitas,
  getSweetDishes,
  getBeverages
} from "@/app/api/menu/menu";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default async function Menu() {
  const vegStarters = await getVegStarters();
  const nonVegStarters = await getNonVegStarters();
  const vegPlatters = await getVegPlatters();
  const nonVegPlatters = await getNonVegPlatters();
  const vegMainCourse = await getVegMainCourse();
  const nonVegMainCourse = await getNonVegMainCourse();
  const vegBiryani = await getVegBiryani();
  const nonVegBiryani = await getNonVegBiryani();
  const vegRice = await getVegRice();
  const nonVegRice = await getNonVegRice();
  const rotisAndBreads = await getRotisAndBreads();
  const chaats = await getChaats();
  const salads = await getSalads();
  const raitas = await getRaitas();
  const sweetDishes = await getSweetDishes();
  const beverages = await getBeverages();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-2">
        <NavBar />
      </div>
      <div className="flex flex-grow px-2">
        <div className="flex items-center mr-2">
          <SideBar />
        </div>
        <div
          className="flex-grow relative overflow-y-auto scrollbar-hide"
          style={{
            // backgroundImage: "url('/home_bg.png')",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // borderRadius: "10px",
            height: 'calc(100vh - 180px)',
            padding: "10px",
            margin: "10px",
          }}
        >
          <h2
            className={`text-4xl font-semibold text-center ${playfair.className}`}
            id="veg_starters"
          >
            Veg Starters
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {vegStarters.map((starter) => (
              <div className="w-1/4 p-2" key={starter.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {starter.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {starter.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{starter.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="w-1/4 p-2">
              <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold">Paneer Tikka</h3>
                  <p className="text-sm text-gray-500">
                    Indian spiced cottage cheese grilled to perfection.
                  </p>
                  <p className="text-base font-bold mt-2">₹ 450</p>
                </div>
              </div>
            </div> */}
          </div>
          <hr />
          <hr />
          <br />
          <h2
              className={`text-4xl font-semibold text-center ${playfair.className}`}
              id="non_veg_starters"
            >
            Non-Veg Starters
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {nonVegStarters.map((starter) => (
              <div className="w-1/4 p-2" key={starter.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {starter.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {starter.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{starter.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2 
              className={`text-4xl font-semibold text-center ${playfair.className}`}
              id="veg_platters"
          >
            Veg Platters
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {vegPlatters.map((platter) => (
              <div className="w-1/4 p-2" key={platter.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {platter.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {platter.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{platter.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2 
              className={`text-4xl font-semibold text-center ${playfair.className}`}
              id="non_veg_platters"
          >
            Non-Veg Platters
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {nonVegPlatters.map((platter) => (
              <div className="w-1/4 p-2" key={platter.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {platter.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {platter.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{platter.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2
            className={`text-4xl font-semibold text-center ${playfair.className}`}
            id="veg_main_course"
          >
            Veg Main Course
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {vegMainCourse.map((dish) => (
              <div className="w-1/4 p-2" key={dish.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {dish.description}
                    </p>
                    <p className="text-be font-bold mt-2">
                      {rupeeSymbol}{dish.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2 
            className={`text-4xl font-semibold text-center ${playfair.className}`}
            id="non_veg_main_course"
          >
            Non-Veg Main Course
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {nonVegMainCourse.map((dish) => (
              <div className="w-1/4 p-2" key={dish.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h4 className="text-lg font-semibold">
                      {dish.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {dish.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{dish.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2 
            className={`text-4xl font-semibold text-center ${playfair.className}`}
            id="veg_biryani"
          >
            Veg Biryani
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {vegBiryani.map((biryani) => (
              <div className="w-1/4 p-2" key={biryani.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h4 className="text-lg font-semibold">
                      {biryani.name}
                    </h4>
                    <p className="text-sm-text-gray-500">
                      {biryani.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{biryani.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2 
            className={`text-4xl font-semibold text-center ${playfair.className}`}
            id="non_veg_biryani"
          >
            Non-Veg Biryani
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {nonVegBiryani.map((biryani) => (
              <div className="w-1/4 p-2" key={biryani.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {biryani.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {biryani.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{biryani.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2 
            className={`text-4xl font-semibold text-center ${playfair.className}`}
            id="veg_rice"
          >
            Veg Rice
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {vegRice.map((rice) => (
              <div className="w-1/4 p-2" key={rice.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {rice.name}
                    </h3>
                    <p className="text-sm-text-gray-500">
                      {rice.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{rice.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2 
            className={`text-4xl font-semibold text-center ${playfair.className}`}
            id="non_veg_rice"
          >
            Non-Veg Rice
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {nonVegRice.map((rice) => (
              <div className="w-1/4 p-2" key={rice.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {rice.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {rice.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{rice.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2
            className={`text-4xl font-semibold text-center ${playfair.className}`}
            id="rotis_and_breads"
          >
            Rotis and Breads
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {rotisAndBreads.map((dish) => (
              <div className="w-1/4 p-2" key={dish.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {dish.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{dish.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2
            className={`text-4xl font-semibold text-center ${playfair.className}`}
            id="chaats"
          >
            Chaats
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {chaats.map((chaat) => (
              <div className="w-1/4 p-2" key={chaat.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {chaat.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {chaat.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{chaat.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2 
              className={`text-4xl font-semibold text-center ${playfair.className}`}
              id="salads"
          >
            Salads
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {salads.map((salad) => (
              <div className="w-1/4 p-2" key={salad.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {salad.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {salad.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{salad.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2
            className={`text-4xl font-semibold text-center ${playfair.className}`}
            id="raitas"
          >
            Raitas
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {raitas.map((raita) => (
              <div className="w-1/4 p-2" key={raita.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {raita.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {raita.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{raita.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2 
              className={`text-4xl font-semibold text-center ${playfair.className}`}
              id="sweet_dishes"
          >
            Sweet Dishes
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {sweetDishes.map((sweetDish) => (
              <div className="w-1/4 p-2" key={sweetDish.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h4 className="text-lg font-semibold">
                      {sweetDish.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {sweetDish.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{sweetDish.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
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
          <h2
            className={`text-4xl font-semibold text-center ${playfair.className}`}
            id="beverages"
          >
            Beverages
          </h2>
          <hr />
          <div className="flex flex-wrap">
            {beverages.map((beverage) => (
              <div className="w-1/4 p-2" key={beverage.id}>
                <div className="flex flex-row rounded-2xl shadow-md overflow-hidden">
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {beverage.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {beverage.description}
                    </p>
                    <p className="text-base font-bold mt-2">
                      {rupeeSymbol}{beverage.price}
                    </p>
                    <div className="flex flex-row">
                      <button className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-2">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <hr />
        </div>
      </div>
      <div className="mt-2">
        <FooterComponent />
      </div>
    </div>
  );
}
