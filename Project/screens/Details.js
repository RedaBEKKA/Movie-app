import React,{useState,useEffect} from 'react';
import {ScrollView, StyleSheet,Image,Dimensions, ActivityIndicator, View} from "react-native";
import {getMovie} from "../services/services"

const heightD = Dimensions.get('screen').height;
const Details = ({route,navigation}) => {
    const [detail,setDetail] =  useState();
    const [loaded,setLoaded] = useState(false);
    const movieId = route.params.movieId;
    console.log(movieId+" identifiant")
    const placeholderImage = require('../assets/images/placeholder.png');
    
    useEffect(()=>{
        getMovie(movieId)
        .then(movieD=>{
            setDetail(movieD);
            setLoaded(true);
        },[movieId])
    })
    return (
    <React.Fragment>
        {loaded &&
        ( <ScrollView style={styles.container}>
            <Image 
                resizeMode="cover"
                style={Styles.image}
                source={detail.poster_path
                ? {uri:'https://image.tmdb.org/t/p/w500/'+item.poster_path}:placeholderImage}
            />
            <View style={styles.container}>
               <Text style={styles.movieTitle}>{detail.title}</Text>
            </View>
            
        </ScrollView>)
       }
       {!loaded && <ActivityIndicator size="large" />}
    </React.Fragment>        
    );
}

export default Details;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },  
    image:{
        height:heightD/2.5
    },
    movieTitle:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10
    },

})