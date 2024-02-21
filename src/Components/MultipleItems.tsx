import { useState } from "react";

const defaultItems = [
{id:1, value:"value 1"},
{id:2, value:"value 2"},
{id:3, value:"value 3"},
{id:4, value:"value 4"},
{id:5, value:"value 5"}
];
export function MultipleItems(){

    const [items,setItems] = useState(defaultItems);

    console.log(items)

    const addItems = ()=>{
        const item = defaultItems.find((i)=> !items.includes(i));

        
        

        if(item){
            setItems([...items, item]);
        }
    }
    // console.log()

    const removeItems = (item:any)=>{
        setItems(items.filter((i)=> i !== item ));
    }
    // console.log(removeItems());

    const resetItems = ()=>{
        setItems(defaultItems)
    }

    return (
        <div>
            <button type="button" onClick={addItems}>Add Item</button>
            <button type="button" onClick={resetItems}> Reset</button>
            <ul style={{listStyle:"none", paddingLeft:0}}>
                {items.map((item) => 
                <li key={item.id}> 
                 <button type="button" onClick={()=>removeItems(item)}>Remove Item</button>
                    <label> {item.id}</label>
                   <input defaultValue={item.value}/>
                </li>
                )}
            </ul>
        </div>
    )

}