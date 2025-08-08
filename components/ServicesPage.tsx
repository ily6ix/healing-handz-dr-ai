import { 
  Stethoscope,
  Heart, 
  Brain,
  Eye,
  Activity,
  TestTube,
  Syringe,
  UserCheck,
  ArrowRight,
  Calendar,
  Pill,
  Bone,
  Baby,
  Zap,
  Microscope,
  Shield,
  Users
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const healthServices = [
    {
      id: 'general-medicine',
      title: 'General Medicine',
      description: 'Comprehensive primary care including routine check-ups, chronic disease management, and preventive care.',
      icon: Stethoscope,
      features: ['Annual physical exams', 'Chronic disease management', 'Preventive screenings', 'Health counseling']
    },
    {
      id: 'cardiology',
      title: 'Cardiology',
      description: 'Expert heart care including diagnostics, treatment, and management of cardiovascular conditions.',
      icon: Heart,
      features: ['ECG & Echo tests', 'Heart disease treatment', 'Blood pressure management', 'Cardiac rehabilitation']
    },
    {
      id: 'neurology',
      title: 'Neurology',
      description: 'Specialized care for neurological disorders affecting the brain, spinal cord, and nervous system.',
      icon: Brain,
      features: ['Headache treatment', 'Stroke prevention', 'Epilepsy management', 'Memory disorders']
    },
    {
      id: 'ophthalmology',
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine vision exams to advanced surgical procedures.',
      icon: Eye,
      features: ['Vision testing', 'Cataract surgery', 'Glaucoma treatment', 'Retinal care']
    },
    {
      id: 'emergency-care',
      title: 'Emergency Medicine',
      description: '24/7 emergency medical services for urgent health conditions and medical emergencies.',
      icon: Activity,
      features: ['24/7 emergency care', 'Trauma treatment', 'Critical care', 'Emergency surgery']
    },
    {
      id: 'laboratory',
      title: 'Laboratory Services',
      description: 'Advanced diagnostic testing and laboratory services for accurate medical diagnosis.',
      icon: TestTube,
      features: ['Blood tests', 'Urinalysis', 'Microbiology', 'Pathology services']
    },
    {
      id: 'immunization',
      title: 'Immunization Services',
      description: 'Comprehensive vaccination programs for children and adults including travel vaccines.',
      icon: Syringe,
      features: ['Childhood vaccines', 'Adult immunizations', 'Travel vaccines', 'Flu shots']
    },
    {
      id: 'preventive-care',
      title: 'Preventive Care',
      description: 'Proactive health services focused on disease prevention and health maintenance.',
      icon: UserCheck,
      features: ['Health screenings', 'Cancer prevention', 'Wellness programs', 'Lifestyle counseling']
    },
    {
      id: 'orthopedics',
      title: 'Orthopedics',
      description: 'Specialized care for musculoskeletal conditions including bones, joints, and muscles.',
      icon: Bone,
      features: ['Joint replacement', 'Sports medicine', 'Fracture treatment', 'Physical therapy']
    },
    {
      id: 'pediatrics',
      title: 'Pediatrics',
      description: 'Specialized medical care for infants, children, and adolescents from birth to 18 years.',
      icon: Baby,
      features: ['Well-child visits', 'Pediatric vaccinations', 'Growth monitoring', 'Developmental assessments']
    },
    {
      id: 'dermatology',
      title: 'Dermatology',
      description: 'Comprehensive skin care including medical and cosmetic dermatology services.',
      icon: Shield,
      features: ['Skin cancer screening', 'Acne treatment', 'Cosmetic procedures', 'Rash diagnosis']
    },
    {
      id: 'radiology',
      title: 'Radiology',
      description: 'Advanced medical imaging services for accurate diagnosis and treatment planning.',
      icon: Zap,
      features: ['X-rays', 'CT scans', 'MRI imaging', 'Ultrasound']
    }
  ];

  const quickServices = [
    {
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Schedule your medical consultation',
      action: () => onNavigate('appointment')
    },
    {
      icon: Pill,
      title: 'Medication Collection',
      description: 'Pick up your prescriptions',
      action: () => onNavigate('medication')
    },
    {
      icon: TestTube,
      title: 'Lab Results',
      description: 'Access your test results online',
      action: () => window.open('#results', '_self')
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 urgent medical assistance',
      action: () => window.open('tel:112')
    }
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
                  Healthcare Services
                </span>
              </div>
              
              <h1 className="display-small mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Comprehensive <span style={{ color: 'var(--md-sys-color-primary)' }}>medical care</span> for every need
              </h1>
              
              <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                From primary care to specialized treatments, our medical center offers a complete 
                range of healthcare services using advanced technology and compassionate care. 
                Serving the Cape Town community with free, quality healthcare.
              </p>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  className="md-button-filled flex items-center space-x-2"
                  onClick={() => onNavigate('appointment')}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
                <button 
                  className="md-button-outlined flex items-center space-x-2"
                  onClick={() => onNavigate('medication')}
                >
                  <Pill className="w-5 h-5" />
                  <span>Medication Collection</span>
                </button>
              </div>
            </div>

            <div className="aspect-[4/3] shape-xl overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666214280577-909075ec4a23?w=600&h=450&fit=crop&q=80"
                alt="Comprehensive healthcare services at Healing Hands Healthcare Cape Town - showing medical professionals and modern equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="headline-large mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Quick Access Services
            </h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Fast access to essential healthcare services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickServices.map((service, index) => (
              <div 
                key={index} 
                className="md-card group cursor-pointer elevation-2 hover:elevation-4"
                onClick={service.action}
              >
                <div className="p-6 text-center">
                  <div 
                    className="w-12 h-12 mx-auto mb-4 shape-md flex items-center justify-center group-hover:scale-110 transition-transform motion-duration-medium2 motion-easing-emphasized"
                    style={{ 
                      backgroundColor: service.title === 'Emergency Care' 
                        ? 'var(--md-sys-color-error-container)' 
                        : 'var(--md-sys-color-primary-container)',
                      color: service.title === 'Emergency Care' 
                        ? 'var(--md-sys-color-on-error-container)' 
                        : 'var(--md-sys-color-on-primary-container)'
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

      {/* Medical Services Grid */}
      <section className="py-16 surface-container">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="headline-large mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Medical Specialties
            </h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Our team of specialists provides expert care across multiple medical disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthServices.map((service, index) => (
              <div 
                key={service.id} 
                className="md-card group cursor-pointer"
                onClick={() => onNavigate(service.id)}
              >
                <div className="p-6">
                  <div 
                    className="w-12 h-12 mb-4 shape-md flex items-center justify-center group-hover:scale-110 transition-transform motion-duration-medium2 motion-easing-emphasized"
                    style={{ 
                      backgroundColor: service.title === 'Emergency Medicine' 
                        ? 'var(--md-sys-color-error-container)' 
                        : 'var(--md-sys-color-primary-container)',
                      color: service.title === 'Emergency Medicine' 
                        ? 'var(--md-sys-color-on-error-container)' 
                        : 'var(--md-sys-color-on-primary-container)'
                    }}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="title-large mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {service.title}
                  </h3>
                  
                  <p className="body-medium mb-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 gap-0">
                        <div 
                          className="w-4 h-4 shape-full flex items-center justify-center"
                          style={{ backgroundColor: 'var(--md-sys-color-primary)' }}
                        >
                          <div 
                            className="w-2 h-2 shape-full"
                            style={{ backgroundColor: 'var(--md-sys-color-on-primary)' }}
                          />
                        </div>
                        <span className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="md-button-outlined w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors motion-duration-short4 flex items-center justify-center space-x-2 gap-0">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform motion-duration-short4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Care Highlight */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="aspect-[4/3] shape-lg overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551601651-67b80c8b8da6?w=600&h=450&fit=crop&q=80"
                alt="24/7 Emergency care facilities at Healing Hands Healthcare with medical team ready for urgent care"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div 
              className="p-8 shape-lg"
              style={{ 
                backgroundColor: 'var(--md-sys-color-error-container)',
                color: 'var(--md-sys-color-on-error-container)'
              }}
            >
              <div className="flex items-center mb-6">
                <div 
                  className="w-16 h-16 shape-md flex items-center justify-center mr-4"
                  style={{
                    backgroundColor: 'var(--md-sys-color-error)',
                    color: 'var(--md-sys-color-on-error)'
                  }}
                >
                  <Activity className="w-8 h-8" />
                </div>
                <h2 className="headline-medium">24/7 Emergency Care</h2>
              </div>
              <p className="body-large mb-6">
                Medical emergencies don't wait. Our emergency department is staffed 
                24/7 with experienced medical professionals ready to provide immediate care 
                for the Cape Town community.
              </p>
              <div className="flex flex-col gap-4">
                <button 
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 shape-md transition-colors motion-duration-short4 flex items-center space-x-2"
                  onClick={() => window.open('tel:112')}
                >
                  <Activity className="w-5 h-5" />
                  <span>Call Emergency: 112</span>
                </button>
                <button 
                  className="bg-transparent border border-current hover:bg-current hover:text-error-container transition-colors motion-duration-short4 px-6 py-3 shape-md flex items-center space-x-2"
                  onClick={() => window.open('tel:+27211234567')}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Non-Emergency: 021 123 4567</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 surface-container">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Need medical consultation?
            </h2>
            <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Our experienced medical team is ready to provide personalized care and 
              create individualized treatment plans for your health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('appointment')}
                className="md-button-filled flex items-center space-x-2 gap-0"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </button>
              <button 
                className="md-button-outlined flex items-center space-x-2 gap-0"
                onClick={() => onNavigate('medication')}
              >
                <Pill className="w-5 h-5" />
                <span>Medication Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}