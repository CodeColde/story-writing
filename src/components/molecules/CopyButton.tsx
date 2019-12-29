import React from 'react';
import { Story } from 'redux-state/story/types';
import styled from 'styled-components';

interface Props {
    story: Story;
}

const CopyButton: React.FC<Props> = ({ story }) => {
    const [copySuccess, setCopySuccess] = React.useState(false);
    const copyRef = React.useRef<HTMLTextAreaElement>(null);

    React.useEffect(() => {
        if (copySuccess) {
            console.log('Copy Successful');
            setCopySuccess(false);
        }
    }, [copySuccess]);

    const copyStory = () => {
        if (copyRef.current) {
            copyRef.current.select();
            document.execCommand('copy');
            setCopySuccess(true);
        }
    }
    const title = story.title ? `${story.title}\n` : '';
    const author = story.author ? `${story.author}\n` : '';
    const content = story.content ? `${story.content}` : '';
    const storyToCopy = `${title}${author}${content}`;

    return (
        <>
            <Copy onClick={copyStory}>Copy</Copy>
            <CopyTemplate ref={copyRef}>{storyToCopy}</CopyTemplate>
        </>
    );
};

export default CopyButton;

const CopyTemplate = styled.textarea`
    display: none;
`;

const Copy = styled.button`
    position: absolute;
    top: 7.5rem;
    right: 2rem;
`;