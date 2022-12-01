import React, { useState, useEffect, useRef } from 'react'
import styles from '../../styles/About.module.css'

const About = () => {
    const [cloudRadius, setCloudRadius] = useState(225);
    const [windowSize, setWindowSize] = useState(false)

    // When using tagcloud, you have to do npm install TagCloud --save-dev
    // Because of types error you have to use require
    const TagCloud = require('TagCloud')
    const texts = [
        'JavaScript', 'ES5', 'ES6', 'React.js', 'Next.js', 'MongoDB',
        'HTML5', 'CSS3', 'Node.js', 'Express', 'SQL', 'MySQL', 'PostgreSQL',
        'REST', 'Surge', 'Heroku', 'Render', 'Git', 'GitHub', 'Mocha', 'Chai', 'Jest',
        'npm', 'Bootstrap', 'Tailwind', 'Auth0', 'AJAX', 'Axios', 'Redux', 'Recoil',
    ]
    const options = {
        radius: cloudRadius,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        direction: 225,
        keep: true,
    };

    const IsTagCloudLoaded = useRef(false);

    useEffect(() => {
        // If TagCloud is already there, ends useEffect
        // If not, runs it
        if (IsTagCloudLoaded.current) return;

        TagCloud('.tagCloud', texts, options);

        IsTagCloudLoaded.current = true;
    })
    

  return (
    <section className="about" id="about">
        <div className={styles.container}>
            <div className={styles.words}>
                <div className={styles.title}>
                    About
                </div>
                <div className={styles.about}>
                    <div className={styles.text}>
                            Hi! <br/>
                            I'm Gerard, and I am a multi-faceted individual who creates things on the web. <br/>
                            I've always been interested in the sciences, studying psychology and medicine, but somewhere along the way, software development captured my heart, and it never let go.
                            <br/>
                            <br/>
                            My favorite aspect of this field is the fact that we can create solutions to problems great and small, making people's lives easier, and we can make that solution pretty while we're at it.
                            <br/>
                            <br/>
                            I hope to one day create something that can make a lot of people happy.
                    </div>
                </div>
            </div>
            <div className={styles.skills}>
                <span className='tagCloud' id='skillsCanvas'></span>
            </div>
            <div className={styles.spacer}></div>
        </div>
    </section>
  )
}

export default About