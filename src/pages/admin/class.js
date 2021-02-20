import { React } from 'react';
import SidebarAdmin from '../../components/admin/SidebarAdmin';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import Footer from '../../components/Footer';
import ContentClass from '../../components/admin/ContainerClass';
import '../../App.css';
import * as FaIcons from 'react-icons/fa';


function adminPage() {

    return (
        <div className="Modul">
            <div id="wrapper">
                <SidebarAdmin />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavbarAdmin />
                        <div className="container-fluid">
                            <ContentClass />
                        </div>
                    </div>
                        <Footer />
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up">
                    <FaIcons.FaAngleUp />
                </i>
            </a>
        </div>
    );
}


export default adminPage;

