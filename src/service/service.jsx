import React, { Component } from 'react';
import './style.css';
import Goals from "./components/goals";
import ItemsStatistics from "./components/itemsStatistics";
import SupplyAndDemand from "./components/supplyAndDemand";
import PartnerBenefits from "./components/partnerBenefits";
import ContactUs from "./components/contactUs";

class App extends Component {
  render() {
    return (
      <div className="Start">
        <div className="Goals">
          <Goals />
        </div>
        <div className="ItemsStatistics">
          <ItemsStatistics />
        </div>
        <div className="SupplyAndDemand">
          <SupplyAndDemand />
        </div>
        <div className="PartnerBenefits">
          <PartnerBenefits />
        </div>
        <div className="ContactUs">
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default App;
