// app/register/page.tsx - Complete Registration Page
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ArrowLeft, User, Building2, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const disciplines = [
  'Petroleum Engineering',
  'Drilling & Completion',
  'Reservoir Engineering',
  'Production Engineering',
  'Process Engineering',
  'Pipeline Engineering',
  'HSE (Health, Safety & Environment)',
  'Project Management',
  'Geosciences & Geology',
  'Facilities Engineering',
  'Subsea Engineering',
  'Maintenance & Reliability',
  'Operations Management',
  'Quality Assurance',
  'Contract Management',
  'Regulatory Compliance',
  'Instrumentation & Control',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Civil & Structural Engineering',
  'Other'
];

const expertValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .min(10, 'Please enter a valid phone number'),
  country: Yup.string().required('Country is required'),
  expertLevel: Yup.string().required('Please select your expert level'),
  discipline: Yup.string().required('Please select your primary discipline'),
  yearsOfExperience: Yup.string().required('Please select your years of experience'),
  position: Yup.string().required('Current/Recent position is required'),
  linkedIn: Yup.string().url('Please enter a valid URL'),
  summary: Yup.string()
    .min(100, 'Please provide at least 100 characters describing your expertise')
    .max(1000, 'Summary should not exceed 1000 characters')
    .required('Professional summary is required')
});

const companyValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .min(10, 'Please enter a valid phone number'),
  country: Yup.string().required('Country is required'),
  companyName: Yup.string()
    .required('Company name is required')
    .min(2, 'Company name must be at least 2 characters'),
  position: Yup.string().required('Your position is required'),
  website: Yup.string().url('Please enter a valid URL'),
  summary: Yup.string()
    .min(100, 'Please provide at least 100 characters describing your needs')
    .max(1000, 'Description should not exceed 1000 characters')
    .required('Please describe the expertise you are looking for')
});

