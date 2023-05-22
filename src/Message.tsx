//.ts extension its for pure typescript plain text
//tsx extension its for typescript with react

function Message(){

    //JSX: means Javascrip XML 

    let name = '';

    if(name)
        return <h1>Hello {name}</h1>
    return <h1>Hello world</h1>
}

export default Message;