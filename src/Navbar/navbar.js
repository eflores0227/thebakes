import React from "react";
import styled from "styled-components";
import { BakesPink } from "../Styles/colors";
import {Title} from "../Styles/title";


const NavbarStyled = styled.div`
    background-color: ${BakesPink};
    padding: 10px;
`

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px brown;
`

export function Navbar() {

    return <NavbarStyled>
        <Logo>
            The Bakes 🌾
        </Logo>
    </NavbarStyled>
}