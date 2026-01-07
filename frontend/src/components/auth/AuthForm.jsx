import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, User, Mail, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/input';

function AuthForm({ type, onSubmit }) {
  // 1. Add State for Name
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ CHANGED: Made this function async to handle API calls properly
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ CHANGED: Added 'await' so we wait for the backend response
      await onSubmit({ name, email, password, confirmPassword });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      // ✅ CHANGED: setLoading(false) is now here.
      // It runs ONLY after the API call finishes (success or fail).
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-full bg-[#1e90ff]/10 flex items-center justify-center">
          <Shield className="w-6 h-6 text-[#1e90ff]" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-2">
        {type === 'login' && 'Welcome back'}
        {type === 'register' && 'Create your account'}
        {type === 'forgot-password' && 'Reset your password'}
      </h2>

      <p className="text-[#717d8a] text-center mb-8">
        {type === 'login' && 'Enter your credentials to access your account'}
        {type === 'register' && 'Join our community of cybersecurity professionals'}
        {type === 'forgot-password' && "We'll send you a link to reset your password"}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* 3. Add Name Input Field (Only for Register) */}
        {type === 'register' && (
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717d8a]" />
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="pl-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717d8a]" />
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {type !== 'forgot-password' && (
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              {type === 'login' && (
                <Link
                  to="/forgot-password"
                  className="text-xs text-[#1e90ff] hover:underline"
                >
                  Forgot password?
                </Link>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717d8a]" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="pl-10 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-[#717d8a]" />
                ) : (
                  <Eye className="w-5 h-5 text-[#717d8a]" />
                )}
              </button>
            </div>
          </div>
        )}

        {type === 'register' && (
          <div className="space-y-1">
            <label htmlFor="confirm-password" className="text-sm font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717d8a]" />
              <Input
                id="confirm-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="pl-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        <Button
          type="submit"
          className="w-full h-11 gap-2"
          disabled={loading}
          style={{ backgroundColor: '#1e90ff', color: '#f4f8fb' }}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              {type === 'login' && 'Sign in'}
              {type === 'register' && 'Create account'}
              {type === 'forgot-password' && 'Send reset link'}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>

        {type !== 'forgot-password' && (
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white  text-muted-foreground">
                or continue with
              </span>
            </div>
          </div>
        )}

        {type !== 'forgot-password' && (
          <Button
            type="button"
            variant="outline"
            className="w-full h-11 gap-2"
            onClick={() => console.log('Google sign in clicked')}
          >
             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.20455C17.64 8.56637 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4"/>
              <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853"/>
              <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957273C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
              <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
            </svg>
            Google
          </Button>
        )}
      </form>
      
      <div className="mt-8 text-center text-sm">
        {type === 'login' && (
          <p className="text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#1e90ff] hover:underline font-medium">
              Sign up
            </Link>
          </p>
        )}
        {type === 'register' && (
          <p className="text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-[#1e90ff] hover:underline font-medium">
              Sign in
            </Link>
          </p>
        )}
        {type === 'forgot-password' && (
          <p className="text-muted-foreground">
            Remember your password?{' '}
            <Link to="/login" className="text-[#1e90ff] hover:underline font-medium">
              Sign in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export { AuthForm };