import { Routes, Route } from "react-router-dom";
import './globals.css'
import SigninForm from './_auth/form/SigninForm';
import SignupForm from './_auth/form/SignupForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster"


const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                <Route>
                    {/* public routes */}
                    <Route element={<AuthLayout />}>
                        <Route path="/sign-in" element={<SigninForm />} />
                        <Route path="/sign-up" element={<SignupForm />} />
                    </Route>



                    {/* private routes */}
                    <Route element={<RootLayout />}>
                        <Route index element={<Home />} />
                    </Route>

                </Route>
            </Routes>
            <Toaster />
        </main>
    )
}

export default App
