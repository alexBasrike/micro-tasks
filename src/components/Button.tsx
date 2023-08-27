import React from 'react';

type ButtonGlobalPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonGlobalPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>
            {props.name}
        </button>
    );
};