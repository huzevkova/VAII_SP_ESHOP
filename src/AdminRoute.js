import { useAuth } from './AuthProvider'; // Adjust the path as necessary
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (user !== "admin") {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default AdminRoute;