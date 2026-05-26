import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Camera, LogOut, User as UserIcon, Phone, Mail, Building, Briefcase } from 'lucide-react';

const ProfilePage = () => {
  const { user, logout } = useAuth();

  // Safeguard check, although route guard should catch this
  if (!user) return null;

  return (
    <div className="flex flex-col h-full bg-popx-bg font-sans animate-fade-in">
      {/* Header */}
      <div className="bg-white px-5 py-3 border-b border-slate-200">
        <h1 className="text-[14px] font-semibold text-popx-text-dark font-sans tracking-wide">
          Account Settings
        </h1>
      </div>

      {/* Body Content Container */}
      <div className="flex-1 flex flex-col justify-between p-4 bg-popx-bg">
        {/* Profile Card and Bio */}
        <div className="flex flex-col">
          {/* User Info Row */}
          <div className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            {/* Avatar Container with Camera Icon Overlay */}
            <div className="relative">
              <img
                src={user.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'}
                alt={user.fullName}
                className="w-[64px] h-[64px] rounded-full object-cover border border-slate-200"
              />
              <button
                type="button"
                aria-label="Upload Avatar"
                className="absolute bottom-0 right-0 w-[20px] h-[20px] bg-popx-purple hover:bg-popx-purple-hover text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm transition-colors duration-200"
              >
                <Camera size={9} fill="currentColor" />
              </button>
            </div>

            {/* User Meta */}
            <div>
              <h2 className="text-[14px] font-bold text-popx-text-dark leading-tight">
                {user.fullName}
              </h2>
              <p className="text-[11px] text-popx-text-gray mt-0.5 font-medium break-all">
                {user.email}
              </p>
            </div>
          </div>

          {/* User Bio */}
          <div className="mt-3.5 px-1">
            <p className="text-[12.5px] text-popx-text-gray leading-[1.5] font-normal text-justify">
              {user.bio}
            </p>
          </div>

          {/* Extra Details Accordion/Section for Premium aesthetics */}
          <div className="mt-4 space-y-2.5 bg-white p-3.5 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100">
            <div className="flex items-center gap-3 text-xs text-popx-text-gray">
              <Phone size={14} className="text-popx-purple" />
              <span><strong>Phone:</strong> {user.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-popx-text-gray">
              <Building size={14} className="text-popx-purple" />
              <span><strong>Company:</strong> {user.company}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-popx-text-gray">
              <Briefcase size={14} className="text-popx-purple" />
              <span><strong>Agency Account:</strong> {user.isAgency ? 'Yes' : 'No'}</span>
            </div>
          </div>
        </div>

        {/* Separator and Logout Section */}
        <div className="mt-6">
          {/* Dashed Separator */}
          <div className="border-t border-dashed border-slate-300 w-full mb-4"></div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="w-full py-3.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 text-[14px] font-semibold rounded-[6px] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            <LogOut size={16} />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
