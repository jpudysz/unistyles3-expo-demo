import { type PropsWithChildren } from 'react'
import { ScrollViewStyleReset } from 'expo-router/html'
import '../unistyles'

export default function Root({ children }: PropsWithChildren) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <ScrollViewStyleReset />
        </head>
        <body>
            {children}
        </body>
        </html>
    )
}
