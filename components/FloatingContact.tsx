import { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar,
  Pill,
  Bot,
  X,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { Button } from './ui/button';

interface FloatingContactProps {
  onNavigate: (page: string) => void;
}

export function FloatingContact({ onNavigate }: FloatingContactProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '021 123 4567',
      action: () => window.open('tel:+27211234567'),
      priority: 'high'
    },
    {
      icon: Bot,
      label: 'Ask Dr. AI',
      value: 'Get instant help',
      action: () => onNavigate('ai-chatbot'),
      priority: 'high'
    },
    {
      icon: Calendar,
      label: 'Book Appointment',
      value: 'Schedule visit',
      action: () => onNavigate('appointment'),
      priority: 'medium'
    },
    {
      icon: Pill,
      label: 'Medication',
      value: 'Collect prescriptions',
      action: () => onNavigate('medication'),
      priority: 'medium'
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: '123 Long Street, Cape Town',
      action: () => window.open('https://maps.google.com/?q=123+Long+Street+Cape+Town'),
      priority: 'low'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri: 8AM-6PM, Sat: 8AM-2PM',
      action: null,
      priority: 'low'
    }
  ];

  const highPriorityActions = contactInfo.filter(item => item.priority === 'high');
  const mediumPriorityActions = contactInfo.filter(item => item.priority === 'medium');
  const lowPriorityActions = contactInfo.filter(item => item.priority === 'low');

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div 
        className="floating-contact-widget surface-container-high border border-[var(--md-sys-color-outline-variant)]"
        style={{
          backgroundColor: 'var(--md-sys-color-surface-container-high)',
          color: 'var(--md-sys-color-on-surface)',
          maxWidth: '320px',
          minWidth: '280px'
        }}
      >
        {/* Header */}
        <div className="p-4 border-b border-[var(--md-sys-color-outline-variant)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-8 h-8 shape-md flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--md-sys-color-primary)',
                  color: 'var(--md-sys-color-on-primary)'
                }}
              >
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h3 className="title-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Need Help?
                </h3>
                <p className="label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Free public healthcare
                </p>
              </div>
            </div>
            <button
              onClick={toggleExpanded}
              className="p-1 shape-sm state-layer relative"
              style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Quick Actions - Always Visible */}
        <div className="p-3 space-y-2">
          {highPriorityActions.map((item, index) => (
            <button
              key={index}
              onClick={item.action || undefined}
              disabled={!item.action}
              className={`w-full p-3 text-left shape-md border border-[var(--md-sys-color-outline-variant)] transition-all motion-duration-short4 motion-easing-standard ${
                item.action 
                  ? 'hover:surface-container state-layer relative cursor-pointer' 
                  : 'cursor-default'
              }`}
              style={{
                backgroundColor: item.label === 'Ask Dr. AI' 
                  ? 'var(--md-sys-color-primary-container)' 
                  : 'var(--md-sys-color-surface-container-low)',
                color: item.label === 'Ask Dr. AI'
                  ? 'var(--md-sys-color-on-primary-container)'
                  : 'var(--md-sys-color-on-surface)'
              }}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5 flex-shrink-0" style={{ 
                  color: item.label === 'Ask Dr. AI' 
                    ? 'var(--md-sys-color-primary)' 
                    : 'var(--md-sys-color-primary)' 
                }} />
                <div className="flex-1 min-w-0">
                  <div className="label-medium">{item.label}</div>
                  <div 
                    className="label-small" 
                    style={{ 
                      color: item.label === 'Ask Dr. AI'
                        ? 'var(--md-sys-color-on-primary-container)'
                        : 'var(--md-sys-color-on-surface-variant)' 
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="border-t border-[var(--md-sys-color-outline-variant)]">
            {/* Additional Services */}
            <div className="p-3 space-y-2">
              <div className="label-small mb-2" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Additional Services
              </div>
              {mediumPriorityActions.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action || undefined}
                  disabled={!item.action}
                  className={`w-full p-2 text-left shape-sm border border-[var(--md-sys-color-outline-variant)] transition-all motion-duration-short4 motion-easing-standard ${
                    item.action 
                      ? 'hover:surface-container state-layer relative cursor-pointer' 
                      : 'cursor-default'
                  }`}
                  style={{
                    backgroundColor: 'var(--md-sys-color-surface-container-low)',
                    color: 'var(--md-sys-color-on-surface)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--md-sys-color-primary)' }} />
                    <div className="flex-1 min-w-0">
                      <div className="label-small">{item.label}</div>
                      <div className="label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Contact Information */}
            <div className="p-3 space-y-2 border-t border-[var(--md-sys-color-outline-variant)]">
              <div className="label-small mb-2" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Contact Information
              </div>
              {lowPriorityActions.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action || undefined}
                  disabled={!item.action}
                  className={`w-full p-2 text-left shape-sm transition-all motion-duration-short4 motion-easing-standard ${
                    item.action 
                      ? 'hover:surface-container-low state-layer relative cursor-pointer' 
                      : 'cursor-default'
                  }`}
                  style={{
                    color: 'var(--md-sys-color-on-surface-variant)'
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <item.icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--md-sys-color-outline)' }} />
                    <div className="flex-1 min-w-0">
                      <div className="label-small">{item.label}</div>
                      <div className="label-small text-wrap break-words">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Emergency Notice */}
            <div 
              className="p-3 shape-md m-3"
              style={{ 
                backgroundColor: 'var(--md-sys-color-error-container)',
                color: 'var(--md-sys-color-on-error-container)'
              }}
            >
              <div className="label-small">
                <strong>Emergency:</strong> Call 10177 or visit our emergency department for urgent medical situations.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}