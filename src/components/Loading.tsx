import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/appTheme";

interface Props {
    
}

export const Loading = () => {
    return (
        <View style={{
            ...localStyles.container
        }}>
            <ActivityIndicator size={50} color={colors.first} />
            <Text>Loading...</Text>
        </View>
    );
};

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
