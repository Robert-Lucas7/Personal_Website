import {useState} from "react";
import ReactMarkdown from 'react-markdown'
// IMPLEMENT A MODAL POPUP FOR THE TIME BEING (resizing card is troublesome)
/*function ProjectCard(props){
    const [clicked, setClicked] = useState(false);


    const projectCardClicked = () =>{
        setClicked(prev => !prev);

    }
    
    return (
        
        
        <div className="col m-2" >
                <div className="card" onClick={projectCardClicked} style={ {width: clicked ? `${props.size}px` : "100%"}}>
                    <div className="card-body d-flex flex-column align-items-center">
                        <h1>{props.title}</h1>
                        { clicked ? (
                            <p>{props.full_description}</p> // Read markdown here for a full description.
                        ): ( 
                            <>
                                <p>{props.initial_description}</p>
                            
                                {props.img != null &&
                                    <img src={require(`../assets/${props.img}`)}/>}
                            </>
                            
                            )
                        }
                    </div>
                </div>
                
            </div>
        
    )
    
}*/
function ProjectCard(props){
    return (
    <div onClick={props.handler} className='w-full p-2 bg-white rounded-lg hover:cursor-pointer hover:bg-fuchsia-400 [&:not(:hover)]:bg-[linear-gradient(to_right,theme(colors.red.600),theme(colors.amber.400),theme(colors.pink.600),theme(colors.fuchsia.400),theme(colors.pink.600),theme(colors.amber.400),theme(colors.red.600))] [&:not(:hover)]:bg-[length:200%_auto] [&:not(:hover)]:animate-gradient'>
        <h2 className="font-extrabold text-2xl">{props.title}</h2>
        <p>{props.brief_desc}</p>
    </div>
)
}
export default ProjectCard;

/*

*/