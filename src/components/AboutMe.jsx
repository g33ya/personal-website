import './AboutMe.css'
import NameBanner from './NameBanner'
import pinkPolaroid from '../assets/cami_and_me.png'
import greenPolaroid from '../assets/solo_photo.png'
import plaidPaperCutout from '../assets/plaid_paper_cutout.png'

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
                <p>
                  Hi! My name is Gia and I am a student at UD. I'm going to add
                  an actual description here eventually, but for now i'll just fill
                  the space. 
                  <br /> <br />will need to figure out how to keep this responsive. sigh
                </p>

                <div className="intro-links">
                  <a href="#projects" className="scrapbook-link">
                    ★ [my projects]
                  </a>
                  <a
                    href="/resume.pdf"
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