import React from 'react';
import { useState } from 'react';
import { Camera} from 'lucide-react';

// Mock user data
const user = {
  name: "Marry Doe",
  email: "Marry@Gmail.Com",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80",
  bio: "Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
};

function App() {
  const [currentView, setCurrentView] = useState('welcome'); // Three states are used : welcome, signin, signup, settings
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? e.target.id : value
    }));
  };

  const renderWelcome = () => (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">Welcome to PopX</h2>
      <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <button 
        onClick={() => setCurrentView('signup')}
        className="w-full bg-[#6C25FF] text-white rounded-lg py-3 mb-3"
      >
        Create Account
      </button>
      
      <button 
        onClick={() => setCurrentView('signin')}
        className="w-full bg-[#CBCBCB] bg-opacity-30 text-[#6C25FF] rounded-lg py-3"
      >
        Already Registered? Login
      </button>
    </div>
  );

  const renderSignIn = () => (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">Signin to your PopX account</h2>
      <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#6C25FF] mb-1">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter email address"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#6C25FF] mb-1">Password</label>
          <input 
            type="password" 
            placeholder="Enter password"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        
        <button 
          onClick={() => setCurrentView('settings')}
          className="w-full bg-[#CBCBCB] text-white rounded-lg py-3 mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );

  const renderSignUp = () => (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Create your PopX account</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#6C25FF] mb-1">Full Name*</label>
          <input 
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            type="text" 
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6C25FF] mb-1">Phone Number*</label>
          <input 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            type="tel" 
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6C25FF] mb-1">Email address*</label>
          <input 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email" 
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6C25FF] mb-1">Password*</label>
          <input 
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            type="password" 
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6C25FF] mb-1">Company name*</label>
          <input 
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            type="text" 
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6C25FF] mb-3">Are you an Agency?*</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="agency"
                id="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="agency"
                id="no"
                checked={formData.isAgency === 'no'}
                onChange={handleInputChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        <button 
          onClick={() => setCurrentView('settings')}
          className="w-full bg-[#6C25FF] text-white rounded-lg py-3 mt-4"
        >
          Create Account
        </button>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white p-4 shadow-sm mb-4">
        <h1 className="text-xl font-semibold">Account Settings</h1>
      </div>
      
      <div className="p-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1 rounded-full">
              <Camera className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        
        <p className="mt-6 text-gray-700">
          {user.bio}
        </p>
      </div>
    </div>
  );

  const views = {
    welcome: renderWelcome,
    signin: renderSignIn,
    signup: renderSignUp,
    settings: renderSettings
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {views[currentView as keyof typeof views]()}
    </div>
  );
}

export default App;