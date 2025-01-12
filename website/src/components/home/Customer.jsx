import React from 'react'
import { useData } from '../../contexts/DataContext'

function Customer() {
    const {data} = useData();
    const customer = data.customer;

    return (
        <>
            <div className="meet-customer-sec">
                <div className="container">
                    <div className="column-row">
                        <div className="column-left">
                            <img src={customer.img} alt="img" />
                        </div>
                        <div className="column-right">
                            <h2>{customer.title}</h2>
                            <div className="meet-dec">
                                {
                                    customer.description.map((customer ,id)=>{
                                        return <p key={id} className={id === 0 ? 'dark-text' :""}>{customer}</p>
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

export default Customer