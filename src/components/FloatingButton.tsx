import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../theme/appTheme";

interface Props{
    iconName: string;
    opacity?: number;
    style?: any;
    execute: () => void;
}

export const FloatingButton = ({iconName, style, execute, opacity}: Props) => {
    return (
        <TouchableOpacity
        activeOpacity={opacity ?? 0.8}
        onPress={execute}
        >
            <View
                style={{
                    ...localStyles.floatingButton,
                    ...style
                }}
            >
                <Icon
                    name={iconName}
                    size={40}
                    color="white"
                />
            </View>
        </TouchableOpacity>
    );
};

const localStyles = StyleSheet.create({
    floatingButton:{
        width: 60,
        height: 60,
        backgroundColor: colors.first,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        elevation: 10
    }
});