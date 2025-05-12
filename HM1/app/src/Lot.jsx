import Btn from './Btn';
import { useState } from 'react';


function Lot(props){
    const [value, setValue] = useState(0);
    return (
      <>
        <p className="logo">{props.id} - {props.name} - {props.price}
          <Btn text="Buy" value = {value} setValue = {setValue}/> 
          {value}
        </p>
      </>
    );
  }

  export default Lot