import React,{useState} from 'react'
import  {useGetImagesQuery } from '../../Services/operations.api';
import '../../Styles/content.css'
import Item from '../Item'
import Sider from '../Sider';
const Content = () => {
  const {data,error,isLoading,isFetching,isSuccess}=useGetImagesQuery('');
  const [dElem,setDElem]=useState(isSuccess?data[0]:{})
  return (
    <div style={{display:'flex'}}>
    <div className='rowContent'>
        {isSuccess && (
        <>
        {
          data.map((elem:any,index:number)=>{
            return(
            <Item elem={elem} setDElem={setDElem} id={elem.id}/>
            // <div className='info' key={index}>
            //     <div><img className='image' src={elem?.url} alt={elem.filename}/></div>
            //     <div className='name'>{elem.filename}</div>
            //     <div className='name'>{(elem.sizeInBytes/1000000).toFixed(2)}&nbsp;Mb</div>
            // </div>
            )
          })
        }
        </>
      )}
    </div>
    <Sider elem={dElem}/>
    </div>
  )
}

export default Content