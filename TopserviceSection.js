import React from 'react'




const TopserviceSection = () => {
  return (
    <>
    <section className="section-top-service">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">TOP SERVICE</h2>
          <p className="section-subtitle">We provide the best experience</p>
        </div>
        <div className="services-grid">
          {/* Row 1 */}
          <div className="service-item">
            <h3>Experienced team</h3>
            <p>We always lived inside our amazing nature</p>
          </div>
          <div className="service-item">
            <h3>Easy joining</h3>
            <p>Contact us and in 2 minutes you're booked</p>
          </div>
          <div className="service-item">
            <h3>Expert hikers</h3>
            <p>Our mountains taught us everything we know</p>
          </div>
          <div className="service-item">
            <h3>Secret locations</h3>
            <p>Discover hidden natural places with our tours</p>
          </div>
          {/* Row 2 */}
          <div className="service-item">
            <h3>Europe locations</h3>
            <p>We provide trips on various Europe countries</p>
          </div>
          <div className="service-item">
            <h3>Visit us</h3>
            <p>We are in the north of Italy near the mountains</p>
          </div>
          <div className="service-item">
            <h3>United States</h3>
            <p>Once a year join us to the other part of the world</p>
          </div>
          <div className="service-item">
            <h3>Great waterfall</h3>
            <p>Our excursions will bring you to great waterfalls</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default TopserviceSection