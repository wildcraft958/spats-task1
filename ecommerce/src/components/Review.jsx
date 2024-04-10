import  { useState } from 'react';
const Review = () => {
    const [count, setCount] = useState(10);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <>
            <hr className="m-8 h-px bg-black rounded-lg" />
            <h1 className="text-black text-4xl font-mono font-bold m-8">Customer Reviews</h1>
            <div className="flex justify-evenly">
                <div className="w-128">
                    <img src="7.jpg" alt="no image" className="mx-8 mb-8" />
                </div>
                {/* review comments */}
                <div className="mx-16">
                    <article>
                        <div className="flex items-center mb-4">
                            <img className="w-10 h-10 me-4 rounded-full" src="demo.png" alt="" />
                            <div className="font-medium text-black">
                                <p>Chota Bheem <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                            </div>
                        </div>
                        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                        </div>
                        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the Dholakpur on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">I liked the message of this book and the concept of ikigai, but I found the book focused more on longevity and how centenarians claim they were able to live so long. It was mashed together strangely and didn’t flow well. There were chapters describing step by step how to do a sun salutation or some basic movements of tai chi, which I felt was just unnecessary way to fill up some pages. I listened to the audiobook, and was disappointed by how horribly the narrator pronounced Japanese terms.</p>
                        <p className="mb-3 text-gray-500 dark:text-gray-400"> Overall, this book attempted to offer some good advice, but it needed to expand more on the core focus of ikigai.</p>
                        <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                        <aside>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{count} people found this helpful</p>
                            <div className="flex items-center mt-3">
                                <button href="#" className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={increment}>Helpful</button>
                                <a href="#" className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>
                            </div>
                        </aside>
                    </article>
                </div>
            </div>
            <hr className="mt-8 h-px" />

        </>
    );
};

export default Review;