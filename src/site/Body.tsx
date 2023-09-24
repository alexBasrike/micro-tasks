import React from 'react';
import {Input} from "../components/Input";

type BodyPropsType = {
    titleForBody: string
}

export const Body = (props: BodyPropsType) => {
    return (
        <main>
            <h1>{props.titleForBody}</h1>
            <Input/>
        </main>
    );
};