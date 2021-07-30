export default function EmployeeComponent({ name, pictureURL, jobTitle, summary, performance }) {
    return(
        <div className=" relative mt-4 p-4 bg-gray-700 text-xs leading-6 text-white">
            <div className="h-24 flex">
                <div className='w-24 h-24 mr-2 overflow-hidden rounded-full'>
                    <img src={pictureURL || 'https://image.pngaaa.com/879/2874879-middle.png'} />
                </div>
                <div className='flex-1 grid grid-cols-6 grid-rows-3 gap-2'>
                    <div className='row-span-1 col-span-3 px-2 bg-gray-600 rounded-sm'>
                        <span className='text-red-300'>Name: </span> { name }
                    </div>
                    <div className='row-span-2 col-span-3 px-2 bg-gray-600 rounded-sm'>
                        <span className='text-red-300'>Summary: </span> { summary }
                    </div>
                    <div className='row-span-1 col-span-3 px-2 bg-gray-600 rounded-sm'>
                        <span className='text-red-300'>JobTitle: </span> { jobTitle}
                    </div>
                    <div className='row-span-1 col-span-2 col-start-5'>
                        <button className='w-full rounded-sm bg-gradient-to-r from-red-600 to-yellow-500'>
                            Review
                        </button>
                    </div>
                </div>
            </div> 
            <div 
                className='absolute bottom-0 left-0 right-0 h-1 rounded-b-sm bg-gradient-to-r from-red-600 to-green-600'
                style={{ width: `${performance}%` }}    
            >
            </div>
        </div>
    )
}