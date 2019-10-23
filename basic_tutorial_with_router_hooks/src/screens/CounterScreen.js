import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="increase" onPress={() => setCounter(counter + 1)} />
      <Button title="decrease" onPress={() => setCounter(counter - 1)} />
      <Text>
        Count: {counter}
      </Text>
    </View>
  );
};

export default CounterScreen;
