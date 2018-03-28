import React, { Component } from 'react';
import vorteileLogo from "../../assets/vorteile.png";
import yourGoalLogo from "../../assets/direction-image.png";
import revenueLogo from "../../assets/revenue.png";
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
        <div className="container">
         <div className="section-title-wrap">
            <h2 className="section-title">Partner Vorteile</h2>
            <p className="section-subtitle">PEATS ist das unabhängige Vergleichsportal für HR-Softwarelösungen .</p>
         </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img-center">
              <div class="pv-box-img">
                 <img src={imageURL} className="SectionFour-img " alt="SectionFour-left-img" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
               <div class="pv-box-inner">
                  <div className="pv-box-wrap" onMouseEnter={() => this.setState({ imageURL: vorteileLogo })}>
                     <h3 className="pv-box-title">Tracken Sie Ihren Erfolg</h3>
                     <p className="pv-box-des">Ihre Zugriffszahlen sind jederzeit transparent für Sie in unserem Partner Bereich einsehbar.</p>
                  </div>
                  <div className="pv-box-wrap" onMouseEnter={() => this.setState({ imageURL: yourGoalLogo })}>
                     <h3 className="pv-box-title">Optimieren Sie Ihr Profil mit Partner Badges</h3>
                     <p className="pv-box-des">Zeigen Sie den Besuchern Ihrere Website das Sie auf PEATS zu finden ist. Die Besucher Ihrer Website finden Sie auf PEATS immer an Platz 1.</p>
                  </div>
                  <div className="pv-box-wrap" onMouseEnter={() => this.setState({ imageURL: revenueLogo })}>
                     <h3 className="pv-box-title">Profitieren Sie von unserer Reichweite</h3>
                     <p className="pv-box-des">Platzieren Sie Ihre eigenen Keywords in unserem Magazin und kommunizieren Sie Ihre Botschaften an die ganze Branche.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartnerBenefits;