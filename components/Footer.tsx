import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  Linkedin
} from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Medical Disclaimers', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  const services = [
    { label: 'General Medicine', href: '#' },
    { label: 'Cardiology', href: '#' },
    { label: 'Emergency Care', href: '#' },
    { label: 'Laboratory Services', href: '#' },
  ];

  const openingHours = [
    { day: 'Mon-Fri', hours: '7:00-19:00' },
    { day: 'Saturday', hours: '8:00-16:00' },
  ];

  return (
    <footer className="surface-container border-t border-[var(--md-sys-color-outline-variant)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div 
                className="w-8 h-8 shape-md flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--md-sys-color-primary)',
                  color: 'var(--md-sys-color-on-primary)'
                }}
              >
                <div 
                  className="w-4 h-4 shape-sm"
                  style={{
                    backgroundColor: 'var(--md-sys-color-on-primary)'
                  }}
                ></div>
              </div>
              <div>
                <h3 className="title-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Healing Hands Healthcare
                </h3>
                <p className="label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Cape Town Medical Centre
                </p>
              </div>
            </div>
            <p className="body-small leading-relaxed" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              Your compassionate medical centre in the heart of Cape Town. 
              We provide comprehensive healthcare services 
              with state-of-the-art technology and personalized care.
            </p>
            <div className="flex space-x-3">
              <button className="w-8 h-8 shape-md flex items-center justify-center state-layer relative transition-all motion-duration-short4 motion-easing-standard hover:surface-container-low">
                <Facebook className="w-4 h-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
              </button>
              <button className="w-8 h-8 shape-md flex items-center justify-center state-layer relative transition-all motion-duration-short4 motion-easing-standard hover:surface-container-low">
                <Instagram className="w-4 h-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
              </button>
              <button className="w-8 h-8 shape-md flex items-center justify-center state-layer relative transition-all motion-duration-short4 motion-easing-standard hover:surface-container-low">
                <Twitter className="w-4 h-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
              </button>
              <button className="w-8 h-8 shape-md flex items-center justify-center state-layer relative transition-all motion-duration-short4 motion-easing-standard hover:surface-container-low">
                <Linkedin className="w-4 h-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="title-medium mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="body-small transition-colors motion-duration-short4 motion-easing-standard hover:opacity-80"
                    style={{ 
                      color: 'var(--md-sys-color-on-surface-variant)'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="title-medium mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Medical Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="body-small transition-colors motion-duration-short4 motion-easing-standard hover:opacity-80"
                    style={{ 
                      color: 'var(--md-sys-color-on-surface-variant)'
                    }}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            {/* Contact */}
            <div>
              <h4 className="title-medium mb-4" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Contact
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                  <div>
                    <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      021 123 4567
                    </p>
                    <p className="label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                      24/7 Emergency Line
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                  <div>
                    <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      info@healinghands-health.co.za
                    </p>
                    <p className="label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                      Response within 24h
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
                  <div>
                    <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      123 Long Street
                    </p>
                    <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      Cape Town, 8001
                    </p>
                    <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      Western Cape, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="title-medium mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Opening Hours
              </h4>
              <div className="space-y-1">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between body-small">
                    <span style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                      {schedule.day}
                    </span>
                    <span style={{ color: 'var(--md-sys-color-on-surface)' }}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between body-small">
                  <span style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                    Sunday
                  </span>
                  <span style={{ color: 'var(--md-sys-color-error)' }}>
                    Emergency Only
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="h-px w-full my-8"
          style={{ backgroundColor: 'var(--md-sys-color-outline-variant)' }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
            © 2024 Healing Hands Healthcare. All rights reserved.
          </p>
          <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
            Made with ❤️ in Cape Town
          </p>
        </div>
      </div>
    </footer>
  );
}