import React,{useState} from 'react'
import "./index.css";
import Menu from "../../API/menu";

const TabMenu = () => {
    const[items,setItems]= useState(Menu);

    const filterItem = (categoryItem)=>{
        const updateItems = Menu.filter((currentElement)=>{
            return currentElement.category === categoryItem;
        });

        setItems(updateItems);
    }

    return (
       <>
            <h1 className="mt-2 text-center main-heading">Order Your Favourite Dish</h1>
            <hr/>
            <div className="menut-tabs container">
                <div className="menut-tab d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={()=>filterItem('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={()=>filterItem('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={()=>filterItem('evening')}>Evening</button>
                    <button className="btn btn-warning" onClick={()=>filterItem('dinner')}>Dinner </button>
                    <button className="btn btn-warning" onClick={()=>setItems(Menu)}>All</button>
                </div>

                {/* my main item section */}
             <div className="menu-items container-fluid mt-2">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row my-3">
                            {
                                items.map((e)=>{
                                    const {id,name,image,description,price}=e;

                                    return (
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-4">
                                                  <div className="col-12 col-md-12 col-lg-12 img-div">
                                                <img src={image} className="img-fluid" alt={name} />
                                            </div>
                                        <div className="row Item-inside">
                                            {/* for images */}
                                      
                                            {/* menu description */}
                                            <div className="col-12 col-md-12 col-lg-12 beri">
                                                <div className="main-title pt-4 pb-3">
                                                    <h1>
                                                        {name}
                                                    </h1>
                                                    <p style={{'fontSize':14}}>
                                                       {description}
                                                    </p>
                                                </div>
                                                <div className="menu-price-book">
                                                    <div className="price-book-divide d-flex justify-content-between">
                                                        <h2>Harga : Rp.{price}</h2>
                                                        <a href="#">
                                                            <button className="btn btn-primary">
                                                                Order Now
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              
                                    )
                                })
                            }
                         
                        </div>
                    </div>
                </div>
             </div>
            </div>
       </>
    )
}

export default TabMenu
