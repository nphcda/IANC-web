import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            element={
                auth ? (
                    <Navigate to="/" replace />
                ) : (
                    <Element />
                )
            }
        />
    );
};

export default ProtectedRoute;
