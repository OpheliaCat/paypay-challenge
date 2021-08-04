import { useState } from 'react';
import { IoMdLogIn } from 'react-icons/io';

export default function LoginFormComponent() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div className="flex-1 max-w-xs p-4 bg-gray-700 text-sm text-gray-700">
            <label className="block text-white tracking-widest leading-6">Username:</label>
            <input 
                value={username} 
                onChange={({ target }) => setUsername(target.value)} 
                placeholder="Username..."
                className="w-full px-2 py-1 rounded-sm tracking-widest leading-6"
            />
            <label className="block mt-2 text-white tracking-widest leading-6">Password:</label>
            <input 
                value={password} 
                onChange={({ target }) => setPassword(target.value)} 
                placeholder="Password..."
                className="w-full px-2 py-1 rounded-sm tracking-widest leading-6"
            />
            <button 
                onClick={() => console.log({ username, password })}
                className="flex justify-center w-full mt-6 p-2 bg-green-600 text-white tracking-widest"
            >
                <IoMdLogIn size="20" />
                <span className='ml-1'>Login</span>
            </button>
        </div>
        
    )
}