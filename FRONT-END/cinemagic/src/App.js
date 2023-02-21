import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";


function App() {
    return (

        <div className="Data">
            <Header/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;