<<<<<<< HEAD
import React, { useState } from 'react';
import { updateFeedback } from '../lib/appwrite'; // Import the function
import { StyleSheet, View, Text, Textarea, Button } from 'react-native'; // Using React Native components

const UpdateFeedbackForm = ({ feedbackId, currentRating, currentComment }) => {
  const [rating, setRating] = useState(currentRating);
  const [comment, setComment] = useState(currentComment);
=======
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { updateFeedback, fetchFeedbackById } from '../lib/appwrite'; // Import necessary functions
import { useNavigation, useRoute } from '@react-navigation/native'; // Import navigation hooks

const UpdateFeedback = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Access the route object
  const { feedbackId } = route.params; // Get feedbackId from route params
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const feedback = await fetchFeedbackById(feedbackId); // Fetch feedback by ID
        setRating(feedback.rating);
        setComment(feedback.comment);
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Unable to fetch feedback details.');
      }
    };

    fetchFeedback();
  }, [feedbackId]);
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7

  const handleUpdate = async () => {
    try {
      await updateFeedback(feedbackId, { rating, comment });
<<<<<<< HEAD
      alert('Feedback updated successfully');
    } catch (error) {
      console.error(error);
      alert('Error updating feedback');
=======
      Alert.alert('Success', 'Feedback updated successfully');
      navigation.goBack(); // Navigate back after successful update
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Error updating feedback');
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Rate:</Text>
<<<<<<< HEAD
      {/* Simple Star Rating */}
      <View style={styles.starContainer}>
        {[...Array(5)].map((_, index) => (
          <Text
            key={index}
            style={[styles.star, index + 1 <= rating ? styles.filledStar : styles.emptyStar]}
            onPress={() => setRating(index + 1)}
          >
            ★
          </Text>
=======
      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
            <Text style={styles.star}>{index + 1 <= rating ? '★' : '☆'}</Text>
          </TouchableOpacity>
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
        ))}
      </View>

      <Text style={styles.label}>Comment:</Text>
<<<<<<< HEAD
      <Textarea
        style={styles.textarea}
        value={comment}
        onChangeText={(text) => setComment(text)}
        placeholder="Write your comment here..."
        numberOfLines={4} // Set number of lines for textarea
      />

      <Button title="Update" onPress={handleUpdate} />
=======
      <TextInput
        style={styles.textarea}
        value={comment}
        onChangeText={setComment}
        placeholder="Write your comment here..."
        multiline
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
    </View>
  );
};

<<<<<<< HEAD
// Styles for the UpdateFeedbackForm component
=======
// Styles for the UpdateFeedback component
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
<<<<<<< HEAD
=======
    flex: 1,
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
<<<<<<< HEAD
  starContainer: {
=======
  ratingContainer: {
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
    flexDirection: 'row',
    marginBottom: 10,
  },
  star: {
    fontSize: 30,
    marginRight: 5,
    cursor: 'pointer', // Pointer for better UX (if not using mobile)
  },
<<<<<<< HEAD
  filledStar: {
    color: '#FFD700', // Gold color for filled star
  },
  emptyStar: {
    color: '#ccc', // Gray color for empty star
  },
=======
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    minHeight: 100,
  },
<<<<<<< HEAD
});

export default UpdateFeedbackForm;
=======
  submitButton: {
    backgroundColor: '#6200EA',
    borderRadius: 5,
    alignItems: 'center',
    padding: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UpdateFeedback;
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
