import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Homepage } from './components/Homepage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { TeamPage } from './components/TeamPage';
import { ContactPage } from './components/ContactPage';
import { AppointmentBookingPage } from './components/AppointmentBookingPage';
import { MedicationCollectionPage } from './components/MedicationCollectionPage';
import { AIChatbotPage } from './components/AIChatbotPage';
import { ProphylaxePage } from './components/ProphylaxePage';
import { ZahnersatzPage } from './components/ZahnersatzPage';
import { ImplantologiePage } from './components/ImplantologiePage';
import { AesthetischePage } from './components/AesthetischePage';
import { ParodontologiePage } from './components/ParodontologiePage';
import { EndodontiePage } from './components/EndodontiePage';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import { Calendar, Phone, Pill, Bot } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={handleNavigation} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigation} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigation} />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      case 'appointment':
        return <AppointmentBookingPage onNavigate={handleNavigation} />;
      case 'medication':
        return <MedicationCollectionPage />;
      case 'ai-chatbot':
        return <AIChatbotPage onNavigate={handleNavigation} />;
      case 'prophylaxe':
        return <ProphylaxePage />;
      case 'zahnersatz':
        return <ZahnersatzPage />;
      case 'implantologie':
        return <ImplantologiePage />;
      case 'aesthetische':
        return <AesthetischePage />;
      case 'parodontologie':
        return <ParodontologiePage />;
      case 'endodontie':
        return <EndodontiePage />;
      default:
        return <Homepage onNavigate={handleNavigation} />;
    }
  };

  // Material 3 Navigation Component
  const MaterialNavigation = () => {
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Health Services' },
      { id: 'about', label: 'About Us' },
      { id: 'team', label: 'Medical Team' },
      { id: 'contact', label: 'Contact' },
    ];

    return (
      <nav className="navigation-bar sticky top-0 z-50 w-full surface-container border-b border-[var(--md-sys-color-outline-variant)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer state-layer relative shape-md p-2 -m-2" 
              onClick={() => setCurrentPage('home')}
            >
              <div className="w-10 h-10 shape-md flex items-center justify-center" style={{
                backgroundColor: 'var(--md-sys-color-primary)',
                color: 'var(--md-sys-color-on-primary)'
              }}>
                <div className="w-5 h-5 shape-sm" style={{
                  backgroundColor: 'var(--md-sys-color-on-primary)'
                }}></div>
              </div>
              <div>
                <h1 className="title-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Healing Hands Healthcare
                </h1>
                <p className="label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Cape Town Medical Centre
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`label-large px-4 py-2 shape-lg relative state-layer transition-all motion-duration-short4 motion-easing-standard ${
                    currentPage === item.id
                      ? 'surface-container-highest'
                      : 'hover:surface-container-low'
                  }`}
                  style={{
                    color: currentPage === item.id 
                      ? 'var(--md-sys-color-on-surface)' 
                      : 'var(--md-sys-color-on-surface-variant)',
                    backgroundColor: currentPage === item.id 
                      ? 'var(--md-sys-color-surface-container-highest)' 
                      : 'transparent'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Quick Actions - Desktop */}
              <div className="hidden xl:flex items-center space-x-3">
                <div className="flex items-center space-x-2 label-large" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  <Phone className="w-4 h-4" />
                  <span>021 123 4567</span>
                </div>
                
                {/* AI Chatbot Button */}
                <button 
                  className="md-button-outlined flex items-center space-x-2 label-large motion-duration-short4 motion-easing-standard"
                  onClick={() => setCurrentPage('ai-chatbot')}
                >
                  <Bot className="w-4 h-4" />
                  <span>Dr. AI</span>
                </button>
                
                {/* Medication Collection Button */}
                <button 
                  className="md-button-outlined flex items-center space-x-2 label-large motion-duration-short4 motion-easing-standard"
                  onClick={() => setCurrentPage('medication')}
                >
                  <Pill className="w-4 h-4" />
                  <span>Medication</span>
                </button>
                
                {/* Book Appointment Button */}
                <button 
                  onClick={() => setCurrentPage('appointment')}
                  className="md-button-filled flex items-center space-x-2 label-large motion-duration-short4 motion-easing-standard"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>

              {/* Medium Screen Actions */}
              <div className="hidden lg:flex xl:hidden items-center space-x-2">
                <button 
                  className="md-button-outlined p-2 shape-md"
                  onClick={() => setCurrentPage('ai-chatbot')}
                  aria-label="AI Assistant"
                >
                  <Bot className="w-4 h-4" />
                </button>
                <button 
                  className="md-button-outlined p-2 shape-md"
                  onClick={() => setCurrentPage('medication')}
                  aria-label="Medication Collection"
                >
                  <Pill className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setCurrentPage('appointment')}
                  className="md-button-filled flex items-center space-x-2 label-large motion-duration-short4 motion-easing-standard"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book</span>
                </button>
              </div>

              {/* Mobile Actions */}
              <div className="lg:hidden flex items-center space-x-2">
                <button 
                  className="md-button-outlined p-2 shape-md"
                  onClick={() => setCurrentPage('ai-chatbot')}
                  aria-label="AI Assistant"
                >
                  <Bot className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setCurrentPage('appointment')}
                  className="md-button-filled flex items-center space-x-2 label-large motion-duration-short4 motion-easing-standard"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="hidden sm:inline">Book</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden border-t border-[var(--md-sys-color-outline-variant)] py-2">
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`label-medium px-3 py-2 shape-lg whitespace-nowrap relative state-layer transition-all motion-duration-short4 motion-easing-standard ${
                    currentPage === item.id
                      ? 'surface-container-highest'
                      : 'hover:surface-container-low'
                  }`}
                  style={{
                    color: currentPage === item.id 
                      ? 'var(--md-sys-color-on-surface)' 
                      : 'var(--md-sys-color-on-surface-variant)',
                    backgroundColor: currentPage === item.id 
                      ? 'var(--md-sys-color-surface-container-highest)' 
                      : 'transparent'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col surface">
        <MaterialNavigation />
        <main className="flex-1">
          {renderPage()}
        </main>
        {currentPage !== 'ai-chatbot' && <Footer />}
        
        {/* Floating Contact Widget - Available on all pages except AI chatbot */}
        {currentPage !== 'ai-chatbot' && <FloatingContact onNavigate={handleNavigation} />}
      </div>
    </ThemeProvider>
  );
}