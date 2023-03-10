import React from 'react';
import {View,Text,FlatList,StyleSheet} from "react-native"
import Card from './Card';
import PropTypes from "prop-types"


const propTypes = {
    title:PropTypes.string,
    content:PropTypes.array
}
class List extends React.PureComponent {
    
    render() {
        const {title,content,navigation} = this.props;
        return (
            <View style={styles.list}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View>
               <FlatList
              data={content}
              renderItem={({item})=> <Card navigation={navigation} item={item} />}
              horizontal={true}
            />
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        paddingBottom:20
    },
    list:{
        marginTop:25
    }
})

List.propTypes = propTypes;


export default List;

