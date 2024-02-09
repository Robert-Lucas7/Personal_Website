import Markdown from "marked-react";
import './ProjectModal.css';
function ProjectModal(props){
    let githubURL = "https://github.com/Robert-Lucas7";
    return (
        <div tabIndex="-1" ariaHidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full mx-auto">
        
        <div class="relative bg-gray-600 rounded-lg shadow ">
            
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h1 class="text-2xl font-semibold text-white ">
                    {props.title}
                </h1>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={props.closeModal}>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only" >Close modal</span>
                </button>
            </div>
           
            <div class="p-4 md:p-5 space-y-4 text-white">
                <Markdown>{props.cardContents[props.title]}</Markdown>
            </div>
          
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-center space-x-4">
                <button onClick={props.closeModal} data-modal-hide="default-modal" type="button" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Close</button>
                <a href={props.githubLink == undefined ? '#' : `${githubURL}/${props.githubLink}`}><button className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">View on GitHub</button></a>
            </div>
        </div>
    </div>
</div>
    )
}
export default ProjectModal;