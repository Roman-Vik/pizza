import fb from "../images/icons/fb.png";
import fb_2 from "../images/icons/fb-2x.png";

export  function SN() {
    return (
            <a href="/" className="ftr__elem">
                <img alt="fb" src={fb}
                     srcSet={`${fb} 1x, ${fb_2} 2x`}
                />
            </a>
    )
}