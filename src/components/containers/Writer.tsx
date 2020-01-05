import React from 'react';
import sanitizecontent from "sanitize-html";
import ContentEditable from 'react-contenteditable';
import styled, { keyframes, css } from 'styled-components';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { Story } from 'redux-state/story/types';

interface Props {
    currentStory: Story;
}

const Writer: React.FC<Props> = ({ currentStory }) => {
    const [content, setContent] = React.useState((currentStory && currentStory.content) || '');
    const [placeholderSelect, setPlaceholderSelect] = React.useState(false);
    const [init, setInit] = React.useState(false);
    const [focus, setFocus] = React.useState(true);
    const editorRef = React.useRef<HTMLDivElement>(null);

    // init for Ref
    React.useEffect(() => {
        if (!init) {
            setInit(true);
        }
    }, [init]);

    // If unfocused, format content
    React.useEffect(() => {
        if(!focus && content !== '') {
            let str = content;
            let hasTag = false;
            const allowedTags = ["b", "i", "em", "strong", "a", "p", "div", "h2", "h3", "h4", "ul", "ol", "li", "blockquote", "hr"];
            const sanitizeConf = {
                allowedTags,
                allowedAttributes: { a: ["href", "target"] }
            };

            str = sanitizecontent(str, sanitizeConf);

            if (str.includes('&lt;')) {
                str.replace(/&lt;/g, '<');
            }
            if (str.includes('&gt;')) {
                str.replace(/&gt;/g, '>');
            }
            allowedTags.forEach(tag => {
                if (!hasTag && str.includes(`<${tag}>`) && str.includes(`</${tag}>`)) {
                    hasTag = true;
                }
                if (str.includes(`<${tag}></${tag}>`)) {
                    str = str.replace(`<${tag}></${tag}>`, '');
                }
            });
            if(!hasTag) {
                str = `<p>${str}</p>`;
            }
            if (content !== str) {
                setContent(str);
            }
        }
    }, [content, focus]);

    const focusEditor = () => {
        if (editorRef && editorRef.current) {
            editorRef.current.focus();
            setPlaceholderSelect(true);
        }
    }

    return (
        <>
            {!content &&
                <Placeholder
                    onClick={focusEditor}
                    isClicked={placeholderSelect}
                >
                    Start Writing Here...
                </Placeholder>
            }
            <Editor
                hasContent={content.length > 0}
                innerRef={editorRef}
                html={content}
                dangerouslySetInnerHTML={{__html: content}}
                onFocus={() => setFocus(true)}
                onBlur={() => {
                    setPlaceholderSelect(false)
                    setFocus(false);
                }}
                onChange={(e) => setContent(e.target.value)}
            />
            {process.env.NODE_ENV === 'development' && content && (
                <div>
                    {content}
                </div>
            )}
        </>
    )
}

export default connect(
    ({ stories }: AppState) => ({ currentStory: stories.currentStory }),
)(Writer);

const typeEdit = keyframes`
    0 {
        border-right: 1px solid black;
    }
    49% {
        border-right: 1px solid black;
    }
    50% {
        border-right: 1px solid transparent;
    }
    99% {
        border-right: 1px solid transparent;
    }
    100% {
        border-right: 1px solid black;
    }
`;

const Placeholder = styled.p<{ isClicked: boolean}>`
    display: inline-block;
    width: fit-content;
    padding-right: 1px;
    ${({ isClicked }) => isClicked && css`
        border-right: 1px solid black;
        animation: ${typeEdit} 1s linear infinite;
    `}
`;

const Editor = styled(ContentEditable)<{ hasContent: boolean }>`
    font-family: sans-serif;
    outline: 0;
    border: 0;
    width: 75%;
    min-height: 100px;
    resize: none;
    ${({ hasContent }) =>
        hasContent ? `opacity: 1;` : `opacity: 0;`
    }
`;

// https://codesandbox.io/s/l91xvkox9l

// Next steps:
// Add a menu on select characters and hide when there is no more selection