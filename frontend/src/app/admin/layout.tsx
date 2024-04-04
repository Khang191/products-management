'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import AppHeader from "@/components/app.header";
import AppFooter from "@/components/app.footer";

export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <html lang="en">
        <body>
        <AppHeader />
        <Container>
            {children}
        </Container>
        <AppFooter />
        </body>
        </html>
    )
}