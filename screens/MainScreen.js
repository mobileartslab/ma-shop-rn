import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button
} from 'react-native'
import Images from '../assets/images'

const Card = props => {

  return (
     <View style={props.style}>
       <Image source={Images.lp1} style={styles.image} />
       <Text style={styles.category}>GIBSON</Text>
       <Text style={styles.headline}>Les Paul Custom - Ebony with Ebony Fingerboard</Text>
       <Text style={styles.subHeadline}>The One, the Only Les Paul Custom</Text>
       <Text style={styles.content}>With its sonic punch, fluid playability, and classic "tuxedo" appointments, the Les Paul Custom is equal parts elegance and brute strength. Fitted with a matched 490/498 humbucker set that takes you from mellow jazz tones to full shred with a pinky twist, this majestic beast is ultra-responsive to your touch. Its fast-action neck, smooth-as-silk ebony fingerboard, and medium jumbo frets facilitate the speedy, dexterous fretwork weve heard across prog, fusion, and hard rock genres from guitar virtuosos like Robert Fripp, Al Di Meola, and Zakk Wylde. Gibson's Custom Shop luthiers selected premium mahogany for the body and capped it with a 2-piece carved maple top — a classic recipe for rich, sustaining, articulate tone that'll slice right through the mix.</Text>
    </View>
  )

}

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
          <Card style={styles.card}/>
        <Card style={styles.card}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flex: 1
  },
  innerContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
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
    marginVertical: 10,
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
