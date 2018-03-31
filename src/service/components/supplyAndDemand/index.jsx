import React, { Component } from 'react';
import wirdGesehenIcon from "../../assets/wird-gesehen-icon.png";
import wirdVerstandenIcon from "../../assets/wird-verstanden-icon.png";
import sindInfomiertIcon from "../../assets/sind-infomiert-icon.png";
import sindMottiviertIcon from "../../assets/sind-mottiviert-icon.png";
import './index.css';

class SupplyAndDemand extends Component {
  render() {
    return (
      <section className="it-box-section">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">We connect supply and demand</h2>
          </div>
          <div className="itb-heading">
            <h3 className="itb-heading-title column-pd">Ihr Produkt</h3>
          </div>
          <div className="icon-thumb-box">
             <div className="row">
               <div className="small-12 medium-6 large-6 column-pd Grid-view-box">
                  <div className="icon-thumb-box itb-first">
                     <div className="itb-inner">
                        <div className="itb-inner-img">
                           <img src={wirdGesehenIcon} alt="sectionThree-1-img" />
                        </div>
                        <h4 className="itb-title">Wird gesehen</h4>
                        <p className="itb-des">Tapdaq collects data on each available impression, including device.</p>
                     </div>
                  </div>
               </div>
               <div className="small-12 medium-6 large-6 column-pd Grid-view-box">
                  <div className="icon-thumb-box itb-second">
                     <div className="itb-inner">
                        <div className="itb-inner-img">
                           <img src={wirdVerstandenIcon} alt="sectionThree-2-img" />
                        </div>
                        <h4 className="itb-title"> Wird verstanden</h4>
                        <p className="itb-des">Tapdaq collects data on each available impression, including device.</p>
                     </div>
                  </div>
               </div>
             </div>
          </div>
          <div className="itb-heading">
            <h3 className="itb-heading-title column-pd">Ihr Produkt</h3>
          </div>
          <div className="row">
            <div className="small-12 medium-6 large-6 column-pd Grid-view-box">
               <div className="icon-thumb-box itb-third">
                  <div className="itb-inner">
                     <div className="itb-inner-img">
                       <img src={sindInfomiertIcon} alt="sectionThree-3-img" />
                     </div>
                     <h4 className="itb-title">Sind informiert</h4>
                     <p className="itb-des">Tapdaq collects data on each available impression, including device.</p>
                  </div>
               </div>
            </div>
            <div className="small-12 medium-6 large-6 column-pd Grid-view-box">
               <div className="icon-thumb-box itb-forth">
                  <div className="itb-inner">
                     <div className="itb-inner-img">
                       <img src={sindMottiviertIcon} alt="sectionThree-4-img" />
                     </div>
                     <h4 className="itb-title">Sind motiviert</h4>
                     <p className="itb-des">Tapdaq collects data on each available impression, including device.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SupplyAndDemand;