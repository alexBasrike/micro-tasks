import React from 'react';
import {Cars, topCars} from "./Cars";
import {Button} from "../components/Button";
import {UseState} from "../components/UseState";

type BodyPropsType = {
    titleForBody: string
}

export const Body = (props: BodyPropsType) => {

    /*--- Button ---*/
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address);
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber);
    }

    const Button3Foo = () => {
        console.log("I'm stupid button");
    }
    /*--- Button ---*/

    return (

        <main>
            {props.titleForBody}
            <Cars topCars={topCars}/>

            <div>
                <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("I'm Vasya", 21, "live in Minsk")}/>
                <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("I'm Ivan")}/>
                <Button name={"Stupid BUTTON"} callBack={Button3Foo}/>
            </div>

            <UseState/>
        </main>
    );
};