import React ,{useState} from 'react'
import { data } from '../data'
import blueArrow from '../../assets/blueArrow.png';



const FAQs = () => {
    
   const [Multipleslected, setMultiplesetSelectd] = useState([])


   const Multipleselection=(getCurrentId)=>{
const copyId = [...Multipleslected]
const findindexofCurrentId =copyId.indexOf(getCurrentId)
if(findindexofCurrentId===-1){
   copyId.push(getCurrentId);
}else{
    copyId.splice(findindexofCurrentId,1);
}
setMultiplesetSelectd(copyId);

   }
  return (
    <div>
    <div className=' mt-9 lg:mt-[6rem] lg:ml-[10rem] flex flex-col lg:flex-row justify-between'>
      <div className=' lg:text-[3rem] md:text-[2.5rem] text-[1.8rem] ml-2 lg:ml-0 md:ml-0 font-semibold '>FAQs</div>
      <div className='my-8 lg:mr-[10rem]'>
        {
            data && data.length>0 ? 
            (
                data.map((item)=><div key={item.id} className='font-inter m-[0.4rem] flex flex-col '>
                  <div onClick={()=>Multipleselection(item.id)} className='flex lg:w-[45vw] cursor-pointer  tracking-tigher  px-5 py-[0.6rem]  items-center bg-[#FAFAFA] justify-between  rounded-xl'
>
                    <h1 className='font-semibold text-xl'>{item.question}</h1>
                    <span className='text-blue-500 text-3xl font-thin'>+</span>

                    </div>
                  
                    {
                       Multipleslected.indexOf(item.id)!==-1 && (<div className='flex m-[0.4rem] lg:w-[38vw] lg:ml-12 cursor-pointer  tracking-tigher px-5 py-[0.6rem]  items-center bg-[#FAFAFA] justify-center items-center rounded-xl'>{item.answer}</div>)
                    }
                </div>
                )
            )
            :<h3>No data Found</h3>
        }
      <button className='flex  border-b-2 lg:mt-6 mt-3 mb-3 lg:mb-[4rem] text-[0.9rem] border-blue-500  text-blue-500 ml-3 lg:ml-0 '>See More 
            <img src={blueArrow} className='h-[0.9rem] rounded-2xl ml-4 mt-[0.35rem] mb-3
           ' alt="" />
        </button>
      </div> 
   

  

    </div>
    </div>
  )
}

export default FAQs
