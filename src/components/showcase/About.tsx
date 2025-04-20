import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Utkarsh Tiwari</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a designer and developer based in Gaziabad. I have a background in computer science and a passion for building things.  I'm currently working as a UI/UX designer at{'CLOUD COMPUTING CELL,AKGEC'} and I'm always looking for new opportunities to learn and grow.
                </p>
                <br />
                <p>
                Thanks so much for taking the time to explore my portfolio.
I truly enjoyed creating it, and I hope you find it just as engaging to browse through.
If you have any questions, feedback, or just want to connect — feel free to reach out anytime!{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:ut0543700@gmail.com">
                        contactcosickdd@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    
                A coder by profession, a designer by passion, and a guitarist at heart—my journey blends creativity and logic in equal measure. Currently,
                 I’m an Intern @ DevTown, constantly seeking ways to make an impact in the ever-evolving tech landscape. 
                 As a engineering student AJAY KUMAR GARG ENGINEERING COLLEGE, I thrive on curiosity, innovation, and a relentless drive to create meaningful digital experiences.
                    I have a strong foundation in software development, and I'm always eager to learn new technologies and improve my skills.
                    I believe that the best way to learn is by doing, and I'm always looking for new challenges to tackle.
                  working on projects that push my limits and allow me to explore new ideas is the best thing i love.

                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously in my school years, when I
                    was around 17 years old. I started learning Python and Webdevelopment in 
                    high school, and I was immediately hooked. I started learning
                    everything I could about programming.
                    I went on to do a ton of passion projects, many of them with
                    one of my closest friends,{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/priyank-verma-0b88a528b/"
                    >
                        Priyank Verma
                    </a>
                    . We worked on many projects together, including chat bots,
                    multiple game projects, apps, and more. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2017, I got accepted into Rennselear Polytechnic
                    Institute to study Computer Science. It was my first choice
                    and I was absolutely ecstatic to be going to such a great
                    university. At the end of my sophomore year, I got an
                    internship working for the startup Hover, primarily focusing
                    on frontend work. I continued to work at Hover on and off
                    for about a year and a half, until the start of my senior
                    year when I decided to focus on other opportunities.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are{' '}
                            <Link to="/projects/music">Music Production</Link>{' '}
                            and creating{' '}
                            <Link to="/projects/art">Digital Art</Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, cooking, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                            In college, I was an active member in the fraternity
                            Sigma Alpha Epsilon and held multiple positions in
                            the chapter. I met a lot of amazing people through
                            my fraternity and thoroughly enjoyed the community.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2022
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/henryheffernan"
                    >
                        @henryheffernan
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:henryheffernan@gmail.com">
                        henryheffernan@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
