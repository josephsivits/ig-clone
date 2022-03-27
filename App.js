import * as React from 'react';
import SignedInStack from "./navigation";
import 'react-native-gesture-handler';

// we don't need to ggive apps any screens anymore, we can instead import stacks


export default function App() {
  return (
    <SignedInStack />
  );
}
