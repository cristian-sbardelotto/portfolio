'use client';

import styled from 'styled-components';

export default function Home() {
  return (
    <Hero>
      <h1>Homepage</h1>
    </Hero>
  );
}

const Hero = styled.main`
  background-color: red;

  h1 {
    color: blue;
  }
`;
