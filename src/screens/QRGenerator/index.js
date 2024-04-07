
import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRGenerator = ({ text }) => {
  return (
    <View style={styles.container}>
      <QRCode
        value={text}
        size={200} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QRGenerator;
