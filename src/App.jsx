// import React from 'react';
// import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import ProtectedRoute from './routes/ProtectedRoute';
// import LandingPage from './pages/LandingPage';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
// import ProfilePage from './pages/ProfilePage';
// import { CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

// // Custom Toast component nested within the active provider state
// const ToastNotification = () => {
//   const { toast } = useAuth();
//   if (!toast) return null;

//   return (
//     <div
//       className={`absolute top-14 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] px-4 py-3 rounded-xl shadow-lg border flex items-center gap-2.5 z-50 animate-fade-in transition-all duration-300 ${
//         toast.type === 'success'
//           ? 'bg-emerald-50 border-emerald-100 text-emerald-800'
//           : 'bg-rose-50 border-rose-100 text-rose-800'
//       }`}
//     >
//       {toast.type === 'success' ? (
//         <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
//       ) : (
//         <AlertTriangle size={16} className="text-rose-500 shrink-0" />
//       )}
//       <span className="text-[12px] font-medium tracking-wide leading-tight">{toast.message}</span>
//     </div>
//   );
// };

// // Status bar inside the smartphone simulation
// const SimulatedStatusBar = () => {
//   return (
//     <div className="hidden sm:flex items-center justify-between px-5 py-1.5 bg-white text-slate-400 text-[9px] font-semibold tracking-wide border-b border-slate-100 select-none shrink-0">
//       <span>9:41</span>
//       {/* Phone camera notch / island spacer */}
//       <div className="w-[85px] h-[14px] bg-slate-900 rounded-full -mt-0.5 ml-4 shadow-inner"></div>
//       <div className="flex items-center gap-1">
//         <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
//           <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.79-1.79C9.09 19.64 10.5 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
//         </svg>
//         <span>5G</span>
//         <div className="w-4 h-2 border border-slate-400 rounded-xs p-0.5 flex items-center">
//           <div className="w-full h-full bg-slate-400 rounded-3xs"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Navigation header with back button (for subpages like login & signup)
// const AppHeader = () => {
//   const location = useLocation();
//   const navigate = useLocation();
  
//   const showBackButton = ['/login', '/signup'].includes(location.pathname);

//   if (!showBackButton) return null;

//   return (
//     <div className="px-5 py-2.5 bg-white border-b border-slate-100 flex items-center shrink-0">
//       <Link
//         to="/"
//         className="p-1 -ml-1 text-slate-700 hover:text-popx-purple rounded-full hover:bg-slate-50 transition-colors duration-200"
//         title="Back"
//       >
//         <ArrowLeft size={16} />
//       </Link>
//     </div>
//   );
// };

// const AppContent = () => {
//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 gap-8 lg:gap-16 font-sans">
//       {/* Branding Info Column (Visible on Desktops/Large Screens) */}
//       <div className="hidden lg:flex flex-col max-w-md animate-fade-in">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 rounded-2xl bg-popx-purple flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
//             P
//           </div>
//           <span className="text-2xl font-black tracking-tight text-slate-800">PopX Authentication</span>
//         </div>
//         <h2 className="text-[36px] font-black leading-tight text-slate-800 mt-6 tracking-tight">
//           Modern MERN Stack <br />
//           <span className="text-popx-purple">Mobile Experience</span>
//         </h2>
//         <p className="text-slate-600 mt-4 leading-relaxed text-sm">
//           A high-fidelity implementation of the PopX application. Designed with precise branding purple color schemes, custom input overlaps, and state management powered by JWT authentication in MongoDB.
//         </p>
        
//         {/* Verification Checklist */}
//         <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
//           <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
//             <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[9px] font-bold">✓</span>
//             MongoDB Integration
//           </div>
//           <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
//             <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[9px] font-bold">✓</span>
//             JWT Session Persistence
//           </div>
//           <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
//             <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[9px] font-bold">✓</span>
//             Out-of-box Mobile Responsiveness
//           </div>
//         </div>
//       </div>

//       {/* Smartphone Simulation Wrapper */}
//       <div className="relative w-full max-w-[350px] h-[100dvh] sm:h-[660px] bg-white sm:rounded-[36px] sm:border-[8px] sm:border-slate-900 sm:shadow-[0_20px_50px_-12px_rgba(108,37,232,0.2)] overflow-hidden flex flex-col transition-all duration-300">
        
//         {/* Status bar */}
//         <SimulatedStatusBar />

//         {/* Back navigation header */}
//         <AppHeader />

//         {/* Active Toast Notification */}
//         <ToastNotification />

//         {/* Core Mobile Screen */}
//         <div className="flex-1 overflow-y-auto relative bg-white">
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/signup" element={<SignupPage />} />
            
