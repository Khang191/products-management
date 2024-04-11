'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import AppHeader from "@/components/app.header";
import AppFooter from "@/components/app.footer";

export default function AdminLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <AppHeader />
            <Container>
                {children}
            </Container>
            <AppFooter />
        </>
    )
}