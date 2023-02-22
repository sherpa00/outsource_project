import { ProgressBar } from "react-loader-spinner";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FullPageLoader from "./fullPageLoader";

function ProtectedRoute({children}) {
    
    const {user,loading} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user.uid && !loading) {
            router.push("/login");
        }
    },[router,user,loading]);

    if (loading || !user.uid) {
        return <FullPageLoader />
    }

    return (
        <div>
            {
                user ? children : null
            }
        </div>
    )
}

export default ProtectedRoute;