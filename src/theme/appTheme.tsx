import { StyleSheet } from "react-native";

export const colors ={
    first: '#780000',
    second: '#dadada',
    third: '#000',
    fourth: '#2F6690',
    fifth: '#fff',
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 35,
        marginBottom: 10,
        color: colors.third,
    },
    bigButton:{
        width: 100,
        height: 100,
        backgroundColor: colors.second,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    bigButtonText:{
        color: colors.third,
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginVertical: 20,
        marginLeft: 20,
        alignSelf: 'center'
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50
    },
    menuButton: {
        marginVertical: 10,
        flexDirection: 'row',
        gap: 10
    },
    menuText: {
        fontSize: 20
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokeballBG: {
        position: 'absolute',
        width: 300,
        height: 300,
        top: -100,
        right: -100,
        opacity: 0.2
    },
    pokemonCard: {
        marginHorizontal: 10,
        borderRadius: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        shadowColor: colors.first,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: 5,
    },
    pokemonName: {
        color: colors.third,
        fontSize: 20,
        fontWeight: 'bold',
        left: 10,
        top: 10,
    },
    pokeball:{
        width: 100,
        height: 100,
        position: 'absolute',
        opacity: 0.5,
        right: -25,
        bottom: -25,
    },
    pokeballContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: 0,
        bottom: 0,
        overflow: 'hidden',
    },
});