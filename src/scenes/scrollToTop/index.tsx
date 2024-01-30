import React from "react";
import Image from '@/assets/top.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function ScroolToTop() {
    return (
        <button onClick={() => { }} id="topButton" title="Go to top" >
            <AnchorLink href="#top">
                < img src={Image} alt="" style={{ width: '100px', height: '100px' }} />
            </AnchorLink>
        </button >
    );
}