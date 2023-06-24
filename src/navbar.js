import {BiSearch,BiBell,BiUserCircle} from "react-icons/bi"

const NavBar =()=>{
    return (
        <div className="Navbar-container">
            <div className="Nav-Logo">
                Dashboard
            </div>
            <div className="Nav-elements">
                <div className="Search">
                
                    <input type="text" name="search" placeholder="Search..."/>
                    <button><BiSearch className="icon" /></button>
                    
                    
                </div>
                <div className="notification">
                    <BiBell/>

                </div>
                <div className="profile-picture">
                <BiUserCircle/>

                </div>
            </div>

        </div>
    )

};

export default NavBar;