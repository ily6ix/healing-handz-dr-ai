import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  MessageSquare,
  Navigation
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '021 123 4567',
      secondary: 'Mon-Fri: 7:00-19:00',
      action: () => window.open('tel:+27211234567')
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@rauh-health.co.za',
      secondary: 'Response within 24h',
      action: () => window.open('mailto:info@rauh-health.co.za')
    },
    {
      icon: MapPin,
      title: 'Address',
      primary: '123 Long Street',
      secondary: 'Cape Town, 8001, Western Cape',
      action: () => window.open('https://maps.google.com/?q=123+Long+Street,+Cape+Town,+8001,+South+Africa', '_blank')
    }
  ];

  const openingHours = [
    { day: 'Monday', hours: '7:00 - 19:00' },
    { day: 'Tuesday', hours: '7:00 - 19:00' },
    { day: 'Wednesday', hours: '7:00 - 19:00' },
    { day: 'Thursday', hours: '7:00 - 19:00' },
    { day: 'Friday', hours: '7:00 - 19:00' },
    { day: 'Saturday', hours: '8:00 - 16:00' },
    { day: 'Sunday', hours: 'Emergency Only' }
  ];

  return (
    <div className="min-h-screen surface">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 surface-container-lowest">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-6">
                <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Contact
                </span>
              </div>
              
              <h1 className="display-small mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                We look forward to <span style={{ color: 'var(--md-sys-color-primary)' }}>hearing</span> from you
              </h1>
              
              <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Contact us for appointments, questions, or emergencies. 
                We are here to help you with all your healthcare needs in Cape Town.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.open('tel:+27211234567')}
                  className="md-button-filled flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </button>
                <button 
                  onClick={() => window.open('mailto:info@rauh-health.co.za')}
                  className="md-button-outlined flex items-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            <div className="aspect-[4/3] shape-xl overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&h=450&fit=crop&q=80"
                alt="Healing Hands Healthcare reception area and entrance in Cape Town"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="md-card cursor-pointer group"
                onClick={method.action}
              >
                <div className="p-6 text-center">
                  <div 
                    className="w-12 h-12 mx-auto mb-4 shape-md flex items-center justify-center group-hover:scale-110 transition-transform motion-duration-medium2 motion-easing-emphasized"
                    style={{ 
                      backgroundColor: 'var(--md-sys-color-primary-container)',
                      color: 'var(--md-sys-color-on-primary-container)'
                    }}
                  >
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {method.title}
                  </h3>
                  <p className="body-medium mb-1" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {method.primary}
                  </p>
                  <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {method.secondary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours & Map */}
      <section className="py-16 surface-container">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Opening Hours */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div 
                  className="w-10 h-10 shape-md flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-primary-container)',
                    color: 'var(--md-sys-color-on-primary-container)'
                  }}
                >
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="headline-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Opening Hours
                </h2>
              </div>
              
              <div className="md-card">
                <div className="p-6">
                  <div className="space-y-4">
                    {openingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                          {schedule.day}
                        </span>
                        <span 
                          className="body-medium" 
                          style={{ 
                            color: schedule.hours === 'Emergency Only' 
                              ? 'var(--md-sys-color-error)' 
                              : 'var(--md-sys-color-on-surface)' 
                          }}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div 
                className="mt-6 p-4 shape-md"
                style={{ 
                  backgroundColor: 'var(--md-sys-color-error-container)',
                  color: 'var(--md-sys-color-on-error-container)'
                }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="w-5 h-5" />
                  <h3 className="title-medium">Emergency Service</h3>
                </div>
                <p className="body-small mb-2">
                  Life-threatening emergencies: Call 10177 (ER24) or 112
                </p>
                <p className="body-small">
                  Non-emergency urgent care: 021 123 4567 (24/7)
                </p>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 shape-md flex items-center justify-center"
                    style={{ 
                      backgroundColor: 'var(--md-sys-color-primary-container)',
                      color: 'var(--md-sys-color-on-primary-container)'
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="headline-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    Find Us
                  </h2>
                </div>
                <button 
                  onClick={() => window.open('https://maps.google.com/?q=123+Long+Street,+Cape+Town,+8001,+South+Africa', '_blank')}
                  className="md-button-outlined flex items-center space-x-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </button>
              </div>
              
              <div className="aspect-[4/3] shape-lg overflow-hidden elevation-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.173658024556!2d18.418361715435436!3d-33.92077308063567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676c55b5cef7%3A0x35f1e9e96c6b8a68!2sLong%20St%2C%20Cape%20Town%20City%20Centre%2C%20Cape%20Town%2C%208001%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1635789012345"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rauh Health Center Location"
                />
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    <strong>Parking:</strong>
                  </p>
                  <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    Secure parking available
                  </p>
                </div>
                <div className="text-center">
                  <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    <strong>Accessibility:</strong>
                  </p>
                  <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    Wheelchair accessible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Information Section */}
      <section className="py-16 surface-container-highest">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] shape-lg overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=450&fit=crop&q=80"
                alt="Modern medical consultation room with state-of-the-art equipment"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                State-of-the-art medical facility
              </h2>
              <p className="body-large mb-6" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Our modern healthcare facility features the latest medical technology and equipment, 
                ensuring you receive the highest quality care in a comfortable environment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-2 h-2 shape-full" style={{ backgroundColor: 'var(--md-sys-color-primary)' }}></div>
                  </div>
                  <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    Advanced diagnostic equipment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-2 h-2 shape-full" style={{ backgroundColor: 'var(--md-sys-color-primary)' }}></div>
                  </div>
                  <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    Wheelchair accessible facilities
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-2 h-2 shape-full" style={{ backgroundColor: 'var(--md-sys-color-primary)' }}></div>
                  </div>
                  <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    Comfortable waiting areas
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-2 h-2 shape-full" style={{ backgroundColor: 'var(--md-sys-color-primary)' }}></div>
                  </div>
                  <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    Secure parking available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Ready to schedule your appointment?
            </h2>
            <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Contact us today to book your appointment or ask any questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('tel:+27211234567')}
                className="md-button-filled flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
              <button 
                onClick={() => window.open('mailto:info@rauh-health.co.za')}
                className="md-button-outlined flex items-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}