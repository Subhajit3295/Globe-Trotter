import React from 'react';

export const Ability = (props) => {
    return (
        <div className="ability d-flex justify-content-around w-100 gap-3">
            <div className="ability-child d-flex flex-column h-100  w-100 justify-content-center align-items-center gap-2 p-2">
                <p className='h4 fw-bold text-info'>{props.count_1}+</p>
                <p className='text-center'>{props.description_1}</p>
            </div>
            <div className="ability-child d-flex flex-column h-100  w-100 justify-content-center align-items-center gap-2 p-2">
                <p className='h4 fw-bold text-info'>{props.count_2}+</p>
                <p className='text-center'>{props.description_2}</p>
            </div>
            <div className="ability-child d-flex flex-column h-100  w-100 justify-content-center align-items-center gap-2 p-2">
                <p className='h4 fw-bold text-info'>{props.count_3}+</p>
                <p className='text-center'>{props.description_3}</p>
            </div>
        </div>
    )
}