import React from 'react';
import {Cars, topCars} from "./Cars";

type BodyPropsType = {
    titleForBody: string
}

export const Body = (props: BodyPropsType) => {
    return (
        <main>
            {props.titleForBody}
            <Cars topCars={topCars}/>
        </main>
    );
};