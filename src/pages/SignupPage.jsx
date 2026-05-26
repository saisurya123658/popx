import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import LoadingSpinner from '../components/LoadingSpinner';

const SignupPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: null, // Track agency status: true/false/null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === 'radio') {
      setFormData((prev) => ({ ...prev, [name]: value === 'yes' }));
      if (errors.isAgency) {
        setErrors((prev) => ({ ...prev, isAgency: '' }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length < 8) {
      newErrors.phone = 'Enter a valid phone number';
    }

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

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (formData.isAgency === null) {
      newErrors.isAgency = 'Please select if you are an agency';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const result = await register({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      company: formData.company,
      isAgency: formData.isAgency,
    });
    setIsSubmitting(false);

    if (result.success) {
      // Redirect to login after signup
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full px-5 pt-5 pb-4 bg-white font-sans overflow-y-auto animate-fade-in">
      {/* Title */}
      <div className="mb-4">
        <h1 className="text-[22px] font-extrabold text-popx-text-dark font-sans leading-tight">
          Create your <br />
          PopX account
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            required
            error={errors.fullName}
          />
          <Input
            label="Phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            error={errors.phone}
          />
          <Input
            label="Email address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
            error={errors.email}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
            error={errors.password}
          />
          <Input
            label="Company name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
            required
            error={errors.company}
          />

          {/* Agency Radio Button Group */}
          <div className="relative mb-4">
            <span className="text-[13px] font-semibold text-popx-text-dark block mb-2">
              Are you an Agency?<span className="text-red-500 ml-0.5">*</span>
            </span>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm text-popx-text-dark cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === true}
                  onChange={handleChange}
                  className="w-4.5 h-4.5 accent-popx-purple cursor-pointer"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-popx-text-dark cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === false}
                  onChange={handleChange}
                  className="w-4.5 h-4.5 accent-popx-purple cursor-pointer"
                />
                No
              </label>
            </div>
            {errors.isAgency && (
              <span className="text-[10px] text-red-500 mt-1 block absolute -bottom-4 left-0">
                {errors.isAgency}
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-popx-purple hover:bg-popx-purple-hover text-white text-[14px] font-semibold rounded-[6px] shadow-sm transition-all duration-200 flex items-center justify-center"
          >
            {isSubmitting ? <LoadingSpinner size="small" color="white" /> : 'Create Account'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
