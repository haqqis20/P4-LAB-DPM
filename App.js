import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ImageBackground } from 'react-native';

const FutsalScoreApp = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const teamA = "HOME";
  const teamB = "AWAY";

  const incrementScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) Alert.alert(`${teamA} menang!`);
    } else if (team === 'B') {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) Alert.alert(`${teamB} menang!`);
    }
  };

  const decrementScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <ImageBackground
      source={require('./assets/gambar1.webp')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>PENGHITUNG SCORE FUTSAL</Text>
        <View style={styles.scoreContainer}>
          <View style={styles.teamContainer}>
            <Text style={styles.teamName}>{teamA}</Text>
            <Text style={styles.score}>{scoreA}</Text>
            <View style={styles.buttonRow}>
              <Button title="+" onPress={() => incrementScore('A')} />
              <Button title="-" onPress={() => decrementScore('A')} />
            </View>
          </View>

          <View style={styles.teamContainer}>
            <Text style={styles.teamName}>{teamB}</Text>
            <Text style={styles.score}>{scoreB}</Text>
            <View style={styles.buttonRow}>
              <Button title="+" onPress={() => incrementScore('B')} />
              <Button title="-" onPress={() => decrementScore('B')} />
            </View>
          </View>
        </View>
        <Button title="Reset Pertandingan" onPress={resetScores} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay semi-transparan
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});

export default FutsalScoreApp;
