import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import ThemeWrapper from './themes/Themewrapper';
import ThemeProvider from './themes';
import Drawer from './navigation/Drawer';

function App() {
  return (
    <RootSiblingParent>
      <ThemeProvider>
        <ThemeWrapper>
          <NavigationContainer>
<Drawer/>
          </NavigationContainer>
        </ThemeWrapper>
      </ThemeProvider>
    </RootSiblingParent>
  );
}

export default App;