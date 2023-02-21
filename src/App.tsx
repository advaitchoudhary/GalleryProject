import { constants } from 'buffer';
import React, { useEffect } from 'react';
import Header from './Components/Header';
import './Styles/App.css'
import Sider from './Components/Sider';
import  {useGetImagesQuery } from './Services/operations.api';
function App() {
  const {data,error,isLoading,isFetching,isSuccess}=useGetImagesQuery('');
  
  
  return (
    <div className="App">
      <div style={{width:'100%'}}>
      <Header/>
      </div>
    </div>
  );
}

export default App;
