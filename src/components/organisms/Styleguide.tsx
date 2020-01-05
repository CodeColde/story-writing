import React from 'react';
import Text from 'components/atoms/editor-blocks/Text';
import Heading1 from 'components/atoms/editor-blocks/Heading1';
import Heading2 from 'components/atoms/editor-blocks/Heading2';
import Heading3 from 'components/atoms/editor-blocks/Heading3';
import Quote from 'components/atoms/editor-blocks/Quote';
import OrderedList from 'components/atoms/editor-blocks/OrderedList';
import ListItem from 'components/atoms/editor-blocks/ListItem';
import UnorderedList from 'components/atoms/editor-blocks/UnorderedList';
import Anchor from 'components/atoms/editor-blocks/Anchor';
import LineBreak from 'components/atoms/editor-blocks/LineBreak';
import PageBreak from 'components/atoms/editor-blocks/PageBreak';
import Title from 'components/atoms/editor-blocks//Title';
import styled from 'styled-components';

interface Props {
    close: () => void;
}

const Styleguide: React.FC<Props> = ({ close }) => {
    return (
        <Wrapper>
            <Inner>
                <CloseButton onClick={close}>close</CloseButton>
                <Title>Styleguide</Title>
                <Heading1>Heading 1</Heading1>
                <Heading2>Heading 2</Heading2>
                <Heading3>Heading 3</Heading3>
                <Text>Text</Text>
                <Quote>Quote</Quote>
                <OrderedList>
                    <ListItem>Ordered List Item</ListItem>
                    <ListItem>Ordered List Item</ListItem>
                </OrderedList>
                <UnorderedList>
                    <ListItem>Ordered List Item</ListItem>
                    <ListItem>Ordered List Item</ListItem>
                </UnorderedList>
                <Anchor>Anchor</Anchor>
                <PageBreak />
                <LineBreak />
            </Inner>
        </Wrapper>
    )
}

export default Styleguide;

const Wrapper = styled.div`
    position: fixed;
    opacity: 1;
    display: block;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
    padding: 1rem;
`;

const Inner = styled.div`
    background-color: white;
    color: black;
    height: 100%;
    width: 100%;
    padding: 2rem 5rem;
    overflow-x: hidden;
    overflow-y: auto;
`;

const CloseButton = styled.div`
    color: black;
`;