import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ item, slug }) => {
    const { id, img, name, title, price } = item

    return (
        <div className="col">
            <Link to={`/${id}/${slug}`} className="text-decoration-none text-dark">
                <div className="item text-center p-4 rounded">
                    <img src={img} alt="" className="img-fluid p-2" style={{ height: "220px" }} />
                    <h5 className="fw-bold font">{name}</h5>
                    <p className="text-secondary">{title}</p>
                    <h4 className="fw-bold f-price">
                        <FontAwesomeIcon icon={faDollarSign} className=" text-warning me-1" />
                        {price}
                    </h4>
                </div>
            </Link>
        </div>
    );
};

export default Menu;