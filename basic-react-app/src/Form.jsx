function handleSubmit(event){
    event.preventDefault();
    console.log("Form was submitted")
}

export default function Form(){
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="write something" />
            <button >Submit</button>
        </form>
    );
}
