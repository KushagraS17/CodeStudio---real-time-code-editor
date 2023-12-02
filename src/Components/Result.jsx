
import { useState, useEffect, useContext } from 'react';

import { DataContext } from '../Context/DataProvider';

import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    height: 41vh;
`

const Result = () => {

    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);

    // we create a variable called srcCode, and we make a HTML document with <html> </html>
    // and as in normal html, you'll display normal HTML in <body> tag
    // CSS in <styles> tag and // JS in <script> tag as we normally in a HTML file!
    // and NOW, inme mujhe apni HTML, CSS & JS dalwaani h joki mere context me padi hui h
    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    // we set a timer, to delay frequent DOM manipulation as it is very expensive 
    // also we add a depenedency of [html, css, js] that indicates that whwnever any changes, u have to run this 
    // this stops the code execution in given miliseconds and i put the variable we created "srcCode", so it delays the SrcCode!
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js])

    return (
        <Container style={html || css || js ? null : {background: '#444857' }}>
            <iframe 
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />    
        </Container>
    )
}

export default Result;