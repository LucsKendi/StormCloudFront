import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrossel.css';  // Import do CSS separado

const MyCarousel: React.FC = () => {
  return (
    <div className="carousel-container">
      <BootstrapCarousel interval={null}>
        <BootstrapCarousel.Item>
          <div className="d-flex justify-content-between">
            <div className="card-container">
              <div className="card bg-light text-center card-height">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">Card 1</h5>
                  <button className="btn btn-verde-claro">Expandir</button>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card bg-light text-center card-height">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">Card 2</h5>
                  <button className="btn btn-verde-claro">Expandir</button>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card bg-light text-center card-height">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">Card 3</h5>
                  <button className="btn btn-verde-claro">Expandir</button>
                </div>
              </div>
            </div>
          </div>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <div className="d-flex justify-content-between">
            <div className="card-container">
              <div className="card bg-light text-center card-height">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">Card 4</h5>
                  <button className="btn btn-verde-claro">Expandir</button>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card bg-light text-center card-height">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">Card 5</h5>
                  <button className="btn btn-verde-claro">Expandir</button>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card bg-light text-center card-height">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">Card 6</h5>
                  <button className="btn btn-verde-claro">Expandir</button>
                </div>
              </div>
            </div>
          </div>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>
    </div>
  );
};

export default MyCarousel;
