import React from 'react';
// import Content from 'components/molecules/Content';
import Preview from 'components/organisms/Preview';
import Writer from './Writer';

const Editor: React.FC<{}> = () => {
    return (
        <>
            {/* <Content /> */}
            <Preview />
            <Writer />
        </>
    )
}

export default Editor;

// Editor for the story writing platform

// Needs to contain the following tag supports:
/**
 * h2
 * h3
 * h4
 * p
 * blockquote
 * ol
 * ul
 * li
 * link (a)
 * linebreak
 */
