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
                I'm a designer and developer based in Ghaziabad. I have a background in computer science and a passion for building things. I'm currently working as a UI/UX designer at {'CLOUD COMPUTING CELL, AKGEC'} and I'm always looking for new opportunities to learn and grow.


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
                    
                
                  A software developer by profession and a designer at heart, I combine technical expertise with creative thinking to build impactful digital solutions.
                   Currently interning at DevTown, I thrive in fast-paced environments, embracing challenges that drive growth and innovation.
                    Passionate about continuous learning, I’m always exploring fresh ideas and technologies.

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
                I began programming seriously during my school years, around the age of 17. Starting with Python and web development, I was instantly hooked by the creativity and logic behind it. Since then, I’ve explored various domains through passion projects—many built alongside one of my closest friend {' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/priyanshukrsingh/"
                    >
                        Priyanshu Singh.
                    </a>
                    . We worked on many projects together, including chat bots,
                    multiple Ecommerce websites, apps, and explored various no code tools during our school time. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2023, I got accepted into AJAY KUMAR GARG ENGINEERING COLLEGE to study Computer Science/Information Technology.
                    The course was my first choice but not the college. However, I was very happy with the course and college I got into.
                    By the end of my sophomore year, I got an internship Project for the startup Prepstreet, primarily focusing on frontend work.
                    I continued to work at Prepstreet on and off for about a year and a half, until the mid of my Second semester when I decided to explore other domains.
                    I was good at designing and also started learning machine learning.
                </p>
                <br />
                <p>
                    During this time, I also developed a keen interest in open-source contributions. I began contributing to various projects on GitHub, which not only improved my coding skills but also helped me connect with a global community of developers.
                    One of my proudest contributions was to a popular JavaScript library, where I fixed a critical bug and added a new feature that is now used by thousands of developers worldwide.
                </p>
                <br />
                <p>
                    In addition to my technical pursuits, I actively participated in hackathons and coding competitions. These events were a great way to challenge myself, collaborate with like-minded individuals, and come up with innovative solutions under tight deadlines.
                    One of the hackathons I participated in was the Smart India Hackathon, where my team developed a solution for real-time traffic monitoring using machine learning and IoT.
                </p>
                <br />
                <p>
                    As I progressed in my academic journey, I also took on leadership roles in various student organizations. I served as the Coordinator of the college's Cloud Computing club, where I organized workshops, coding bootcamps, and mentorship programs to help fellow students enhance their technical skills.
                    These experiences not only honed my leadership abilities but also gave me immense satisfaction in giving back to the community.
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
                            <Link to="/projects/others">Playing Guitar</Link>{' '}
                            and creating{' '}
                            <Link to="/projects/others">Digital Art</Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, cooking, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                            In college, I was an active member in the Slumswaraj Foundation and held multiple Donation drives in
                            the chapter. I met a lot of amazing people through
                            my work and thoroughly enjoyed Helping the ones in need and the community.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2025
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
                        href="https://twitter.com/cosmickdd"
                    >
                        @cosmickdd
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:cosmickdd@gmail.com">
                        ut0543700@gmail.com
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
