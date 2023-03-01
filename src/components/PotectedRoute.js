
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FullPageLoader from "./fullPageLoader";

function ProtectedRoute({children}) {

    const [pushedState,setPushedState] = useState(false);
    
    const {user,loading} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (pushedState) {
            return;
        }
        if (!user.uid && !loading) {
            setPushedState(true);
            router.push("/login");
        }
    },[router,user,loading,pushedState]);

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