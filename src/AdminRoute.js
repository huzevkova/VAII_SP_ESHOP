import { useAuth } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user } = useAuth();

    if (user !== "admin") {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default AdminRoute;