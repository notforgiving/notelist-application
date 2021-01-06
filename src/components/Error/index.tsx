interface IErrorProps{
  text:string
}

function Error({text}:IErrorProps) {
  return (
    <div style={{"minHeight":"20px","color": "#eb534b","width":"250px","marginBottom":"2px"}}>
      {text}
    </div>
  );
}

export default Error;