import _ from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetCryptoList} from '../actions/cryptoActions'
import {Link} from 'react-router-dom'
function CryptoList(){
    const dispatch = useDispatch();
    const cryptoList = useSelector(state => state.CryptoList);
 React.useEffect( () => {
     FetchData()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);

 const FetchData = () =>{
     dispatch(GetCryptoList())
 }



  const ShowData = () => {
      if( !_.isEmpty(cryptoList.data)){
          console.log(cryptoList.data[3])
          return cryptoList.data.map(el =>{
          return <div>
          <p>{el.id}</p>
          {/* <p>{el.image}</p> */}
          <Link to={`/Crypto/${el.id}`}>View</Link>

          </div>
          })
      }
  
  if( cryptoList.loading){
    return <p>loading</p>
}
if(cryptoList.errorMessage !== ""){
    return <p>{cryptoList.errorMessage}</p>
}
return <p>Unable to get data</p>

    };


    return (
        <div>
            {ShowData()}
        </div>
    )
}

export default CryptoList