import React from 'react'
import { StyleSheet, withUnistyles } from 'react-native-unistyles'
import { Pressable, ScrollView, TextInput, View } from 'react-native'
import { Bell, Search } from 'lucide-react-native'
import { Typography } from '@/components/Typography'
import { CategoryBadge } from './CategoryBadge'

type HeaderProps = {
    categories: Array<{ id: string, name: string }>,
    activeCategory: string,
    setActiveCategory(category: string): void
}

const StyledBell = withUnistyles(Bell, theme => ({
    color: theme.colors.onTertiary
}))

const StyledSearch = withUnistyles(Search, theme => ({
    color: theme.colors.onBackground
}))

const StyledSearchInput = withUnistyles(TextInput, theme => ({
    placeholderTextColor: theme.colors.onBackground
}))

export const Header: React.FunctionComponent<HeaderProps> = ({
    categories,
    activeCategory,
    setActiveCategory
}) => {
    return (
        <View style={styles.header}>
            <View style={styles.locationContainer}>
                <View>
                    <Typography color="tertiary">
                        Current Location
                    </Typography>
                    <Typography
                        color="tertiary"
                        size="subtitle"
                        isBold
                    >
                        Poland, Rzeszów
                    </Typography>
                </View>
                <Pressable style={styles.iconContainer}>
                    <StyledBell size={24} />
                </Pressable>
            </View>
            <View style={styles.searchBar}>
                <View style={styles.absoluteContainer}>
                    <StyledSearch size={20}  />
                </View>
                <StyledSearchInput
                    style={styles.searchInput}
                    placeholder="Search destination"
                />
            </View>
            <ScrollView
                horizontal
                style={styles.categories}
                showsHorizontalScrollIndicator={false}
            >
                {categories.map((category) => (
                    <CategoryBadge
                        key={category.id}
                        category={category}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create(theme => ({
    header: {
        paddingHorizontal: theme.gap(2),
        backgroundColor: theme.colors.tertiary
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.gap(2),
    },
    iconContainer: {
        backgroundColor: theme.colors.secondary,
        padding: theme.gap(1),
        borderRadius: theme.gap(2),
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        padding: theme.gap(1),
        borderRadius: theme.gap(1),
        marginBottom: theme.gap(2),
    },
    searchInput: {
        flex: 1,
        paddingVertical: theme.gap(1),
        paddingHorizontal: theme.gap(5),
        fontSize: 16,
        color: theme.colors.secondary,
        borderRadius: theme.gap(1)
    },
    categories: {
        flexDirection: 'row',
        marginBottom: theme.gap(2),
    },
    absoluteContainer: {
        position: 'absolute',
        left: 20
    }
}))
