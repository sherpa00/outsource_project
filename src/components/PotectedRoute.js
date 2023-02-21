const { useAuth } = require("context/AuthContext");
const { useRouter } = require("next/router");
const { useEffect } = require("react");

function ProtectedRoute({children}) {
    
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user.uid) {
            router.push("/login");
        }
    },[router,user]);

    return (
        <div>
            {
                user ?   children : null
            }
        </div>
    )
}

export default ProtectedRoute;