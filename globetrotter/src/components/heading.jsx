import React from 'react';

export const HeadingTwo = (props) => {
    return (
        <div className="heading-two" id='heading-two'>
            <p className="h2 display-5 fw-bold">{props.heading}</p>
            <p className='subheading-two'>{props.subheading}</p>
        </div>
    )
}

export const HeadingThree = (props) => {
    return (
        <div className="heading-two">
        <p className='subheading-three fw-bold'>{props.subheading}</p>
        <p className="h2 display-5 fw-bold">{props.heading}</p>
    </div>
    )
}