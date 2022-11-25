import React from "react";
import SearchNft from '../uiElement/SearchNft'
const Header = ()=> {
    return (
        <header>
            <div className="container m-auto">
                
                <div className="flex items-center justify-between">
                    <div className="flex-1">Logo</div>
                    <div className="flex-1">
                        <SearchNft />
                    </div>
                    <div></div>
                </div>
            </div>
        </header>
    )
}

export default Header;