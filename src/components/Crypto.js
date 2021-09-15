import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCrypto } from '../actions/cryptoActions';
import _ from "lodash";

function Crypto(props){
    const cryptoId = props.match.params.id;
  const dispatch = useDispatch()
  const cryptoState = useSelector(state => state.Crypto)
  React.useEffect( () => {
    dispatch(GetCrypto(cryptoId))
  },[cryptoId, dispatch]);


console.log( cryptoId)

    const ShowData = () =>{
        if(!_.isEmpty(cryptoState.data[cryptoId])){
         return <p>Have data</p>
        }
        if(cryptoState.loading){
            return <p>loading</p>
           }
           if(cryptoState.errorMessage  !== ""){
            return <p>{cryptoState.errorMessage}</p>
           }
           return<p>ERRROR</p>
    }


  return(
    <div className={"poke"}>
      <h1>{cryptoId}</h1>
      <h2>{ShowData()}</h2>
     
    </div>
  )
};


export default Crypto