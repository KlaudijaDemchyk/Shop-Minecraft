import { useEffect, useState } from "react";
import { auth } from "../../../../firebase";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useHeaderFacade = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleJoinUsClick = () => {
        navigate("/register");
    };

    const handleUserMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleUserMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate("/");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return {
        user,
        handleJoinUsClick,
        handleUserMenuClick,
        handleUserMenuClose,
        handleLogout,
        anchorEl
    };
};
