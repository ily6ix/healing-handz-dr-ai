import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Eye, 
  Activity, 
  TestTube,
  Mail, 
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Users,
  Clock
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Michael Williams',
      position: 'Chief Medical Officer & Cardiologist',
      specialty: 'Cardiology',
      qualifications: 'MBChB (UCT), FCP (SA), MMed (Cardiology)',
      experience: '20+ years',
      languages: ['English', 'Afrikaans'],
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Williams is a leading cardiologist with over two decades of experience in cardiovascular medicine. He completed his medical training at the University of Cape Town and specialized in cardiology at Groote Schuur Hospital.',
      achievements: [
        'Fellow of the College of Physicians of South Africa',
        'Published researcher in cardiovascular medicine',
        'Member of the South African Heart Association'
      ]
    },
    {
      id: 2,
      name: 'Dr. Sarah Johnson',
      position: 'Head of General Medicine',
      specialty: 'General Medicine',
      qualifications: 'MBChB (Wits), FCFP (SA)',
      experience: '15+ years',
      languages: ['English', 'Zulu'],
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Johnson specializes in comprehensive family medicine and preventive care. She is passionate about community health and has extensive experience in managing chronic conditions.',
      achievements: [
        'Fellow of the College of Family Physicians',
        'Community Health Advocate of the Year 2022',
        'Specialist in Chronic Disease Management'
      ]
    },
    {
      id: 3,
      name: 'Dr. David Patel',
      position: 'Consultant Neurologist',
      specialty: 'Neurology',
      qualifications: 'MBChB (UCT), MMed (Neurology), FRCP',
      experience: '18+ years',
      languages: ['English', 'Hindi', 'Gujarati'],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Patel is a renowned neurologist with expertise in treating complex neurological disorders. He has international training experience and brings cutting-edge treatments to our patients.',
      achievements: [
        'Fellow of the Royal College of Physicians',
        'International Fellowship in Movement Disorders',
        'Research Leader in Neurological Innovations'
      ]
    },
    {
      id: 4,
      name: 'Dr. Nomsa Mthembu',
      position: 'Senior General Practitioner',
      specialty: 'General Practice',
      qualifications: 'MBChB (UKZN), PG Dip (Family Medicine)',
      experience: '12+ years',
      languages: ['English', 'Zulu', 'Xhosa'],
      image: 'https://images.unsplash.com/photo-1594824475520-b27854ae2b9e?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Mthembu is dedicated to providing holistic healthcare with a focus on women\'s health and pediatric care. She is known for her compassionate approach and patient advocacy.',
      achievements: [
        'Postgraduate Diploma in Family Medicine',
        'Women\'s Health Specialist',
        'Pediatric Care Certification'
      ]
    },
    {
      id: 5,
      name: 'Dr. James van der Merwe',
      position: 'Emergency Medicine Specialist',
      specialty: 'Emergency Medicine',
      qualifications: 'MBChB (Stellenbosch), FCS (Emergency Medicine)',
      experience: '14+ years',
      languages: ['English', 'Afrikaans'],
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. van der Merwe leads our emergency department with expertise in critical care and trauma medicine. His quick decision-making and leadership have saved countless lives.',
      achievements: [
        'Fellow in Emergency Medicine',
        'Advanced Trauma Life Support Instructor',
        'Critical Care Specialist'
      ]
    },
    {
      id: 6,
      name: 'Dr. Priya Singh',
      position: 'Consultant Ophthalmologist',
      specialty: 'Ophthalmology',
      qualifications: 'MBChB (Wits), MMed (Ophthalmology), FRCOphth',
      experience: '16+ years',
      languages: ['English', 'Hindi', 'Tamil'],
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Singh is an accomplished ophthalmologist specializing in retinal disorders and advanced eye surgery. She has pioneered several innovative surgical techniques.',
      achievements: [
        'Fellow of the Royal College of Ophthalmologists',
        'Retinal Surgery Specialist',
        'Medical Innovation Award Winner'
      ]
    }
  ];

  const supportStaff = [
    {
      name: 'Sister Margaret Botha',
      position: 'Head of Nursing',
      experience: '25+ years',
      specialty: 'Critical Care Nursing'
    },
    {
      name: 'Thomas Ndaba',
      position: 'Chief Laboratory Technologist',
      experience: '20+ years',
      specialty: 'Clinical Pathology'
    },
    {
      name: 'Lisa Adams',
      position: 'Patient Care Coordinator',
      experience: '10+ years',
      specialty: 'Patient Relations'
    },
    {
      name: 'Kevin Maluleka',
      position: 'Emergency Response Coordinator',
      experience: '12+ years',
      specialty: 'Emergency Medical Services'
    }
  ];

  const specialtyIcons = {
    'Cardiology': Heart,
    'General Medicine': Stethoscope,
    'Neurology': Brain,
    'General Practice': Stethoscope,
    'Emergency Medicine': Activity,
    'Ophthalmology': Eye
  };

  return (
    <div className="min-h-screen surface">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 surface-container-lowest">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-6">
              <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Medical Team
              </span>
            </div>
            
            <h1 className="display-small mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Meet our <span style={{ color: 'var(--md-sys-color-primary)' }}>expert</span> medical team
            </h1>
            
            <p className="body-large max-w-3xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Our dedicated team of medical professionals brings together decades of experience, 
              specialized training, and a shared commitment to providing exceptional healthcare 
              to the Cape Town community.
            </p>
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="py-12 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="headline-large mb-2" style={{ color: 'var(--md-sys-color-primary)' }}>
                25+
              </div>
              <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Medical Professionals
              </p>
            </div>
            <div className="text-center">
              <div className="headline-large mb-2" style={{ color: 'var(--md-sys-color-primary)' }}>
                150+
              </div>
              <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Years Combined Experience
              </p>
            </div>
            <div className="text-center">
              <div className="headline-large mb-2" style={{ color: 'var(--md-sys-color-primary)' }}>
                6
              </div>
              <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Medical Specialties
              </p>
            </div>
            <div className="text-center">
              <div className="headline-large mb-2" style={{ color: 'var(--md-sys-color-primary)' }}>
                24/7
              </div>
              <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Emergency Coverage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Medical Team */}
      <section className="py-16 surface-container">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
              <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Senior Medical Team
              </span>
            </div>
            <h2 className="headline-large mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Leading specialists in their fields
            </h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Our senior medical team consists of board-certified specialists with extensive 
              training and experience in their respective fields.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member) => {
              const SpecialtyIcon = specialtyIcons[member.specialty] || Stethoscope;
              
              return (
                <div key={member.id} className="md-card">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 shape-md overflow-hidden surface-container-highest flex-shrink-0">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="title-large mb-1" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                              {member.name}
                            </h3>
                            <p className="body-medium mb-2" style={{ color: 'var(--md-sys-color-primary)' }}>
                              {member.position}
                            </p>
                          </div>
                          <div 
                            className="w-10 h-10 shape-md flex items-center justify-center"
                            style={{ 
                              backgroundColor: `var(--md-sys-color-primary)20`,
                              color: 'var(--md-sys-color-primary)'
                            }}
                          >
                            <SpecialtyIcon className="w-5 h-5" />
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="label-small mb-1" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                              Qualifications
                            </p>
                            <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                              {member.qualifications}
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="label-small mb-1" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                                Experience
                              </p>
                              <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                                {member.experience}
                              </p>
                            </div>
                            <div>
                              <p className="label-small mb-1" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                                Languages
                              </p>
                              <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                                {member.languages.join(', ')}
                              </p>
                            </div>
                          </div>
                          
                          <div>
                            <p className="body-small mb-2" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                              {member.bio}
                            </p>
                          </div>
                          
                          <div>
                            <p className="label-small mb-2" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                              Key Achievements
                            </p>
                            <div className="space-y-1">
                              {member.achievements.map((achievement, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <div className="w-1 h-1 bg-current opacity-60"></div>
                                  <span className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-16 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
              <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Support Team
              </span>
            </div>
            <h2 className="headline-large mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Essential healthcare professionals
            </h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Our dedicated support staff ensures seamless healthcare delivery and exceptional patient experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportStaff.map((staff, index) => (
              <div key={index} className="md-card text-center">
                <div className="p-6">
                  <div 
                    className="w-12 h-12 mx-auto mb-4 shape-md flex items-center justify-center"
                    style={{ 
                      backgroundColor: 'var(--md-sys-color-secondary-container)',
                      color: 'var(--md-sys-color-on-secondary-container)'
                    }}
                  >
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {staff.name}
                  </h3>
                  <p className="body-medium mb-2" style={{ color: 'var(--md-sys-color-primary)' }}>
                    {staff.position}
                  </p>
                  <p className="body-small mb-1" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {staff.experience}
                  </p>
                  <p className="label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    {staff.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Commitment */}
      <section className="py-16 surface-container">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] shape-lg overflow-hidden surface-container-lowest">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=450&fit=crop"
                  alt="Medical team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
                  <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    Our Commitment
                  </span>
                </div>
                <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Excellence through collaboration
                </h2>
                <p className="body-large mb-6" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Our team works together seamlessly to provide comprehensive, patient-centered care. 
                  We believe in continuous learning, professional development, and staying at the 
                  forefront of medical advances.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5" style={{ color: 'var(--md-sys-color-primary)' }} />
                    <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      Continuous professional development and training
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5" style={{ color: 'var(--md-sys-color-primary)' }} />
                    <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      Evidence-based medicine and latest treatment protocols
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" style={{ color: 'var(--md-sys-color-primary)' }} />
                    <span className="body-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      Multidisciplinary approach to patient care
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 surface-container-highest">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Schedule with our specialists
              </h2>
              <p className="body-large" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Ready to meet with one of our expert medical professionals? 
                Contact us to schedule your appointment.
              </p>
            </div>
            
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
                  Call Us
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
                  Email Us
                </h3>
                <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  appointments@solutions-health.co.za
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
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="title-medium mb-2" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Hours
                </h3>
                <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Mon-Fri: 7:00-19:00
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="md-button-filled flex items-center space-x-2 mx-auto">
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}