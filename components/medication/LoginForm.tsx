import { useState } from 'react';
import { 
  Pill, 
  Lock, 
  Eye, 
  EyeOff, 
  Mail,
  RefreshCw,
  UserCheck,
  Shield
} from 'lucide-react';
import { LoginData } from './types';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface LoginFormProps {
  onLogin: (loginData: LoginData) => void;
  isLoading: boolean;
}

export function LoginForm({ onLogin, isLoading }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
    patientId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center surface-container-lowest py-12 px-4">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Healthcare Image */}
        <div className="hidden lg:block aspect-[4/3] shape-xl overflow-hidden surface-container">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=450&fit=crop&q=80"
            alt="Pharmacy and medication management at Healing Hands Healthcare"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="md-card elevation-3">
            <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div 
                className="w-16 h-16 mx-auto mb-4 shape-md flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--md-sys-color-primary-container)',
                  color: 'var(--md-sys-color-on-primary-container)'
                }}
              >
                <Pill className="w-8 h-8" />
              </div>
              <h1 className="headline-small mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Medication Collection
              </h1>
              <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Sign in to access your prescriptions
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label 
                    htmlFor="email"
                    className="label-medium block mb-2"
                    style={{ color: 'var(--md-sys-color-on-surface)' }}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Mail className="w-5 h-5" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 shape-md border border-[var(--md-sys-color-outline)] focus:border-[var(--md-sys-color-primary)] focus:outline-none transition-colors motion-duration-short4 motion-easing-standard"
                      style={{
                        backgroundColor: 'var(--md-sys-color-surface)',
                        color: 'var(--md-sys-color-on-surface)'
                      }}
                      placeholder="your.email@example.co.za"
                      required
                      aria-describedby="email-help"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="password"
                    className="label-medium block mb-2"
                    style={{ color: 'var(--md-sys-color-on-surface)' }}
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Lock className="w-5 h-5" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="w-full pl-12 pr-12 py-3 shape-md border border-[var(--md-sys-color-outline)] focus:border-[var(--md-sys-color-primary)] focus:outline-none transition-colors motion-duration-short4 motion-easing-standard"
                      style={{
                        backgroundColor: 'var(--md-sys-color-surface)',
                        color: 'var(--md-sys-color-on-surface)'
                      }}
                      placeholder="Enter your password"
                      required
                      aria-describedby="password-help"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 state-layer p-1 shape-md"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                      ) : (
                        <Eye className="w-5 h-5" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="patientId"
                    className="label-medium block mb-2"
                    style={{ color: 'var(--md-sys-color-on-surface)' }}
                  >
                    Patient ID (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <UserCheck className="w-5 h-5" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                    </div>
                    <input
                      type="text"
                      id="patientId"
                      value={loginData.patientId}
                      onChange={(e) => setLoginData({ ...loginData, patientId: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 shape-md border border-[var(--md-sys-color-outline)] focus:border-[var(--md-sys-color-primary)] focus:outline-none transition-colors motion-duration-short4 motion-easing-standard"
                      style={{
                        backgroundColor: 'var(--md-sys-color-surface)',
                        color: 'var(--md-sys-color-on-surface)'
                      }}
                      placeholder="P2024-001234"
                      aria-describedby="patient-id-help"
                    />
                  </div>
                  <p id="patient-id-help" className="label-small mt-1" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    Found on your patient card or appointment letter
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full md-button-filled py-3 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-describedby="login-button-help"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <UserCheck className="w-5 h-5" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </form>

            {/* Help Links */}
            <div className="mt-6 text-center space-y-2">
              <button className="body-small state-layer p-2 shape-md" style={{ color: 'var(--md-sys-color-primary)' }}>
                Forgot password?
              </button>
              <div className="flex items-center justify-center space-x-2">
                <span className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Need help?
                </span>
                <button className="body-small state-layer p-2 shape-md" style={{ color: 'var(--md-sys-color-primary)' }}>
                  Contact support
                </button>
              </div>
            </div>
          </div>
        </div>

          {/* Accessibility Information */}
          <div className="mt-6 p-4 shape-md surface-container-high">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--md-sys-color-primary)' }} />
              <div>
                <h3 className="title-small mb-1" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Accessible & Secure
                </h3>
                <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  This portal is designed for all users including those using screen readers and assistive technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}