import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';

const Container = styled.View`
  flex: 1;
  background: transparent;
`;

const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        background="translucent"
        barStyle="light-content"
      />
      <Container>
        <Header />
      </Container>
    </>
  );
};

export default Home;
