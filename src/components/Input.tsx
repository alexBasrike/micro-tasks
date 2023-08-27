import React, {ChangeEvent} from 'react';

type InputPropsType = {
    addMessage: (title: string) => void
    title: string
    setTitle: (title: string) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};