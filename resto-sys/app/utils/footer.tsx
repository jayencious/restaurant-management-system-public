"use client";

import {
    Footer,
    FooterCopyright,
    FooterLink,
    FooterLinkGroup
} from "flowbite-react";

export function FooterComponent() {
    return (
        <Footer container>
            <FooterCopyright href="/" by="Taste of the World™" year={2025}>
             <FooterLinkGroup>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Terms and Conditions</FooterLink>
             </FooterLinkGroup>
            </FooterCopyright>
        </Footer>
    )
}