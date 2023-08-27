import React from 'react';
import {TodoList} from "../components/TodoList";

type BodyPropsType = {
    titleForBody: string
}

export const Body = (props: BodyPropsType) => {
    return (
        <main>
            <h1>{props.titleForBody}</h1>
            <TodoList/>
        </main>
    );
};