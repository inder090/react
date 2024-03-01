import { useEffect, useState } from "react"
import "./Body.css"


function Body() {
    // const [rating,setrating]=useState("")
    const [card, setcard] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            let data1 = await data.json()

            //console.log(data1.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
            setcard(data1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            // console.log(card[0].info.avgRating)
        }
        fetchdata()


    }, [])


    return (
        <>
            <button className="rating-btn" onClick={() => {

                let value = card.filter((p) =>
                    p.info.avgRating >= "4.2"

                )
                console.log(value)
                setcard(value)
            }


            }>Top Rated</button>
            <div className="container">



                {card.map((it) => (
                    <div className="cards">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + it.info.cloudinaryImageId} alt="imgs"></img>
                        <h1>{it.info.name}</h1>
                        <h3>{it.info.areaName}</h3>
                        <h4>{it.info.avgRating} Ratings</h4>
                        <h3>{it.info.costForTwo}</h3>


                    </div>





                ))}







            </div>
        </>
    )
}

export default Body