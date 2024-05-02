import Carousel from "./Carousel";

function Intro() {
    return (
        <div className="container h-500">
            <div className="text-center">
                <Carousel>
                    <div>
                        <a href="#">
                            <img src="intro1.jpg" alt="Image 1" className="w-screen" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="intro2.jpg" alt="Image 2" className="w-screen" />
                        </a>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Intro;