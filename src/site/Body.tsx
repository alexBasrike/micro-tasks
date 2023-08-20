import React from 'react';
import {Cars, topCars} from "./Cars";
import {Button} from "../components/Button";

type BodyPropsType = {
    titleForBody: string
}

export const Body = (props: BodyPropsType) => {

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address);
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber);
    }

    const Button3Foo = () => {
        console.log("I'm stupid button");
    }

    return (

        <main>
            {props.titleForBody}
            <Cars topCars={topCars}/>
            {/*<button onClick={ (event) => { console.log('Hello!') } }>MyYouTubeChanel-1</button>*/}
            <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("I'm Vasya", 21, "live in Minsk")}/>
            <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("I'm Ivan")}/>
            <Button name={"Stupid BUTTON"} callBack={Button3Foo}/>
        </main>
    );
};