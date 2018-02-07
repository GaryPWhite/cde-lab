import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

import pic15 from '../assets/images/pic15.jpg'
import pic16 from '../assets/images/pic16.jpg'
import pic17 from '../assets/images/pic17.jpg'

const Landing = (props) => (
  <div>
    <Helmet>
      <title>Visit Cognizant Labs Boston</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h4>Finding Our Lab</h4>
          </header>
          <p>We're located at <Link to="https://www.google.com/maps/place/745+Atlantic+Ave,+Boston,+MA+02111/@42.3503079,-71.0592896,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a78e7d072c1:0x430daea654c67c2b!8m2!3d42.350304!4d-71.0571009" >
            745 Atlantic Avenue,</Link> #235,238 in Boston, MA.</p>
          <p>For accomodations, we reccommend some closeby hotels in the city:</p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <a href="http://www.marriott.com/hotels/travel/bosdm-courtyard-boston-downtown/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2" className="image">
            <img src={pic15} alt="" />
          </a>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Courtyard Downtown Boston</h3>
              </header>
              <p>275 Tremont Street, Boston, Massachusetts 02116 USA</p>
              <ul className="actions">
                <li><a href="http://www.marriott.com/hotels/travel/bosdm-courtyard-boston-downtown/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2" className="button">Learn more</a></li>
                <li><a href="https://www.google.com/maps/dir/275+Tremont+St,+Boston,+MA+02116/745+Atlantic+Avenue,+Boston,+MA/@42.3505737,-71.0632676,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e37a76c25f47d7:0xe34c5c34f69c4c0!2m2!1d-71.0655674!2d42.3499198!1m5!1m1!1s0x89e37a78e7d072c1:0x430daea654c67c2b!2m2!1d-71.0571009!2d42.350304!3e2" className="button special">
                  view on map</a></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="http://doubletree3.hilton.com/en/hotels/massachusetts/doubletree-by-hilton-hotel-boston-downtown-BOSCODT/index.html" className="image">
            <img src={pic16} alt="" />
          </a>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>DoubleTree By Hilton</h3>
              </header>
              <p>821 Washington St, Boston, MA 02111</p>
              <ul className="actions">
                <li><a href="http://doubletree3.hilton.com/en/hotels/massachusetts/doubletree-by-hilton-hotel-boston-downtown-BOSCODT/index.html" className="button">Learn more</a></li>
                <li><a href="https://www.google.com/maps/dir/DoubleTree+by+Hilton+Hotel+Boston+Downtown,+821+Washington+St,+Boston,+MA+02111/745+Atlantic+Ave,+Boston,+MA+02111/@42.3502652,-71.0625916,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e37a714bcef409:0x898806d3df102956!2m2!1d-71.0642155!2d42.3489638!1m5!1m1!1s0x89e37a78e7d072c1:0x430daea654c67c2b!2m2!1d-71.0571009!2d42.350304!3e2" className="button special">
                  view on map</a></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="https://boston.regency.hyatt.com/en/hotel/home.html" className="image">
            <img src={pic17} alt="" />
          </a>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Hyatt Regency Boston</h3>
              </header>
              <p>1 Avenue de Lafayette, Boston MA 02111</p>
              <ul className="actions">
                <li><a href="https://boston.regency.hyatt.com/en/hotel/home.html" className="button">Learn more</a></li>
                <li><a href="https://www.google.com/maps/dir/Hyatt+Regency+Boston,+Avenue+de+Lafayette,+Boston,+MA/745+Atlantic+Avenue,+Boston,+MA/@42.3516049,-71.0648563,16.15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e37082b1c5e475:0x9c8ffc2371f3ce9a!2m2!1d-71.0606038!2d42.3538147!1m5!1m1!1s0x89e37a78e7d072c1:0x430daea654c67c2b!2m2!1d-71.0571009!2d42.350304!3e2" className="button special">
                  view on map</a></li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>

  </div>
)

export default Landing