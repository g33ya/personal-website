import nameBanner from '../assets/name_banner_transparent.png'
import pinkWhiteG from '../assets/pink_white_g.png'
import pinkWhiteI from '../assets/pink_white_i.png'
import pinkWhiteA from '../assets/pink_white_a.png'
import pinkWhiteS from '../assets/pink_white_s.png'
import pinkWhiteC from '../assets/pink_white_c.png'
import pinkWhiteO from '../assets/pink_white_o.png'
import pinkWhiteZ from '../assets/pink_white_z.png'
import pinkWhiteR from '../assets/pink_white_r.png'
import './NameBanner.css'

function NameBanner() {
  return (
    <div className="relative inline-block w-full">

        <img
            src={nameBanner}
            alt="Name Banner"
            className="w-full max-w-[700px]"
        />

        <img
            src={pinkWhiteG}
            alt="G"
            className="absolute top-[25%] left-[4%] w-[6%] flutter-a"
        />

        <img
            src={pinkWhiteI}
            alt="I"
            className="absolute top-[16%] left-[8%] w-[6%] flutter-b"
        />
    
        <img
            src={pinkWhiteA}
            alt="A"
            className="absolute top-[20%] left-[12.5%] w-[6%] flutter-c"
        />
    
        <img
            src={pinkWhiteS}
            alt="S"
            className="absolute top-[45%] left-[9%] w-[6%] flutter-a"
        />

        <img
            src={pinkWhiteC}
            alt="C"
            className="absolute top-[46%] left-[13.8%] w-[5.5%] flutter-b"
        />
    
        <img
            src={pinkWhiteO}
            alt="O"
            className="absolute top-[45%] left-[18.5%] w-[6%] flutter-c"
        />

        <img
            src={pinkWhiteZ}
            alt="Z"
            className="absolute top-[45%] left-[23.7%] w-[6%] flutter-a"
        />

        <img
            src={pinkWhiteZ}
            alt="Z"
            className="absolute top-[45%] left-[28.9%] w-[6%] flutter-b"
        />

        <img
            src={pinkWhiteA}
            alt="A"
            className="absolute top-[45%] left-[34.3%] w-[6%] flutter-c"
        />
    
        <img
            src={pinkWhiteR}
            alt="R"
            className="absolute top-[44%] left-[39%] w-[6%] flutter-a"
        />

        <img
            src={pinkWhiteO}
            alt="O"
            className="absolute top-[45%] left-[43.5%] w-[6%] flutter-b"
        />
    </div>
  );
}

export default NameBanner;