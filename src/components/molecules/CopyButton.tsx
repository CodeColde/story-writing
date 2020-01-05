import React from 'react';
import { Story } from 'redux-state/story/types';
import styled from 'styled-components';

interface Props {
    story: Story;
}

const CopyButton: React.FC<Props> = ({ story }) => {
    const copyRef = React.useRef<HTMLTextAreaElement>(null);
    const [copyState, setCopyState] = React.useState(false);

    const title = story.title ? `${story.title}\n` : '';
    const author = story.author ? `${story.author}\n` : '';
    const content = story.content ? `${story.content}` : '';
    const storyToCopy = `${title}${author}${content}`;

    React.useEffect(() => {
        if (copyState) {
            if (copyRef.current) {
                console.log(copyRef.current);
                try {
                    copyRef.current.focus();
                    copyRef.current.select();
                    document.execCommand('copy');
                }
                catch (e) {
                    console.log(`Copy Failed: ${e}`);
                    setCopyState(false);
                }
                finally {
                    setCopyState(false);
                    console.log(`${story.title} has been copied to the clipboard`);
                }
            }
        }
    }, [story, copyState, copyRef]);

    const onClick = () => {
        if (!navigator.clipboard) {
            setCopyState(true);
            return;
        }
        try {
            navigator.clipboard.writeText(storyToCopy)
        }
        catch (e) {
            console.error("Copy failed.", e);
        }
        finally {
            console.log(`${story.title} has been copied to the clipboard`);
        }
    }

    return (
        <>
            <Copy onClick={onClick}>Copy</Copy>
            {copyState && <CopyTemplate ref={copyRef} defaultValue={storyToCopy} />}
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