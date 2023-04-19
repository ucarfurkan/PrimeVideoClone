import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HiUserCircle, HiSearch, HiChevronDown, HiOutlineHome } from "react-icons/hi"
import { BiMoviePlay, BiCameraMovie, BiGridAlt, BiWindows } from "react-icons/bi"

function _Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdownForMobile, setShowDropdownForMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseEnter = () => {
        if (!isMobile) {
            setShowDropdown(true);
        }
    }

    const handleMouseLeave = () => {
        setShowDropdown(false);
    }

    const handleClick = () => {
        if(isMobile){
            setShowDropdownForMobile((prev) => !prev);
        }
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <Navbar.Text>Menu <HiChevronDown /></Navbar.Text>
                </Navbar.Toggle>
                <Navbar.Brand href="..">prime video</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" id="active">
                            {isMobile && <HiOutlineHome />} Home
                        </Nav.Link>
                        <Nav.Link>
                            {isMobile && <BiMoviePlay />} Movies
                        </Nav.Link>
                        <Nav.Link>
                            {isMobile && <BiCameraMovie />} TV Shows
                        </Nav.Link>
                        <NavDropdown
                            title={isMobile ? <>{<BiGridAlt />} Categories</> : 'Categories'}
                            id="categories-dropdown"
                            show={isMobile ?  showDropdownForMobile : showDropdown}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={handleClick}
                        >
                            <NavDropdown.Item href="#">
                                Action & Adventure
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Anime
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Comedy
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Documentary
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Fantasy
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            {isMobile && <BiWindows />} My Stuff
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="search-container">
                    <Nav.Link>
                        <HiSearch className='search-icon' />
                    </Nav.Link>
                </Nav>
                <Nav className="user-container">
                    <Nav.Link>
                        <span className='name-of-user'>Furkan Uçar</span>
                        <HiUserCircle fill='white' className='user-icon' />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default _Navbar;