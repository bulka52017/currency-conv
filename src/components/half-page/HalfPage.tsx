import React from 'react';
import { HalfPageContainer } from './HalfPage.styles';
import { HalfPageProps } from './HalfPage.types';

const HalfPage: React.FC<HalfPageProps> = ({ children }) => {
    return <HalfPageContainer>{children}</HalfPageContainer>;
};

export default HalfPage;
