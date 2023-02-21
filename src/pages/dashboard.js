import ProtectedRoute from "@/components/PotectedRoute";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function Dashboard() {

    const {logOut} = useAuth();
    const router = useRouter();

    const hanldeLogOut = async () => {
        try {
            await logOut();
            router.push("/login");
        } catch (err) {
            console.log(err.message);
            toast.error("Some Error Occured ! Try Again",{hideProgressBar: true,autoClose: 1500})
        }
    }

    return (
        <ProtectedRoute>
            <div id="dashboard_container">
                <h2>
                    Welcome back admin
                </h2>
                <button onClick={hanldeLogOut}>
                    logout
                </button>
            </div>
        </ProtectedRoute>
    )
}

export default Dashboard;