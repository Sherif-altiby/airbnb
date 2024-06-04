import { SliderData } from "../types";
import { getSliderData } from "../utils/api"
import SliderCard from "./SliderCard";

const Slider = async () => {

   const sliderData: SliderData = await getSliderData();

  return (
    <section className="pt-6">
         <div className="container">
              <div className="flex space-x-4 overflow-scroll no-scrollbar p-3 -ml-3" >
                    {sliderData.map((item) => (
                        <SliderCard key={item.img} img={item.img} title={item.title} />
                    ))}  
              </div>
         </div>
    </section>
  )
}   

export default Slider