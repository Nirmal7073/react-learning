import React from 'react'
import { useData } from '../../contexts/DataContext'

function Order() {
    const { data } = useData()
    const order = data.order
    return (
        <>
            <div className="order-sec-main">
                <div className="container">
                    <div className="column-row">
                        <div className="column-left">
                            <img src="images/Group-image.png" alt="" />
                        </div>
                        <div className="column-right">
                            <h2>{order.title}</h2>
                            <p>{order.description}</p>
                            <div className="wrap-info-order">
                                {
                                    order.info.map((order ,id ) => {
                                        return (
                                            <div className="onder-info" key={id} > 
                                                <h3>{order.num}</h3>
                                                <span>{order.title}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order