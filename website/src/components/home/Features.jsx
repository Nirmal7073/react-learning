import React from 'react'
import { useData } from '../../contexts/DataContext'

function Features() {
    const { data } = useData();
    const features = data.features;
    return (
        <>
            <div className="feature-sec">
                <div className="container">
                    <div className="text-center">
                        <h2>Features for a better experience</h2>
                    </div>
                    <div className="column-row">
                        {
                            features.map((feature, index) => {
                                return <div key={index} className={`column-${index === 0 ? 'left' : index === 1 ? 'center' : 'right'}`}>
                                    <div className="card-feature">
                                        <img src={feature.icon} alt="icon" />
                                        <div className="card-info">
                                            <h5>{feature.title}</h5>
                                            <p>{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features