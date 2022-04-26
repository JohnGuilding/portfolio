import Card from './Card';

const Dashboard = () => {
    const projects = [
        {
            name: "Cryptwit",
            description: "A Twitter-like site where users can post tweets, tip, and enter into a lottery. The site is secured by Unlock Protocol",
            link: ""
        },
        {
            name: "GM Name Service",
            description: "A ENS clone where users can mint their own domains with the '.gm' suffix. Each domain is an NFT.",
            link: ""
        }
    ]
    const cardList = projects.map((project, index) => (
        <Card 
            name={project.name}
            description={project.description}
            link={project.link}
            key={index}
        />
    ));

    return (
        <main>
            {cardList}
        </main>
    );
}

export default Dashboard;