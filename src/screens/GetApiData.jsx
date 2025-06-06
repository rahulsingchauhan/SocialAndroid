// GetApiData.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const GetApiData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{item.name || item.foodName || 'No Name'}</Text>
      {item.description && <Text style={styles.description}>{item.description}</Text>}
      <View style={styles.infoRow}>
        {item.price !== undefined && <Text style={styles.price}>${item.price}</Text>}
        {item.time !== undefined && <Text style={styles.time}>{item.time} min</Text>}
        {item.rating !== undefined && <Text style={styles.rating}>⭐ {item.rating}</Text>}
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#1DB954" />
        <Text style={styles.loadingText}>Loading products...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
      renderItem={renderCard}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    backgroundColor: '#121212',
    flexGrow: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  loadingText: {
    marginTop: 10,
    color: '#eee',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#1E1E1E',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#eee',
    marginBottom: 6,
    textAlign: 'center',
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 6,
  },
  price: {
    fontSize: 16,
    color: '#1DB954',
  },
  time: {
    fontSize: 16,
    color: '#aaa',
  },
  rating: {
    fontSize: 16,
    color: '#FFD700', // gold star color
  },
});

export default GetApiData;
