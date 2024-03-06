import React, { useEffect, useState } from 'react';
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from "react-native";
import { colors } from "../theme/appTheme";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDebounceSetValue } from "../hooks/useDebounceSetValue";
import { SimplePokemon } from "../interfaces/PokemonInterfaces";

interface Props {
    onDebounce: (value: string) => void;
    style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style, onDebounce}: Props) => {

    const [textValue, setTextValue] = useState('' as string);

    const debouncedValue = useDebounceSetValue(textValue, 1500);

    useEffect(()=>{
        onDebounce(debouncedValue);
    
    }, [debouncedValue]);

    return (
        <View
            style={{
                ...localStyles.container,
                ...(style as any) // En vez de inicializar en los props, para no iniciar objetos vacíos
            }}
        >
            <View
                style={localStyles.textBackground}
            >
                <TextInput
                    placeholder="Search Pokemon"
                    placeholderTextColor={colors.fifth}
                    style={localStyles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />

                <Icon
                    name="search"
                    color={colors.fifth}
                    size={30}
                />
            </View>
        </View>
    );
};

const localStyles = StyleSheet.create({
    container: {
        
    },
    textBackground: {
        backgroundColor: colors.fifth,
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: colors.second,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textInput: {
        flex: 1,
        color: colors.fifth
    }
})