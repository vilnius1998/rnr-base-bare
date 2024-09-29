import { supabase } from '@/utils/supabase'
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import UserCard from '@/components/userCard';
import { Link } from 'expo-router';
import { useSession } from '@/context';

async function getUsers() {
  const { data, error, status } = await supabase
    .from('profiles')
    .select(`*`)
  console.log(data, error, status)
}

export default function HomeScreen() {
  const { signOut } = useSession();
  getUsers();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
      <UserCard
        avatar="https://www.github.com/a0m0rajab.png"
        name="a0m0rajab"
        role="Software Engineer"
        id="1"
      />
      <UserCard
        avatar="https://www.github.com/a0m0rajab.png"
        name="a0m0rajab"
        role="Software Engineer"
        id="2"
      />
      <View >
        <Link href="profile" asChild>
          <TouchableOpacity>
            <Card className='w-full max-w-sm'>
              <CardHeader>
                <CardTitle>This is an example Card</CardTitle>
                <CardDescription>Click on me to go to profile page</CardDescription>
              </CardHeader>
              <CardContent>
                <Text>Card Content</Text>
              </CardContent>
              <CardFooter>
                <Text>Card Footer</Text>
              </CardFooter>
            </Card>
          </TouchableOpacity>
        </Link>
      </View>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}>
        Sign Out
      </Text>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
