import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]" >
        <Image src="/banner.avif" alt="banner" fill className="object-cover object-left" />
        <div className="absolute top-1/2 w-full text-center" >
                <p className="text-sm sm:text-lg text-gray-900 font-bold " >Not sure where to go? Perfect..</p>
                <button className="text-purple-800 bg-white py-4 px-6 shadow:md rounded-full font-bold " >
                        I am flexible
                </button>
        </div>
    </div>
  )
}

export default Banner