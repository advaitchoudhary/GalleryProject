import React from 'react'
import { Tabs, TabsProps } from 'antd'
import Content from '../AddedContent'
import FavContent from '../AddedContent/favContent'
import '../../Styles/header.css'
import  {useGetImagesQuery } from '../../Services/operations.api';
const Header = () => {
    const {data,error,isLoading,isFetching,isSuccess}=useGetImagesQuery('');

const onChange = (key: string) => {
    console.log(key);
  };
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Recently Added`,
      children: isSuccess?<Content/>:<>No Images found..</>,
    },
    {
      key: '2',
      label: `Favorited`,
      children: isSuccess?<FavContent/>:<>'No images found..'</>,
    },
    
  ];
  
  
  return (
    <>
    <div className='header'>
        <div>Photos</div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
    
    </>


  )
}

export default Header