//             {/* Protected routes */}
//             <Route
//               path="/profile"
//               element={
//                 <ProtectedRoute>
//                   <ProfilePage />
//                 </ProtectedRoute>
//               }
//             />
            
//             {/* Catch-all redirection */}
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>
//         </div>
        
//         {/* Simulated Home Indicator Bar */}
//         <div className="hidden sm:block py-2 bg-white text-center select-none shrink-0">
//           <div className="w-[120px] h-[5px] bg-slate-800 rounded-full mx-auto"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import { CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

// Toast Notification
const ToastNotification = () => {
  const { toast } = useAuth();

  if (!toast) return null;

  return (
    <div
      className={`absolute top-14 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] px-4 py-3 rounded-2xl shadow-2xl border flex items-center gap-3 z-50 animate-fade-in backdrop-blur-xl ${
        toast.type === 'success'
          ? 'bg-emerald-50/90 border-emerald-100 text-emerald-800'
          : 'bg-rose-50/90 border-rose-100 text-rose-800'
      }`}
    >
      {toast.type === 'success' ? (
        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
      ) : (
        <AlertTriangle size={16} className="text-rose-500 shrink-0" />
      )}

      <span className="text-[12px] font-medium tracking-wide leading-tight">
        {toast.message}
      </span>
    </div>
  );
};

// Simulated Mobile Status Bar
const SimulatedStatusBar = () => {
  return (
    <div className="hidden sm:flex items-center justify-between px-5 py-2 bg-white/80 backdrop-blur-xl text-slate-500 text-[10px] font-semibold tracking-wide border-b border-slate-100 select-none shrink-0">
      <span>9:41</span>

      {/* Dynamic Island */}
      <div className="w-[85px] h-[16px] bg-black rounded-full shadow-inner"></div>

      <div className="flex items-center gap-1">
        <span>5G</span>

        <div className="w-4 h-2 border border-slate-400 rounded-sm p-[1px]">
          <div className="w-full h-full bg-slate-400 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

// Header with Back Button
const AppHeader = () => {
  const location = useLocation();

  const showBackButton = ['/login', '/signup'].includes(location.pathname);

  if (!showBackButton) return null;

  return (
    <div className="px-5 py-3 bg-white/80 backdrop-blur-xl border-b border-slate-100 flex items-center shrink-0">
      <Link
        to="/"
        className="p-2 -ml-1 text-slate-700 hover:text-popx-purple rounded-full hover:bg-purple-50 transition-all duration-300"
      >
        <ArrowLeft size={18} />
      </Link>
    </div>
  );
};

const AppContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3ff] via-white to-[#ede9fe] flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 gap-8 lg:gap-20 font-sans overflow-hidden relative">

      {/* Background Decorative Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Branding Section */}
      <div className="hidden lg:flex flex-col max-w-md z-10 animate-fade-in">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-xl">
            P
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-800">
              PopX Authentication
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Secure MERN Platform
            </p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[42px] font-black leading-tight text-slate-800 mt-8 tracking-tight">
          Modern MERN Stack <br />

          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Mobile Experience
          </span>
        </h2>

        {/* Description */}
        <p className="text-slate-600 mt-5 leading-8 text-[15px]">
          A high-fidelity implementation of the PopX application.
          Designed with elegant purple branding, premium UI effects,
          JWT authentication, and MongoDB integration for scalable
          user management.
        </p>

        {/* Features */}
        <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">

          <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
            <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[10px] shadow">
              ✓
            </span>

            MongoDB Integration
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
            <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[10px] shadow">
              ✓
            </span>

            JWT Session Persistence
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
            <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[10px] shadow">
              ✓
            </span>

            Premium Mobile Responsiveness
          </div>
        </div>
      </div>

      {/* Mobile Device */}
      <div className="relative w-full max-w-[350px] h-[100dvh] sm:h-[680px] bg-white/80 backdrop-blur-2xl sm:rounded-[38px] sm:border-[8px] sm:border-white/40 shadow-[0_20px_70px_-15px_rgba(124,58,237,0.35)] overflow-hidden flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_90px_-15px_rgba(124,58,237,0.45)] phone-float z-10">

        {/* Status Bar */}
        <SimulatedStatusBar />

        {/* Header */}
        <AppHeader />

        {/* Toast */}
        <ToastNotification />

        {/* Main Screen */}
        <div className="flex-1 overflow-y-auto relative bg-white">
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/signup" element={<SignupPage />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Home Indicator */}
        <div className="hidden sm:block py-2 bg-white/80 backdrop-blur-xl text-center select-none shrink-0">
          <div className="w-[120px] h-[5px] bg-slate-800 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
