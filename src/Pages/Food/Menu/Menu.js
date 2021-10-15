import React from 'react';

const Menu = (props) => {
    const { img, name, title, price } = props.item
    return (
        <div className="col">
            <div className="item text-center p-4 rounded">
                <img src={img} alt="" className="img-fluid p-2" style={{ height: "220px" }} />
                <h5 className="fw-bold font">{name}</h5>
                <p className="text-secondary">{title}</p>
                <h4>${price}</h4>
            </div>

        </div>
    );
};

export default Menu;