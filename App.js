import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Signup from './src/screens/auth/Signup';
import Splash from './src/screens/auth/Splash';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Signin from './src/screens/auth/Signin';
//import Config from 'react-native-config';
const GOOGLE_WEB_CLIENT_ID =
  '77983369564-pukti6qc9vpunha4e97je9tfgmkfapvr.apps.googleusercontent.com';
const GOOGLE_OAUTH_CLIENT_ID =
  '77983369564-mg254fjn2qu1nmg3a0gi3u2oaf1m50cb.apps.googleusercontent.com';
const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, //Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: GOOGLE_OAUTH_CLIENT_ID, //Config.GOOGLE_OAUTH_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);
  return (
    <SafeAreaView>
      {/*<Splash />
      <Signup />*/}
      <Signin />
    </SafeAreaView>
  );
};

export default App;
