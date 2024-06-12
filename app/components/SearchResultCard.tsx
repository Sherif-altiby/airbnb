import Image from "next/image";
import { SearchResultItem } from "../types";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

type CardProps = Omit<SearchResultItem, 'long' | 'lat'>;

const SearchResultCard = ( { img, location, title, description, star, price, total }: CardProps ) => {
  return (
    <div className='flex flex-col md:flex-row py-2 px-2 border-b cursor-pointer pr-4 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
      <div className='relative h-[130px] w-full md:h-52 md:w-80 flex-shrink-0'>
        <Image
          src={img}
          fill
          className='rounded-2xl object-cover'
          alt='Listing-Card'
        />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p className="dark:text-white" >{location}</p>
          <HeartIcon className='h-7 cursor-pointer text-red-600' />
        </div>
        <h4 className='text-xl  dark:text-white'>{title}</h4>
        <div className='border-b w-10 pt-2npm run dev' />
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center dark:text-white'>
            <StarIcon className='h-5 text-red-400 dark:text-yellow-400' />
            {star}
          </p>
          <div>
            <p className='text-lg lg:text-2xl font-semibold pb-2 dark:text-white'>{price}</p>
            <p className='text-right font-extralight dark:text-white '>{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResultCard