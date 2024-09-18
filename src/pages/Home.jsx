import React from 'react';
import illustration from '../assets/illustration.png';

function Home(props) {
    return (
        <div className='container-fluid h-100'>
            <div className='row align-items-center h-100'>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center h-100 text-white bg-primary'>

                    <h1 className='display-4 text-white text-center text-uppercase mb-3'>
                        An App to <br />
                        Make Your Life <br />
                        <span className='display-1'>Organised</span>
                    </h1>

                    <img className='img-fluid' src={illustration} alt="illustration" />
                </div>

                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center h-100 text-white'></div>
            </div>
        </div>
    );
}

export default Home;