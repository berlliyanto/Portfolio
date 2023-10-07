import React, { useState } from 'react';

const Switch = ({handleOnChange, checked}) => {
    const [isActive, setIsActive] = useState(checked);
    const toggleSwitch = () => {
        console.log(checked);
        setIsActive(checked);
        handleOnChange();
    };

    const circleSlide = checked ? 'translate-x-4' : 'translate-x-0';

    const switchClass = checked
        ? 'bg-warna3'
        : 'bg-gray-300';

    return (
        <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
            <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className={`toggle-checkbox absolute block w-6 h-6 rounded-full duration-300 bg-white border-4 appearance-none cursor-pointer ${circleSlide} `}
                checked={checked}
                onChange={toggleSwitch} 
            />
            <label
                htmlFor=""
                className={`toggle-label block overflow-hidden h-6 rounded-full ${switchClass}`}
            ></label>
        </div>
    );
};

export default Switch;
