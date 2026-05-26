import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import LoadingSpinner from '../components/LoadingSpinner';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Check if form is filled (for active styling)
  const isFormFilled = formData.email.trim() !== '' && formData.password.trim() !== '';

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const result = await login(formData.email, formData.password);
    setIsSubmitting(false);

    if (result.success) {
      navigate('/profile');
    }
  };

  return (
    <div className="flex flex-col h-full px-5 pt-5 pb-5 bg-white font-sans animate-fade-in">
      {/* Title */}
      <div className="mb-4">
        <h1 className="text-[22px] font-extrabold text-popx-text-dark font-sans leading-tight">
          Signin to your <br />
          PopX account
        </h1>
        <p className="text-[13px] text-popx-text-gray mt-1.5 leading-relaxed">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between mt-4">
        <div className="flex flex-col gap-1.5">
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            error={errors.email}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            error={errors.password}
          />
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3.5 text-[14px] font-semibold rounded-[6px] transition-all duration-300 shadow-sm flex items-center justify-center ${
              isSubmitting
                ? 'bg-popx-purple text-white cursor-not-allowed'
                : isFormFilled
                ? 'bg-popx-purple hover:bg-popx-purple-hover text-white'
                : 'bg-zinc-300 text-zinc-500 cursor-not-allowed hover:bg-zinc-350'
            }`}
          >
            {isSubmitting ? <LoadingSpinner size="small" color="white" /> : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
