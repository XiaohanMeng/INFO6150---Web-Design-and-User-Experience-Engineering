function MinusButton({minus, count}){
    return(
        <button className="minus-button" type="button" disabled={!count} onClick={minus}>-</button>
    );

}

export default MinusButton;