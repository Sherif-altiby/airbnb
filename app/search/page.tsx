import { format } from "date-fns";
import Footer from "../components/Footer"
import Header from "../components/headdder/Header"
import { SearchParamsProps, SearchResultData } from "../types";
import { getSearchResults } from "../utils/api";
import SearchResultCard from "../components/SearchResultCard";

const filters = [ "Cancellation Flexibility", "Type Of place", "Price", "Rooms and Beds", "More Filters" ]

const SearchResult = async ( { searchParams: {startDate, endDate, numOfGuests, location}}: { searchParams: SearchParamsProps } ) => {

  let formatedStatrtDate;
  let formatedEndDate;
  
  if(startDate && endDate){
    formatedStatrtDate = format(new Date(startDate), "dd MMMM yy")
    formatedEndDate = format(new Date(endDate), "dd MMMM yy")
  }

  const range = `${formatedStatrtDate} || ${formatedEndDate}`;

  const searchResultData: SearchResultData = await getSearchResults();

  return (
    <>
        <Header placeholder={`${location} | ${range} | ${numOfGuests} Guests`} />
        <main>
              <section className="pt-14" >
                  <div className="container">
                        <p className="text-xs dark:text-white" > 300+ Stays - {range} - for {numOfGuests} guests</p>
                        <h1 className="text-3xl font-semibold mt-2 mb-6 dark:text-white" > Stays In {location} </h1>

                        <div className="hidden lg:inline-flex mb-5 space-x-5 text-gray-800 dark:text-white" >
                          {filters.map((filter) =>  <button className="filter-btn" key={filter} > {filter} </button> )}
                        </div>

                        <div>
                          {searchResultData.map(({img, location, title, description, star, price, total}) => (
                            <SearchResultCard key={title} img={img} location={location} title={title} description={description} star={star} price={price} total={total} />
                          ))}
                        </div>
                  </div>
              </section>
        </main>
        <Footer />
    </>
  )
}

export default SearchResult