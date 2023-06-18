import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredgoaltext, setenteredgoaltext] = useState("default value");
  //user's input can be stored and updated within enteredgoaltext using the setenteredgoaltext function.

  const [coursegoals, setgoals] = useState([]);
  //setgoals can be used to hold a list of course goals, which can be updated dynamically through the "setgoals" function.
  //The initial value passed to the useState hook is an empty array ([]) which means "coursegoals" will hold an array of values.
  function goalinputhandler(enteredtext) {
    setenteredgoaltext(enteredtext);
  }

  function addgoalhandler() {
    setgoals([...coursegoals, enteredgoaltext]);
    if (coursegoals.includes(enteredgoaltext)) {
      alert("Goal already exists");
      return;
    }
    // It first creates a new array by using the spread operator ("...") to copy all the values from the current "coursegoals" array, and then appends the value of "enteredgoaltext" to the end of the copied array.
  }
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}>
        <TextInput
          onChangeText={goalinputhandler}
          placeholder="your course goal !! "
          style={{
            borderColor: "black",
            borderWidth: 2,
            width: "80%",
            marginRight: 8,
            padding: 6,
            alignContent: "center",
          }}
        />
        <Button title="add goal" onPress={addgoalhandler} />
      </View>

      <View style={styles.goalcontainer}>
        {coursegoals.map((goal) => (
          <Text key={goal}>{goal}</Text>
          //This code uses the map function to iterate over the courseGoals array and render a <text> component for each goal.
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flex: 1,
  },
  goalcontainer: {
    flex: 4,
  },
});
