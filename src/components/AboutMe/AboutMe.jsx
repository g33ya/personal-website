import './AboutMe.css'
import NameBanner from '../NameBanner/NameBanner'
import pinkPolaroid from '../../assets/cami_and_me.png'
import greenPolaroid from '../../assets/solo_photo.png'
import plaidPaperCutout from '../../assets/plaid_paper_cutout.png'

const currentMonth = new Date().toLocaleString("en-US", {
  month: "long",
});

export default function Home() {
  return (
    <div className="home-page">
      
        <section className="hero-section">
          <div className="hero-left">
            <div className="left-collage">
                <div className="plaid-wrap">

              <img
                src={plaidPaperCutout}
                alt=""
                className="plaid-paper"
              />

              <div className="banner-layer">
                <NameBanner />
              </div>

              
              <div className="intro-note">
                <div className="availability-pill hero-pill">
                  <span className="availability-dot" />
                  Available {currentMonth} 2026
                </div>
                <p>
                  hi! i'm gia, a u.delaware grad and software engineer with a passion for creating user-centered experiences. through internships
                  and personal projects, i've developed a love for building software that balances design with functionality. i love 
                  turning ideas into intuitive interfaces and bringing them to life through code, learning new technologies along the way!
                </p>

                <div className="intro-links">
                  <a href="#projects" className="scrapbook-link">
                    ★ [my projects]
                  </a>
                  <a
                    href="/GiovannaScozzaro_Resume.pdf"
                    className="scrapbook-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ★ [download resume]
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <img src={pinkPolaroid} alt="" className="polaroid polaroid-pink" />
            <img src={greenPolaroid} alt="" className="polaroid polaroid-green" />
          </div>
        </section>
      </div>
   
  )
}