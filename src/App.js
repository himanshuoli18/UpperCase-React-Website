import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
    const [darkMode,setDarkMode] = useState("light")
    const [buttonText,setButtonText] = useState("Dark Mode")
    const [buttonBackground, setButtonBackground] = useState("dark")
    const [buttonColor, setButtonColor] = useState("secondary")
    
    const toggleMode = () => {
        if(darkMode ==='light'){
            setDarkMode('dark');
            setButtonText("Light Mode");
            setButtonBackground("light");
            document.body.style.backgroundColor = "#495057";
            setButtonColor("light");
        }
        else{
            setDarkMode('light');
            setButtonText("Dark Mode");
            setButtonBackground("dark");
            document.body.style.backgroundColor = "white";
            setButtonColor("dark");
        }
    }
    return (
        <>
            <Navbar title="TextUtils" mode={darkMode} text={buttonText} toggleMode={toggleMode} btn={buttonBackground}/>
            <Alert alert="This website is developed by Himanshu Oli using ReactJS."/>
            <div className="container my-3">
                <TextForm heading="Enter the text to analyze" mode={darkMode} btncolor={buttonColor}/>     
            </div>
            {/* <About mode={darkMode}/> */}
        </>
    );
}

export default App;
