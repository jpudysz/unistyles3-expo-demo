import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

SplashScreen
    .preventAutoHideAsync()
    .catch(() => {
        // ignore
    })

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen
                .hideAsync()
                .catch(() => {
                    // ignore
                })
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <React.Fragment>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(home)" />
                <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
        </React.Fragment>
    )
}
