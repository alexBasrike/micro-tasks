import React from 'react';

type HeaderPropsType = {
    titleForHeader: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header>
            {props.titleForHeader}
        </header>
    );
};