import React, {useState} from 'react';
import {Button} from "../components/Button";
import {Input} from "../components/Input";

type BodyPropsType = {
    titleForBody: string
}

export const Body = (props: BodyPropsType) => {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);

    let [title, setTitle] = useState("");

    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message]);
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('');
    }

    return (
        <main>
            <Input addMessage={addMessage} title={title} setTitle={setTitle}/>
            <Button name={"+"} callBack={callBackButtonHandler}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </main>
    );
};