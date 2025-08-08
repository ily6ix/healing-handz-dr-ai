import { 
  Heart, 
  Shield, 
  Users, 
  Award,
  Clock,
  CheckCircle,
  Stethoscope,
  Activity,
  Brain,
  Eye,
  TestTube,
  Calendar,
  Building,
  User,
  Microscope,
  Target,
  Globe
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps = {}) {
  const milestones = [
    {
      year: '2004',
      title: 'Practice Founded',
      description: 'Healing Hands Healthcare opened its doors in Cape Town'
    },
    {
      year: '2008',
      title: 'Specialty Expansion',
      description: 'Added cardiology and neurology departments'
    },
    {
      year: '2014',
      title: 'Modern Facility',
      description: 'Moved to state-of-the-art medical centre on Long Street'
    },
    {
      year: '2018',
      title: 'Digital Innovation',
      description: 'Introduced digital health records and telemedicine'
    },
    {
      year: '2024',
      title: '20 Years Strong',
      description: 'Celebrating two decades of healthcare excellence'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and genuine concern for their wellbeing.'
    },
    {
      icon: Shield,
      title: 'Patient Safety',
      description: 'Your safety is our top priority with rigorous protocols and quality standards.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Our multidisciplinary team works together to provide comprehensive care.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in medical care and patient satisfaction.'
    },
    {
      icon: Globe,
      title: 'Community Focus',
      description: 'Committed to improving the health and wellbeing of our Cape Town community.'
    },
    {
      icon: Target,
      title: 'Continuous Improvement',
      description: 'We constantly evolve our practices based on latest medical research and technology.'
    }
  ];

  const departments = [
    {
      icon: Stethoscope,
      name: 'General Medicine',
      description: 'Primary healthcare services for patients of all ages'
    },
    {
      icon: Heart,
      name: 'Cardiology',
      description: 'Comprehensive heart and cardiovascular care'
    },
    {
      icon: Brain,
      name: 'Neurology',
      description: 'Specialized care for neurological conditions'
    },
    {
      icon: Eye,
      name: 'Ophthalmology',
      description: 'Complete eye care and vision services'
    },
    {
      icon: TestTube,
      name: 'Laboratory',
      description: 'Advanced diagnostic testing and pathology'
    },
    {
      icon: Activity,
      name: 'Emergency Care',
      description: '24/7 emergency medical services'
    }
  ];

  const stats = [
    {
      number: '5000+',
      label: 'Patients Served Annually'
    },
    {
      number: '25+',
      label: 'Medical Professionals'
    },
    {
      number: '98%',
      label: 'Patient Satisfaction'
    },
    {
      number: '24/7',
      label: 'Emergency Care'
    }
  ];

  const certifications = [
    'Health Professions Council of South Africa (HPCSA)',
    'Hospital Association of South Africa (HASA)',
    'South African Medical Association (SAMA)',
    'International Organization for Standardization (ISO 9001)',
    'Council for Medical Schemes Accreditation'
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
                  About Healing Hands Healthcare
                </span>
              </div>
              
              <h1 className="display-small mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Dedicated to <span style={{ color: 'var(--md-sys-color-primary)' }}>exceptional</span> healthcare
              </h1>
              
              <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                For over two decades, Healing Hands Healthcare has been Cape Town's trusted public healthcare facility, 
                providing free, comprehensive medical services to all South African citizens with a focus on compassionate care, 
                medical excellence, and community health.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate?.('appointment')}
                  className="md-button-filled flex items-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
                <button 
                  onClick={() => onNavigate?.('team')}
                  className="md-button-outlined flex items-center space-x-2"
                >
                  <Users className="w-5 h-5" />
                  <span>Meet Our Team</span>
                </button>
              </div>
            </div>

            <div className="aspect-[4/3] shape-xl overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=450&fit=crop&q=80"
                alt="Healing Hands Healthcare facility exterior in Cape Town showing modern medical building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] shape-lg overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=450&fit=crop&q=80"
                alt="Modern healthcare facility interior with medical professionals in Cape Town"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div 
                      className="w-10 h-10 shape-md flex items-center justify-center"
                      style={{ 
                        backgroundColor: 'var(--md-sys-color-primary-container)',
                        color: 'var(--md-sys-color-on-primary-container)'
                      }}
                    >
                      <Target className="w-5 h-5" />
                    </div>
                    <h2 className="headline-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      Our Mission
                    </h2>
                  </div>
                  <p className="body-large" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    To provide free, accessible, high-quality healthcare services to all South African citizens, 
                    improving the health and wellbeing of our community through compassionate care, medical excellence, 
                    and innovative treatment approaches within the public healthcare system.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div 
                      className="w-10 h-10 shape-md flex items-center justify-center"
                      style={{ 
                        backgroundColor: 'var(--md-sys-color-secondary-container)',
                        color: 'var(--md-sys-color-on-secondary-container)'
                      }}
                    >
                      <Eye className="w-5 h-5" />
                    </div>
                    <h2 className="headline-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      Our Vision
                    </h2>
                  </div>
                  <p className="body-large" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    To be the leading public healthcare facility in the Western Cape, recognized for our 
                    commitment to equitable, patient-centered care, medical innovation, and our positive 
                    impact on community health through accessible, free healthcare services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 surface-container">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="md-card text-center">
                <div className="p-6">
                  <div className="headline-large mb-2" style={{ color: 'var(--md-sys-color-primary)' }}>
                    {stat.number}
                  </div>
                  <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
              <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Our Core Values
              </span>
            </div>
            <h2 className="headline-large mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              What drives us every day
            </h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Our values guide every decision we make and every interaction we have with our patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="md-card">
                <div className="p-6">
                  <div 
                    className="w-12 h-12 mb-4 shape-md flex items-center justify-center"
                    style={{ 
                      backgroundColor: `var(--md-sys-color-primary)20`,
                      color: 'var(--md-sys-color-primary)'
                    }}
                  >
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {value.title}
                  </h3>
                  <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 surface-container">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
              <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Our Journey
              </span>
            </div>
            <h2 className="headline-large mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Two decades of healthcare excellence
            </h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              From a small practice to a comprehensive medical centre, see how we've grown to serve our community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div 
                    className="w-16 h-16 shape-md flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: 'var(--md-sys-color-primary-container)',
                      color: 'var(--md-sys-color-on-primary-container)'
                    }}
                  >
                    <span className="title-medium">{milestone.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="title-large mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      {milestone.title}
                    </h3>
                    <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
              <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Medical Departments
              </span>
            </div>
            <h2 className="headline-large mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Comprehensive healthcare services
            </h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Our specialized departments work together to provide complete medical care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="md-card">
                <div className="p-6">
                  <div 
                    className="w-12 h-12 mb-4 shape-md flex items-center justify-center"
                    style={{ 
                      backgroundColor: `var(--md-sys-color-tertiary)20`,
                      color: 'var(--md-sys-color-tertiary)'
                    }}
                  >
                    <dept.icon className="w-6 h-6" />
                  </div>
                  <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {dept.name}
                  </h3>
                  <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {dept.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 surface-container">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
                <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Quality & Accreditation
                </span>
              </div>
              <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Recognized standards of excellence
              </h2>
              <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                We maintain the highest standards through rigorous accreditation processes 
                and continuous quality improvement initiatives.
              </p>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" style={{ color: 'var(--md-sys-color-primary)' }} />
                    </div>
                    <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="aspect-[4/3] shape-lg overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=450&fit=crop&q=80"
                alt="Advanced medical equipment and technology in modern healthcare facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Community */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
              <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Community Commitment
              </span>
            </div>
            <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Serving Cape Town with pride
            </h2>
            <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Beyond providing excellent free medical care, we're committed to improving the overall health 
              and wellbeing of our Cape Town community through health education programs, preventive 
              care initiatives, and partnerships with local organizations - all as part of South Africa's public healthcare system.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 shape-md flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-primary-container)',
                    color: 'var(--md-sys-color-on-primary-container)'
                  }}
                >
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Community Outreach
                </h3>
                <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Regular health screenings and education programs
                </p>
              </div>
              
              <div className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 shape-md flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-secondary-container)',
                    color: 'var(--md-sys-color-on-secondary-container)'
                  }}
                >
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Local Partnerships
                </h3>
                <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Collaborating with schools and community centers
                </p>
              </div>
              
              <div className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 shape-md flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-tertiary-container)',
                    color: 'var(--md-sys-color-on-tertiary-container)'
                  }}
                >
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  24/7 Availability
                </h3>
                <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Emergency care when our community needs it most
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 surface-container-highest">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Experience healthcare excellence
            </h2>
            <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Join thousands of satisfied patients who trust Healing Hands Healthcare 
              for their free, quality public healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate?.('appointment')}
                className="md-button-filled flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Appointment</span>
              </button>
              <button 
                onClick={() => onNavigate?.('team')}
                className="md-button-outlined flex items-center space-x-2"
              >
                <User className="w-5 h-5" />
                <span>Meet Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}