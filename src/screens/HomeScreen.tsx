import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { colors, styles } from "../theme/appTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemonPaginated } from "../hooks/usePokemonPaginated";
import { PokemonCard } from "../components/PokemonCard";
import { FloatingButton } from "../components/FloatingButton";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {

    const {top} = useSafeAreaInsets();
    const navigator = useNavigation();

    const {isLoading, simplePokemonList, loadPokemons} = usePokemonPaginated();

    return (
        <>
            <Image 
                source={require('../assets/pokebola.png')} 
                style={styles.pokeballBG}    
            />

            <View
                style={{
                    alignItems: 'center'
                }}
            >
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    renderItem={({item}) => <PokemonCard pokemon={item} />}
                    // Infinite Scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10,
                        }}>Pokedex</Text>
                    )}
                    numColumns={2}
                    ListFooterComponent={<ActivityIndicator style={{height: 100}} size={20} color={colors.first} />}
                    // showsVerticalScrollIndicator={false}
                />
            </View>

            <FloatingButton 
                iconName="search" 
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    right: 50,
                    bottom: 50,
                    backgroundColor: colors.first,
                    opacity: 0.6
                }}
                execute={() => navigator.navigate('SearchScreen' as never)}
            />
        </>
    );
};
