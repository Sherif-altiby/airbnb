import Image from "next/image"
import { GreatestProps } from "../types"
import Link from "next/link"

const Greatest = ( {img, title, description, linkText}: GreatestProps ) => {
  return (
    <div className="container relative pb-10">
            <div className="relative h-96 min-w-[300px]" >
                <Image src={img} alt="Greatest-img" fill className="rounded-2xl -z-10 object-cover" />
            </div>
            <div className="absolute top-32 left-12" >
                <h3 className="text-4xl mb-3 w-64" > {title} </h3>
                <p> {description} </p>
                <Link href="/" className="text-sm px-4 py-2 block w-fit rounded-lg mt-5 text-white bg-gray-900" >
                    {linkText}
                </Link>
            </div>
    </div>
  )
}

export default Greatest