import React from 'react'
import './portfolio.css'
import img1 from '../../assets/images/adamsea.png'

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-wrapper">
        <div className="container">
          <h5 className='text-center my-5'>Projects</h5>
          <div className="row">
            <div className="col-md-4">
              <img src={img1} alt='portfolio-img' className='w-100'/>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Portfolio