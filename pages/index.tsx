import EmployeeComponent from '../components/employee';

export default function HomePage() {
  return(
    <div className='container mx-auto'>
      <div className='grid grid-cols-12 gap-10 py-15 px-10 lg:px-25'>
        <div className='col-span-12 lg:col-span-3 bg-gray-200'>Sidebar</div>
        <div className='col-span-12 lg:col-span-9 bg-blue-200'>
          <EmployeeComponent />
        </div>
      </div>
    </div>
    
  )
}