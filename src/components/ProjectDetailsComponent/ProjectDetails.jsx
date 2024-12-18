import background from '../../assets/DeliverGreen/background.png'
import brocoli from "../../assets/DeliverGreen/brocoli.png"
function ProjectDetails(){
    return (
        <div className='p-2 md:p-10 '>
        <div className='bg-white w-full h-full rounded-3xl p-5 md:p-20'>
            <img 
            src={background}
            />
            <h1 className="text-green-600 text-center text-3xl md:text-6xl font-bold mt-2">Deliver Green</h1>
            <p className='text-center mt-5 text-sm md:text-2xl font-light '>Deliver Green is a modern, user-friendly mobile app crafted by Dharma Tech Solution <br /> to meet the growing demand for convenient, reliable grocery delivery. Our client <br /> envisioned an app that simplifies the process of buying fresh fruits and vegetables <br /> while offering a delightful shopping experience.</p>
        </div>
        <img 
        className='w-16 md:w-64 -mt-20 md:-mt-72'
        src={brocoli}
        />
        </div>
    )
}
export default ProjectDetails