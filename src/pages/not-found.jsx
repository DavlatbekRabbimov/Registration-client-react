import React from "react";
export const NotFoundPage = () => {
    return (
        <div className={`flex justify-center items-center w-full h-screen`}>
            <div className={`flex flex-col justify-center items-center text-[50px] text-white z-10`}>
                <h1>404: Page not found</h1>
                <p>Sorry, but the page you are looking for does not exist.</p>
            </div>
        </div>
    );
};
