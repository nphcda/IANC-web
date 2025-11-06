import React from 'react'

const Loader = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            {/* logo */}
            <img src="/images/Logo.svg" />
            {/* progress bar */}
            <div className="spinner mt-4">            </div>
        </div>
    )
}

export default Loader