export default function RegisterPage() {
  const [accountType, setAccountType] = useState<'expert' | 'company'>('expert');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      expertLevel: '',
      discipline: '',
      yearsOfExperience: '',
      companyName: '',
      position: '',
      linkedIn: '',
      website: '',
      summary: ''
    },
    validationSchema: accountType === 'expert' ? expertValidationSchema : companyValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form submitted:', { accountType, ...values });
        setSubmitSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error('Submission error:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  });

  const handleAccountTypeChange = (type: 'expert' | 'company') => {
    setAccountType(type);
    formik.resetForm();
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border-t-8 border-emerald-600">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Registration Successful!
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Thank you for joining GAESEE. Our team will carefully review your application and contact you within 2-3 business days.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
              <p className="text-slate-700">
                <strong>Next Steps:</strong> Check your email for a confirmation message. If you don't receive it within 24 hours, please check your spam folder.
              </p>
            </div>
            <Link 
              href="/"
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
            >
              <ArrowLeft className="mr-3 w-5 h-5" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/">
              <img 
                src="https://i.postimg.cc/gJZNxbSQ/gaesee-logo.png" 
                alt="GAESEE" 
                className="h-20 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link 
              href="/"
              className="flex items-center text-slate-600 hover:text-emerald-600 font-semibold transition-colors text-lg"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-600 text-white rounded-full px-6 py-2 mb-6">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Secure Registration</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Join GAESEE Network
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Connect with Africa's premier oil and gas professionals or find the expertise your company needs
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            
            {/* Account Type Selection */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Select Your Account Type
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <button
                  type="button"
                  onClick={() => handleAccountTypeChange('expert')}
                  className={`group p-8 rounded-2xl border-3 transition-all duration-300 ${
                    accountType === 'expert'
                      ? 'border-emerald-500 bg-emerald-500/20 shadow-xl shadow-emerald-500/20 scale-105'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-emerald-500/50'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto transition-colors ${
                    accountType === 'expert' ? 'bg-emerald-500' : 'bg-white/10 group-hover:bg-emerald-500/50'
                  }`}>
                    <User className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl text-white mb-3">Expert Professional</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Register your expertise and connect with leading energy companies across Africa
                  </p>
                </button>
                
                <button
                  type="button"
                  onClick={() => handleAccountTypeChange('company')}
                  className={`group p-8 rounded-2xl border-3 transition-all duration-300 ${
                    accountType === 'company'
                      ? 'border-emerald-500 bg-emerald-500/20 shadow-xl shadow-emerald-500/20 scale-105'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-emerald-500/50'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto transition-colors ${
                    accountType === 'company' ? 'bg-emerald-500' : 'bg-white/10 group-hover:bg-emerald-500/50'
                  }`}>
                    <Building2 className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl text-white mb-3">Company</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Access our network of verified experts to support your operations
                  </p>
                </button>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={formik.handleSubmit} className="p-10 md:p-12">
              
              {/* Personal Information Section */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="flex-1 h-1 bg-emerald-600"></div>
                  <h3 className="text-3xl font-bold text-slate-900 px-6">
                    Personal Information
                  </h3>
                  <div className="flex-1 h-1 bg-emerald-600"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                        formik.touched.firstName && formik.errors.firstName
                          ? 'border-red-500 bg-red-50'
                          : 'border-slate-300 focus:border-emerald-500 bg-white'
                      } outline-none transition-all`}
                      placeholder="John"
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className="flex items-center mt-2 text-sm text-red-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formik.errors.firstName}
                      </div>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                        formik.touched.lastName && formik.errors.lastName
                          ? 'border-red-500 bg-red-50'
                          : 'border-slate-300 focus:border-emerald-500 bg-white'
                      } outline-none transition-all`}
                      placeholder="Doe"
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className="flex items-center mt-2 text-sm text-red-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formik.errors.lastName}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                        formik.touched.email && formik.errors.email
                          ? 'border-red-500 bg-red-50'
                          : 'border-slate-300 focus:border-emerald-500 bg-white'
                      } outline-none transition-all`}
                      placeholder="john.doe@company.com"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="flex items-center mt-2 text-sm text-red-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formik.errors.email}
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                        formik.touched.phone && formik.errors.phone
                          ? 'border-red-500 bg-red-50'
                          : 'border-slate-300 focus:border-emerald-500 bg-white'
                      } outline-none transition-all`}
                      placeholder="+234 XXX XXX XXXX"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="flex items-center mt-2 text-sm text-red-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formik.errors.phone}
                      </div>
                    )}
                  </div>

                  {/* Country */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                        formik.touched.country && formik.errors.country
                          ? 'border-red-500 bg-red-50'
                          : 'border-slate-300 focus:border-emerald-500 bg-white'
                      } outline-none transition-all`}
                      placeholder="Nigeria"
                    />
                    {formik.touched.country && formik.errors.country && (
                      <div className="flex items-center mt-2 text-sm text-red-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formik.errors.country}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Expert-specific fields */}
              {accountType === 'expert' && (
                <div className="mb-12">
                  <div className="flex items-center mb-8">
                    <div className="flex-1 h-1 bg-emerald-600"></div>
                    <h3 className="text-3xl font-bold text-slate-900 px-6">
                      Professional Information
                    </h3>
                    <div className="flex-1 h-1 bg-emerald-600"></div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Expert Level */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Expert Level <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="expertLevel"
                        value={formik.values.expertLevel}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                          formik.touched.expertLevel && formik.errors.expertLevel
                            ? 'border-red-500 bg-red-50'
                            : 'border-slate-300 focus:border-emerald-500 bg-white'
                        } outline-none transition-all`}
                      >
                        <option value="">Select your level</option>
                        <option value="global">Global Expert (20+ years)</option>
                        <option value="sme">Subject Matter Expert (15+ years)</option>
                        <option value="practitioner">Practitioner (10+ years)</option>
                      </select>
                      {formik.touched.expertLevel && formik.errors.expertLevel && (
                        <div className="flex items-center mt-2 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formik.errors.expertLevel}
                        </div>
                      )}
                    </div>

                    {/* Primary Discipline */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Primary Discipline <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="discipline"
                        value={formik.values.discipline}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                          formik.touched.discipline && formik.errors.discipline
                            ? 'border-red-500 bg-red-50'
                            : 'border-slate-300 focus:border-emerald-500 bg-white'
                        } outline-none transition-all`}
                      >
                        <option value="">Select discipline</option>
                        {disciplines.map(disc => (
                          <option key={disc} value={disc}>{disc}</option>
                        ))}
                      </select>
                      {formik.touched.discipline && formik.errors.discipline && (
                        <div className="flex items-center mt-2 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formik.errors.discipline}
                        </div>
                      )}
                    </div>

                    {/* Years of Experience */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Years of Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="yearsOfExperience"
                        value={formik.values.yearsOfExperience}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                          formik.touched.yearsOfExperience && formik.errors.yearsOfExperience
                            ? 'border-red-500 bg-red-50'
                            : 'border-slate-300 focus:border-emerald-500 bg-white'
                        } outline-none transition-all`}
                      >
                        <option value="">Select range</option>
                        <option value="10-15">10-15 years</option>
                        <option value="15-20">15-20 years</option>
                        <option value="20-25">20-25 years</option>
                        <option value="25+">25+ years</option>
                      </select>
                      {formik.touched.yearsOfExperience && formik.errors.yearsOfExperience && (
                        <div className="flex items-center mt-2 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formik.errors.yearsOfExperience}
                        </div>
                      )}
                    </div>

                    {/* Position */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Current/Recent Position <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formik.values.position}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                          formik.touched.position && formik.errors.position
                            ? 'border-red-500 bg-red-50'
                            : 'border-slate-300 focus:border-emerald-500 bg-white'
                        } outline-none transition-all`}
                        placeholder="Senior Petroleum Engineer"
                      />
                      {formik.touched.position && formik.errors.position && (
                        <div className="flex items-center mt-2 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formik.errors.position}
                        </div>
                      )}
                    </div>

                    {/* LinkedIn */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        LinkedIn Profile URL <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        name="linkedIn"
                        value={formik.values.linkedIn}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                          formik.touched.linkedIn && formik.errors.linkedIn
                            ? 'border-red-500 bg-red-50'
                            : 'border-slate-300 focus:border-emerald-500 bg-white'
                        } outline-none transition-all`}
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                      {formik.touched.linkedIn && formik.errors.linkedIn && (
                        <div className="flex items-center mt-2 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formik.errors.linkedIn}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Company-specific fields */}
              {accountType === 'company' && (
                <div className="mb-12">
                  <div className="flex items-center mb-8">
                    <div className="flex-1 h-1 bg-emerald-600"></div>
                    <h3 className="text-3xl font-bold text-slate-900 px-6">
                      Company Information
                    </h3>
                    <div className="flex-1 h-1 bg-emerald-600"></div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                          formik.touched.companyName && formik.errors.companyName
                            ? 'border-red-500 bg-red-50'
                            : 'border-slate-300 focus:border-emerald-500 bg-white'
                        } outline-none transition-all`}
                        placeholder="Your Company Name Ltd"
                      />
                      {formik.touched.companyName && formik.errors.companyName && (
                        <div className="flex items-center mt-2 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formik.errors.companyName}
                        </div>
                      )}
                    </div>

                    {/* Position */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Your Position <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formik.values.position}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                          formik.touched.position && formik.errors.position
                            ? 'border-red-500 bg-red-50'
                            : 'border-slate-300 focus:border-emerald-500 bg-white'
                        } outline-none transition-all`}
                        placeholder="HR Manager / Operations Director"
                      />
                      {formik.touched.position && formik.errors.position && (
                        <div className="flex items-center mt-2 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formik.errors.position}
                        </div>
                      )}
                    </div>

                    {/* Website */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Company Website <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formik.values.website}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                          formik.touched.website && formik.errors.website
                            ? 'border-red-500 bg-red-50'
                            : 'border-slate-300 focus:border-emerald-500 bg-white'
                        } outline-none transition-all`}
                        placeholder="https://yourcompany.com"
                      />
                      {formik.touched.website && formik.errors.website && (
                        <div className="flex items-center mt-2 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formik.errors.website}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Summary Section */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="flex-1 h-1 bg-emerald-600"></div>
                  <h3 className="text-3xl font-bold text-slate-900 px-6">
                    {accountType === 'expert' ? 'Professional Summary' : 'Expertise Needed'}
                  </h3>
                  <div className="flex-1 h-1 bg-emerald-600"></div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {accountType === 'expert' 
                      ? 'Tell us about your professional background and expertise' 
                      : 'Describe the type of expertise your company is looking for'}
                    <span className="text-red-500"> *</span>
                  </label>
                  <textarea
                    name="summary"
                    value={formik.values.summary}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    rows={8}
                    className={`w-full px-4 py-4 rounded-lg border-2 text-lg ${
                      formik.touched.summary && formik.errors.summary
                        ? 'border-red-500 bg-red-50'
                        : 'border-slate-300 focus:border-emerald-500 bg-white'
                    } outline-none transition-all resize-none`}
                    placeholder={accountType === 'expert'
                      ? "Highlight your key achievements, specializations, major projects you've worked on, certifications, and what makes you stand out in your field. Minimum 100 characters."
                      : "Describe the specific expertise, skills, or support your company needs. Include project details, required experience level, and duration if applicable. Minimum 100 characters."
                    }
                  />
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      {formik.touched.summary && formik.errors.summary && (
                        <div className="flex items-center text-sm text-red-600">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formik.errors.summary}
                        </div>
                      )}
                    </div>
                    <span className={`text-sm ${
                      formik.values.summary.length < 100 ? 'text-red-600' : 'text-slate-500'
                    }`}>
                      {formik.values.summary.length} / 1000 characters
                    </span>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-700 leading-relaxed">
                      By submitting this registration, you agree to GAESEE's terms of service and privacy policy. 
                      All information provided will be verified, and false information may result in account suspension.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:from-slate-400 disabled:to-slate-500 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {formik.isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-3 w-6 h-6" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Registration
                      <CheckCircle className="ml-3 w-6 h-6" />
                    </>
                  )}
                </button>
                <Link
                  href="/"
                  className="sm:w-auto px-10 py-5 rounded-lg font-semibold text-xl border-2 border-slate-300 text-slate-700 hover:bg-slate-100 transition-all text-center"
                >
                  Cancel
                </Link>
              </div>

              {/* Help Text */}
              <div className="mt-8 text-center">
                <p className="text-slate-600">
                  Need assistance? Contact us at{' '}
                  <a href="mailto:info@gaesee.com" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                    info@gaesee.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">Verified Profiles</h4>
              <p className="text-slate-600">All registrations are thoroughly reviewed and verified</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">Trusted by Leading Companies</h4>
              <p className="text-slate-600">Join hundreds of professionals and companies</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-emerald-600" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">Quick Response</h4>
              <p className="text-slate-600">We review applications within 2-3 business days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://i.postimg.cc/gJZNxbSQ/gaesee-logo.png" 
                alt="GAESEE" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-slate-400 leading-relaxed">
                Global African Energy Sector Expert Exchange
              </p>
            </div>
            </div>
            </div>
        </footer>
        </div>)}
              