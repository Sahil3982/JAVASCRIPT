import { StyleSheet, Image, Platform, Text, TextInput, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
        />
      }>
        <TextInput style={{ backgroundColor:'#fff',color:'#000' }}></TextInput>

        {/* <Button style={{ color:'#371' }}>Add</Button> */}
        <Text style={{ color:'#fff' }}>hiii</Text>
    
    </ParallaxScrollView>
  );
}

