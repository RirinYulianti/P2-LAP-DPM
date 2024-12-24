import React from 'react';
import { View } from 'react-native';
import styles from '../styles/BoxRowStyle';

const BoxRow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
    </View>
  );
};

export default BoxRow;
