import React from 'react';

const Inspector = () => {
    return (
        <div className='inspector'>
            <div className="slide-container">
                <div className="slide-content">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="img-content">
                                <span className="overlay"></span>
                                <div className="card-img">
                                    <img className='img' src="" alt="" />
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name"></h2>
                                <p className="email"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inspector;