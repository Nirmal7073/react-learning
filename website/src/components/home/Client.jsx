import React from 'react'
import { useData } from '../../contexts/DataContext'

function Client() {

    const { data } = useData();
    const client = data.client;

    return (
        <>
            <div className="our-client-sec">
                <div className="container">
                    <div className="text-center">
                        <h2>{client.title}</h2>
                    </div>
                    <div className="column-row">
                        <div className="column-left">
                            <div className="testimonial">
                                {
                                    client.testimonial.map((client, id) => {
                                        return (
                                            <div className="testimonial-item" key={id}>
                                                <div className="test-main" >
                                                    <h5>{client.title}</h5>
                                                    <p>{client.description}</p>
                                                </div>
                                                <div className="test-info">
                                                    <img src={client.img} alt="img" />
                                                    <div className="test-name">
                                                        <h6>{client.auth}</h6>
                                                        <span>{client.designation}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Client