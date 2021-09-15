import _, { initial } from 'lodash';
import "../components/App.css"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetCryptoList} from '../actions/cryptoActions'
import {Link} from 'react-router-dom'
const CryptoList = (props) =>{
    const [search, setSearch] = useState("");
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
    const filteredCoins = cryptoList.data.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );

      if( !_.isEmpty(cryptoList.data)){
        return (
        <div className={"list-wrapper"}>
          {filteredCoins.map(el =>{
          return (
            <div className={"list-item"}>
                <img className={"list-img"}src={el.image} alt=""/>
          <div className={"End"}>
          <p >{el.id}</p>
          <Link to={`/Crypto/${el.id}`}>View</Link>
          </div>
          </div>
            )
          })}
        </div>
      )
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
       
          


            <div className="search-section">
                <p>Search: </p>
                <input type="text" placeholder='search' onChange={e => setSearch(e.target.value)}/>
                

            </div>
            {ShowData()}
        </div>
    )
}

export default CryptoList