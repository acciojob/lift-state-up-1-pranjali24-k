import React from "react"
import Child from "./Child"
const Parent =()=>{
    return(
        <div
        className="parent">
            <h1>Parent Component</h1>
            <Child></Child>
        </div>
    )
}
export default Parent;