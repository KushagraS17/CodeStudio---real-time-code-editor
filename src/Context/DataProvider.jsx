import { createContext, useState } from 'react';
// video -> @ 50:00
// as we have imported createContext, so now we give it a name(initialise it) to use it
// it takes a defualt value -> ()

// i write export cuz this (what we named as Datacontext) needs to be exported to other components so that they can use it
export const DataContext = createContext();

// context component me se context ko hi return karna hota h
// THIS IS THE COMPONENT->  
const DataProvider = ({ children}) => {

    // ill be making 3 following states
    const [html, setHtml] = useState('');
    const [js, setJs] = useState('');
    const [css, setCss] = useState('');


    //jo bhi context hota h uspr ek provider attribute bhi humko milta hai
    // provider ka kaam -> agar koi value yahapr store karwayi hui h to usko export karta h
    // export karne ke liye provider appko ek value prop provide karta h
    // that value is in the form of an object
// to jo meri states ki value h and uske functions h 
// usko mujhe yaha se export karna h taaki unko baaki omponents me import kar saku
    return (
        <DataContext.Provider value = {{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
            {children}
            {/* this is us forwarding 'children', else it'll show error  */}
        </DataContext.Provider>
    )
}

export default DataProvider;

// to ikso export toh kardia but jin bhi components mein inko
// import karke use karna h un, (ye jo states h unko use karna h na doosre components me)
// to un components ko aapko is context se WRAP KARNA HOTA H

// as we know our component is App.JSX (as in mere saare components wahin se route ho rahe h, Home component se)
// => SO IF I WRAP MY HOME COMPONENT like == <dataProvider> <Home/> </dataProvider>
// to usse mere home compoents se jitne bhi compo route ho rahe h un sabke pas access hoga dataProvider ki states ka 
// so now <dataProvider> is component and uske beech waala(<home>) is called children (whatev is b/w opening and closing tag)
// so as we're passing( returning) a children! (in app.js) 
// AND WHENEVER WE PASS A CHILDREN AND DONT FWD IT, THEN IT'LL GIVE AN ERROR!!!

// sp like props, we alos have "children"