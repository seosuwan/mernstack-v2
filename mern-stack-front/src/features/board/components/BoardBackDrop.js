import React from 'react';

import "features/common/style/BackDrop.scss";

export default function BoardBackDrop(props) {
    const styleClasses = ["Backdrop",props.show? "BackdropOpen":"BackdropClose"]
    return (
        <div className={styleClasses.join(' ')}></div>
    )
}

