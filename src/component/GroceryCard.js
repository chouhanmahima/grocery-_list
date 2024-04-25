import React, {useState} from 'react'
import "./GroceryCard.css"
import { ListItems } from './ListItems';

export const GroceryCard = () => {

    const [list, setList] = useState([]);

    const [inputValue, setInputValue] = useState("");

    const onClickHandler = () => {
        setList((prevData) => {
            return [...prevData,{
                    name: inputValue,
                    purchased : false
                }
            ]
        })

        setInputValue("");
    }


  return (

    <div className='contain'>
        <div className='main'>
            <h1>Grocery List</h1>
            <div className='input-container'>
                <input className='input-text' type='text'
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }}
                ></input>
                <button className='btn' onClick={onClickHandler}>Add Item</button>
            </div>
            
            <div>
                {list.map((elem, index) => <ListItems index={index} list={list} setList={setList} itemName={elem.name} isPurchased={elem.purchased} key={index}></ListItems>)}
            </div>
        </div>
    </div>
    
  )
}