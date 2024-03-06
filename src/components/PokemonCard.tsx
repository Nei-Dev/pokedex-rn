import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { SimplePokemon } from "../interfaces/PokemonInterfaces";
import { colors, styles } from "../theme/appTheme";
import { FadeInImage } from "./FadeInImage";
import { getImageColors } from "../helpers/getColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const widthWindow = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const [bgColor, setBgColor] = useState(colors.second);
    const isMounted = useRef(true);
    const navigator = useNavigation<StackNavigationProp<any, any>>();

    const getPokemonColor = (uri: string)=>{
        getImageColors(uri).then(([primary, secondary])=>{
            setBgColor(secondary || colors.second);
        });
    }

    useEffect( ()=>{
        // La logica de isMounted es para evitar que se ejecute el setState cuando el componente ya no esta montado
        if(isMounted.current) getPokemonColor(pokemon.picture); 

        return ()=>{
            isMounted.current = false;
        }
    }, []);

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigator.navigate('PokemonScreen', {simplePokemon: pokemon, color: bgColor})}
        >
            <View
                style={{
                    ...styles.pokemonCard,
                    width: widthWindow * 0.4,
                    backgroundColor: bgColor,
                }}
            >
                <View
                    style={{
                        // zIndex: 999,
                    }}
                >
                    <Text style={styles.pokemonName}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View
                    style={styles.pokeballContainer}
                >
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokeball}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    );
};
