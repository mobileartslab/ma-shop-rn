import {
  Image, StyleSheet, Text, View, SafeAreaView, FlatList,
} from 'react-native'
import Images from '../../assets/images'
import data from '../../data.json'

const Card = props => {
  const {category, headline, subHeadline, content, image} = props
  return (
     <View style={props.style}>
       <Image source={Images[image]} style={styles.image} />
       <Text style={styles.category}>{category}</Text>
       <Text style={styles.headline}>{headline}</Text>
       <Text style={styles.subHeadline}>{subHeadline}</Text>
       <Text style={styles.content}>{content}</Text>
    </View>
  )
}

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
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
