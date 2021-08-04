import { MdRateReview } from 'react-icons/md';

export default function EmployeeComponent({ name, pictureURL, jobTitle, summary, performance }) {
  
    return(
        <div className="relative flex mt-4 p-4 bg-gray-700 text-xs leading-6 text-white">
            <div className='w-24 h-24 mr-2 overflow-hidden rounded-full'>
                <img src={pictureURL || 'https://image.pngaaa.com/879/2874879-middle.png'} />
            </div>
            <div className="h-24 flex-1 grid lg:grid-cols-6 grid-rows-3 gap-2">
                <div className='row-span-1 col-span-3 px-2 bg-gray-600 rounded-sm hover:bg-gray-500 hover:cursor-pointer'>
                    <span className='text-red-300'>Name: </span> { name }
                </div>
                <div className='row-span-2 col-span-3 px-2 bg-gray-600 rounded-sm hover:bg-gray-500 hover:cursor-pointer'>
                    <span className='text-red-300'>Summary: </span> { summary }
                </div>
                <div className='row-span-1 col-span-3 px-2 bg-gray-600 rounded-sm hover:bg-gray-500 hover:cursor-pointer'>
                    <span className='text-red-300'>JobTitle: </span> { jobTitle }
                </div>
                <div className='row-span-1 col-span-2 col-start-5'>
                    <button className='w-full flex justify-center items-center 
                    rounded-sm bg-gradient-to-r from-red-600 to-yellow-500 font-bold'>
                        <MdRateReview size='20' />
                        <span className='ml-1'>Review</span>
                    </button>
                </div>
            </div> 
            <div className='absolute bottom-0 left-0 right-0 h-1 rounded-b-sm bg-gradient-to-r from-red-600 to-green-600'>
                <div 
                    className='absolute bottom-0 left-0 right-0 h-1 bg-gray-700' 
                    style={{ left: `${performance}%` }}
                ></div>
            </div>
        </div>
    )
}