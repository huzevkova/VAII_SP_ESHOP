import React from "react";
import {useNavigate} from "react-router-dom";

const HeroSection = () => {

    const navigate = useNavigate();

    return (
        <section className="hero-section bg-dark text-center py-5">
            <div className="container">
                <h1>Vitajte v kníkupectve BB!</h1>
                <p className="lead">Nájdite svoje ďalšie knižné dobrodružstvo</p>
                <button className="btn btn-primary btn-lg" onClick={()=> navigate('/search')}>Poďme nakupovať</button>
            </div>
        </section>
    )
};

export default HeroSection;