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
      img_1: true,
      img_2: false,
      img_3: false,
    }
  }

  render() {
    
    const { img_1, img_2, img_3 } = this.state;
    const img_1_Render = img_1 ? "pv-box-img img_active" : "pv-box-img";
    const img_2_Render = img_2 ? "pv-box-img img_active" : "pv-box-img";
    const img_3_Render = img_3 ? "pv-box-img img_active" : "pv-box-img";

    return (
      <div className="partner-vorteile-section">
        <div className="partner-vorteile-section-wrp">
         <div className="section-title-wrap">
            <h2 className="section-title">Partner Vorteile</h2>
            <p className="section-subtitle">PEATS ist das unabhängige Vergleichsportal für HR-Softwarelösungen .</p>
         </div>
          <div className="row">
            <div className="pv-left-box img-center">
                {/* <img src={imageURL} className="SectionFour-img " alt="SectionFour-left-img" /> */}
                <div className={img_1_Render}>
                  <img src={vorteileLogo} className="SectionFour-img " alt="SectionFour-left-img" />
                </div>
                <div className={img_2_Render}>
                  <img src={yourGoalLogo} className="SectionFour-img " alt="SectionFour-left-img" />
                </div>
                <div className={img_3_Render}>
                  <img src={revenueLogo} className="SectionFour-img " alt="SectionFour-left-img" />
                </div>
            </div>
            <div className="pv-right-box">
               <div className="pv-box-inner">
                  <div className="pv-box-wrap" onMouseEnter={() => this.setState({ img_1: true, img_2: false, img_3: false, })}>
                     <h3 className="pv-box-title">Tracken Sie Ihren Erfolg</h3>
                     <p className="pv-box-des">Ihre Zugriffszahlen sind jederzeit transparent für Sie in unserem Partner Bereich einsehbar.</p>
                  </div>
                  <div className="pv-box-img pv-box-responsive-img">
                   <img src={vorteileLogo} className="SectionFour-img " alt="SectionFour-left-img" />
                  </div>
                  <div className="pv-box-wrap" onMouseEnter={() => this.setState({ img_1: false, img_2: true, img_3: false, })}>
                     <h3 className="pv-box-title">Optimieren Sie Ihr Profil mit Partner Badges</h3>
                     <p className="pv-box-des">Zeigen Sie den Besuchern Ihrere Website das Sie auf PEATS zu finden ist. Die Besucher Ihrer Website finden Sie auf PEATS immer an Platz 1.</p>
                  </div>
                  <div className="pv-box-img pv-box-responsive-img">
                    <img src={yourGoalLogo} className="SectionFour-img " alt="SectionFour-left-img" />
                  </div>
                  <div className="pv-box-wrap" onMouseEnter={() => this.setState({ img_1: false, img_2: false, img_3: true, })}>
                     <h3 className="pv-box-title">Profitieren Sie von unserer Reichweite</h3>
                     <p className="pv-box-des">Platzieren Sie Ihre eigenen Keywords in unserem Magazin und kommunizieren Sie Ihre Botschaften an die ganze Branche.</p>
                  </div>
                  <div className="pv-box-img pv-box-responsive-img">
                     <img src={revenueLogo} className="SectionFour-img " alt="SectionFour-left-img" />
                  </div>
               </div>
            </div>
          </div>
        </div>
        <div className="partner-vorteile-btn-img">
           <img src={foursectionbtmimg} alt="SectionFour-left-img" />
        </div>
      </div>
    );
  }
}

export default PartnerBenefits;