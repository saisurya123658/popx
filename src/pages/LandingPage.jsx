import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-full px-5 pb-6 bg-white font-sans animate-fade-in">
      {/* Title & Description anchored towards the bottom */}
      <div className="mb-6">
        <h1 className="text-[24px] font-extrabold text-popx-text-dark font-sans leading-tight">
          Welcome to PopX
        </h1>
        <p className="text-[13px] text-popx-text-gray mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => navigate('/signup')}
          className="w-full py-3.5 bg-popx-purple hover:bg-popx-purple-hover text-white text-[14px] font-semibold rounded-[6px] shadow-sm transition-all duration-200"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full py-3.5 bg-popx-purple-light hover:bg-popx-purple-lightHover text-popx-purple text-[14px] font-semibold rounded-[6px] shadow-sm transition-all duration-200"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
