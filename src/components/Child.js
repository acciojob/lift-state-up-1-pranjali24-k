import React, { useState } from "react"

const Child = () =>{
    let [showModal,setShowModal] = useState(false)
    return (
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={()=>{setShowModal(true)}}>Show Modal</button>
            {
                (showModal)&&(
                    <div>
                        <h3>Modal Content</h3>
                        <p>This is the modal content.</p>
                    </div>
                )
            }
        </div>
    )
}

export default Child;