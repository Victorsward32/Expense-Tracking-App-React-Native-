import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState, useRef } from 'react';
import Header from '../../components/templates/Header';
// import { Send } from 'lucide-react-native';

const ChatBubble = ({ message, isUser }) => (
  <View style={[
    styles.chatBubble,
    isUser ? styles.userBubble : styles.botBubble
  ]}>
    <Text style={[
      styles.chatText,
      isUser ? styles.userText : styles.botText
    ]}>
      {message}
    </Text>
  </View>
);

const FinancialChatAIScreen = () => {
  const [chatQuery, setChatQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { message: "Hi! I'm your financial assistant. How can I help you today?", isUser: false }
  ]);
  const scrollViewRef = useRef();

  const handleSend = () => {
    if (!chatQuery.trim()) return;

    // Add user message to chat
    const newMessage = { message: chatQuery, isUser: true };
    setChatHistory(prev => [...prev, newMessage]);
    
    // Clear input
    setChatQuery('');

    // TODO: Add your AI response logic here
    // For now, adding a mock response
    setTimeout(() => {
      const botResponse = { 
        message: "I understand you're asking about finances. How can I assist you further?", 
        isUser: false 
      };
      setChatHistory(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title="Finance Bot"
        containerStyle={styles.headerContainer}
        titleStyle={styles.titleStyle}
      />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.chatContainer}
          contentContainerStyle={styles.chatContent}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          {chatHistory.map((chat, index) => (
            <ChatBubble
              key={index}
              message={chat.message}
              isUser={chat.isUser}
            />
          ))}
        </ScrollView>

        <View style={styles.querySectionWrapper}>
          <TextInput
            style={styles.userQuery}
            value={chatQuery}
            onChangeText={setChatQuery}
            placeholder="Ask me anything"
            placeholderTextColor="#666"
            multiline
            maxHeight={100}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSend}
            disabled={!chatQuery.trim()}
          >
            {/* <Send size={24} color={chatQuery.trim() ? '#7289DA' : '#999'} /> */}
            <Text> Send </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#f5f7ff',
  },
  headerContainer: {
    backgroundColor: '#7289DA',
    paddingVertical: 16,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  chatContent: {
    paddingVertical: 16,
  },
  chatBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
  },
  userBubble: {
    backgroundColor: '#7289DA',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  botBubble: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  chatText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: '#FFFFFF',
  },
  botText: {
    color: '#333333',
  },
  querySectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  userQuery: {
    flex: 1,
    backgroundColor: '#f5f7ff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    padding: 8,
  },
});

export default FinancialChatAIScreen;