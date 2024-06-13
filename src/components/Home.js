import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import SiteData from './SiteData';
import Analytics from './Analytics';

const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    padding: 1rem;
`;

const HamburgerMenu = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 2rem;
    margin-bottom: 20px;
    user-select: none;
`;

const SideMenu = styled.div`
    background-color: #f5f5f5;
    padding: ${props => (props.isOpen ? '15px' : '0')};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    max-height: ${props => (props.isOpen ? '500px' : '0')};
    transition: max-height 0.3s ease, padding 0.3s ease;
`;

const MenuItem = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
    color: #333;
    padding: 10px 0;

    &:hover {
        color: blue;
        font-weight: lighter;
    }
`;

const SectionColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const Section = styled.section`
    margin-bottom: 20px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    h2 {
        margin-bottom: 1rem;
        color: #333;
    }

    p {
        color: #666;
    }
`;

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const coreFeaturesRef = useRef(null);
    const siteDataRef = useRef(null);
    const overallAnalyticsRef = useRef(null);
    const additionalFeature1Ref = useRef(null);
    const additionalFeature2Ref = useRef(null);
    const additionalFeature3Ref = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HomeContainer>
            <div>
                <HamburgerMenu onClick={toggleMenu}>
                    &#9776;
                </HamburgerMenu>
                <SideMenu isOpen={isMenuOpen}>
                    <MenuItem onClick={() => scrollToSection(coreFeaturesRef)}>Core Features</MenuItem>
                    <MenuItem onClick={() => scrollToSection(siteDataRef)}>Site Data Detected</MenuItem>
                    <MenuItem onClick={() => scrollToSection(overallAnalyticsRef)}>Overall Analytics</MenuItem>
                    <MenuItem onClick={() => scrollToSection(additionalFeature1Ref)}>Additional Feature 1</MenuItem>
                    <MenuItem onClick={() => scrollToSection(additionalFeature2Ref)}>Additional Feature 2</MenuItem>
                    <MenuItem onClick={() => scrollToSection(additionalFeature3Ref)}>Additional Feature 3</MenuItem>
                </SideMenu>
            </div>
            <SectionColumn>
                <Section ref={coreFeaturesRef}>
                    <h2>Core Features</h2>
                    <p>CatchPhis offers advanced phishing detection and site analytics.</p>
                </Section>
                <Section ref={siteDataRef}>
                    <h2>Site Data Detected</h2>
                    <SiteData />
                </Section>
                <Section ref={overallAnalyticsRef}>
                    <h2>Overall Analytics</h2>
                    <Analytics />
                </Section>
                <Section ref={additionalFeature1Ref}>
                    <h2>Additional Feature 1</h2>
                    <p>Description of Additional Feature 1.</p>
                </Section>
                <Section ref={additionalFeature2Ref}>
                    <h2>Additional Feature 2</h2>
                    <p>Description of Additional Feature 2.</p>
                </Section>
                <Section ref={additionalFeature3Ref}>
                    <h2>Additional Feature 3</h2>
                    <p>Description of Additional Feature 3.</p>
                </Section>
            </SectionColumn>
        </HomeContainer>
    );
}

export default Home;
