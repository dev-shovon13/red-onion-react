import React from 'react';
import Menu from './Menu/Menu';
import foods from '../../fakeData/data';
import './Food.css'

const Food = () => {
    const breakfast = foods[0].items
    const lunch = foods[1].items
    const dinner = foods[2].items
    const breakfastSlug = foods[0].slug;
    const lunchSlug = foods[1].slug;
    const dinnerSlug = foods[2].slug;
    return (
        <div className="py-5">
            <div className="container">
                <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <span className="font fw-bold menu menu-active py-2 px-3 active text-decoration-none" id="breakfast-tab" data-bs-toggle="pill" data-bs-target="#breakfast" type="button" role="tab" aria-controls="breakfast" aria-selected="true">BREAKFAST</span>
                    </li>
                    <li className="nav-item" role="presentation">
                        <span className="font fw-bold mx-md-5 menu py-2 px-3 text-decoration-none" id="lunch-tab" data-bs-toggle="pill" data-bs-target="#lunch" type="button" role="tab" aria-controls="lunch" aria-selected="false">LUNCH</span>
                    </li>
                    <li className="nav-item" role="presentation">
                        <span className="font fw-bold menu py-2 px-3 text-decoration-none" id="dinner-tab" data-bs-toggle="pill" data-bs-target="#dinner" type="button" role="tab" aria-controls="dinner" aria-selected="false">DINNER</span>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active details-active" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
                        <div className="py-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {
                                breakfast.map(item => <Menu key={item.id} slug={breakfastSlug} item={item} />)
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade details-active" id="lunch" role="tabpanel" aria-labelledby="lunch-tab">
                        <div className="py-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {
                                lunch.map(item => <Menu key={item.id} slug={lunchSlug} item={item} />)
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade details-active" id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
                        <div className="py-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {
                                dinner.map(item => <Menu key={item.id} slug={dinnerSlug} item={item} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;