import React from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import data from '../../../fakeData/data'
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';


const FoodInfo = () => {
    const [count, setCount] = useState(1)
    const quantityIncrease = () => {
        setCount(count + 1)
    }
    const quantityDecrease = () => {
        count > 1 && setCount(count - 1)
    }

    const { id, slug } = useParams()
    const foods = data.find(item => item.slug === slug)
    const { img, name, price, info } = foods.items[id]
    let images = foods.items.map(a => a.img);
    console.log(images);
    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-2 ms-auto">
                <div className="col">
                    <h1 className="w-75 item-info-title">{name}</h1>
                    <p className="w-75 item-info-p text-secondary fs-5 fw-light">{info}</p>
                    <div className="d-flex align-items-center">
                        <h2 className="f-price d-inline mb-0 me-5">
                            <FontAwesomeIcon icon={faDollarSign} className=" text-warning me-1" />
                            {parseFloat(price).toFixed(2)}
                        </h2>
                        <div className="btn-group border px-2" role="group" aria-label="Basic example">
                            <span onClick={quantityDecrease} type="button" className="btn">
                                <FontAwesomeIcon icon={faMinus} className="minus-icon me-1" />
                            </span>
                            <input onChange={e => setCount(e.target.value)} type="number" name="" id="" className="form-control fs-5 food-quantity text-center" value={count} />
                            <span onClick={quantityIncrease} type="button" className="btn">
                                <FontAwesomeIcon icon={faPlus} className="plus-icon text-success ms-1" />
                            </span>
                        </div>
                    </div>
                    <button onClick className="btn banner-btn my-4 px-4"><FontAwesomeIcon icon={faShoppingCart} className="me-2" />Add</button>
                    <Carousel variant="dark">
                        {
                            images.map(image => {
                                return <Carousel.Item className="border-remove carousel">
                                    <img
                                        className="d-block mx-auto"
                                        src={image}
                                        alt="slider"
                                        height="150px"
                                    />
                                </Carousel.Item>
                            })
                        }
                    </Carousel>
                </div>
                <div className="col text-md-end text-center ">
                    <img src={img} alt="" className="img-fluid item-info-img" style={{ height: "440px" }} />
                </div>
            </div>

        </div >
    );
};

export default FoodInfo;