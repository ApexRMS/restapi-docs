// Learn more about how to build React pages in Realm: https://redocly.com/docs/realm/extend/how-to/create-react-page
import React from 'react';
import styled from 'styled-components';

import { ArrowRightIcon, Button } from '@redocly/theme';
import { CardWithCode } from './@theme/components/CardWithCode/CardWithCode';
import { Card } from '@redocly/theme/markdoc/components/Cards/Card';
import { Cards } from '@redocly/theme/markdoc/components/Cards/Cards';

const code = `curl -X POST \\
  https://api.warp.com/warp/v1/time/set \\
  -H "x-ss-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" 
`;

export default function HomePage() {
  return (
    <div>
      <HeroContainer>
        <HeroBg />
        {/* <Image srcSet={`${require('./images/grid.svg')} light, ${require('./images/grid-dark.svg')} dark`} /> */}
        <h1>SyncroSim API</h1>
        <p>Deliver geospatial models direct to decision makers​</p>
        <Button size="large" variant="primary" tone="brand" to="/guides/quickstart">
          Get started
        </Button>
        <CardWithCode
          title="Quickstart"
          description="Set up your environment and make your first call to warp you one second into the future."
          code={code}
        />
      </HeroContainer>
      <Container>
        <h3>Accelerate Your Development of Ecological Models</h3>
        <p>
     SyncroSim is an open science tool for bundling map-based simulation code and data in a way others can actually use
        </p>
      </Container>
<Container>
  <h3>Key Features</h3>
  <Feature>
    <ArrowRightIcon />
    <p>Scenario Management: Easily create, manage, and analyze multiple land-use and ecosystem scenarios.</p>
  </Feature>
  <Feature>
    <ArrowRightIcon />
    <p>Dynamic Modeling: Seamlessly simulate complex land cover changes over time with integrated tools.</p>
  </Feature>
  <Feature>
    <ArrowRightIcon />
    <p>GeoTIFF Integration: Leverage spatial raster data to enhance scenario modeling and analysis.</p>
  </Feature>
  <Feature>
    <ArrowRightIcon />
    <p>Custom Workflows: Build tailored workflows for your specific modeling requirements with flexible APIs.</p>
  </Feature>
  <br />
        <ButtonContainer>
          <Button size="large" to="/apis">
            Get started
          </Button>
          <Button size="large" to="/apis">
            Explore SyncroSim documentation
          </Button>
        </ButtonContainer>
      </Container>


      <Container>
        <ContactUsSection>
          <h3>Need help?</h3>
          <ButtonContainer>
            <Button variant="outlined" size="large">
              Join our community
            </Button>
            <Button variant="outlined" size="large">
              Read the docs
            </Button>
          </ButtonContainer>
        </ContactUsSection>
      </Container>
    </div>
  );
}

const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;


  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${require('./images/background.svg')});
    background-size: cover;
    filter: blur(60px);
    opacity: 0.7;
  }
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background-size: cover;
    background-image: url(${require('./images/grid.svg')});
    opacity: 0.2;
    .dark & {
      background-image: url(${require('./images/grid-dark.svg')});
    }
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  position: relative;
  .code-line::before {
    color: var(--text-color-disabled);
  }

  span {
    color: var(--text-color-secondary);
  }

  h1 {
    color: #4396EC;
    text-align: center;
    font-size: 92px;
    font-weight: 700;
    line-height: 102px;
    letter-spacing: 1px;
    margin-bottom: 24px;
    margin: 160px 0 24px 0;
  }

  > p {
    color: var(--text-color-primary);
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin: 0 0 24px 0;
  }
`;

const Container = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--text-color-secondary);
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;

  width: min(90%, 886px);
  margin: 64px auto 0;
  a {
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  h3 {
    color: var(--text-color-primary);
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin: 0 0 24px 0;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    height: 16px;
    width: 16px;
    margin-top: 6px; // Aligns the icon with the first line of text
    flex-shrink: 0; // Prevents the icon from shrinking
    path {
      fill: var(--color-persian-green-6);
    }
  }
  margin-bottom: var(--spacing-sm);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactUsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  h3 {
    margin: 0;
  }
`;
