import { View, Text, StyleSheet } from 'react-native';

export default function Message({ data }) {
  const isYou = data.sender === 'Vous';
  const isBotResponse = data.isBotResponse;

  return (
    <View style={[styles.container, isYou && !isBotResponse ? styles.yourMessage : styles.otherMessage]}>
      <Text style={styles.content}>{data.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  yourMessage: {
    backgroundColor: 'lightgray', 
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: 'lightgreen',
    alignSelf: 'flex-start',
  },
  content: {
    fontSize: 16,
  },
});