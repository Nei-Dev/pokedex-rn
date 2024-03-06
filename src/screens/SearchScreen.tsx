import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Platform, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchInput } from "../components/SearchInput";
import { usePokemonsSearch } from "../hooks/usePokemonsSearch";
import { styles } from "../theme/appTheme";
import { PokemonCard } from "../components/PokemonCard";
import { Loading } from "../components/Loading";
import { SimplePokemon } from "../interfaces/PokemonInterfaces";

export const SearchScreen = () => {

    const {top} = useSafeAreaInsets();
    const screeWidth = Dimensions.get('window').width;

    const [term, setTerm] = useState('');
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
    const {isFetching, simplePokemonList} = usePokemonsSearch();

    useEffect(()=>{
        if(!term.length) return setPokemonFiltered(simplePokemonList);

        setPokemonFiltered(
            simplePokemonList.filter(pokemon => {
                return pokemon.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
                    || pokemon.id.startsWith(term);
            })
        );
    }, [term])

    if(isFetching) {
        return <Loading />
    }

    return (
        <View
            style={{
                flex: 1,
                marginHorizontal: 20
            }}
        >
            <SearchInput 
                onDebounce = {setTerm}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screeWidth - 40,
                    top: Platform.OS === 'ios' ? top : top + 20,
                }}
            />

            <FlatList
                    data={pokemonFiltered}
                    keyExtractor={(pokemon) => pokemon.id}
                    renderItem={({item}) => <PokemonCard pokemon={item} />}

                    // Header (Title)
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80,
                            paddingBottom: 10,
                        }}>{term}</Text>
                    )}
                    
                    numColumns={2}
                />
        </View>
    );
};
