import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextImageView from '../molecules/TextImageView';

const FinancialCard = ({
    title,
    description,
    image,
    buttonText,
    containerStyle,
    titleStyle,
    buttonStyle,
    onButtonPress,
}) => {
    return (
        <View style={[styles.mainContainer, containerStyle]}>
            <TextImageView
                title={title}
                description={description}
                image={image}
                ButtonTxt={buttonText}
                containerStyle={{ backgroundColor: '#E6F2FF', ...containerStyle }}
                titleStyle={{ color: '#1A5F7A', ...titleStyle }}
                playButtonStyle={{ backgroundColor: '#E0F8F7', ...buttonStyle }}
                onPlayPress={onButtonPress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 10,
    },
});

export default FinancialCard;
