import React from 'react'
import mentor from '../Images/mentor.png'  
import '../Styles/JourneyFields.css'  


type JourneyFieldsProps ={
    title: string
    content : string
    image : string
}

export default function JourneyFields(props : JourneyFieldsProps) {
  return (
    <div>
        <img src={props.image} alt='mentor' className='image'/>
        <div className='content'>
            <p style={{fontSize:'18px',fontWeight:'400'}}>{props.title}</p>
            <p style={{fontSize:'12px',fontWeight:'400',width:'209px',textAlign:'center'}}>{props.content}</p>

        </div>
        </div>
  )
}
