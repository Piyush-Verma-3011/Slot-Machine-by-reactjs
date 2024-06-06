const SlotM=(props)=>{
    // let x="a";
    // let y="b";
    // let z="c";

   if((props.x===props.y)&&(props.y===props.z)){
    return(
      <>
        <div className='slot_inner'>
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <h1>This is Matching!</h1>
          <hr/>
        </div>
      </>
    );
   }else{
    return(
      <>
        <div className='slot_inner'>
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <h1>This is Not Matching!</h1>
          <hr/>
        </div>
      </>
    );
   }


}
export default SlotM;