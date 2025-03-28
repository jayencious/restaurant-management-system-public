import { NavBar } from "@/app/utils/navbar";
import { SideBar } from "./utils/sidebar";
import { FooterComponent } from "./utils/footer";
import { CardComponent } from "./utils/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-2">
      <NavBar />
      </div>
      <div className="flex flex-grow px-2">
        <div className="flex items-center mr-2">
          <SideBar />
        </div>
        <div className="flex-grow relative"
        style={{
          // backgroundImage: "url('/home_bg.png')",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          // borderRadius: "10px",
        }}>
          <div className="flex justify-center items-center space-x-5">
            <CardComponent
              imgSrc='/menu_card.png'
              imgAlt='View Our Menu'
              imgWidth={350}
              imgHeight={400}
              cardText='Menu'
              buttonPath="/menu"
            />
            <CardComponent
                imgSrc='/my_orders.png'
                imgAlt='View Orders'
                imgWidth={350}
                imgHeight={400}
                cardText='Orders'
                buttonPath="/orders"
            />
            <CardComponent
                imgSrc='/reservation.png'
                imgAlt='Table Reservation'
                imgWidth={350}
                imgHeight={400}
                cardText='Book A Table'
                buttonPath="/reservation"
            />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <FooterComponent />
      </div>
    </div>
  );
}
