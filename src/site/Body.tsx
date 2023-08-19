import React from 'react';

type BodyPropsType = {
    titleForBody: string
}

export const Body = (props: BodyPropsType) => {
    return (
        <main>
            {props.titleForBody}
        </main>
    );
};