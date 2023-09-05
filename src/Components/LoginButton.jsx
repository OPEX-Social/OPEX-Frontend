import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();

    return !isAuthenticated && (
        <button
            onClick={loginWithRedirect}
            class="generic-button"
        >Log in</button>
    );
}

export default LoginButton;