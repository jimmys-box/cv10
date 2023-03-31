import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Menu.module.css';
import Link from 'next/link';
import MenuItem from '../composants/menu/MenuItem';
import { BiHome } from 'react-icons/bi';
import { GiIdCard } from 'react-icons/gi';
import { BsPeople, BsCalendar3, BsHouseGear } from 'react-icons/bs';
import { GrUserSettings, GrUserAdd } from 'react-icons/gr';
import { useLocalStorage } from '../functions/connexion';

export default function SideMenuCollaborateur() {
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();

  
    useEffect(() => {
        setIsOpen(false);
    }, [router.asPath]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [, setUser] = useLocalStorage('userPseudo', '');
  const [, setRole] = useLocalStorage('userRole', '');
  const [, setEquipe] = useLocalStorage('userEquipe', '');
  const [, setLoggedIn] = useLocalStorage('logged', '');

  const handleLogout = () => {
    setUser('');
    setRole('');
    setEquipe('');
    setLoggedIn(false);
    window.location.replace('/login');
  };

    return (
        <div>
            <div className={styles.menuOpenBtn} onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
            <nav className={`side-menu ${isOpen ? 'open' : ''}`}>
                <Link href="/"> <img style={{ width: '80%', margin: '5px auto', padding: '5%' }} src="/logo.png" /></Link>
                <div className={styles.menuCloseBtn} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z" />
                    </svg>
                </div>
                <ul>

                    {/* ONGLET Accueil */}
                    <li>
                        <Link href="/">
                            <div className={styles.desktopMenuLinks}>
                                <div className={router.pathname === "/" ? "activeMenu" : ""}>
                                    <BiHome size="36" />
                                    <p>Accueil</p>
                                </div>
                            </div>

                        </Link>
                    </li>

                    {/* ONGLET planning */}
                    <Link href="/planning">
                        <div className={styles.desktopMenuLinks}>
                            <div className={router.pathname === "/planning" ? "activeMenu" : ""}>
                                <BsCalendar3 size="36" />
                                <p>Planning</p>
                            </div>
                        </div>
                    </Link>

                </ul>
                <div style={{ margin: '0px auto', flexDirection: 'column' }}>
                <button onClick={handleLogout} className="btn ml-3" data-toggle="tooltip" data-placement="bottom" title="déconnexion" style={{ margin: 'auto' }}>
        
                    logout
                </button>
                <div>
                    <p style={{ marginBottom: '0px', color: '#ffd633', textAlign:'center' }}>KeMieTech®</p>
                </div>
                </div>
            </nav>
        </div>
    );
}