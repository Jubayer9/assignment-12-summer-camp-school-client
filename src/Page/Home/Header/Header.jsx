import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/img/05c2bfad683523a71150eb4d696172a6.webp'
import img2 from '../../../assets/img/download.jpg'
import img3 from '../../../assets/img/images.jpg'
import img4 from '../../../assets/img/d4cf1975687c0efb1e209b83ef0189f7.webp'
import img5 from '../../../assets/img/images (1).jpg'
import img6 from '../../../assets/img/images (2).jpg'

const Header = () => {

    return (
        <Carousel className="w-[80%] mx-auto  " >
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img2} />
        </div>
        <div>
            <img src={img3} />
        </div>
        <div>
            <img src={img4} />
        </div>
        <div>
            <img src={img5} />
        </div>
        <div>
            <img src={img6} />
        </div>
    </Carousel>
    );
};

export default Header;