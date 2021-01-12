import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
import * as SiIcons from 'react-icons/si';
import * as GoIcons from 'react-icons/go';
import '../Sidebar.css';

function SidebarAdmin() {
    return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                 
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
        <div className="sidebar-brand-icon">
          <i className="fas fa-school">
              <FaIcons.FaSchool />
          </i>
        </div>
        <div className="sidebar-brand-text mx-3">
            <img src="./logo.png" style={{ width: 100, height: 100 }} />
        </div>
      </a>

      
      <hr className="sidebar-divider my-0" />

      
      <li className="nav-item active">
        <a className="nav-link" href="">
          <i className="fas fa-fw">
              <FaIcons.FaTachometerAlt />
          </i>
          <span>Tableau de Bord</span></a>
      </li>

      
      <hr className="sidebar-divider" />

      
      <div className="sidebar-heading">
        Admin
      </div>

      
      <li className="nav-item">
        <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i className="fas fa-fw">
            <FaIcons.FaUserCog />
          </i>
          <span>Administration</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Action:</h6>
            <a className="collapse-item" href="" data-toggle="modal" data-target="#exampleModalCenter2">Ajouter</a>
          </div>
        </div>
      </li>

      
      <li className="nav-item">
        <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseProfesseurs" aria-expanded="true" aria-controls="collapseProfesseurs">
          <i className="fas fa-fw">
            <ImIcons.ImUserTie />
          </i>
          <span>Professeurs</span>
        </a>
        <div id="collapseProfesseurs" className="collapse" aria-labelledby="headingProfesseurs" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Action:</h6>
            <a className="collapse-item" href="" data-toggle="modal" data-target="#exampleModalCenter">Ajouter</a>
            <a className="collapse-item" href="" data-toggle="modal" data-target="#exampleModalCenter9">Ajouter Prof-Mod-classe</a>
          </div>
        </div>
      </li>

      
      <hr className="sidebar-divider" />

      
      <div className="sidebar-heading">
        Addons
      </div>

      
      <li className="nav-item">
        <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseEtudiants" aria-expanded="true" aria-controls="collapseEtudiants">
          <i className="fas fa-fw">
            <FaIcons.FaUserGraduate />
          </i>
          <span>Etudiants</span>
        </a>
        <div id="collapseEtudiants" className="collapse" aria-labelledby="headingEtudiants" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Action:</h6>
            <a className="collapse-item" href="" data-toggle="modal" data-target="#exampleModalCenter1">Ajouter</a>
          </div>
        </div>
      </li>

      
      <li className="nav-item">
        <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseclasse" aria-expanded="true" aria-controls="collapseclasse">
          <i className="fas fa-fw">
            <SiIcons.SiGoogleclassroom />
          </i>
          <span>classes</span></a>
          <div id="collapseclasse" className="collapse" aria-labelledby="headingclass" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Action:</h6>
              <a className="collapse-item" href="">Ajouter</a>
            </div>
          </div>
      </li>

      
      <li className="nav-item" id="show">
        <a className="nav-link" href="">
          <i className="fas fa-fw">
            <GoIcons.GoFileSubmodule />
          </i>
          <span>Modules</span></a>
      </li>

      
      <li className="nav-item" id="show">
        <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseNotes" aria-expanded="true" aria-controls="collapseNotes">
          <i className="fas fa-fw">
            <SiIcons.SiGooglesheets />
          </i>
          <span>Notes</span>
        </a>
        <div id="collapseNotes" className="collapse" aria-labelledby="headingNotes" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Action:</h6>
              <a className="collapse-item" href="" data-toggle="modal" data-target="#exampleModalCenterNot">Notes classes</a>
              <a className="collapse-item" href="" data-toggle="modal" data-target="#exampleModalCenterEtu">Notes Etudiant</a>
            </div>
        </div>
      </li>


      <hr className="sidebar-divider d-none d-md-block" />
      
      <li className="nav-item" id="show">
        <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseAction" aria-expanded="true" aria-controls="collapseAction">
         <i className="fas fa-fw">
            <GoIcons.GoSettings />
         </i>
          <span>Action</span></a>
          <div id="collapseAction" className="collapse" aria-labelledby="headingclasse" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Action:</h6>
              <a className="collapse-item" href="">Administration</a>
              <a className="collapse-item" href="">classes</a>
              <a className="collapse-item" href="" data-toggle="modal" data-target="#exampleModalCenterStudents">Etudiants</a>
              <a className="collapse-item" href="">Professeurs</a>
            </div>
          </div>
      </li>
        
      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle">
        </button>
      </div>

    </ul>
    );
}

export default SidebarAdmin