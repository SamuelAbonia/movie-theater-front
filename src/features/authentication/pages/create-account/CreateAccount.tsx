import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../../assets/logo.png';

interface CreateAccountProps {
  onSubmit: () => void;
  onError?: (error: string) => void;
}

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface ErrorForm {
  email?: string | null;
  password?: string | null;
}

const CreateAccount = ({
  onSubmit,
  onError,
}: CreateAccountProps): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorForm | null>(null);

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    setError((prev) => {
      const newErrors = { ...prev };

      if (id === 'email') {
        newErrors.email = isEmailValid(value) ? null : 'Invalid email address';
      }

      if (id === 'password' || id === 'confirmPassword') {
        if (id === 'password' && value !== formData.confirmPassword) {
          newErrors.password = 'Passwords do not match';
        } else if (id === 'confirmPassword' && value !== formData.password) {
          newErrors.password = 'Passwords do not match';
        } else {
          newErrors.password = null;
        }
      }

      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fakeCreateAccountService(formData.email);
      console.log(response);
      if (response.success) {
        onSubmit();
        setLoading(false);
      } else {
        setError({
          email: null,
          password: response.message || 'Failed to create account',
        });
        onError?.(response.message || 'Failed to create account');
        setLoading(false);
      }
    } catch (error) {
      onError?.(error as string);
      setError({ email: null, password: error as string });
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen overflow-hidden">
      <div className="flex flex-col justify-between p-10 bg-gradient-to-r from-gray-700 to-black">
        <img
          className="w-32 block"
          src={logo}
          alt="logo"
        />
        <div className="flex flex-col gap-4 w-8/12 text-6xl italic text-white animate-slide-up-delayed opacity-0">
          {' '}
          <span>Welcome.</span>
          <span className="bg-gradient-to-b from-white to-grey-100 inline-block text-transparent bg-clip-text leading-tight">
            Begin your cinematic adventure now with our ticketing platform!
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">Create an account</h2>
        <form
          className="flex flex-col gap-7 w-5/12"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-3 mt-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={handleInputChange}
              value={formData.email}
            />
            {error?.email && (
              <span className="text-red-500">{error.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={handleInputChange}
              value={formData.password}
            />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
              onChange={handleInputChange}
              value={formData.confirmPassword}
            />
            {error?.password && (
              <span className="text-red-500">{error.password}</span>
            )}
          </div>
          <button
            className="bg-sky-500 text-white p-3 rounded-lg mb-4 hover:bg-sky-600 transition-colors duration-300"
            type="submit"
            disabled={
              Object.values(error || {}).some((error) => error !== null) ||
              formData === null
            }
          >
            {loading ? (
              <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            ) : (
              'Create Account'
            )}
          </button>
        </form>
        <div className="flex gap-2">
          <span className="text-gray-400">Already have an account?</span>
          <Link
            className="text-sky-400 hover:text-sky-500 transition-colors duration-300"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const fakeCreateAccountService = async (email: string) => {
  return new Promise<{ success: boolean; message?: string }>((resolve) => {
    setTimeout(() => {
      if (email === 'test@example.com') {
        resolve({ success: false, message: 'Email already exists' });
      } else {
        resolve({ success: true });
      }
    }, 1000);
  });
};

export default CreateAccount;
