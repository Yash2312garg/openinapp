import {BiSearch,BiBell} from "react-icons/bi"
import { useAuth0 } from "@auth0/auth0-react";



const NavBar =()=>{
    const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();   
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
                {isAuthenticated&& <p>{user.name}</p>}
                    {isAuthenticated?(
                        <button onClick={() => logout({returnTo: window.location.origin })}>Log Out</button>)
                        :(<button onClick={() => loginWithRedirect()}>Log In</button>)}
                </div>
            </div>
        </div>
    )
};

export default NavBar;