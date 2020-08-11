import React from 'react';

export const LoginScreen = () => {
    return (
        <div>
            <h3>Login</h3>
            <form>
                <input 
                    type="type"
                    placeholder="Email..."
                    name="email"
                />
                <input 
                    type="password"
                    placeholder="Password..."
                    name="password"
                />
                <button
                    type="submit"
                >
                    Login
                </button>

                <hr/>
                <p>google</p>
            </form>
        </div>
    );
};
