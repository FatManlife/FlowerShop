import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./services/AuthProvider";

function App() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <AuthProvider>
                    <Navbar />
                    <main className="">
                        <Outlet />
                    </main>
                    <Footer />
                </AuthProvider>
            </div>
        </>
    );
}

export default App;
