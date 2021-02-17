import React, { useState } from 'react';
import '../../styles/gesdaara.css';
import * as GoIcons from 'react-icons/go';



function ContentModul() {

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Modules</h1>
                <div className="dropdown">
                    <button 
                        className="d-none d-sm-inline-block btn btn-sm btn-warning shadow-sm dropdown-toggle" 
                        type="button" 
                        id="dropdownMenuButton" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                        <GoIcons.GoSettings style={{paddingRight: 4}}/>
                        Paramètres
                    </button>
                    <div 
                        className="dropdown-menu" 
                        aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Administration</a>
                        <a className="dropdown-item" href="#">Professeurs</a>
                        <a className="dropdown-item" href="#">Etudiants</a>
                        <a className="dropdown-item" href="#">classes</a>
                    </div>
                </div>
                <a 
                    href="" 
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i className="far fa-calendar-alt fa-sm text-white-50" style={{paddingRight: 4}}></i> 
                    Emploi du temps
                </a>
            </div>
            <div className="row">

            </div>
        </div>
    );
}


export default ContentModul;