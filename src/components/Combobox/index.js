import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  FlatList,
} from 'react-native';
import styles from './styles';

type Props = {
  options: Array,
  searching: Boolean,
  inputChangeCallback: Function,
  choosePositionCallback: Function,
  clearCallback: Function,
  successful: Boolean,
  displayValue: String,
  customKey: String,
  value: String,
};

const Loader = () => (
  <View style={styles.loader}>
    <Text>loading...</Text>
  </View>
);

const Combobox = ({
  options,
  searching,
  value,
  inputChangeCallback,
  choosePositionCallback,
  clearCallback,
  successful,
  displayValue,
  customKey,
  bindFunction,
}: Props) => {
  const renderOptions = () => {
    if (successful) {
      return (
        <FlatList
          style={styles.optionsList}
          data={options}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.option}
              onPress={item => bindFunction(item)}
            >
              <Text>{item[displayValue]}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item[customKey]}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}> Username / Mail </Text>
      <View style={styles.comboboxContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={inputChangeCallback}
        />
        {searching && <Loader />}
        <TouchableOpacity style={styles.clearButton} onPress={clearCallback}>
          <Text style={styles.clearLabel}>x</Text>
        </TouchableOpacity>
        {renderOptions()}
      </View>
    </View>
  );
};

export default Combobox;
