import { tecnologiesHealthyBlog } from '../../data/technologies'
import Styles from '../../styles/components/list/Projects.module.scss'

const Portfolio = () => {
    return (
        <div className={Styles.bodyModal}>
            <div className={Styles.header}>
                <img src="https://cdn.sanity.io/images/ohx8wpby/production/12284ecf9dc8f40d15c63481550d07b9e4fd6325-1229x787.png" alt="" className={Styles.image} />
                <div>
                    <p>Explore my coding journey through this interactive portfolio. Built with the latest technologies, it features smooth animations and a clean, modern design. You'll find detailed projects, personal insights, and the tools I've used along the way. Dive in to see how I've grown as a developer and the exciting projects I've created.</p>
                    <p>React full stack portfolio with high order components, framer motion animation with sanity backend</p>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M12 5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 2c.552 0 1 .447 1 1s-.448 1-1 1-1-.447-1-1 .448-1 1-1zm-8.999 2v7.001c0 1.104.896 1.999 2 1.999h12c1.104 0 2-.896 2-2v-6.999h-16v-.001zm14 7.001h-12v-5h12v5zm-2-9.001h-8v1.999h8v-2z" />
                        </svg>
                        Live
                    </button>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577v-2.172c-3.338.726-4.033-1.415-4.033-1.415-.546-1.388-1.334-1.758-1.334-1.758-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.305.762-1.606-2.665-.304-5.466-1.333-5.466-5.931 0-1.311.467-2.382 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 013.005-.404c1.018.005 2.043.137 3.005.404 2.291-1.554 3.298-1.23 3.298-1.23.653 1.653.241 2.873.118 3.176.77.839 1.236 1.91 1.236 3.221 0 4.61-2.803 5.625-5.475 5.921.43.372.813 1.104.813 2.225v3.293c0 .319.192.694.8.576C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </button>
                </div>
            </div>
            <div className={Styles.footer}>

                <div className={Styles.framework}>
                    <span className={Styles.tecnologiesTitle}>framework</span>
                    <div className={Styles.frameworkContainer}>
                        <div className={Styles.frameworkCard}>
                            <img src='https://cdn.sanity.io/images/ohx8wpby/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png' alt='a' className={Styles.frameworkImage} />
                            <span>React</span>
                        </div>
                    </div>
                </div>

                <div className={Styles.tecnologies}>
                    <span className={Styles.tecnologiesTitle}>technologies</span>
                    <div className={Styles.tecnologiesContainer}>
                        {tecnologiesHealthyBlog.map(({ text, image }) => (
                            <div key={text} className={Styles.tecnologiCard}>
                                <img src={image} alt='a' className={Styles.TecnologiesImage} />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio