import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCrypto } from '../actions/cryptoActions';
import _ from "lodash";

function Crypto(props){
    const cryptoId = props.match.params.id;
  const dispatch = useDispatch()
  const cryptoState = useSelector(state => state.id)
  React.useEffect( () => {
    dispatch(GetCrypto(cryptoId))
  },[cryptoId, dispatch]);
console.log( cryptoId)

    


  return(
    <div className={"poke"}>
      <h1>{cryptoId}</h1>
     
    </div>
  )
};


export default Crypto