import React from 'react';
import { Story } from 'redux-state/story/types';
import styled from 'styled-components';

interface Props {
    story: Story;
}

const CopyButton: React.FC<Props> = ({ story }) => {
    const copyRef = React.useRef<HTMLTextAreaElement>(null);

    const copyStory = () => {
        if (copyRef.current) {
            console.log(copyRef.current);
            try {
                copyRef.current.focus();
                copyRef.current.select();
                document.execCommand('copy');
                console.log('Copy Successful');
            }
            catch (e) {
                console.log(e);
            }
            finally {
                console.log('Copy Completed');
            }
        }
    }
    const title = story.title ? `${story.title}\n` : '';
    const author = story.author ? `${story.author}\n` : '';
    const content = story.content ? `${story.content}` : '';
    const storyToCopy = `${title}${author}${content}`;

    return (
        <>
            <Copy onClick={copyStory}>Copy</Copy>
            <CopyTemplate ref={copyRef} defaultValue={storyToCopy} />
        </>
    );
};

export default CopyButton;

const CopyTemplate = styled.textarea`
    /* display: none; */
    position: absolute;
    opacity:0;
    z-index:-999;
`;

const Copy = styled.button`
    position: absolute;
    top: 7.5rem;
    right: 2rem;
`;