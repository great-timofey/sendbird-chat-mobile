import React, { PureComponent } from 'react';
import { View, Modal, Button } from 'react-native';
import MovieCard from '../MovieCard';
import styles from './styles';

type Props = {
    item: Object,
    isOpen: Boolean,
  }

export default class ModalMovie extends PureComponent<Props> {
   onPressClose= () => {
     this.props.onClose();
   }

   render() {
     const { item, isOpen } = this.props;
     console.log(this.props);
     return (
       <Modal
         transparent
         animationType="slide"
         visible={isOpen}
         onRequestClose={() => this.props.onClose()}
       >
         <View style={styles.modal}>
           <MovieCard
             title={item.title}
             overview={item.overview}
             poster_path={item.poster_path}
           />
           <Button
             onPress={this.onPressClose}
             title="close"
             color="#841584"
             accessibilityLabel="Learn more about this purple button"
           />
         </View>
       </Modal>

     );
   }
}


