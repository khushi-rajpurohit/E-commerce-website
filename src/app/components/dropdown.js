
import { useState } from "react";
import "./dropdown.css"

const ddArr = ["Clothes", "Shoes", "Other","Furniture","Electronics"];

export default function DropDown() {
    let [isOpen, setIsOpen] = useState(false)

    const toggle = function () {
        setIsOpen(!isOpen)
    }


    return (

        <div className="dropdown">
            <button className="toggleButton" onClick={toggle}> Products</button>
           
            {isOpen && (
                 <ul className="dropdownMenu">
                {
                    ddArr.map(ddItems =>

                        <li>{ddItems}</li>

                    )
                }
                </ul>
            )}
         

        </div >
    )
}