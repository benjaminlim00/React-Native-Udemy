import React, { useReducer } from 'react';
import { Text, View } from 'react-native';
import ColorCounter from '../components/CounterCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.colorToChange) {
      case 'red':
        return state.red + action.amount > 255 || state.red + action.amount < 0
          ? state
          : { ...state, red: state.red + action.amount };
      case 'green':
        return state.green + action.amount > 255 ||
          state.green + action.amount < 0
          ? state
          : { ...state, green: state.green + action.amount };
      case 'blue':
        return state.blue + action.amount > 255 ||
          state.blue + action.amount < 0
          ? state
          : { ...state, blue: state.blue + action.amount };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          // type and payload instead
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }
        color='Red'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
        }
        color='Green'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
        }
        color='Blue'
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />

      <Text>{`${red}, ${green}, ${blue}`}</Text>
    </View>
  );
};

export default SquareScreen;
