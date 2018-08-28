import React from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  FlatList,
} from 'react-native';
import styles from './styles';
import colors from '../../global/colors';

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

// const Loader = active => (
// <View
// style={[
// styles.loaderView,
// active ? { display: 'flex' } : { display: 'none' },
// ]}
// >
// <ActivityIndicator size="small" color="grey" />
// </View>
// );

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
}: Props) => {
  const renderOptions = () => {
    if (successful) {
      return (
        <FlatList
          style={styles.optionsList}
          data={options}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.option}
              onPress={() => choosePositionCallback(index)}
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
        <ActivityIndicator
          style={[
            styles.loaderView,
            searching ? { display: 'flex' } : { display: 'none' },
          ]}
          animating={searching}
          color={colors.darkGreyBlueTwo}
        />
        <TouchableOpacity style={styles.clearButton} onPress={clearCallback}>
          <Text style={styles.clearLabel}>x</Text>
        </TouchableOpacity>
        {renderOptions()}
      </View>
    </View>
  );
};

export default Combobox;
