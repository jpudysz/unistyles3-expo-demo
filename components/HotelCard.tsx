import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'
import { Star } from 'lucide-react-native'
import { Typography } from '@/components/Typography'

type HotelCardProps = {
    hotel: {
        id: string,
        name: string,
        location: string,
        rating: number,
        image: string
    }
}

export const HotelCard: React.FunctionComponent<HotelCardProps> = ({
    hotel
}) => {
    return (
        <Pressable
            key={hotel.id}
            style={styles.hotelCard}
        >
            <Image
                source={{ uri: hotel.image }}
                style={styles.hotelImage}
            />
            <View style={styles.hotelInfo}>
                <Typography
                    size="subtitle"
                    isBold
                >
                    {hotel.name}
                </Typography>
                <Typography>
                    {hotel.location}
                </Typography>
                <View style={styles.hotelRating}>
                    <Star size={16} />
                    <Typography>
                        {hotel.rating}
                    </Typography>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create(theme => ({
    hotelCard: {
        backgroundColor: theme.colors.surfaceContainer,
        borderRadius: theme.gap(2),
        marginBottom: theme.gap(2),
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: theme.colors.onSecondary
    },
    hotelImage: {
        width: '100%',
        height: 200
    },
    hotelInfo: {
        padding: theme.gap(2),
        gap: theme.gap(1)
    },
    hotelRating: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.gap(1)
    }
}))
