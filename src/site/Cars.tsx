import React from 'react';

export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

type TopCarsPropsType = {
    topCars: CarsPropsType[]
}

type CarsPropsType = {
    manufacturer: string,
    model: string
}

export const Cars = (props: TopCarsPropsType) => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td>id</td>
                    <td>manufacturer</td>
                    <td>model</td>
                </tr>
                </thead>
                <tbody>
                {props.topCars.map((el, index) => {
                    return (
                        <tr>
                            <td>{index}</td>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};