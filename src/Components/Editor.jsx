// made to reuse the code (so wont have to write again and again)
import { useState } from 'react';
import { Box, styled } from '@mui/material';
import  CloseFullscreenIcon  from '@mui/icons-material/CloseFullscreen';
// even if its a icon, everything we import from M.UI is a component!

import { Controlled as ControlledEditor } from 'react-codemirror2';
// this import is done from code-mirror2 which enables the recognizing of the HTML,CSS,JS in the editor section

// in all these editors we actually write XML tag etc etc so the bottom 5 are imported to detect XML, JS, CSS ...
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`
// this styles function is smth we get from MUI and thru it we can style that MUI component using CSS
const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px; 
`
const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 700;
`
// using props destructuring concept we directly write Heading (from code.jsx)
const Editor = ({ heading, icon, color, value, onChange}) => {

    // this state is made to handle the state of the toggle button, intially set to TRUE
    const [open, setOpen] = useState(true);

    // inline arrow function, all those values that change are meant to be passed here
    const handleChange = (editor, data, value) => {
        onChange(value);
    }


    return (
        <Container style={open ? null : {flexGrow: 0} }>
{/* this container was a MUI 'box' and later styled so that we could expand 
the three editor window after plaing them side by side */}

            <Header>
                <Heading>
                    <Box
                        component = "span"
                        style={{
                            background: color ,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            color: '#000',
                            paddingBottom: 2
                        }}
                    >{icon}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    fontSize="small"
                    style={{ alignSelf: 'center'}}
                    onClick={() => setOpen(prevState => !prevState)} 
                />

            </Header>

            <ControlledEditor
                className = 'controlled-editor'
                value = {value}
                onBeforeChange={handleChange}
                options = {{
                    theme: 'material',
                    lineNumbers: true
                }}
            />

        </Container>      
    )
}

export default Editor;