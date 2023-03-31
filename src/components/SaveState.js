function SaveState(){
    function handleClick(){
        
        console.log('Botton is clicked');
        return <h1>Waw awawa!!</h1>

    }
    return (
        <div>
            Press button to save playtime, score, etc.
            <button onClick={handleClick}> Save game state  </button>
        </div>
    )
}

export default SaveState;