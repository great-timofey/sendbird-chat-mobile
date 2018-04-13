import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { colors } from '../../global';
import styles from './styles';
import { requestApiData } from '../../redux/actions/fetching';
import MovieCard from '../../components/MovieCard';

type Props = {
  count?: Number,
  increment: Function,
  decrement: Function,
  requestApiData: Function,
  data: Array,
  refreshing: Boolean,
}
class Counter extends PureComponent<Props> {
  static defaultProps = {
    count: 0
  }

   keyExtractor = item => `${item.id}`;

  renderItem = ({ item }) => (
    <MovieCard
      title={item.title}
      overview={item.overview}
      poster_path={item.poster_path}
    />
  );


  render() {
    console.log(this.props);
    const { data, refreshing } = this.props.data;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          // onRefresh
          refreshing={refreshing}
          onRefresh={() => this.props.requestApiData()}
          // ListEmptyComponent
          ListEmptyComponent={<Text>Sorry, no data yet!</Text>}
        />

      </View>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
