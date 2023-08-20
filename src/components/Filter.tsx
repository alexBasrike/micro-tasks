import React, {useState} from 'react';

type FilterType = "All" | "Dollars" | "RUBLS";

export const Filter = () => {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]);

    const [filter, setFilter] = useState<FilterType>("All")

    let currentMoney = money;
    if ( filter === "Dollars" ) {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
    }
    if ( filter === "RUBLS" ) {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }

    return (
        <div>
            <ul>
                {currentMoney.map((el, index) => {
                    return (
                        <li key={index}>{el.banknots}: {el.value}, {el.number}</li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => onClickFilterHandler("All") }>All</button>
                <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>
                <button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>
            </div>
        </div>
    );
};