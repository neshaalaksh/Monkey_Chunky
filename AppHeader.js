import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.textContainer}>
        <Text style={styles.text}>Monkey Chunky</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    marginTop:50,
    backgroundColor: 'red',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;