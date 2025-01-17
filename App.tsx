
import React , {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
 
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [randombg, setRandombg] = useState("#ffffff");
  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++)
    {
      color += hexRange[Math.floor(Math.random()*16)]
    }
    setRandombg(color); //color is passed to a constant in random bg
   }
  

  return (
    <>
      <StatusBar backgroundColor={randombg} />
      <View style={[design.container , {backgroundColor:randombg}]}>
        <TouchableOpacity onPress = {generateColor}>
          <View style={design.actionbtn}>
            <Text style={design.actionbtntxt}>Change Mode</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
   
  );
}

const design = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F0DF87',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  actionbtn:
  {
    backgroundColor: '#000000',
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
   shadowColor: '#ffffff',
    

  },
  actionbtntxt: {
    fontSize: 20,
    fontWeight: "condensed",
    color: '#ffffff',
    textTransform: "uppercase"

  },
 
});

export default App;
