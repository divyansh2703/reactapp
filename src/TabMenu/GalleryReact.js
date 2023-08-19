import React, { useState } from "react";
import "../TabMenu/tab.css";
import Menu from "./menu";


const GalleryReact = () => {

    const [items , setItems] = useState(Menu);
    const filterItem = (categItem) => {
        const updatedItem = Menu.filter((curElem) =>{
            return curElem.category === categItem;
        });
        setItems(updatedItem);
    }


    return(
        <>
        <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
        <hr/>
        <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
                <button className="btn btn-waring" onClick={() => filterItem('breakfast')}>breakfast</button>
                <button className="btn btn-waring" onClick={() => filterItem('lunch')}>lunch</button>
                <button className="btn btn-waring" onClick={() => filterItem('evening')}>dinner</button>
                <button className="btn btn-waring" onClick={() => filterItem('dinner')}>evening</button>
                <button className="btn btn-waring" onClick={() => setItems(Menu)}>all</button>
            </div>
        </div>

        <div className="menu-item container-fluid mt-<5">
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className="row my-5">
                        
                        {
                            items.map((elem)=> {
                                const { id, name, image, description, price } = elem;

                                return(
                                <div className="item col-12 com-md-6 col-lg-6 col-xl-4 my-5">
                                <div className="row Item-inside">
                                    <div className="col-12 col-md-12 col-lg-4 img-div">
                                        <img src={image} alt={name} className="img-fluid"/>
                                    </div>
                                    {/*menu items description*/}
                                    <div className="col-12 col-md-12 col-lg-8">
                                        <div className="main-title pt-4 pb-3">
                                            <h1>{name}</h1>
                                            <p>{description}</p>
                                        </div>
                                        <div className="menu-price-book">
                                            <div className="price-book-divide d-flex justify-content-between">
                                                <h2>price: {price}</h2>
                                                <a href="#">
                                                <button className="btn btn-primary">Order Now</button>
                                                </a>
                                            </div>
                                            <p>*Prices may vary on selected dates.</p>
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
        </>
    )
}

export default GalleryReact