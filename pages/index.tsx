import EmployeeComponent from '../components/employee';


const dummyEmployees = [
  {
    id: 1,
    name: 'Ophelia',
    pictureURL: 'https://image.pngaaa.com/879/2874879-middle.png',
    jobTitle: 'Senior Full Stack developer', 
    summary: 'best in her field', 
    performance: '90'
  },
  {
    id: 2,
    name: 'Mayushi',
    pictureURL: 'https://www.pngkey.com/png/full/145-1450218_26-nier-sucks-imagenes-de-lolis-kawaii.png',
    jobTitle: 'Data scientist', 
    summary: 'has too much of compensation', 
    performance: '40'
  }
]

export default function HomePage() {
  return(
    <div className='container mx-auto mt-5'>
      <div className='grid grid-cols-12 gap-10 py-15 px-10 lg:px-25'>
        <div className='col-span-12 lg:col-span-3 bg-gray-800 rounded-sm'>Sidebar</div>
        <div className='col-span-12 lg:col-span-9 p-2 bg-gray-800 rounded-sm'>
          { 
            dummyEmployees.map(({ id, ...rest }) => <EmployeeComponent {...rest} key={id} />)
          }
        </div>
      </div>
    </div>
    
  )
}