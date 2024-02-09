
import './Home.css';
import ProjectGrid from '../components/ProjectGrid';
import { useEffect,useState } from 'react';
import ProjectModal from '../components/ProjectModal';
const Home = () => {
    const [cardClicked, setCardClicked] = useState(null);
    const [cardContents, setCardContents] = useState({});
    const [cardAndMarkdown, setCardAndMarkdown] = useState({});
    
    const closeModal = () => {
        setCardClicked(null);
    }
    const projectCardClicked = (title) => {
        if(cardContents[title] === "Loading"){
            fetch(require(`../assets/${cardAndMarkdown[title]["markdown_desc"]}`))
            .then(response => response.text())
            .then(text => {
                setCardContents((prevContents) => ({
                    ...prevContents,
                    [title]: text,
                  }));
            });
        }
        if(cardClicked == null){
            setCardClicked(title);
        }
        
        
    }
    let projects = {
        finished: [
            {
                title: "Self-Balancing Robot",
                markdown_desc: "self_balancing_robot.md",
                brief_desc: "I have created a self-balancing robot using an arduino, which was first simulated using the Gazebo simulation software, ROS2, and python.",
                github_repo_name:"Self-Balancing-Robot"
            },
            {
                title:"This Website",
                markdown_desc : "personal_website.md",
                brief_desc : "I have created this website using ReactJS and tailwindcss. I plan to expand it so that it can host a blog using django in the future.",
                github_repo_name:"Personal_Website"
            },
            {
                title: "Pairs Game",
                markdown_desc: "pairs_game.md",
                brief_desc: "I have created a game where you have to match cards and it stores the scores in a leaderboard.",
                github_repo_name:"ECM1417-PairsGame"
            },
            {
                title :"Concurrent Card Game",
                markdown_desc : "software_development_ca.md",
                brief_desc : "This is a simple card game that uses multi-threading, where players simultaneously pick up cards to get a hand of the same value.",
                github_repo_name : "ECM2414_Software_Development_CA"
            }
        ],
        current: [
            {
                title: "TurboJet",
                markdown_desc: "turbo_jet.md",
                brief_desc: "I am currently planning to build a model of a TurboJet engine."
            
            }/*,
            {
                title: "HappyWare",
                markdown_desc: "happyware.md",
                brief_desc: "I am currently designing an educational tool about malware and how others can learn about the dangers."
            },*/
            
        ]
    }
    
    useEffect(() => {
        let cards = {};
        let init_card_contents = {};
        for(let i=0;i<projects.finished.length;i++){
            cards[projects.finished[i].title] = projects.finished[i];
            init_card_contents[projects.finished[i].title] = "Loading";
        }
        for(let i=0;i<projects.current.length;i++){
            cards[projects.current[i].title] = projects.current[i];
            init_card_contents[projects.current[i].title] = "Loading";
        }
        setCardAndMarkdown(cards);
        setCardContents(init_card_contents);
    },[]);
    // The top modal will display the project clicked markdown file (need to toggle it with js)
    return (
        <>
        { cardClicked != null &&
            <ProjectModal closeModal={closeModal} title={cardClicked} cardContents={cardContents} githubLink = {cardAndMarkdown[cardClicked]["github_repo_name"]}/>
        }
        <div className='bg-slate-800 p-10 min-h-full lg:h-full'>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:items-center lg:gap-3 lg:h-full '>
                <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-2 '>
                    
                        <div className="grid grid-cols-2 space-y-3 md:col-span-2">
                            <h1 className="text-center lg:text-left text-5xl md:text-6xl xl:text-7xl text-gray-400 tracking-tight w-fit col-span-2 mx-auto">Welcome to <br /><div className='underline inline decoration-cyan-500'>Robert Lucas'</div><br /> website</h1>
                            <div className='w-fit ml-auto mr-2' id="link-icons">
                                <a href="https://www.linkedin.com/in/robertlucas7" className="flex bg-blue-600 p-2 font-semibold text-white rounded-full">
                                    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                        <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                                    </svg>
                                </a>
                                
                            </div>
                            <a href="https://blog.roblucas.co.uk"><button className='text-white bg-orange-600 rounded-full p-1 hover:bg-orange-700 border border-orange-800 my-auto w-fit mr-auto ml-2'>
                                    Blog
                            </button></a>
                            <p className='col-span-2 mx-auto text-white px-10 text-center'>I am a second year Computer Science undergraduate and this is where I will display my projects (which range in a variety of disciplines) as well as store my blog. I hope to be able to use this website to show the development of my skills.</p>
                            


                        </div>
                    
                    
                </div>
                <div className='flex flex-col items-center text-center col-span-2'>
                    <h1 className='mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl tracking-tight text-gray-300 underline lg:mt-0 mt-4'>Projects</h1>
                    <h5 className='mt-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-gray-300'>Completed</h5>
                    <ProjectGrid projects={projects.finished}  projectCardClicked={projectCardClicked}/>
                    <h5 className='mt-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-gray-300'>Current</h5>
                    <ProjectGrid projects={projects.current}  projectCardClicked={projectCardClicked}/>
                </div>
            </div>
        </div>

        </>)
};

export default Home;


/*
About


*/