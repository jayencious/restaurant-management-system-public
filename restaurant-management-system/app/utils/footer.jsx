"use client";

import {
    Footer,
    FooterCopyright,
    FooterLink,
    FooterLinkGroup
} from "flowbite-react";

function FooterComponent() {
    return (
        <Footer container>
            <FooterCopyright href="/" by="Taste of the World™" year={2025}>
             <FooterLinkGroup>
                <FooterLink
                    href="https://github.com/jayencious"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    &copy; Taste Of The World
                </FooterLink>
             </FooterLinkGroup>
            </FooterCopyright>
        </Footer>
    )
}

export default FooterComponent;