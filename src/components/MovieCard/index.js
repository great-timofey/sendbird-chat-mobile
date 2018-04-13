
import React from 'react';
import { Image, View, Text } from 'react-native';

import styles from './styles';

function MovieCard({ title, overview, poster_path }) {
  console.log('MOVIE CARD', { title, overview, poster_path });
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `http://image.tmdb.org/t/p/w500${poster_path}` }}
        style={styles.image}
      />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.overview}>{overview}</Text>
    </View>
  );
}

export default MovieCard;
