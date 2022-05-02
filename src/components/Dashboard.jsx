import './../styles/Dashboard.scss'
import Card from './Card';

const Dashboard = () => {
    const projects = [
        {
            name: "Cryptwit",
            description: "A Twitter-like site where users can post tweets, tip, and enter into a lottery. The site is secured by Unlock Protocol",
            appLink: "https://agreeable-moss-026861303.1.azurestaticapps.net",
            frontEndCodeLink: "https://github.com/JohnGuilding/crypto-twitter-front-end",
            backEndCodeLink: "https://github.com/JohnGuilding/cryptwit-back-end"
        },
        {
            name: "GM Name Service",
            description: "A ENS clone where users can mint their own domains with the '.gm' suffix. Each domain is an NFT.",
            appLink: "https://agreeable-river-08a6db403.1.azurestaticapps.net/",
            frontEndCodeLink: "https://github.com/JohnGuilding/domain-service-front-end",
            backEndCodeLink: "https://github.com/JohnGuilding/domain-service"
        }
    ]
    const cardList = projects.map((project, index) => (
        <Card 
            name={project.name}
            description={project.description}
            appLink={project.appLink}
            frontEndCodeLink={project.frontEndCodeLink}
            backEndCodeLink={project.backEndCodeLink}
            key={index}
        />
    ));

    return (
        <main className='dashboard'>
            {cardList}
        </main>
    );
}

export default Dashboard;