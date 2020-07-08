import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import ViewPager from '@react-native-community/viewpager';

const {height} = Dimensions.get('window');
const Container = styled(ViewPager)`
  height: ${height}px;
`;

const Hero = () => {
  return <Container />;
};

export default Hero;
