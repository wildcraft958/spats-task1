import Carousel from "./Carousel";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.webp";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.jpeg";


function Our_collection() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
    return (
        <div>
            <div className="flex justify-evenly bg-white p-4">
                <h1 className="text-black text-6xl font-bold font-serif">Our collections</h1>
            </div>
            <Carousel>
                {images.map((image, index) => {
                    return <img key={index} src={image} alt={index} />
                })}
            </Carousel>

        </div>
    )
}

export default Our_collection
