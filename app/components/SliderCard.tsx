import Image from "next/image";
import { SliderItem } from "../types"

type SliderItemPropos = SliderItem;

const SliderCard = ({ img, title }: SliderItemPropos) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out" >
        <div className="relative h-80 w-80" >
            <Image src={img} alt="slider-image" fill />
        </div>
       <h2 className="text-2xl mt-2 text-center" > {title} </h2>
    </div>
  )
}

export default SliderCard