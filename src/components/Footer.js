import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Make sure to create and import this CSS file

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 text-center">
           
            <p>Cost Saver is the life passion of myself and my wife, Betsy Bowen. Since 1979, we have poured our heart and soul into creating adventure travel experiences that enrich lives and exceed expectations. The result is a loyal following of travelers who trust us with their vacation dreams time and time again.
            We've earned this trust through our ability to operate high quality tours that are built on a foundation of intimate connection to every adventure we offer.
                Behind each itinerary there is a story, and we, or trusted staff, have personally researched and developed them all. While we began with a focus on white water rafting trips, we've grown to become the COSTSAVER Family of Companies, with different specialized companies offering an eclectic collection of adventures around the world.
            </p>
          </div>
          
         
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p>&copy; 2024 CostSaver. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
