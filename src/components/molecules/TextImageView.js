import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TextImageView = ({
    title,
    description,
    image,
    ButtonTxt,
    containerStyle,
    titleStyle,
    playButtonStyle,
    onPlayPress,
}) => {
    return (
        <View style={[styles.cardContainer, containerStyle]}>
            {/* Left Section: Text Content */}
            <View style={styles.textSection}>
                <Text style={[styles.titleText, titleStyle]}>{title}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
                <TouchableOpacity
                    style={[styles.playButton, playButtonStyle]}
                    onPress={onPlayPress}
                >
                    <View style={styles.buttonContent}>
                        {/* <Image
                            source={require('../assets/play-icon.png')} // Replace with your play icon path
                            style={styles.buttonIcon}
                        /> */}
                        <Text style={styles.playButtonText}>{ButtonTxt}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Right Section: Image */}
            <View style={styles.imageSection}>
                <Image source={image} style={styles.imageStyle} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#F0FAF8',
        borderRadius: 16,
        padding: 16,
        alignItems: 'center',
        // marginVertical: 10,
    },
    textSection: {
        marginRight: 16,
        width:"70%",
    },
    titleText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1A5F7A',
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 10,
        color: '#5B7083',
        marginBottom: 12,
        textAlign:"left"
    },
    playButton: {
        backgroundColor: '#E6F2FF',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    playButtonText: {
        fontSize: 10,
        color: '#007BFF',
        fontWeight: '600',
    },
    imageSection: {
        alignItems: 'flex-end',
        width:"30%"
    },
    imageStyle: {
        width: 120,
        height: 90,
        resizeMode: 'contain',
    },
});

export default TextImageView;
