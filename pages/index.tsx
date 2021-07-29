import EmployeeComponent from '../components/employee';

export default function HomePage() {
  return(
    <div className='container mx-auto mt-5'>
      <div className='grid grid-cols-12 gap-10 py-15 px-10 lg:px-25'>
        <div className='col-span-12 lg:col-span-3 bg-gray-800 rounded-sm'>Sidebar</div>
        <div className='col-span-12 lg:col-span-9 bg-gray-800 rounded-sm'>
          <EmployeeComponent />
        </div>
      </div>
    </div>
    
  )
}