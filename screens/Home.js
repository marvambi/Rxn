/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  Button,
  StyleSheet,
  View,
  ImageBackground,
  ActionSheetIOS,
  Image,
  Text,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background: transparent;
`;
// const height = Dimensions.get('window');
const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        background="translucent"
        barStyle="light-content"
      />
      <Container>
        {/* <Header /> */}
        <View style={styles.appContainer}>
          <ImageBackground
            source={flower}
            style={styles.videoContainer}
            resizeMode="contain">
            <View style={styles.controlsContainer}>
              <Image source={volumeIcon} style={styles.icon} />
              <Image source={playIcon} style={styles.icon} />
              <View style={styles.progress}>
                <View style={styles.progressBar} />
              </View>
              <Image source={hdIcon} style={styles.icon} />
              <Image source={fullScreenIcon} style={styles.icon} />
            </View>
          </ImageBackground>
          <Button
            style={styles.likeIcon}
            title="Provide Feedback"
            onPress={() => {
              ActionSheetIOS.showActionSheetWithOptions(
                {
                  title: 'Feedback Category',
                  message: 'Pick a category that applies!',
                  options: ['Cancel', 'Funding', 'Application', 'Official'],
                  cancelButtonIndex: 0,
                },
                (buttonIndex) => {
                  console.log(buttonIndex);
                },
              );
            }}
          />
          <View
            style={{
              fontSize: 30,
              paddingBottom: 30,
              paddingHorizontal: 10,
              backgroundColor: 'transparent',
            }}
          />
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  flower: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    backgroundColor: '#000',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    padding: 10,
    backgroundColor: '#202020',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 175,
  },
  icon: {
    tintColor: '#fff',
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  likeIcon: {
    backgroundColor: 'yellowgreen',
    borderRadius: 10,
    padding: 5,
  },
  progress: {
    backgroundColor: '#000',
    borderRadius: 7,
    flex: 1,
    height: 14,
    margin: 4,
  },
  progressBar: {
    backgroundColor: '#bf161c',
    borderRadius: 5,
    height: 10,
    margin: 2,
    paddingTop: 3,
    width: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const heartIcon = require('../Images/heart.png');
const playIcon = require('../Images/play.png');
const volumeIcon = require('../Images/sound.png');
const hdIcon = require('../Images/hd-sign.png');
const fullScreenIcon = require('../Images/full-screen.png');
const flower = require('../Images/flower.jpg');
const remoteImage = {
  uri: 'https://farm5.staticflickr.com/4702/24825836327_bb2e0fc39b_b.jpg',
};

export default Home;
