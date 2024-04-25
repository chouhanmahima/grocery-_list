import React, { useState } from 'react'
import "./ListItems.css"

export const ListItems = ({itemName, index, list, setList, isPurchased}) => {

    const [isChecked, setIsChecked] = useState(isPurchased);

    const deleteHandler = () => {
        setList((prevState) => {
            const data = [...prevState]

            data.splice(index, 1);

            return data;
        })
    }

  return (
    <div className='item-list'>

        <div>
            <input type='checkbox' checked={isPurchased ? true : false} onChange={(e) => {
                setIsChecked((prevValue)=>!prevValue);
                setList((prevState) => {
                    const data = [...prevState]

                    data[index].purchased = !isPurchased;

                    return data
                })
            }}></input>
            
        </div>

        <div>
            <p
                style={{
                    textDecoration : isPurchased ? "line-through" : "none" 
                }}
            >{itemName}</p>
        </div>

        <div>
            <button onClick={deleteHandler} className='dlt-btn'>Delete</button>
        </div>

    </div>
  )
}