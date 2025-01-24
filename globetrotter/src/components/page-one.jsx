import React from 'react';

export const PageOne = () => {
    return (
        <div className="page-one-container">
            <div className="page-one">
                <img src="https://assets.vogue.com/photos/5891380723f9887c0e0dfa60/master/w_1600%2Cc_limit/03-hottest-travel-destinations-of-2017.jpg" alt="" className="page-one-bgimg" />
                <div className="page-one-heading">
                    <p className="h1 display-3 fw-bold">Explore the world, <br /> one journey at a time</p>
                    <p className='fw-bold'>Discover new destinations, plan your perfect trip, and book with ease on Globe Trotter</p>
                </div>
                <div className="query-parent">
                    <div className="query-category">
                        <div className="category-items category-active">One way</div>
                        <div className="category-items">Round Trip</div>
                        <div className="category-items">Multi-City</div>
                    </div>
                    <div className="query-search">
                        <div className="search item-1">
                            <p className='h5'>From</p>
                            <select name="" id="" className='dropdown'>
                                <option value="India" >India</option>
                                <option value="Australia" selected>Australia</option>
                                <option value="South-Africa">South Africa</option>
                                <option value="Canada">Canada</option>
                                <option value="Nigeria">Nigeria</option>
                            </select>
                        </div>
                        <div className="search item-2">
                        <p className='h5'>To</p>
                            <select name="" id="" className='dropdown'>
                                <option value="India">India</option>
                                <option value="Australia">Australia</option>
                                <option value="South-Africa">South Africa</option>
                                <option value="Canada">Canada</option>
                                <option value="Nigeria">Nigeria</option>
                            </select>
                        </div>
                        <div className="search item-3">
                            <p className="h5">Expected Date</p>
                            <input type="date" className='date'/>
                        </div>
                        <div className="search searchbtn-container item-4">
                            <button className="searchbtn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}