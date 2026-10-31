import React from 'react';
import { StatusBar } from 'expo-status-bar';
import InterfacesMenuScreen from './screens/InterfacesMenuScreen';

export default function App() {
  const [SelectedScreen, setSelectedScreen] = React.useState(null);

  return (
    <>
      <StatusBar style="dark" />
      {SelectedScreen ? (
        <SelectedScreen />
      ) : (
        <InterfacesMenuScreen
          onSelect={(Screen) => setSelectedScreen(() => Screen)}
        />
      )}
    </>
  );
}
