

function Btn(props){
    return (
      <button type='button' onClick={() => props.setValue(props.value + 1)}>{props.text}</button>
    )
}

export default Btn