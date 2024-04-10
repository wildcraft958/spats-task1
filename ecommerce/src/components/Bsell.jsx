import data from '../data.json';
import Card from './Card';
import { GoArrowRight } from "react-icons/go";


const Bsell = () => {
    return (
        <div className='mt-11'>
                  <hr className="m-8 h-px" />
            <div className="flex justify-evenly bg-white p-4">
                <h1 className="text-black text-6xl font-bold font-serif">Best Selling</h1>
                <button className='text-blue-400'>See more<GoArrowRight /></button>
            </div>
            <div className='flex flex-row bg-white justify-center p-4'>
                {data.map((item, index) => {
                    if (index % 3 === 0) {
                        return (
                            <div key={index} className='p-4'>
                                <Card data={item} />
                                {data[index + 1] && <Card data={data[index + 1]} />}
                                {data[index + 2] && <Card data={data[index + 2]} />}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Bsell;