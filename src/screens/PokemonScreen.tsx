import { StackScreenProps } from "@react-navigation/stack";
import React from 'react';
import { RootStackParams } from "../navigator/Navigator";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors, styles } from "../theme/appTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "react-native";
import { FadeInImage } from "../components/FadeInImage";
import { usePokemon } from "../hooks/usePokemon";
import { PokemonDetails } from "../components/PokemonDetails";

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ( {navigation, route}: Props ) => {

    const { simplePokemon: {name, id, picture}, color } = route.params;
    const {top} = useSafeAreaInsets();

    const {isLoading, pokemon} = usePokemon(id);

    return (
        <View style={{flex: 1}}>
            <View
                style={{
                    ...stylesScreen.headerContainer,
                    backgroundColor: color,
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=> navigation.goBack()}
                    style={{
                        ...stylesScreen.backButton,
                        top: top + 5
                    }}
                >
                    <Icon
                        name="arrow-back"
                        color={colors.fifth}
                        size={40}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        ...stylesScreen.pokemonName,
                        top: top + 50
                    }}
                >
                    {name.normalize() + '\n#' + id}
                </Text>

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={stylesScreen.pokeball}
                />

                <FadeInImage
                    uri={picture}
                    style={stylesScreen.pokemonImage}
                />
            </View>

            {/* Details n loading */}
            {
                isLoading
                ? (
                    <View
                        style={stylesScreen.loadingIndicator}
                    >
                        <ActivityIndicator
                            color={color}
                            size={50}
                        />
                    </View>
                )
                : (
                    <PokemonDetails
                        pokemon={pokemon}
                    />
                )
            }
        </View>
    );
};

const stylesScreen = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
