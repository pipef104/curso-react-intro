import './TodoButton.css'
function TodoButton(params) {
    return(
        <button className='createTodoButton' onClick={
            (event)=> console.log('Le diste click')
        }>+</button>
    );
}

export { TodoButton }