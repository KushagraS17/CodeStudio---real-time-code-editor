
import { AppBar, Toolbar, styled } from "@mui/material"

// this is styled function(as imported from MUI), used to edit the AppBar's CSS properties and save it under name container
const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    const logo = 'https://icon-library.com/images/codepen-icon/codepen-icon-26.jpg';
    return (
        // from fix the position is changed to static - (by default it is fixed and M.UI gives us this option)
         <Container position = "static"> 
            <Toolbar>
                <img src={logo} style ={{ width: 40}} />
            </Toolbar>
        </Container>
    )
}

export default Header;