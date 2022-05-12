import React from 'react';
import { View } from 'react-native';
import Splash from './src/Onboarding/Splash';
import LoginComponent from './src/Onboarding/Login';
import InsertPhone from './src/Onboarding/InsertPhone';
import Verifikasi from './src/Onboarding/Verif';
import Username from './src/Onboarding/Username';


const App = () => {
    return ( 
    <View>
        <Username />
    </View>
    );

};

export default App;