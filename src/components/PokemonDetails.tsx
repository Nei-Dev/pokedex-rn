import React from 'react';
import { ScrollView } from "react-native-gesture-handler";
import { FullPokemon, Stat } from '../interfaces/PokemonInterfaces';
import { StyleSheet, Text, View } from "react-native";
import { FadeInImage } from "./FadeInImage";

interface Props{
    pokemon: FullPokemon;
}
export const PokemonDetails = ({pokemon}: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
            {/* Types */}
            <View
                style={{
                    ...localStyles.container,
                    marginTop: 370
                }}
            >
                <Text 
                    style={{
                        ...localStyles.title
                    }}
                >Types</Text>
                <Text
                    style={localStyles.regularText}
                >
                    {
                        pokemon.types.map( ({type}) => type.name).join(' - ')
                    }
                </Text>

            </View>


            {/* Weight */}
            <View
                style={{
                    ...localStyles.container,
                    marginTop: 20
                }}
            >
                <Text
                    style={localStyles.title}
                >Weight</Text>
                <Text
                    style={localStyles.regularText}
                >
                    {pokemon.weight} lb
                </Text>
            </View>

            {/* Sprites */}
            <View
                style={{
                    ...localStyles.container,
                    marginTop: 20
                }}
            >
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    // style={}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={localStyles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={localStyles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={localStyles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={localStyles.basicSprite}
                    />
                </ScrollView>
            </View>

            {/* Abilities */}
            <View
                style={{
                    ...localStyles.container,
                    marginTop: 20
                }}
            >
                <Text
                    style={localStyles.title}
                >Basic abilities</Text>
                <Text
                    style={localStyles.regularText}
                >
                    {
                        pokemon.abilities.map( ({ability}) => ability.name).join('\n')
                    }
                </Text>
            </View>

            {/* Moves */}
            <View
                style={{
                    ...localStyles.container,
                    marginTop: 20
                }}
            >
                <Text
                    style={localStyles.title}
                >Moves</Text>
                <Text
                    style={localStyles.regularText}
                >
                    {
                        pokemon.moves.map( ({move}) => move.name).join('  ')
                    }
                </Text>
            </View>

            {/* Stats */}
            <View
                style={{
                    ...localStyles.container,
                    marginTop: 20
                }}
            >
                <Text
                    style={localStyles.title}
                >Stats</Text>
                {
                    pokemon.stats.map( ({stat, base_stat}) => (
                        <Text
                            style={localStyles.regularText}
                            key={stat.name}
                        >
                            {stat.name}: {base_stat}
                        </Text>
                    ))
                }
            </View>

            {/* Final sprite */}
            <View
                style={{
                    marginBottom: 50,
                    alignItems: 'center'
                }}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={{
                        width: 250,
                        height: 250
                    }}
                />
            </View>
    
        </ScrollView>
    );
};

const localStyles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        width: 100,
        height: 100
    }
})
