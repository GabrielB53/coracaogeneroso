import { Link } from "react-router-dom";
import './Sidebar.css';


const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="d-flex justify-content-around align-items-center px-3 py-2 border-bottom rounded">
                <span className="fw-bold fst-italic">Heart</span>
            </div>

            <nav className="nav  flex-column">
                <Link className="nav-link" aria-current="page" to={'/home'}>Dashboard</Link>
                <Link className="nav-link" to={'/usuario'}>Usuário</Link>
                
            </nav>
        </div>
    )
}

export default Sidebar