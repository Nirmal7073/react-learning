import React from 'react'
import { useData } from '../../contexts/DataContext'

function Grow() {

    const {data} = useData();
    const grow = data.grow;
 
  return (
    <>
        <div className="grow-sec">
            <div className="container">
                <div className="column-row">
                    <div className="text-center">
                        <h2>{grow.title}</h2>
                        <a href={grow.buttonLink} className="default-btn">{grow.buttonText}</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Grow