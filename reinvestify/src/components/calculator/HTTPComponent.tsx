import React, {useState} from 'react';

interface Data {
    userId: number,
    title: string, 
    completed: boolean 
}

function HTTPComponent(props: any) {
    
    const [data, setData] = useState<Data>({userId:0, title:'', completed:false})
    const title = (data.title.length > 0 ? <li>{data.title}</li> : "")

    const sendRequest = async (event: React.MouseEvent<HTMLButtonElement>) => {

        fetch('https://jsonplaceholder.typicode.com/todos/1').
        then(response => response.json()).
        then(json => setData(json))

    }

    return (
        <div>
        {title}
        <br>
        </br>
        <input value={props.hello} onChange={props.handleHelloChange}></input>
        <button onClick={sendRequest}>click me</button>
        </div>

    )
}

export default HTTPComponent;

// Comments 
//     User
//        Avatar
//        Info 
