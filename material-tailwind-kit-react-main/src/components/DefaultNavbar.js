import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import NavItem from "@material-tailwind/react/NavItem";
import Image from "@material-tailwind/react/Image";
import InstanceLogo from 'assets/img/INSTANCE.png';
import InstanceLogo2 from 'assets/img/INSTANCE2.png';
import Chile from 'assets/img/chile.png';
import Colombia from 'assets/img/colombia.png';
import Peru from 'assets/img/peru.png';
import './../assets/styles/tailwind.css';


export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (

        <Navbar style={{ color: 'black'}} navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="."
                        target="_blank"
                        rel="noreferrer"
                    >
                        <NavbarBrand>
                        <Image
                            className="w-8/12"
                            src={InstanceLogo}
                        />
                        </NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            <NavLink
                                href="https://material-tailwind.com/documentation/quick-start?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                {/*<Icon name="description" size="2xl" />*/}
                                &nbsp;¿Quienes somos?
                            </NavLink>
                            <NavLink
                                href="https://material-tailwind.com/components?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                &nbsp;Industrias
                            </NavLink>
                            <NavLink
                                href="https://material-tailwind.com/components?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                &nbsp;Servicios
                            </NavLink>
                            <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <span className="ml-2">
                                                Servicios
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Landing
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            Profile
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/login">
                                        <DropdownItem color="lightBlue">
                                            Login
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/register">
                                        <DropdownItem color="lightBlue">
                                            Register
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
                            <NavLink
                                href="https://github.com/creativetimofficial/material-tailwind?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                
                                &nbsp;Blog
                            </NavLink>
                            <NavLink
                                href="https://github.com/creativetimofficial/material-tailwind/issues?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                Documentacion
                            </NavLink>
                            <NavLink
                                href="https://github.com/creativetimofficial/material-tailwind/issues?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                Contacto
                            </NavLink>
                            <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <span className="ml-2">
                                                <Image
                                                    className="w-4/12"
                                                    src={Chile}
                                                />
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            <Image
                                                    className="w-4/12"
                                                    src={Colombia}
                                            />
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            <Image
                                                    className="w-4/12"
                                                    src={Peru}
                                            />
                                        </DropdownItem>
                                    </Link>
                                    
                                </Dropdown>
                            </div>
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
                                </Navbar>
    );
}
