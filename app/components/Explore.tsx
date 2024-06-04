import { ExploreData } from "../types"
import { getExplore } from "../utils/api"
import ExploreCard from "./ExploreCard"

const Explore = async () => {
  
  const exploreData: ExploreData = await getExplore()
 
  return (
    <section className="pt-6" >
        <div className="container">
                <h2 className="text-4xl font-semibold mb-5" > Explore Nearby </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
                    {exploreData.map(item => (
                        <ExploreCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
                    ))}
                 </div>
        </div>
    </section>
  )
}

export default Explore