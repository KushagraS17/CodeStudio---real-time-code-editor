import { useContext } from 'react';
// this is section where the 3 editor cards/windows are present
import Editor from './Editor';
// as we want all three editor windows side by side, so we wrap
// all three <editor> tags in a <Box> 
// and import Box from MUI and style it by doing -> display : flex
import { Box, styled } from '@mui/material';

// we exported our created context from DataProvider.jsx and importing it here to use with this component, those states declared there
import { DataContext } from '../Context/DataProvider';


//box is now called container
const Container = styled(Box)` 
    display : flex;
    background-color: #060606;
    height: 50vh;
`

const Code = () => {

    const {html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return(
        <Container>
            <Editor
                // language="xml"
                heading="HTML"
                icon="/"
                color='#FF3C41'
                value={html}
                onChange={setHtml}
            />
            <Editor
                //language="css"
                heading="CSS"
                value={css}
                onChange={setCss}
                icon="*"
                color='#0EBEFF'
            />
            <Editor
                //language="javascript"
                heading="JS"
                value={js}
                onChange={setJs}
                icon="()"
                color='#FCD000'

            />
        </Container>
    )
}

export default Code;