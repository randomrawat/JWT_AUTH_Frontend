import React, { useState } from 'react';
import '../components/Home.css'
import tech from '../assets/tech.jpg'
import onizuka from '../assets/onizukaa.jpg'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const navLog = async (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const [loggedInUser, setloggedInUser] = useState(localStorage.getItem('loggedInUser'));
    return (
        <div>
            <div className='header'>
                <header className="headercontent">
                    <a className="imgpluslogo">
                        <img src={onizuka} className="imglogo" />
                        <span className="logo">Tech Topia</span>
                    </a>
                    <nav class="nav">
                        <a className="navlink">Home</a >                <a href="#features" className="navlink">Features</a>
                        <a className="navlink">Pricing</a>
                        <a className="navlink">Blog</a>
                        <a className="navlink">About</a>
                    </nav>

                    <a onClick={navLog} className="contactbutton">Log out</a>


                </header>
            </div>



            <div className="content">

                <section className="mainsection">

                    <div className="contentleft">
                        <p className="sectionlabel">Very proud to introduce</p>
                        <h1 className="sectiontitle">Seamless Learning for Bright Futures</h1>
                        <p className="sectiondescription">Lorem ipsum dolor lorem sit amet.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem5 Ullam qui voluptas quidem voluptate? Perspiciatis nisi magni iusto laudantium? Voluptatum, distinctio.</p>

                        <div className="buttongroup">
                            <a className="startbutton">USER: </a>
                            <a className="tourbutton">{loggedInUser}</a>

                        </div>
                    </div>
                    <div className="contentright">

                        <div className="imagecontainer">

                            <img src={tech} class="sectionimage" />
                        </div>

                    </div>


                </section>

            </div>

            <div className="companycontainer">
                <h2>Trusted by the best</h2>
                <div class="companygrid">

                    <div className="companylogo">
                        <img src="" className="svgimage" />
                        <span className="logotext">Google</span>
                    </div>

                    <div className="companylogo">
                        <img src="" className="svgimage" />
                        <span className="logotext">Microsoft</span>
                    </div>

                    <div className="companylogo">
                        <img src="" className="svgimage" />
                        <span className="logotext">LinkedIn</span>
                    </div>

                    <div className="companylogo">
                        <img src="" class="svgimage" />
                        <span className="logotext">VectorEdu</span>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Home;
