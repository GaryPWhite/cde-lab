import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic14 from '../assets/images/pic14.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Boston Labs by Cognizant</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Your Partner In the Journey To The Cloud</h1>
                    </header>
                    <span className="image main"><img src={pic14} alt="" /></span>
                    <p>The world is drastically changing and doing so at a <em>rapid</em> pace.<br />
                    In order to remain relevant, we are all challenged with unlocking the value of legacy systems while redefining our competitive advantage.<br /> 
                    Together we can tackle this task; confidently identifying and developing the necessary cloud strategy: providing and proving <strong>real</strong> value creation and defined market space.</p>
                    <p>Through modern software development and lean methodology, we have found our niche through strategic partnerships focused by the following: <br />
                    <ol>
                        <li><h4 className="no-bottom">Automated Journey to the Cloud:</h4>It is through automated IP and assets that we are able to map a journey to the cloud reducing cost, risk, and time.</li>
                    </ol>
                    </p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
                </div>
            </section>
        </div>

    </div>
)

export default Generic