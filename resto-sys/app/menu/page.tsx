import { NavBar } from '@/app/utils/navbar';
import { SideBar } from '@/app/utils/sidebar';
import { FooterComponent } from '@/app/utils/footer';

export default function Menu() {
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

                </div>
            </div>
            <div className="mt-2">
                <FooterComponent />
            </div>
        </div>
    )
}