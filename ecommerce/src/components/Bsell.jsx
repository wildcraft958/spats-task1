import  { useState } from 'react';
import Card from './Card';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Bsell = () => {
    const totalItems = 12;
    const itemsPerPage = 4;
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        setIndex((prev) => (prev + itemsPerPage) % totalItems);
    }
    const handlePrev = () => {
        setIndex((prev) => (prev - itemsPerPage + totalItems) % totalItems);
    }
    
    return (
        <div className='mt-11'>
            <div className="flex justify-evenly bg-white p-4">
                <hr className="h-1 bg-black" />
                <h1 className="text-black text-6xl font-bold font-serif">Best Selling</h1>
                <button className='text-blue-400'>See more<GoArrowRight /></button>
            </div>
            <div className='flex flex-row bg-white justify-center p-4'>
                {[...Array(totalItems)].slice(index, index + itemsPerPage).map((_, i) => <Card key={i} index={index + i} />)}
            </div>
            <div className='text-center p-4'>
                <button onClick={handlePrev} className='text-2xl'><GoArrowLeft /></button>
                <button onClick={handleNext} className='text-2xl'><GoArrowRight /></button>
            </div>
        </div>
    );
};

export default Bsell;