import React from 'react'
import { Text } from 'react-native'
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles'

interface TypographyProps extends React.PropsWithChildren, UnistylesVariants<typeof styles> {}

export const Typography: React.FunctionComponent<TypographyProps> = ({
    children,
    isBold,
    color,
    size
}) => {
    styles.useVariants({
        isBold,
        color,
        size
    })

    return (
        <Text style={styles.text}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create(theme => ({
    text: {
        variants: {
            size: {
                title: {
                    fontSize: 20
                },
                subtitle: {
                    fontSize: 18
                },
                default: {
                    fontSize: 14
                }
            },
            isBold: {
                true: {
                    fontWeight: 'bold'
                }
            },
            color: {
                tertiary: {
                    color: theme.colors.onTertiary
                },
                default: {
                    color: theme.colors.onBackground
                },
            }
        },
        compoundVariants: [
            {
                isBold: true,
                color: 'tertiary',
                styles: {
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.surfaceDim
                }
            }
        ]
    }
}))
