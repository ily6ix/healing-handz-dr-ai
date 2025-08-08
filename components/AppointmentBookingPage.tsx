import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin,
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Activity,
  TestTube,
  ChevronLeft,
  ChevronRight,
  Check,
  AlertCircle,
  Info,
  FileText,
  Users,
  MessageSquare,
  PhoneCall,
  Loader2,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner@2.0.3';
import { notificationService, AppointmentData, NotificationResult } from './services/NotificationService';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AppointmentBookingPageProps {
  onNavigate: (page: string) => void;
}

export function AppointmentBookingPage({ onNavigate }: AppointmentBookingPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notificationResult, setNotificationResult] = useState<NotificationResult | null>(null);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    idNumber: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Appointment Details
    department: '',
    appointmentType: '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
    urgency: 'routine',
    
    // Medical Information
    allergies: '',
    currentMedications: '',
    previousVisits: '',
    
    // Contact Preferences
    preferredContact: 'sms' as 'sms' | 'email' | 'phone',
    appointmentReminders: true,
    termsAccepted: false
  });

  const departments = [
    {
      id: 'general',
      name: 'General Medicine',
      icon: Stethoscope,
      description: 'Primary healthcare and consultations',
      availableTimes: ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']
    },
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: Heart,
      description: 'Heart and cardiovascular care',
      availableTimes: ['08:00', '09:30', '11:00', '14:30', '16:00']
    },
    {
      id: 'neurology',
      name: 'Neurology',
      icon: Brain,
      description: 'Neurological conditions and care',
      availableTimes: ['09:00', '10:30', '14:00', '15:30']
    },
    {
      id: 'ophthalmology',
      name: 'Ophthalmology',
      icon: Eye,
      description: 'Eye care and vision services',
      availableTimes: ['08:30', '10:00', '11:30', '14:00', '15:30', '17:00']
    },
    {
      id: 'emergency',
      name: 'Emergency Consultation',
      icon: Activity,
      description: 'Urgent medical attention',
      availableTimes: ['08:00', '12:00', '16:00', '18:00']
    },
    {
      id: 'laboratory',
      name: 'Laboratory Services',
      icon: TestTube,
      description: 'Blood tests and diagnostics',
      availableTimes: ['07:00', '08:00', '09:00', '10:00', '11:00']
    }
  ];

  const appointmentTypes = {
    general: ['Consultation', 'Follow-up', 'Health Check-up', 'Vaccination', 'Medical Certificate'],
    cardiology: ['Initial Consultation', 'Follow-up', 'ECG', 'Stress Test', 'Echocardiogram'],
    neurology: ['Consultation', 'Follow-up', 'EEG', 'Neurological Assessment'],
    ophthalmology: ['Eye Exam', 'Vision Test', 'Contact Lens Fitting', 'Follow-up'],
    emergency: ['Urgent Consultation', 'Emergency Assessment'],
    laboratory: ['Blood Test', 'Urine Test', 'X-Ray', 'Health Screening']
  };

  const timeSlots = formData.department 
    ? departments.find(d => d.id === formData.department)?.availableTimes || []
    : [];

  // Generate next 30 days excluding Sundays
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow

    while (dates.length < 30) {
      if (currentDate.getDay() !== 0) { // Exclude Sundays
        dates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone && formData.dateOfBirth && formData.idNumber;
      case 2:
        return formData.department && formData.appointmentType && formData.reason;
      case 3:
        return formData.preferredDate && formData.preferredTime;
      case 4:
        return formData.termsAccepted;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      toast.error('Please complete all required fields and accept the terms');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Generate appointment ID
      const appointmentId = 'PUB-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      
      // Create appointment data
      const appointmentData: AppointmentData = {
        appointmentId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        idNumber: formData.idNumber,
        department: formData.department,
        appointmentType: formData.appointmentType,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        reason: formData.reason,
        urgency: formData.urgency,
        preferredContact: formData.preferredContact,
        emergencyContact: formData.emergencyContact,
        emergencyPhone: formData.emergencyPhone
      };

      // Save appointment to local storage (in real app, this would be a database)
      const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      existingAppointments.push(appointmentData);
      localStorage.setItem('appointments', JSON.stringify(existingAppointments));

      // Send confirmation notification
      const result = await notificationService.sendConfirmation(appointmentData);
      setNotificationResult(result);

      // Schedule reminder if enabled
      if (formData.appointmentReminders) {
        await notificationService.scheduleReminder(appointmentData);
      }

      if (result.success) {
        toast.success(`Appointment booked successfully! ${result.message}`);
        setCurrentStep(5); // Go to confirmation step
      } else {
        toast.error(result.message);
        // Still show confirmation step even if notification failed
        setCurrentStep(5);
      }
      
    } catch (error) {
      console.error('Appointment booking error:', error);
      toast.error('Failed to book appointment. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getContactIcon = (method: string) => {
    switch (method) {
      case 'sms':
        return MessageSquare;
      case 'email':
        return Mail;
      case 'phone':
        return PhoneCall;
      default:
        return MessageSquare;
    }
  };

  const getContactMethodLabel = (method: string) => {
    switch (method) {
      case 'sms':
        return 'SMS';
      case 'email':
        return 'Email';
      case 'phone':
        return 'Phone Call';
      default:
        return 'SMS';
    }
  };

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Medical Service', icon: Stethoscope },
    { number: 3, title: 'Date & Time', icon: Calendar },
    { number: 4, title: 'Review & Confirm', icon: Check }
  ];

  return (
    <div className="min-h-screen surface">
      {/* Header */}
      <section className="py-8 surface-container-low border-b border-[var(--md-sys-color-outline-variant)]">
        <div className="container mx-auto px-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 mb-4 text-sm state-layer relative shape-md p-2 -m-2"
            style={{ color: 'var(--md-sys-color-primary)' }}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="w-12 h-12 shape-md flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--md-sys-color-primary)',
                  color: 'var(--md-sys-color-on-primary)'
                }}
              >
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h1 className="headline-large" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Book a Free Appointment
                </h1>
                <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Public healthcare services - No payment required
                </p>
              </div>
            </div>

            {/* Free Healthcare Notice with Image */}
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <div 
                  className="p-4 shape-md h-full"
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-primary-container)',
                    color: 'var(--md-sys-color-on-primary-container)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" />
                    <div>
                      <p className="title-small">Free Public Healthcare</p>
                      <p className="body-medium">
                        All medical services are provided free of charge as part of South Africa's public healthcare system. 
                        Simply bring your South African ID document to your appointment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-[4/3] lg:aspect-auto shape-md overflow-hidden surface-container">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&q=80"
                  alt="Professional medical consultation showing compassionate healthcare"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Progress Steps */}
            {currentStep <= 4 && (
              <div className="flex items-center justify-between mb-8 max-w-xl">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div 
                      className={`w-10 h-10 shape-md flex items-center justify-center transition-all motion-duration-short4 ${
                        currentStep >= step.number 
                          ? 'surface-container-highest' 
                          : 'surface-container'
                      }`}
                      style={{
                        backgroundColor: currentStep >= step.number 
                          ? 'var(--md-sys-color-primary)' 
                          : 'var(--md-sys-color-surface-container)',
                        color: currentStep >= step.number 
                          ? 'var(--md-sys-color-on-primary)' 
                          : 'var(--md-sys-color-on-surface-variant)'
                      }}
                    >
                      {currentStep > step.number ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div 
                        className="w-12 h-0.5 mx-2"
                        style={{
                          backgroundColor: currentStep > step.number 
                            ? 'var(--md-sys-color-primary)' 
                            : 'var(--md-sys-color-outline-variant)'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="md-card">
                <div className="p-6">
                  <h2 className="title-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    Personal Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="idNumber">South African ID Number *</Label>
                      <Input
                        id="idNumber"
                        value={formData.idNumber}
                        onChange={(e) => handleInputChange('idNumber', e.target.value)}
                        placeholder="0000000000000"
                        maxLength={13}
                      />
                      <p className="text-xs mt-1" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                        Required for public healthcare services
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="021 123 4567"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Gender</Label>
                        <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                        <Input
                          id="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                        <Input
                          id="emergencyPhone"
                          type="tel"
                          value={formData.emergencyPhone}
                          onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                          placeholder="021 123 4567"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Service Selection */}
            {currentStep === 2 && (
              <div className="md-card">
                <div className="p-6">
                  <h2 className="title-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    Select Medical Service
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="mb-4 block">Department *</Label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {departments.map((dept) => (
                          <button
                            key={dept.id}
                            onClick={() => {
                              handleInputChange('department', dept.id);
                              handleInputChange('appointmentType', ''); // Reset appointment type
                            }}
                            className={`p-4 text-left shape-md border transition-all motion-duration-short4 ${
                              formData.department === dept.id
                                ? 'border-[var(--md-sys-color-primary)] surface-container-highest'
                                : 'border-[var(--md-sys-color-outline-variant)] surface-container-low hover:surface-container'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div 
                                className="w-10 h-10 shape-md flex items-center justify-center flex-shrink-0"
                                style={{
                                  backgroundColor: formData.department === dept.id 
                                    ? 'var(--md-sys-color-primary)' 
                                    : 'var(--md-sys-color-surface-container-highest)',
                                  color: formData.department === dept.id 
                                    ? 'var(--md-sys-color-on-primary)' 
                                    : 'var(--md-sys-color-on-surface-variant)'
                                }}
                              >
                                <dept.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="title-small mb-1" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                                  {dept.name}
                                </h3>
                                <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                                  {dept.description}
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {formData.department && (
                      <div>
                        <Label>Appointment Type *</Label>
                        <Select 
                          value={formData.appointmentType} 
                          onValueChange={(value) => handleInputChange('appointmentType', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select appointment type" />
                          </SelectTrigger>
                          <SelectContent>
                            {appointmentTypes[formData.department as keyof typeof appointmentTypes]?.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="reason">Reason for Visit *</Label>
                      <Textarea
                        id="reason"
                        value={formData.reason}
                        onChange={(e) => handleInputChange('reason', e.target.value)}
                        placeholder="Please describe your symptoms or reason for the appointment..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label className="mb-3 block">Urgency Level</Label>
                      <RadioGroup 
                        value={formData.urgency} 
                        onValueChange={(value) => handleInputChange('urgency', value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="routine" id="routine" />
                          <Label htmlFor="routine">Routine (within 2 weeks)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="urgent" id="urgent" />
                          <Label htmlFor="urgent">Urgent (within 3 days)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="emergency" id="emergency" />
                          <Label htmlFor="emergency">Emergency (same day)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="allergies">Known Allergies</Label>
                        <Textarea
                          id="allergies"
                          value={formData.allergies}
                          onChange={(e) => handleInputChange('allergies', e.target.value)}
                          placeholder="List any known allergies (medications, foods, etc.)"
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label htmlFor="currentMedications">Current Medications</Label>
                        <Textarea
                          id="currentMedications"
                          value={formData.currentMedications}
                          onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                          placeholder="List any medications you are currently taking"
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label htmlFor="previousVisits">Previous Visits to Healing Hands Healthcare</Label>
                        <Textarea
                          id="previousVisits"
                          value={formData.previousVisits}
                          onChange={(e) => handleInputChange('previousVisits', e.target.value)}
                          placeholder="Briefly describe any previous visits or treatments"
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Date & Time Selection */}
            {currentStep === 3 && (
              <div className="md-card">
                <div className="p-6">
                  <h2 className="title-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    Select Date & Time
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="mb-4 block">Preferred Date *</Label>
                      <div className="grid grid-cols-4 md:grid-cols-6 gap-2 max-h-60 overflow-y-auto">
                        {availableDates.map((date) => {
                          const dateString = date.toISOString().split('T')[0];
                          const isSelected = formData.preferredDate === dateString;
                          
                          return (
                            <button
                              key={dateString}
                              onClick={() => {
                                handleInputChange('preferredDate', dateString);
                                handleInputChange('preferredTime', ''); // Reset time when date changes
                              }}
                              className={`p-3 text-center shape-md border transition-all motion-duration-short4 ${
                                isSelected
                                  ? 'border-[var(--md-sys-color-primary)] surface-container-highest'
                                  : 'border-[var(--md-sys-color-outline-variant)] surface-container-low hover:surface-container'
                              }`}
                            >
                              <div className="title-small" style={{ 
                                color: isSelected 
                                  ? 'var(--md-sys-color-primary)' 
                                  : 'var(--md-sys-color-on-surface)' 
                              }}>
                                {date.getDate()}
                              </div>
                              <div className="label-small" style={{ 
                                color: isSelected 
                                  ? 'var(--md-sys-color-primary)' 
                                  : 'var(--md-sys-color-on-surface-variant)' 
                              }}>
                                {date.toLocaleDateString('en-ZA', { month: 'short' })}
                              </div>
                              <div className="label-small" style={{ 
                                color: isSelected 
                                  ? 'var(--md-sys-color-primary)' 
                                  : 'var(--md-sys-color-on-surface-variant)' 
                              }}>
                                {date.toLocaleDateString('en-ZA', { weekday: 'short' })}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {formData.preferredDate && (
                      <div>
                        <Label className="mb-4 block">Available Time Slots *</Label>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                          {timeSlots.map((time) => {
                            const isSelected = formData.preferredTime === time;
                            
                            return (
                              <button
                                key={time}
                                onClick={() => handleInputChange('preferredTime', time)}
                                className={`p-3 text-center shape-md border transition-all motion-duration-short4 ${
                                  isSelected
                                    ? 'border-[var(--md-sys-color-primary)] surface-container-highest'
                                    : 'border-[var(--md-sys-color-outline-variant)] surface-container-low hover:surface-container'
                                }`}
                              >
                                <div className="flex items-center justify-center space-x-2">
                                  <Clock className="w-4 h-4" style={{ 
                                    color: isSelected 
                                      ? 'var(--md-sys-color-primary)' 
                                      : 'var(--md-sys-color-on-surface-variant)' 
                                  }} />
                                  <span className="label-medium" style={{ 
                                    color: isSelected 
                                      ? 'var(--md-sys-color-primary)' 
                                      : 'var(--md-sys-color-on-surface)' 
                                  }}>
                                    {time}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {formData.preferredDate && formData.preferredTime && (
                      <div 
                        className="p-4 shape-md"
                        style={{ 
                          backgroundColor: 'var(--md-sys-color-primary-container)',
                          color: 'var(--md-sys-color-on-primary-container)'
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <Info className="w-5 h-5" />
                          <div>
                            <p className="title-small">Selected Appointment</p>
                            <p className="body-medium">
                              {formatDate(new Date(formData.preferredDate))} at {formData.preferredTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <Label className="mb-3 block">How would you like to receive your appointment confirmation? *</Label>
                      <RadioGroup 
                        value={formData.preferredContact} 
                        onValueChange={(value) => handleInputChange('preferredContact', value as 'sms' | 'email' | 'phone')}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sms" id="contact-sms" />
                          <Label htmlFor="contact-sms" className="flex items-center space-x-2">
                            <MessageSquare className="w-4 h-4" />
                            <span>SMS (Recommended - instant delivery)</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="contact-email" />
                          <Label htmlFor="contact-email" className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>Email (detailed confirmation)</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="contact-phone" />
                          <Label htmlFor="contact-phone" className="flex items-center space-x-2">
                            <PhoneCall className="w-4 h-4" />
                            <span>Phone Call (personal confirmation)</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="reminders"
                        checked={formData.appointmentReminders}
                        onCheckedChange={(checked) => handleInputChange('appointmentReminders', checked as boolean)}
                      />
                      <Label htmlFor="reminders">
                        Send me appointment reminders 24 hours before
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Confirm */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="md-card">
                  <div className="p-6">
                    <h2 className="title-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      Review Your Appointment
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="title-medium mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                            Personal Information
                          </h3>
                          <div className="space-y-2 text-sm">
                            <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                            <p><strong>ID Number:</strong> {formData.idNumber}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Phone:</strong> {formData.phone}</p>
                            <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="title-medium mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                            Appointment Details
                          </h3>
                          <div className="space-y-2 text-sm">
                            <p><strong>Department:</strong> {departments.find(d => d.id === formData.department)?.name}</p>
                            <p><strong>Type:</strong> {formData.appointmentType}</p>
                            <p><strong>Date:</strong> {formData.preferredDate ? formatDate(new Date(formData.preferredDate)) : ''}</p>
                            <p><strong>Time:</strong> {formData.preferredTime}</p>
                            <p><strong>Urgency:</strong> {formData.urgency}</p>
                            <p><strong>Confirmation via:</strong> {getContactMethodLabel(formData.preferredContact)}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="title-medium mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                          Reason for Visit
                        </h3>
                        <p className="body-medium p-3 surface-container-low shape-md">
                          {formData.reason}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md-card">
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) => handleInputChange('termsAccepted', checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I understand that this is a public healthcare service and agree to the 
                          <a href="#" className="underline ml-1" style={{ color: 'var(--md-sys-color-primary)' }}>
                            terms and conditions
                          </a> and 
                          <a href="#" className="underline ml-1" style={{ color: 'var(--md-sys-color-primary)' }}>
                            privacy policy
                          </a>
                        </Label>
                      </div>
                      
                      <div 
                        className="p-4 shape-md"
                        style={{ 
                          backgroundColor: 'var(--md-sys-color-surface-container-low)',
                          color: 'var(--md-sys-color-on-surface)'
                        }}
                      >
                        <div className="flex items-start space-x-3">
                          <Info className="w-5 h-5 mt-0.5" style={{ color: 'var(--md-sys-color-primary)' }} />
                          <div>
                            <p className="title-small mb-2">Important Information</p>
                            <ul className="body-small space-y-1" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                              <li>• Please arrive 15 minutes before your appointment</li>
                              <li>• Bring your South African ID document</li>
                              <li>• All services are provided free of charge</li>
                              <li>• You will receive a confirmation via {getContactMethodLabel(formData.preferredContact).toLowerCase()}</li>
                              <li>• Cancellations must be made at least 24 hours in advance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <div className="md-card text-center">
                <div className="p-8">
                  <div 
                    className="w-16 h-16 mx-auto mb-6 shape-md flex items-center justify-center"
                    style={{
                      backgroundColor: notificationResult?.success 
                        ? 'var(--md-sys-color-primary)' 
                        : 'var(--md-sys-color-error)',
                      color: notificationResult?.success 
                        ? 'var(--md-sys-color-on-primary)' 
                        : 'var(--md-sys-color-on-error)'
                    }}
                  >
                    {notificationResult?.success ? (
                      <Check className="w-8 h-8" />
                    ) : (
                      <AlertCircle className="w-8 h-8" />
                    )}
                  </div>
                  
                  <h2 className="headline-medium mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                    {notificationResult?.success ? 'Appointment Confirmed!' : 'Appointment Booked!'}
                  </h2>
                  
                  <p className="body-large mb-6" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    Your free appointment has been successfully booked.
                  </p>

                  {/* Notification Status */}
                  {notificationResult && (
                    <div 
                      className="p-4 shape-md mb-6"
                      style={{ 
                        backgroundColor: notificationResult.success 
                          ? 'var(--md-sys-color-primary-container)' 
                          : 'var(--md-sys-color-error-container)',
                        color: notificationResult.success 
                          ? 'var(--md-sys-color-on-primary-container)' 
                          : 'var(--md-sys-color-on-error-container)'
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        {notificationResult.success ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <XCircle className="w-5 h-5" />
                        )}
                        <div className="text-left">
                          <p className="title-small mb-1">
                            {notificationResult.success ? 'Confirmation Sent' : 'Notification Issue'}
                          </p>
                          <p className="body-small">
                            {notificationResult.message}
                          </p>
                          {notificationResult.success && notificationResult.estimatedDelivery && (
                            <p className="body-small mt-1">
                              Expected delivery: {notificationResult.estimatedDelivery}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div 
                    className="p-6 shape-md mb-6"
                    style={{ 
                      backgroundColor: 'var(--md-sys-color-surface-container-low)',
                      color: 'var(--md-sys-color-on-surface)'
                    }}
                  >
                    <h3 className="title-medium mb-4">Appointment Summary</h3>
                    <div className="space-y-2 text-left">
                      <p><strong>Department:</strong> {departments.find(d => d.id === formData.department)?.name}</p>
                      <p><strong>Date & Time:</strong> {formData.preferredDate ? formatDate(new Date(formData.preferredDate)) : ''} at {formData.preferredTime}</p>
                      <p><strong>Type:</strong> {formData.appointmentType}</p>
                      <p><strong>Location:</strong> 123 Long Street, Cape Town</p>
                      <p><strong>Cost:</strong> FREE - Public Healthcare Service</p>
                      <p><strong>Confirmation sent via:</strong> {getContactMethodLabel(formData.preferredContact)}</p>
                    </div>
                  </div>

                  {/* Alternative Contact Info */}
                  {!notificationResult?.success && (
                    <div 
                      className="p-4 shape-md mb-6"
                      style={{ 
                        backgroundColor: 'var(--md-sys-color-surface-container-low)',
                        color: 'var(--md-sys-color-on-surface)'
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <Info className="w-5 h-5 mt-0.5" style={{ color: 'var(--md-sys-color-primary)' }} />
                        <div className="text-left">
                          <p className="title-small mb-2">Alternative Contact</p>
                          <p className="body-small">
                            If you don't receive a confirmation, please contact us directly:
                          </p>
                          <p className="body-small mt-1">
                            <strong>Phone:</strong> 021 123 4567<br />
                            <strong>Email:</strong> appointments@healinghandshealthcare.co.za
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={() => onNavigate('home')}
                      className="md-button-filled"
                    >
                      Return to Home
                    </Button>
                    <Button 
                      onClick={() => {
                        setCurrentStep(1);
                        setNotificationResult(null);
                        setFormData({
                          firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '', gender: '', idNumber: '', emergencyContact: '', emergencyPhone: '',
                          department: '', appointmentType: '', preferredDate: '', preferredTime: '', reason: '', urgency: 'routine',
                          allergies: '', currentMedications: '', previousVisits: '',
                          preferredContact: 'sms', appointmentReminders: true, termsAccepted: false
                        });
                      }}
                      className="md-button-outlined"
                    >
                      Book Another Appointment
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep >= 1 && currentStep <= 4 && (
              <div className="flex justify-between mt-8">
                <Button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="md-button-outlined flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>
                
                {currentStep < 4 ? (
                  <Button
                    onClick={handleNext}
                    className="md-button-filled flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.termsAccepted || isSubmitting}
                    className="md-button-filled flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Booking...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Confirm Appointment</span>
                      </>
                    )}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}