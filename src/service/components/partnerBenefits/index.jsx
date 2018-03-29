import React, { Component } from 'react';
import vorteileLogo from "../../assets/vorteile.png";
import yourGoalLogo from "../../assets/direction-image.png";
import revenueLogo from "../../assets/revenue.png";
import foursectionbtmimg from "../../assets/foursection-btm-img.png";
import './index.css';

class PartnerBenefits extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageURL: vorteileLogo,
    }
  }

  render() {
    
    const { imageURL } = this.state;

    return (
      <div className="partner-vorteile-section">
        <div className="">
         <div className="section-title-wrap">
            <h2 className="section-title">Partner Vorteile</h2>
            <p className="section-subtitle">PEATS ist das unabhängige Vergleichsportal für HR-Softwarelösungen .</p>
         </div>
          <div className="row">
            <div className="small-12 medium-12 large-5 img-center">
              <div class="pv-box-img pv-box-desktop-img">
                 <img src={imageURL} className="SectionFour-img " alt="SectionFour-left-img" />
              </div>
            </div>
            <div className="small-12 medium-12 large-6">
               <div class="pv-box-inner">
                  <div className="pv-box-wrap" onMouseEnter={() => this.setState({ imageURL: vorteileLogo })}>
                     <h3 className="pv-box-title">Tracken Sie Ihren Erfolg</h3>
                     <p className="pv-box-des">Ihre Zugriffszahlen sind jederzeit transparent für Sie in unserem Partner Bereich einsehbar.</p>
                  </div>
                  <div class="pv-box-img pv-box-responsive-img">
                   <img src={vorteileLogo} className="SectionFour-img " alt="SectionFour-left-img" />
                  </div>
                  <div className="pv-box-wrap" onMouseEnter={() => this.setState({ imageURL: yourGoalLogo })}>
                     <h3 className="pv-box-title">Optimieren Sie Ihr Profil mit Partner Badges</h3>
                     <p className="pv-box-des">Zeigen Sie den Besuchern Ihrere Website das Sie auf PEATS zu finden ist. Die Besucher Ihrer Website finden Sie auf PEATS immer an Platz 1.</p>
                  </div>
                  <div class="pv-box-img pv-box-responsive-img">
                    <img src={yourGoalLogo} className="SectionFour-img " alt="SectionFour-left-img" />
                  </div>
                  <div className="pv-box-wrap" onMouseEnter={() => this.setState({ imageURL: revenueLogo })}>
                     <h3 className="pv-box-title">Profitieren Sie von unserer Reichweite</h3>
                     <p className="pv-box-des">Platzieren Sie Ihre eigenen Keywords in unserem Magazin und kommunizieren Sie Ihre Botschaften an die ganze Branche.</p>
                  </div>
                  <div class="pv-box-img pv-box-responsive-img">
                     <img src={revenueLogo} className="SectionFour-img " alt="SectionFour-left-img" />
                  </div>
               </div>
            </div>
          </div>
        </div>
        <div class="partner-vorteile-btn-img">
           <img src={foursectionbtmimg} alt="SectionFour-left-img" />
        </div>
      </div>
    );
  }
}

export default PartnerBenefits;