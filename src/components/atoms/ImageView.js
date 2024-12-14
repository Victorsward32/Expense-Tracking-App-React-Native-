import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Images } from '../../utils/ImageConstant';

const ImageView = ({ source, containerStyle, imageStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={Images.checkMachine} style={[styles.image, imageStyle]} />
    </View>
  );
};

ImageView.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.string, // For URLs
    PropTypes.number, // For local images
  ]).isRequired, // The image source
  containerStyle: PropTypes.object, // Custom styles for the container
  imageStyle: PropTypes.object, // Custom styles for the image
};

ImageView.defaultProps = {
  containerStyle: {},
  imageStyle: {},
};

export default ImageView;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
