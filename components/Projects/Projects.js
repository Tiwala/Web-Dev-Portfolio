import { useState, useEffect } from 'react'
import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
import hotStoveCircuit from '../../public/HotStoveCircuit.png'
import steamClone from '../../public/SteamClone.png'
import instructorHub from '../../public/InstructorHub.png'
import weebList from '../../public/WeebList.png'
import pokedex from '../../public/1stGenPokeDex.png'

const Projects = () => {
    const [width, setWidth] = useState(658)
    const [height, setHeight] = useState(370)
    const [windowSize, setWindowSize] = useState(true)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 992) {
                setWindowSize(true);
                if (window.innerWidth >= 1300) {
                    setWidth(658);
                    setHeight(370);
                }
                if (window.innerWidth < 1300 && window.innerWidth >= 1200) {
                    setWidth(592.2);
                    setHeight(333);
                }
                if (window.innerWidth < 1200 && window.innerWidth >= 1080) {
                    setWidth(526.4);
                    setHeight(296);
                }
                if (window.innerWidth < 1080 && window.innerWidth >= 992) {
                    setWidth(460.6);
                    setHeight(259);
                }
            } else {
                setWindowSize(false);
                if (window.innerWidth < 992 && window.innerWidth >= 768) {
                    setWidth(592.2);
                    setHeight(333);
                }
                if (window.innerWidth < 768 && window.innerWidth >= 660) {
                    setWidth(526.4);
                    setHeight(296);
                }
                if (window.innerWidth < 660 && window.innerWidth >= 600) {
                    setWidth(460.6);
                    setHeight(259);
                }
                if (window.innerWidth < 600 && window.innerWidth >= 370) {
                    setWidth(300);
                    setHeight(169);
                }
                if (window.innerWidth < 370) {
                    setWidth(240);
                    setHeight(135);
                }
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

  return (
    <div className={styles.container} id="projects">
        <div className={styles.title}>
            Featured Projects
        </div>
        {windowSize ? (
        <>
        <div className={styles.project}>
            <div className={styles.projectDescription}>
                <h3 className={styles.projectTitle}>Hot Stove Circuit</h3>
                <div className={styles.projectText}>
                    <p>
                        Hot Stove Circuit is an event series that brings gourmands and chefs together for the ultimate culinary experience. <br/>
                        <br/>
                        The website is used to display information about scheduled events, and allow users to register and purchase tickets for the said events.
                    </p>
                </div>
                <ul className={styles.techList}>
                    <li>Flask</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Gitlab</li>
                    <li>Docker</li>
                    <li>PSQL</li>
                </ul>
            </div>
            <div className={styles.projectImage}>
                <a className={styles.imageLink} href="https://hotstovecircuit.buzz" rel="noopener noreferrer" target="_blank">
                    <div className={styles.overlay} style={{width: width, height: height}}></div>
                    <Image src={hotStoveCircuit} alt="Image for Hot Stove Circuit Website" width={width} height={height} layout="responsive"/>
                </a>
            </div>
        </div>
        <div className={styles.project}>
            <div className={styles.projectDescription}>
                <h3 className={styles.projectTitle}>Steam Page Clone</h3>
                <div className={styles.projectText}>
                    <p>
                        Me and my team created a full stack working clone of Hogwarts Legacy&apos;s Steam page, with all links and effects fully functional. <br/>
                        <br/>
                        Almost indistinguishable from the original page, we wanted to test our ability to replicate an application regardless of framework and technologies.
                    </p>
                </div>
                <ul className={styles.techList}>
                    <li>NextJS</li>
                    <li>Tailwind</li>
                    <li>Axios</li>
                    <li>Recoil</li>
                    <li>PSQL</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                    <li>Render</li>
                </ul>
                <div className={styles.links}>
                    <a className={styles.tags} href="https://github.com/Tiwala/Steam-Clone" aria-label="GitHub" target="_blank" rel="noreferrer">
                      <svg fill="rgb(193, 189, 189)" width="25" height="25" viewBox="0 0 496 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 
                            4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 
                            4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 
                            0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 
                            16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 
                            62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
                            75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 
                            1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 
                            1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 
                            1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                          </path>
                      </svg>
                    </a>
                </div>
            </div>
            <div className={styles.projectImage}>
                <a className={styles.imageLink} href="https://steamclonehosted-production.up.railway.app/" rel="noopener noreferrer" target="_blank">
                    <div className={styles.overlay} style={{width: width, height: height}}></div>
                    <Image src={steamClone} alt="Image for Steam Clone Website" width={width} height={height} layout="responsive"/>
                </a>
            </div>
        </div>
        <div className={styles.project}>
            <div className={styles.projectDescription}>
                <h3 className={styles.projectTitle}>Galvanize Instructor Hub</h3>
                <div className={styles.projectText}>
                    <p>
                        The Galvanize Instructor Hub is an application that streamlines an instructor&apos;s task of recording and organizing data on student performance, synchronizing it with the Asana API. <br/>
                        <br/>
                        Through the application, instructors can create classes and profiles for students from the ground up, graphically illustrate data recorded from class and student performance, provide commentary feedback, and randomly generate groups for class work.
                    </p>
                </div>
                <ul className={styles.techList}>
                    <li>NextJS</li>
                    <li>Axios</li>
                    <li>Recoil</li>
                    <li>PSQL</li>
                    <li>Postgres</li>
                    <li>Render</li>
                </ul>
                <div className={styles.links}>
                    <a className={styles.tags} href="https://github.com/gschool-blue-ocean/instructor-hub" aria-label="GitHub" target="_blank" rel="noreferrer">
                      <svg fill="rgb(193, 189, 189)" width="25" height="25" viewBox="0 0 496 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 
                            4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 
                            4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 
                            0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 
                            16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 
                            62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
                            75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 
                            1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 
                            1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 
                            1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                          </path>
                      </svg>
                    </a>
                </div>
            </div>
            <div className={styles.projectImage}>
                <a className={styles.imageLink} href="https://drive.google.com/file/d/1WbfoHGMt5sVqZwbGxQvH-ploWGzTEhQ7/view?usp=share_link" rel="noopener noreferrer" target="_blank">
                    <div className={styles.overlay} style={{width: width, height: height}}></div>
                    <Image src={instructorHub} alt="Image for Instructor Hub Website" width={width} height={height}/>
                </a>
            </div>
        </div>
        <div className={styles.project}>
            <div className={styles.projectDescription}>
                <h3 className={styles.projectTitle}>The Weeblist</h3>
                <div className={styles.projectText}>
                    <p>
                        The Weeblist is a full stack application that allows users to log in and create reviews for a database of anime. <br/>
                        <br/>
                        Inspired by Myanimelist, this was a small, passion full stack MVP.
                    </p>
                </div>
                <ul className={styles.techList}>
                    <li>Vanilla JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>PSQL</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                </ul>
                <div className={styles.links}>
                    <a className={styles.tags} href="https://github.com/Tiwala/Student-MVP-Project" aria-label="GitHub" target="_blank" rel="noreferrer">
                      <svg fill="rgb(193, 189, 189)" width="25" height="25" viewBox="0 0 496 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 
                            4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 
                            4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 
                            0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 
                            16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 
                            62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
                            75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 
                            1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 
                            1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 
                            1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                          </path>
                      </svg>
                    </a>
                </div>
            </div>
            <div className={styles.projectImage}>
                <a className={styles.imageLink} href="https://theweeblist.up.railway.app" rel="noopener noreferrer" target="_blank">
                    <div className={styles.overlay} style={{width: width, height: height}}></div>
                    <Image src={weebList} alt="Image for Weeb List Website" width={width} height={height}/>

                </a>
            </div>
        </div>
        <div className={styles.project}>
            <div className={styles.projectDescription}>
                <h3 className={styles.projectTitle}>1st Gen Pokedex</h3>
                <div className={styles.projectText}>
                    <p>
                        The 1st Generation Pokedex app is a frontend application that shows the first 151 Pokemon, with their respective Pokedex information, including each individual Pokemon&apos;s cry from the original GameBoy Color games. <br/>
                        All information was fetched externally from the PokeAPI. <br/>
                        <br/>
                        This was my very first MVP, and while it is quite basic, I love this project, as it is my childhood passion in its purest form put in practice.
                    </p>
                </div>
                <ul className={styles.techList}>
                    <li>Vanilla JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>PokeAPI</li>
                    <li>AJAX</li>
                </ul>
                <div className={styles.links}>
                    <a className={styles.tags} href="https://github.com/Tiwala" aria-label="GitHub" target="_blank" rel="noreferrer">
                      <svg fill="rgb(193, 189, 189)" width="25" height="25" viewBox="0 0 496 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 
                            4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 
                            4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 
                            0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 
                            16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 
                            62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
                            75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 
                            1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 
                            1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 
                            1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                          </path>
                      </svg>
                    </a>
                </div>
            </div>
            <div className={styles.projectImage}>
                <a className={styles.imageLink} href="https://trash-garbage.surge.sh/" rel="noopener noreferrer" target="_blank">
                    <div className={styles.overlay} style={{width: width, height: height}}></div>
                    <Image src={pokedex} alt="Image for 1st Generation Pokedex Website" width={width} height={height}/>
                </a>
            </div>
        </div>
        </>
        ) : (
        <>
        <div className={styles.project}>
            <div className={styles.projectDescription}>
                <h3 className={styles.projectTitle}>Steam Page Clone</h3>
                <div className={styles.projectText}>
                    <p>
                        Me and my team created a full stack working clone of Hogwarts Legacy&apos;s Steam page, with all links and effects fully functional. <br/>
                        <br/>
                        Almost indistinguishable from the original page, we wanted to test our ability to replicate an application regardless of framework and technologies.
                    </p>
                </div>
                <ul className={styles.techList}>
                    <li>NextJS</li>
                    <li>Tailwind</li>
                    <li>Axios</li>
                    <li>Recoil</li>
                    <li>PSQL</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                    <li>Render</li>
                </ul>
                <div className={styles.links}>
                    <a className={styles.tags} href="https://github.com/Tiwala/Steam-Clone" aria-label="GitHub" target="_blank" rel="noreferrer">
                      <svg fill="rgb(193, 189, 189)" width="25" height="25" viewBox="0 0 496 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 
                            4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 
                            4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 
                            0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 
                            16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 
                            62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
                            75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 
                            1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 
                            1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 
                            1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                          </path>
                      </svg>
                    </a>
                </div>
            </div>
            <div className={styles.projectImage}>
                <a className={styles.imageLink} href="https://steamclonehosted-production.up.railway.app/" rel="noopener noreferrer" target="_blank">
                    <div className={styles.overlay} style={{width: width, height: height}}></div>
                    <Image src={steamClone} alt="Image for Steam Clone Website" width={width} height={height} layout="responsive"/>
                </a>
            </div>
        </div>
        <div className={styles.project}>
            <div className={styles.projectDescription}>
                <h3 className={styles.projectTitle}>Galvanize Instructor Hub</h3>
                <div className={styles.projectText}>
                    <p>
                        The Galvanize Instructor Hub is an application that streamlines an instructor&apos;s task of recording and organizing data on student performance, synchronizing it with the Asana API. <br/>
                        <br/>
                        Through the application, instructors can create classes and profiles for students from the ground up, graphically illustrate data recorded from class and student performance, provide commentary feedback, and randomly generate groups for class work.
                    </p>
                </div>
                <ul className={styles.techList}>
                    <li>NextJS</li>
                    <li>Axios</li>
                    <li>Recoil</li>
                    <li>PSQL</li>
                    <li>Postgres</li>
                    <li>Render</li>
                </ul>
                <div className={styles.links}>
                    <a className={styles.tags} href="https://github.com/gschool-blue-ocean/instructor-hub" aria-label="GitHub" target="_blank" rel="noreferrer">
                      <svg fill="rgb(193, 189, 189)" width="25" height="25" viewBox="0 0 496 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 
                            4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 
                            4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 
                            0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 
                            16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 
                            62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
                            75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 
                            1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 
                            1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 
                            1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                          </path>
                      </svg>
                    </a>
                </div>
            </div>
            <div className={styles.projectImage}>
                <a className={styles.imageLink} href="https://drive.google.com/file/d/1WbfoHGMt5sVqZwbGxQvH-ploWGzTEhQ7/view?usp=share_link" rel="noopener noreferrer" target="_blank">
                    <div className={styles.overlay} style={{width: width, height: height}}></div>
                    <Image src={instructorHub} alt="Image for Instructor Hub Website" width={width} height={height}/>
                </a>
            </div>
        </div>
        <div className={styles.project}>
            <div className={styles.projectDescription}>
                <h3 className={styles.projectTitle}>The Weeblist</h3>
                <div className={styles.projectText}>
                    <p>
                        The Weeblist is a full stack application that allows users to log in and create reviews for a database of anime. <br/>
                        <br/>
                        Inspired by Myanimelist, this was a small, passion full stack MVP.
                    </p>
                </div>
                <ul className={styles.techList}>
                    <li>Vanilla JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>PSQL</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                </ul>
                <div className={styles.links}>
                    <a className={styles.tags} href="https://github.com/Tiwala/Student-MVP-Project" aria-label="GitHub" target="_blank" rel="noreferrer">
                      <svg fill="rgb(193, 189, 189)" width="25" height="25" viewBox="0 0 496 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 
                            4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 
                            4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 
                            0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 
                            16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 
                            62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
                            75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 
                            1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 
                            1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 
                            1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                          </path>
                      </svg>
                    </a>
                </div>
            </div>
            <div className={styles.projectImage}>
                <a className={styles.imageLink} href="https://theweeblist.up.railway.app" rel="noopener noreferrer" target="_blank">
                    <div className={styles.overlay} style={{width: width, height: height}}></div>
                    <Image src={weebList} alt="Image for Weeb List Website" width={width} height={height}/>

                </a>
            </div>
        </div>
        <div className={styles.project}>
            <div className={styles.projectDescription}>
                <h3 className={styles.projectTitle}>1st Gen Pokedex</h3>
                <div className={styles.projectText}>
                    <p>
                        The 1st Generation Pokedex app is a frontend application that shows the first 151 Pokemon, with their respective Pokedex information, including each individual Pokemon&apos;s cry from the original GameBoy Color games. <br/>
                        All information was fetched externally from the PokeAPI. <br/>
                        <br/>
                        This was my very first MVP, and while it is quite basic, I love this project, as it is my childhood passion in its purest form put in practice.
                    </p>
                </div>
                <ul className={styles.techList}>
                    <li>Vanilla JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>PokeAPI</li>
                    <li>AJAX</li>
                </ul>
                <div className={styles.links}>
                    <a className={styles.tags} href="https://github.com/Tiwala/frontend-project-Pokemon-DB" aria-label="GitHub" target="_blank" rel="noreferrer">
                      <svg fill="rgb(193, 189, 189)" width="25" height="25" viewBox="0 0 496 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 
                            4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 
                            4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 
                            0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 
                            16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 
                            62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
                            75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 
                            1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 
                            1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 
                            1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                          </path>
                      </svg>
                    </a>
                </div>
            </div>
            <div className={styles.projectImage}>
                <a className={styles.imageLink} href="https://trash-garbage.surge.sh/" rel="noopener noreferrer" target="_blank">
                    <div className={styles.overlay} style={{width: width, height: height}}></div>
                    <Image src={pokedex} alt="Image for 1st Generation Pokedex Website" width={width} height={height}/>
                </a>
            </div>
        </div>
        </>
        )}
    </div>
  )
}

export default Projects