import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';  // Import necessary components
import { fetchAllFeedbacks, deleteFeedback, updateFeedback } from '../lib/appwrite';  // Assuming these functions are defined
import { useNavigation } from '@react-navigation/native'; // For navigation
=======
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'; 
import { fetchAllFeedbacks } from '../lib/appwrite'; 
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
import { router } from 'expo-router';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
<<<<<<< HEAD
  const navigation = useNavigation();  // Initialize navigation
=======
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feedbackList = await fetchAllFeedbacks();
<<<<<<< HEAD
        console.log('Feedback List:', feedbackList);
=======
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
        setFeedbacks(feedbackList);
      } catch (error) {
        console.error(error);
        alert('Error fetching feedbacks');
      }
    };

    fetchData();
  }, []);

<<<<<<< HEAD
  // Handle delete feedback
  const handleDeleteFeedback = async (feedbackId) => {
    try {
      await deleteFeedback(feedbackId);  // Call delete function
      setFeedbacks(feedbacks.filter(feedback => feedback.$id !== feedbackId)); // Update state
      alert('Feedback deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Error deleting feedback');
    }
  };


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Feedbacks Section */}
=======
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 16 }}>All Feedbacks</Text>
      <ScrollView>
        {feedbacks.map((feedback) => (
          <View key={feedback.$id} style={styles.feedbackCard}>
            <Text style={styles.ratingText}>Name: {feedback.userId} </Text>
            <Text style={styles.ratingText}>Rating: {feedback.rating} ★</Text>
            <Text style={styles.commentText}>Comment: {feedback.comment}</Text>
            <Text style={styles.dateText}>Date: {new Date(feedback.date).toLocaleDateString()}</Text>
<<<<<<< HEAD
            <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => {
                console.log('Navigating to updateFeedback with ID:', feedback.$id);
                router.push(`/updateFeedback/${feedback.$id}`);
              }}
            >
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteFeedback(feedback.$id)} // Call delete function
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
=======
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
          </View>
        ))}
      </ScrollView>

<<<<<<< HEAD
      {/* Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => router.push('/giveFeedback')} // Navigate to the form screen
=======
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => router.push('/giveFeedback')}
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
      >
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

<<<<<<< HEAD
// Styles for the component
=======
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
const styles = StyleSheet.create({
  feedbackCard: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
<<<<<<< HEAD
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
=======
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
  },
  ratingText: {
    fontSize: 18,
    fontWeight: '600',
  },
  commentText: {
    fontSize: 16,
  },
  dateText: {
    fontSize: 14,
    color: 'gray',
  },
<<<<<<< HEAD
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: '#4CAF50', // Green
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#F44336', // Red
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
=======
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
<<<<<<< HEAD
    backgroundColor: '#6200EA',  // Purple color or customize to your liking
    borderRadius: 30,  // Makes the button circular
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,  // Distance from the bottom of the screen
    right: 30,   // Distance from the right edge of the screen
    elevation: 8,  // Add some shadow for Android
=======
    backgroundColor: '#6200EA',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    right: 30,
    elevation: 8,
>>>>>>> 3235aac97e02a3afd228100f43271c13b0d04aa7
  },
  plusText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default FeedbackList;
