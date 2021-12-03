import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import AppBar from "./components/AppBar";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home";

const App = () => {
    return (
        <BrowserRouter>
            <AppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App