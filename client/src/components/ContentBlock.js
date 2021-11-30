import React from 'react';

const ContentBlock = (props) => {
    return (
        <div className='content-block'>{props.children}</div>
    );
};

export default ContentBlock;