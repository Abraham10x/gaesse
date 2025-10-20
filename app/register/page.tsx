'use client';

import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  User, Mail, Phone, MapPin, Briefcase, Award, 
  FileText, Globe2, Calendar, Building2, CheckCircle,
  AlertCircle, ArrowLeft, Upload, X, Loader2
} from 'lucide-react';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  expertLevel: string;
  yearsExperience: string;
  currentRole: string;
  currentCompany: string;
  primarySpecialization: string;
  secondarySpecializations: string[];
  servicesOffered: string[];
  linkedin: string;
  summary: string;
  certifications: string;
  agreeTerms: boolean;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function RegisterPage() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [uploadedCV, setUploadedCV] = useState<File | null>(null);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .required('First name is required'),
    lastName: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9+\-\s()]+$/, 'Invalid phone number')
      .required('Phone number is required'),
    
    country: Yup.string()
      .required('Country is required'),
    city: Yup.string()
      .required('City is required'),
    
    expertLevel: Yup.string()
      .oneOf(['global-expert', 'subject-matter-expert', 'practitioner'], 'Please select an expert level')
      .required('Expert level is required'),
    yearsExperience: Yup.string()
      .required('Years of experience is required'),
    currentRole: Yup.string()
      .required('Current role is required'),
    currentCompany: Yup.string()
      .required('Current/Last company is required'),
    
    primarySpecialization: Yup.string()
      .required('Primary specialization is required'),
    secondarySpecializations: Yup.array()
      .of(Yup.string())
      .min(1, 'Select at least one secondary specialization'),
    
    servicesOffered: Yup.array()
      .of(Yup.string())
      .min(1, 'Select at least one service'),
    
    linkedin: Yup.string()
      .url('Must be a valid URL')
      .matches(/linkedin\.com/, 'Must be a LinkedIn URL'),
    summary: Yup.string()
      .min(100, 'Summary must be at least 100 characters')
      .max(1000, 'Summary must not exceed 1000 characters')
      .required('Professional summary is required'),
    
    certifications: Yup.string(),
    
    agreeTerms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('You must accept the terms and conditions'),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      expertLevel: '',
      yearsExperience: '',
      currentRole: '',
      currentCompany: '',
      primarySpecialization: '',
      secondarySpecializations: [],
      servicesOffered: [],
      linkedin: '',
      summary: '',
      certifications: '',
      agreeTerms: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setSubmitStatus('loading');
      
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Form submitted:', values);
        console.log('Uploaded CV:', uploadedCV);
        
        setSubmitStatus('success');
        
        setTimeout(() => {
          formik.resetForm();
          setUploadedCV(null);
          setSubmitStatus('idle');
        }, 5000);
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitStatus('error');
      }
    },
  });

  const handleCVUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      setUploadedCV(file);
    }
  };

  const removeCVUpload = () => {
    setUploadedCV(null);
    const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const countries: string[] = [
    'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Angola', 'Egypt',
    'Algeria', 'Libya', 'Mozambique', 'Tanzania', 'Uganda', 'Cameroon',
    'Senegal', 'Ivory Coast', 'Ethiopia', 'Other'
  ];

  const specializations: string[] = [
    'Drilling Operations',
    'Production Engineering',
    'Reservoir Engineering',
    'Pipeline Engineering',
    'Offshore Operations',
    'Subsea Engineering',
    'Process Engineering',
    'Facilities Management',
    'Project Management',
    'HSE Management',
    'Quality Assurance',
    'Contract Management',
    'Geosciences',
    'Petroleum Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Instrumentation & Control',
    'Civil & Structural Engineering',
    'Procurement',
    'Regulatory Compliance'
  ];

  const services: string[] = [
    'Technical Assurance',
    'Project Assurance',
    'Contract Assurance',
    'Value Assurance',
    'Technical Support',
    'Project Management',
    'HSE Management',
    'Quality Control',
    'Training & Mentoring',
    'Regulatory Compliance',
    'Risk Assessment',
    'Feasibility Studies'
  ];

  const expertLevelOptions = [
    { value: 'global-expert', label: 'Global Expert', desc: '20+ years' },
    { value: 'subject-matter-expert', label: 'Subject Matter Expert', desc: '15+ years' },
    { value: 'practitioner', label: 'Practitioner', desc: '10+ years' }
  ];

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-12 text-center border-t-8 border-emerald-600">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-16 h-16 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Registration Successful!</h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Thank you for applying to GAESEE. Our team will review your application within 2-3 business days. You'll receive an email confirmation shortly.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg"
          >
            <ArrowLeft className="mr-3 w-5 h-5" />
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-6 px-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.history.back()}
              className="hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <img 
              src="/gaesee-logo.png" 
              alt="GAESEE" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-xl font-bold hidden sm:block">Expert Registration</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Join Africa's Premier Energy Expert Network
              </h2>
              <p className="text-slate-600 text-lg">
                Register your profile to connect with leading oil and gas companies across Africa. 
                All applications are thoroughly reviewed to maintain our network's quality standards.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 mt-6 p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-slate-700 text-sm">Verified Profile</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-slate-700 text-sm">Global Exposure</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-slate-700 text-sm">Premium Projects</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-8 text-black">
          {/* Personal Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-6 h-6 text-emerald-600" />
              <h3 className="text-2xl font-bold text-slate-900">Personal Information</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                    formik.touched.firstName && formik.errors.firstName
                      ? 'border-red-500'
                      : 'border-slate-300'
                  }`}
                  placeholder="John"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                    formik.touched.lastName && formik.errors.lastName
                      ? 'border-red-500'
                      : 'border-slate-300'
                  }`}
                  placeholder="Doe"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.lastName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-500'
                        : 'border-slate-300'
                    }`}
                    placeholder="john.doe@example.com"
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                      formik.touched.phone && formik.errors.phone
                        ? 'border-red-500'
                        : 'border-slate-300'
                    }`}
                    placeholder="+234 800 000 0000"
                  />
                </div>
                {formik.touched.phone && formik.errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Country *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <select
                    name="country"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                    className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                      formik.touched.country && formik.errors.country
                        ? 'border-red-500'
                        : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                {formik.touched.country && formik.errors.country && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.country}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                    formik.touched.city && formik.errors.city
                      ? 'border-red-500'
                      : 'border-slate-300'
                  }`}
                  placeholder="Lagos"
                />
                {formik.touched.city && formik.errors.city && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.city}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="w-6 h-6 text-emerald-600" />
              <h3 className="text-2xl font-bold text-slate-900">Professional Information</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Expert Level *
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { value: 'global-expert', label: 'Global Expert', desc: '20+ years' },
                    { value: 'subject-matter-expert', label: 'Subject Matter Expert', desc: '15+ years' },
                    { value: 'practitioner', label: 'Practitioner', desc: '10+ years' }
                  ].map((level) => (
                    <label
                      key={level.value}
                      className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formik.values.expertLevel === level.value
                          ? 'border-emerald-600 bg-emerald-50'
                          : 'border-slate-300 hover:border-emerald-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="expertLevel"
                        value={level.value}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="absolute opacity-0"
                      />
                      <span className="font-semibold text-slate-900">{level.label}</span>
                      <span className="text-sm text-slate-600 mt-1">{level.desc}</span>
                      {formik.values.expertLevel === level.value && (
                        <CheckCircle className="absolute top-4 right-4 w-5 h-5 text-emerald-600" />
                      )}
                    </label>
                  ))}
                </div>
                {formik.touched.expertLevel && formik.errors.expertLevel && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.expertLevel}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Years of Experience *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="number"
                      name="yearsExperience"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.yearsExperience}
                      className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                        formik.touched.yearsExperience && formik.errors.yearsExperience
                          ? 'border-red-500'
                          : 'border-slate-300'
                      }`}
                      placeholder="15"
                      min="0"
                    />
                  </div>
                  {formik.touched.yearsExperience && formik.errors.yearsExperience && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {formik.errors.yearsExperience}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Current Role/Title *
                  </label>
                  <input
                    type="text"
                    name="currentRole"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.currentRole}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                      formik.touched.currentRole && formik.errors.currentRole
                        ? 'border-red-500'
                        : 'border-slate-300'
                    }`}
                    placeholder="Senior Production Engineer"
                  />
                  {formik.touched.currentRole && formik.errors.currentRole && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {formik.errors.currentRole}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Current/Last Company *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="currentCompany"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.currentCompany}
                    className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                      formik.touched.currentCompany && formik.errors.currentCompany
                        ? 'border-red-500'
                        : 'border-slate-300'
                    }`}
                    placeholder="Shell Nigeria"
                  />
                </div>
                {formik.touched.currentCompany && formik.errors.currentCompany && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.currentCompany}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-6 h-6 text-emerald-600" />
              <h3 className="text-2xl font-bold text-slate-900">Areas of Expertise</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Primary Specialization *
                </label>
                <select
                  name="primarySpecialization"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.primarySpecialization}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                    formik.touched.primarySpecialization && formik.errors.primarySpecialization
                      ? 'border-red-500'
                      : 'border-slate-300'
                  }`}
                >
                  <option value="">Select Primary Specialization</option>
                  {specializations.map((spec) => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
                {formik.touched.primarySpecialization && formik.errors.primarySpecialization && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.primarySpecialization}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Secondary Specializations * (Select at least one)
                </label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 overflow-y-auto p-4 border border-slate-300 rounded-lg">
                  {specializations
                    .filter(s => s !== formik.values.primarySpecialization)
                    .map((spec) => (
                    <label
                      key={spec}
                      className="flex items-center space-x-2 cursor-pointer hover:text-emerald-600"
                    >
                      <input
                        type="checkbox"
                        name="secondarySpecializations"
                        value={spec}
                        onChange={formik.handleChange}
                        checked={formik.values.secondarySpecializations.includes(spec)}
                        className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                      />
                      <span className="text-sm text-slate-700">{spec}</span>
                    </label>
                  ))}
                </div>
                {formik.touched.secondarySpecializations && formik.errors.secondarySpecializations && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.secondarySpecializations}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <h3 className="text-2xl font-bold text-slate-900">Services You Can Provide</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <label
                  key={service}
                  className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formik.values.servicesOffered.includes(service)
                      ? 'border-emerald-600 bg-emerald-50'
                      : 'border-slate-300 hover:border-emerald-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    name="servicesOffered"
                    value={service}
                    onChange={formik.handleChange}
                    checked={formik.values.servicesOffered.includes(service)}
                    className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm font-medium text-slate-700">{service}</span>
                </label>
              ))}
            </div>
            {formik.touched.servicesOffered && formik.errors.servicesOffered && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formik.errors.servicesOffered}
              </p>
            )}
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-emerald-600" />
              <h3 className="text-2xl font-bold text-slate-900">Additional Information</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  LinkedIn Profile URL
                </label>
                <div className="relative">
                  <Globe2 className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="url"
                    name="linkedin"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.linkedin}
                    className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                      formik.touched.linkedin && formik.errors.linkedin
                        ? 'border-red-500'
                        : 'border-slate-300'
                    }`}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                {formik.touched.linkedin && formik.errors.linkedin && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.linkedin}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Professional Summary * (100-1000 characters)
                </label>
                <textarea
                  name="summary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.summary}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                    formik.touched.summary && formik.errors.summary
                      ? 'border-red-500'
                      : 'border-slate-300'
                  }`}
                  placeholder="Describe your professional background, key achievements, and areas of expertise..."
                />
                <div className="flex justify-between mt-1">
                  <div>
                    {formik.touched.summary && formik.errors.summary && (
                      <p className="text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formik.errors.summary}
                      </p>
                    )}
                  </div>
                  <span className={`text-sm ${
                    formik.values.summary.length < 100 
                      ? 'text-red-600' 
                      : formik.values.summary.length > 1000 
                      ? 'text-red-600' 
                      : 'text-slate-500'
                  }`}>
                    {formik.values.summary.length}/1000
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Professional Certifications
                </label>
                <textarea
                  name="certifications"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.certifications}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="List your relevant certifications (e.g., PMP, CEng, HSE Certifications, etc.)"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Upload CV/Resume (Optional)
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-emerald-500 transition-all">
                  {!uploadedCV ? (
                    <label className="cursor-pointer">
                      <input
                        id="cv-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleCVUpload}
                        className="hidden"
                      />
                      <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                      <p className="text-slate-600 font-semibold mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-slate-500">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </label>
                  ) : (
                    <div className="flex items-center justify-between bg-emerald-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-8 h-8 text-emerald-600" />
                        <div className="text-left">
                          <p className="font-semibold text-slate-900">{uploadedCV.name}</p>
                          <p className="text-sm text-slate-600">
                            {(uploadedCV.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeCVUpload}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="agreeTerms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.agreeTerms}
                className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500 mt-1"
              />
              <div className="flex-1">
                <label className="text-sm text-slate-700">
                  I agree to the{' '}
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                    Privacy Policy
                  </a>
                  . I confirm that all information provided is accurate and I understand that my profile will be reviewed before activation. *
                </label>
                {formik.touched.agreeTerms && formik.errors.agreeTerms && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.agreeTerms}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <button
              type="submit"
              disabled={formik.isSubmitting || submitStatus === 'loading'}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all shadow-lg ${
                formik.isSubmitting || submitStatus === 'loading'
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-xl'
              }`}
            >
              {formik.isSubmitting || submitStatus === 'loading' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting Application...
                </span>
              ) : (
                'Submit Registration'
              )}
            </button>

            <p className="text-center text-sm text-slate-600 mt-4">
              Already registered?{' '}
              <a href="/" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                Home Page
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <img 
                src="/gaesee-logo.png" 
                alt="GAESEE" 
                className="h-20 w-auto mb-6"
              />
              <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                Global African Energy Sector Expert Exchange - Connecting verified energy professionals with companies across Africa.
              </p>
              <p className="text-emerald-400 font-semibold text-lg">www.gaesee.com</p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Services</a></li>
                <li><a href="#experts" className="text-slate-400 hover:text-emerald-400 transition-colors">Expert Levels</a></li>
                <li><Link href="/register" className="text-slate-400 hover:text-emerald-400 transition-colors">Register</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-400">Nigeria & Across Africa</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <a href="mailto:info@gaesee.com" className="text-slate-400 hover:text-emerald-400 transition-colors">info@gaesee.com</a>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-400">Available via website</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400">&copy; 2025 GAESEE. All rights reserved.</p>
              <p className="text-slate-400">Powered by <span className="text-emerald-400 font-semibold">Aberdeen Commercial</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}