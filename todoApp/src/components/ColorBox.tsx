import React,{FC,useState} from "react";

const getRandom = () => {

    const COLOR_LIST = ['deeppink','blue','red','green','black']
    const random = Math.trunc(Math.random() * COLOR_LIST.length)
    return COLOR_LIST[random]
}

const ColorBox : FC = () => {

    const [color,setColor] = useState('deeppink')
   
    //handle
    const handleBoxClick = () => {
        const randomColor = getRandom()
        setColor(randomColor)
    }
    return(
    <div 
    className="color-box"
    style={{backgroundColor:color,width:'20px',height:'20px',borderRadius:'8px'}}
    onClick={handleBoxClick}
    
    >
        
    </div>
    )
}

export default ColorBox
