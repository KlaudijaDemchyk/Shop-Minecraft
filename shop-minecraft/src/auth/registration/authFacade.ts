import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmail, signInWithEmail } from "../../firebase";

export const useAuthFacade = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await registerWithEmail(email, password);
            navigate('/login');
        } catch (error) {
            const errorMessage = (error as { message?: string }).message || "An unknown error occurred";
            console.error(`Error during registration: ${errorMessage}`);
            setErrorMessage(errorMessage);
        }
    };

    const handleLogin = async () => {
        try {
            await signInWithEmail(email, password);
            navigate('/'); 
        } catch (error) {
            const errorMessage = (error as { message?: string }).message || "An unknown error occurred";
            console.error(`Error during email sign-in: ${errorMessage}`);
            setErrorMessage(errorMessage);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        errorMessage,
        handleRegister,
        handleLogin
    };
};
