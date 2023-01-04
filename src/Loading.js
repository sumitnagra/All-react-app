import React from 'react'
import img1 from './images/loading.gif';


function Loading() {
    const style = {
        height: "100px",
        width: "100px",
    }

    return (
        <>
        <div className="text-center">

            <img  style={style} src={img1} alt="image" />
            <h3>Loading...</h3>
        </div>
        </>
    )
}
export default Loading;