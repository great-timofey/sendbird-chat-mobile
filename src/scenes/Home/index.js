import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Button, Alert } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../../redux/actions/searchFetching';
import * as modalAction from '../../redux/actions/modalMovie';
import ModalMovie from '../../components/ModalMovie';
import styles from './styles';

type Props = {
  data: Array,
  navigation: Object,
  modal: Object,
  requestSearchApi: Function,
  openModalMovie: Function,
  closeModalMovie: Function,
  clearSearchApi: Function,
}

class Home extends Component<Props> {
  onPressSearchedMovie = (item) => {
    console.log(item.title);
    this.props.openModalMovie(item);
  }

  handleChangeText= (text) => {
    this.props.requestSearchApi(text);
  }

  handleDeviceInfoButton = () => {
    const deviceName = DeviceInfo.getModel();
    console.log(DeviceInfo);
    Alert.alert(deviceName);
  }

  renderItem = item => (
    <TouchableOpacity
      key={item.id}
      onPress={() => this.onPressSearchedMovie(item)}
    >
      <Text style={styles.titleText}>{item.title}</Text>
    </TouchableOpacity>
  );

  render() {
    const {
      navigation, data, modal, closeModalMovie,
    } = this.props;
    console.log('data', this.props);
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Title of Movie Here"
            onChangeText={text => this.handleChangeText(text)}
            value={data.searchInput}
          />
          <Button
            onPress={() => this.props.clearSearchApi()}
            title="clear"
            color="#841584"
          />
        </View>
        <ModalMovie isOpen={modal.isOpen} item={modal.item} onClose={closeModalMovie} />
        <ScrollView>
          {data.data.map(item => (
           this.renderItem(item)))}
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Counter')}>
          <Text style={styles.buttonText}>Watch Movies List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleDeviceInfoButton()}>
          <Text style={styles.buttonText}>Watch Device Info</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({ data: state.searchResults, modal: state.modal });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...searchActions, ...modalAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
