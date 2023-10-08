import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import Message from './components/Message.jsx';
import messages from './DATA/messages.json';

export default function App() {
  const [messageText, setMessageText] = useState('');
  const [messageList, setMessageList] = useState(messages);

  const handleMessageSend = () => {
    if (messageText.trim() !== '') {
      const newMessage = {
        id: messageList.length + 1,
        sender: 'Vous',
        content: messageText,
      };

      setMessageList([...messageList, newMessage]);

      setMessageText('');

      setTimeout(() => {
        const autoReply = {
          id: messageList.length + 2,
          sender: 'Louise',
          content: 'oh super à demain alors ;)',
        };

        setMessageList([...messageList, autoReply]);
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversation</Text>
      <FlatList
        data={messageList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Message data={item} />}
      />

      <View style={[styles.subContainer, styles.subContainerSm]}>
        <TextInput
          style={styles.input}
          placeholder="Écrivez ce que vous souhaitez..."
          value={messageText}
          onChangeText={(text) => setMessageText(text)}
        />
        <Button title="Envoyer" onPress={handleMessageSend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  subContainer: {
    flex: 2,
    width: '100%',
    margin: 'auto',
  },
  subContainerSm: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 8,
  },
});