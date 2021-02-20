import { React } from 'react';
import SidebarAdmin from '../../components/admin/SidebarAdmin';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import Footer from '../../components/Footer';
import ContentTeacher from '../../components/admin/ContainerTeacher';
import '../../App.css';
import * as FaIcons from 'react-icons/fa';


function teacherPage() {

    return (
        <div className="Modul">
            <div id="wrapper">
                <SidebarAdmin />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavbarAdmin />
                        <div className="container-fluid">
                            <ContentTeacher />
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


export default teacherPage;

