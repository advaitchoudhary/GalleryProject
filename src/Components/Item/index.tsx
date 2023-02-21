import React,{useState,useEffect} from 'react';
import '../../Styles/content.css'
const Item=({elem,setDElem,id}:{elem:any,setDElem:any,id:string})=>{
    // useEffect(()=>{setBSelect(false)},[])
    const [bSelect,setBSelect]=useState('')
    return(
        <div className='info' onClick={()=>{setDElem(elem);setBSelect(elem?.id)}} >
                <div style={{border:bSelect===elem.id?'1px solid blue':''}} className='img'><img className='image' src={elem?.url} alt={elem.filename}/></div>
                <div className='name'>{elem.filename}</div>
                <div className='name'>{(elem.sizeInBytes/1000000).toFixed(2)}&nbsp;Mb</div>
        </div>
    )
}
export default Item