import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const LayoutMain = ({
    children
})=> {
    return (
        <div className="full-page flex flex-col h-full">
            <Header/>
            <main className="flex-auto">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default LayoutMain;