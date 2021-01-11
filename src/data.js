import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
import * as SiIcons from 'react-icons/si';
import * as GoIcons from 'react-icons/go';

export const Data = [
    {
        title: 'Administrations',
        path: '/admin',
        icon: <FaIcons.FaUserCog />
    },
    {
        title: 'Professeurs',
        path: '/teacher',
        icon: <ImIcons.ImUserTie />
    },
    {
        title: 'Etudiants',
        path: '/student',
        icon: <FaIcons.FaUserGraduate />
    },
    {
        title: 'Classes',
        path: '/class',
        icon: <SiIcons.SiGoogleclassroom />
    },
    {
        title: 'Modules',
        path: '/modul',
        icon: <GoIcons.GoFileSubmodule />
    },
    {
        title: 'Notes',
        path: '/mark',
        icon: <SiIcons.SiGooglesheets />
    },
    {
        title: 'Paramètres',
        path: '/settings',
        icon: <GoIcons.GoSettings />
    },
]


