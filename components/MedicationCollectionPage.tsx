import { useState } from 'react';
import { 
  User, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Package, 
  RefreshCw,
  Bell,
  Settings,
  LogOut,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Pill
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LoginForm } from './medication/LoginForm';
import { PrescriptionCard } from './medication/PrescriptionCard';
import { mockUser, mockPrescriptions } from './medication/mockData';
import { LoginData } from './medication/types';

export function MedicationCollectionPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('prescriptions');

  const handleLogin = async (loginData: LoginData) => {
    setIsLoading(true);
    
    // Mock login process
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('prescriptions');
  };

  const readyPrescriptions = mockPrescriptions.filter(p => p.status === 'ready');
  const preparingPrescriptions = mockPrescriptions.filter(p => p.status === 'preparing');
  const collectedPrescriptions = mockPrescriptions.filter(p => p.status === 'collected');

  // User Dashboard Component
  const UserDashboard = () => (
    <div className="min-h-screen surface">
      {/* Header */}
      <section className="py-6 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 shape-md overflow-hidden surface-container-highest">
                  {mockUser.profileImage ? (
                    <ImageWithFallback
                      src={mockUser.profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-6 h-6" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 shape-full bg-green-500 border-2 border-white"></div>
              </div>
              <div>
                <h1 className="headline-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Welcome back, {mockUser.firstName}
                </h1>
                <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Patient ID: {mockUser.patientId}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="md-button-outlined p-2 shape-md" aria-label="Notifications">
                <Bell className="w-5 h-5" />
              </button>
              <button className="md-button-outlined p-2 shape-md" aria-label="Settings">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={handleLogout}
                className="md-button-outlined flex items-center space-x-2"
                aria-label="Sign out"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section className="py-6 surface-container">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md-card">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                      Ready for Collection
                    </p>
                    <p className="headline-medium" style={{ color: 'var(--md-sys-color-primary)' }}>
                      {readyPrescriptions.length}
                    </p>
                  </div>
                  <div 
                    className="w-12 h-12 shape-md flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--md-sys-color-primary-container)',
                      color: 'var(--md-sys-color-on-primary-container)'
                    }}
                  >
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md-card">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                      Being Prepared
                    </p>
                    <p className="headline-medium" style={{ color: 'var(--md-sys-color-tertiary)' }}>
                      {preparingPrescriptions.length}
                    </p>
                  </div>
                  <div 
                    className="w-12 h-12 shape-md flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--md-sys-color-tertiary-container)',
                      color: 'var(--md-sys-color-on-tertiary-container)'
                    }}
                  >
                    <RefreshCw className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md-card">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                      This Month
                    </p>
                    <p className="headline-medium" style={{ color: 'var(--md-sys-color-secondary)' }}>
                      {collectedPrescriptions.length}
                    </p>
                  </div>
                  <div 
                    className="w-12 h-12 shape-md flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--md-sys-color-secondary-container)',
                      color: 'var(--md-sys-color-on-secondary-container)'
                    }}
                  >
                    <Package className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-6 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 mb-6">
            {[
              { id: 'prescriptions', label: 'My Prescriptions', icon: Pill },
              { id: 'profile', label: 'Profile', icon: User },
              { id: 'history', label: 'History', icon: Clock }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 shape-md transition-all motion-duration-short4 motion-easing-standard ${
                  activeTab === tab.id
                    ? 'md-button-filled'
                    : 'md-button-outlined'
                }`}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === 'prescriptions' && (
              <div className="space-y-6">
                {/* Ready for Collection */}
                {readyPrescriptions.length > 0 && (
                  <div>
                    <h2 className="headline-small mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      Ready for Collection
                    </h2>
                    <div className="grid gap-4">
                      {readyPrescriptions.map((prescription) => (
                        <PrescriptionCard
                          key={prescription.id}
                          prescription={prescription}
                          containerColor="var(--md-sys-color-primary-container)"
                          onContainerColor="var(--md-sys-color-on-primary-container)"
                          statusLabel="Ready"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Being Prepared */}
                {preparingPrescriptions.length > 0 && (
                  <div>
                    <h2 className="headline-small mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      Being Prepared
                    </h2>
                    <div className="grid gap-4">
                      {preparingPrescriptions.map((prescription) => (
                        <PrescriptionCard
                          key={prescription.id}
                          prescription={prescription}
                          containerColor="var(--md-sys-color-tertiary-container)"
                          onContainerColor="var(--md-sys-color-on-tertiary-container)"
                          statusLabel="Preparing"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="max-w-2xl">
                <h2 className="headline-small mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Profile Information
                </h2>
                <div className="md-card">
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-20 h-20 shape-md overflow-hidden surface-container-highest">
                        {mockUser.profileImage ? (
                          <ImageWithFallback
                            src={mockUser.profileImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <User className="w-8 h-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="title-large" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                          {mockUser.firstName} {mockUser.lastName}
                        </h3>
                        <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                          Patient ID: {mockUser.patientId}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="title-medium mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                          Contact Information
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Mail className="w-4 h-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                            <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                              {mockUser.email}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                            <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                              {mockUser.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="title-medium mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                          Medical Information
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-4 h-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                            <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                              DOB: {new Date(mockUser.dateOfBirth).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CreditCard className="w-4 h-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                            <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                              Medical Aid: {mockUser.insuranceNumber}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-[var(--md-sys-color-outline-variant)]">
                      <button className="md-button-outlined">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div>
                <h2 className="headline-small mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Collection History
                </h2>
                <div className="grid gap-4">
                  {collectedPrescriptions.map((prescription) => (
                    <PrescriptionCard
                      key={prescription.id}
                      prescription={prescription}
                      containerColor="var(--md-sys-color-secondary-container)"
                      onContainerColor="var(--md-sys-color-on-secondary-container)"
                      statusLabel="Collected"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 surface-container-highest">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-medium mb-6 text-center" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Need Help?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div 
                  className="w-12 h-12 mx-auto mb-4 shape-md flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--md-sys-color-primary-container)',
                    color: 'var(--md-sys-color-on-primary-container)'
                  }}
                >
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Call Pharmacy
                </h3>
                <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  021 123 4567
                </p>
              </div>
              
              <div className="text-center">
                <div 
                  className="w-12 h-12 mx-auto mb-4 shape-md flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--md-sys-color-primary-container)',
                    color: 'var(--md-sys-color-on-primary-container)'
                  }}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Email Support
                </h3>
                <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  pharmacy@solutions-health.co.za
                </p>
              </div>
              
              <div className="text-center">
                <div 
                  className="w-12 h-12 mx-auto mb-4 shape-md flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--md-sys-color-primary-container)',
                    color: 'var(--md-sys-color-on-primary-container)'
                  }}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Visit Us
                </h3>
                <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  123 Long Street, Cape Town
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return isLoggedIn ? <UserDashboard /> : <LoginForm onLogin={handleLogin} isLoading={isLoading} />;
}