import React, { useState } from 'react'
import { View, ScrollView, Pressable } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'
import { Header, HotelCard } from '@/components'
import { Typography } from '@/components/Typography'

const categories = [
    { id: 'place', name: 'Place' },
    { id: 'hotel', name: 'Hotel' },
    { id: 'flight', name: 'Flight' },
    { id: 'car', name: 'Car' },
]

const popularHotels = [
    {
        id: '1',
        name: 'Bali Motel Vung Tau',
        location: 'Indonesia',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800',
    },
    {
        id: '2',
        name: 'Luxury Resort & Spa',
        location: 'Maldives',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    }
]

export default function HotelsScreen() {
    const [activeCategory, setActiveCategory] = useState('place')

    return (
        <ScrollView style={styles.container}>
            <Header
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <View style={styles.hotelsContainer}>
                <View style={styles.heading}>
                    <Typography
                        isBold
                        size="title"
                    >
                        Popular Hotels
                    </Typography>
                    <Pressable>
                        <Typography>
                            See all
                        </Typography>
                    </Pressable>
                </View>
                {popularHotels.map((hotel) => (
                    <HotelCard
                        key={hotel.id}
                        hotel={hotel}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create((theme, rt) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        // move keyboard to the bottom of the screen
        // to push the content based on IME insets
        transform: [
            {
                translateY: rt.insets.ime * -1
            }
        ]
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    hotelsContainer: {
        padding: theme.gap(2),
        gap: theme.gap(2),
        paddingHorizontal: Math.max(rt.insets.left, rt.insets.right, theme.gap(2))
    }
}))
