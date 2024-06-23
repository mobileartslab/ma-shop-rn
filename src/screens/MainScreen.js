import {
  Image, StyleSheet, Text, View, SafeAreaView, FlatList,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {GET_INVENTORY} from "../state/action_types";
import Images from '../../assets/images'
import data from '../../data.json'
import { ASSET_URL } from '../constants/constants'
import {action} from "../state/actions";

const Card = props => {
  const {category, headline, subHeadline, content, image} = props
  return (
     <View style={props.style}>
       <Image source={{ uri: ASSET_URL + image }} style={styles.image} />
       <Text style={styles.category}>{category}</Text>
       <Text style={styles.headline}>{headline}</Text>
       <Text style={styles.subHeadline}>{subHeadline}</Text>
       <Text style={styles.content}>{content}</Text>
    </View>
  )
}

export default function MainScreen() {
  const dispatch = useDispatch()
  const app = useSelector((state) => state.app)

  useEffect(() => {
    dispatch(action({ type: GET_INVENTORY}))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={app?.inventory}
        renderItem={({item}) => (
          <Card
            category={item.category}
            headline={item.headline}
            subHeadline={item.subHeadline}
            content={item.content}
            image={item.image}
            style={styles.card}
          />
        )}
        keyExtractor={item => item.id}
      />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    marginVertical: 10
  },
  card: {
    backgroundColor: 'white',
    border: 'solid',
    width: 350,
    padding: 20,
    borderRadius: 20,
    margin: 10,
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  image: {
    height: 310,
    width: 310,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  category: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#aaaaaa',
    fontSize: 16
  },
  headline: {
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 18
  },
  subHeadline: {
    marginTop: 3,
    color: '#666666',
  },
  content: {
    marginTop: 5,

  }
});
