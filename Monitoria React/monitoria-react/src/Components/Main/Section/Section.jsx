import '../../Header/Header.css';
import React from 'react';
import carrosMonitoria from '../../../assets/img/fotoSiteCarros.jpg';
import FotoTcc from '../../../assets/img/fotoTcc.jpg';
import Card from '../Cards/Cards';

export default () => {
    return (
        <section className="divCards container-fluid">
           <Card></Card>
           <Card></Card>
        </section>
    );
}