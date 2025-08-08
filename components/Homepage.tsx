import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Heart, 
  Users, 
  Award,
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  Pill,
  Stethoscope,
  Activity,
  UserCheck,
  Brain,
  Eye,
  Ambulance,
  Clipboard,
  TestTube,
  Syringe
} from 'lucide-react';

interface HomepageProps {
  onNavigate: (page: string) => void;
}

export function Homepage({ onNavigate }: HomepageProps) {
  const healthServices = [
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive primary care for all ages',
      color: 'var(--md-sys-color-primary)'
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Heart health and cardiovascular care',
      color: 'var(--md-sys-color-tertiary)'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Neurological disorders and treatments',
      color: 'var(--md-sys-color-secondary)'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care and vision services',
      color: 'var(--md-sys-color-primary)'
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency medical services',
      color: 'var(--md-sys-color-error)'
    },
    {
      icon: TestTube,
      title: 'Laboratory Services',
      description: 'Advanced diagnostic testing',
      color: 'var(--md-sys-color-tertiary)'
    },
    {
      icon: Syringe,
      title: 'Vaccinations',
      description: 'Immunization and vaccine services',
      color: 'var(--md-sys-color-secondary)'
    },
    {
      icon: UserCheck,
      title: 'Preventive Care',
      description: 'Health screenings and wellness programs',
      color: 'var(--md-sys-color-primary)'
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Schedule your visit online',
      action: () => onNavigate('appointment'),
      primary: true
    },
    {
      icon: Pill,
      title: 'Medication Collection',
      description: 'Access your prescriptions',
      action: () => onNavigate('medication'),
      primary: false
    },
    {
      icon: Clipboard,
      title: 'Test Results',
      description: 'Access your lab results',
      action: () => window.open('#results', '_self'),
      primary: false
    },
    {
      icon: Ambulance,
      title: 'Emergency',
      description: 'Urgent medical assistance',
      action: () => window.open('tel:10177'),
      primary: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah van der Merwe',
      rating: 5,
      text: 'Excellent healthcare services. The medical team is professional and truly caring.',
      treatment: 'General Medicine'
    },
    {
      name: 'Michael Botha',
      rating: 5,
      text: 'Outstanding cardiac care. Dr. Williams saved my life with his expertise.',
      treatment: 'Cardiology'
    },
    {
      name: 'Nomsa Mthembu',
      rating: 5,
      text: 'Best medical centre in Cape Town. Modern equipment and skilled doctors.',
      treatment: 'Preventive Care'
    }
  ];

  const features = [
    'State-of-the-art medical technology',
    'Comprehensive health services',
    'Experienced medical professionals',
    'Same-day appointments available',
    'Patient-centered care approach',
    'Modern diagnostic equipment'
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
                  Your trusted medical centre in Cape Town
                </span>
              </div>
              
              <h1 className="display-small mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Compassionate <span style={{ color: 'var(--md-sys-color-primary)' }}>healthcare</span> in caring hands
              </h1>
              
              <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Welcome to Healing Hands Healthcare - your trusted medical facility providing 
                comprehensive healthcare services for the entire family. From preventive care 
                to specialized treatments, we're here for your health journey in Cape Town.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('appointment')}
                  className="md-button-filled flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
                <button 
                  onClick={() => onNavigate('medication')}
                  className="md-button-outlined flex items-center justify-center space-x-2"
                >
                  <Pill className="w-5 h-5" />
                  <span>Medication Collection</span>
                </button>
              </div>
            </div>
            
            <div className="aspect-[4/3] shape-lg overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop"
                alt="Modern healthcare facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="headline-large mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Quick Access to Healthcare Services
            </h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Get immediate access to the services you need most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <div 
                key={index} 
                className={`md-card group cursor-pointer ${action.primary ? 'elevation-3' : ''}`}
                onClick={action.action}
                style={action.primary ? {
                  backgroundColor: 'var(--md-sys-color-primary-container)',
                  color: 'var(--md-sys-color-on-primary-container)'
                } : {}}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    action.action();
                  }
                }}
                aria-label={`${action.title}: ${action.description}`}
              >
                <div className="p-6 text-center">
                  <div 
                    className="w-12 h-12 mx-auto mb-4 shape-md flex items-center justify-center group-hover:scale-110 transition-transform motion-duration-medium2 motion-easing-emphasized"
                    style={{ 
                      backgroundColor: action.primary 
                        ? 'var(--md-sys-color-primary)' 
                        : `${action.title === 'Emergency' ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-primary)'}20`,
                      color: action.primary 
                        ? 'var(--md-sys-color-on-primary)' 
                        : action.title === 'Emergency' ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-primary)'
                    }}
                  >
                    <action.icon className="w-6 h-6" />
                  </div>
                  <h3 className="title-medium mb-2" style={{ 
                    color: action.primary ? 'var(--md-sys-color-on-primary-container)' : 'var(--md-sys-color-on-surface)' 
                  }}>
                    {action.title}
                  </h3>
                  <p className="body-medium" style={{ 
                    color: action.primary ? 'var(--md-sys-color-on-primary-container)' : 'var(--md-sys-color-on-surface-variant)' 
                  }}>
                    {action.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Services Section */}
      <section className="py-16 surface-container">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
              <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Medical Specialties
              </span>
            </div>
            <h2 className="headline-large mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Complete healthcare under one roof
            </h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              From general medicine to specialized care, we provide comprehensive 
              medical services for all your health needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthServices.map((service, index) => (
              <div key={index} className="md-card group cursor-pointer">
                <div className="p-6 text-center">
                  <div 
                    className="w-12 h-12 mx-auto mb-4 shape-md flex items-center justify-center group-hover:scale-110 transition-transform motion-duration-medium2 motion-easing-emphasized"
                    style={{ 
                      backgroundColor: `${service.color}20`,
                      color: service.color
                    }}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {service.title}
                  </h3>
                  <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] shape-lg overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=450&fit=crop"
                alt="Medical team consultation"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
                <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  About Our Practice
                </span>
              </div>
              <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Your health is our commitment
              </h2>
              <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                For over 20 years, Healing Hands Healthcare has been providing exceptional 
                medical care to the Cape Town community. Our multidisciplinary team of 
                healthcare professionals is dedicated to delivering personalized, 
                compassionate care using the latest medical technology.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" style={{ color: 'var(--md-sys-color-primary)' }} />
                    </div>
                    <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => onNavigate('about')}
                className="md-button-filled group flex items-center space-x-2"
              >
                <span>Learn more about us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform motion-duration-short4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 surface-container">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
              <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Patient Testimonials
              </span>
            </div>
            <h2 className="headline-large mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Over 5000 satisfied patients
            </h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Read what our patients say about their healthcare experience with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="md-card">
                <div className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="body-medium mb-4 italic" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="title-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                        {testimonial.name}
                      </p>
                      <p className="label-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                        {testimonial.treatment}
                      </p>
                    </div>
                    <div className="px-2 py-1 shape-sm surface-container-highest">
                      <span className="label-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
                <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Contact & Location
                </span>
              </div>
              <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                We're here for your health
              </h2>
              <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Contact us for appointments, consultations, or medical emergencies. 
                Our healthcare team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-10 h-10 shape-md flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: 'var(--md-sys-color-primary-container)',
                      color: 'var(--md-sys-color-on-primary-container)'
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="title-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>Medical Centre</h3>
                    <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>123 Long Street</p>
                    <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>Cape Town, 8001</p>
                    <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>Western Cape, South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-10 h-10 shape-md flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: 'var(--md-sys-color-primary-container)',
                      color: 'var(--md-sys-color-on-primary-container)'
                    }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="title-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>Emergency & Appointments</h3>
                    <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>021 123 4567</p>
                    <p className="label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>24/7 Emergency Line</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-10 h-10 shape-md flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: 'var(--md-sys-color-primary-container)',
                      color: 'var(--md-sys-color-on-primary-container)'
                    }}
                  >
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="title-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>Opening Hours</h3>
                    <div className="label-medium space-y-1" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                      <div className="flex justify-between gap-4">
                        <span>Mon-Fri:</span>
                        <span>7:00-19:00</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Saturday:</span>
                        <span>8:00-16:00</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Emergency:</span>
                        <span>24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                title="Healing Hands Healthcare Location"
                className="shape-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 surface-container-highest">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Ready to prioritize your health?
            </h2>
            <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Schedule an appointment today or access your medications through 
              our secure patient portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('appointment')}
                className="md-button-filled flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment Now</span>
              </button>
              <button 
                onClick={() => onNavigate('medication')}
                className="md-button-outlined flex items-center justify-center space-x-2"
              >
                <Pill className="w-5 h-5" />
                <span>Medication Portal</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}