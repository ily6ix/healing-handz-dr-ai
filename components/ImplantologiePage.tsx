import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Award, 
  CheckCircle, 
  Clock, 
  Shield,
  Calendar,
  Target,
  Heart,
  Users
} from 'lucide-react';

export function ImplantologiePage() {
  const implantTypes = [
    {
      title: 'Einzelzahnimplantat',
      description: 'Ersatz für einen einzelnen verlorenen Zahn',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
      advantages: ['Erhalt der Nachbarzähne', 'Wie ein natürlicher Zahn', 'Lebenslange Haltbarkeit'],
      duration: '3-6 Monate',
      price: 'ab 1.800€'
    },
    {
      title: 'Implantatbrücke',
      description: 'Festsitzender Ersatz für mehrere fehlende Zähne',
      image: 'https://images.unsplash.com/photo-1643297654798-b7ccd31ac027?w=400&h=300&fit=crop',
      advantages: ['Keine herausnehmbaren Teile', 'Stabiler Halt', 'Optimaler Kaukomfort'],
      duration: '3-6 Monate',
      price: 'ab 4.500€'
    },
    {
      title: 'All-on-4 Konzept',
      description: 'Vollständige Zahnreihe auf nur 4 Implantaten',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
      advantages: ['Feste Zähne an einem Tag', 'Minimaler Aufwand', 'Hohe Lebensqualität'],
      duration: '1 Tag + Heilung',
      price: 'ab 12.000€'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Beratung & Diagnostik',
      description: 'Umfassende Untersuchung und 3D-Planung',
      duration: '60 Min.',
      details: ['Digitales Röntgen', '3D-Diagnostik', 'Behandlungsplanung', 'Kostenaufklärung']
    },
    {
      step: '2',
      title: 'Implantat-Insertion',
      description: 'Schonende Einbringung des Implantats',
      duration: '45-90 Min.',
      details: ['Lokale Betäubung', 'Minimalinvasiver Eingriff', 'Provisorische Versorgung', 'Nachsorge']
    },
    {
      step: '3',
      title: 'Einheilphase',
      description: 'Verwachsung mit dem Kieferknochen',
      duration: '3-6 Monate',
      details: ['Regelmäßige Kontrollen', 'Mundhygiene-Anleitung', 'Provisorische Versorgung', 'Heilungsüberwachung']
    },
    {
      step: '4',
      title: 'Prothetische Versorgung',
      description: 'Aufbau von Krone, Brücke oder Prothese',
      duration: '2-3 Termine',
      details: ['Freilegung', 'Abformung', 'Anprobe', 'Eingliederung']
    }
  ];

  const benefits = [
    'Erhalt des Kieferknochens durch natürliche Belastung',
    'Schonung gesunder Nachbarzähne',
    'Optimaler Kaukomfort wie bei natürlichen Zähnen',
    'Ästhetisch nicht von echten Zähnen zu unterscheiden',
    'Langfristige und dauerhafte Lösung',
    'Verbesserung der Lebensqualität und des Selbstbewusstseins'
  ];

  const technologies = [
    {
      title: '3D-Implantatplanung',
      description: 'Präzise Planung vor dem Eingriff',
      icon: Target,
      advantages: ['Optimale Positionierung', 'Minimierung der Risiken', 'Vorhersagbare Ergebnisse']
    },
    {
      title: 'Navigierte Implantation',
      description: 'Computergestützte Implantation',
      icon: Shield,
      advantages: ['Höchste Präzision', 'Schonung wichtiger Strukturen', 'Verkürzte OP-Zeit']
    },
    {
      title: 'Premium Implantatsysteme',
      description: 'Bewährte Markenimplantate',
      icon: Award,
      advantages: ['Biokompatibles Titan', 'Lebenslange Garantie*', 'Weltweite Verfügbarkeit']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 surface-container-lowest">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-6">
                <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Advanced Implant Dentistry
                </span>
              </div>
              <h1 className="display-small mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                <span style={{ color: 'var(--md-sys-color-primary)' }}>Dental implants</span> - Your third set of teeth
              </h1>
              <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Dental implants are the most modern and comfortable solution for missing teeth. 
                They replace the tooth root and provide fixed dental prosthetics that feel and 
                function like your own teeth at our Cape Town healthcare facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="md-button-filled flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Implant Consultation</span>
                </button>
                <button className="md-button-outlined flex items-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>Schedule 3D Diagnostics</span>
                </button>
              </div>
            </div>
            
            <div className="aspect-[4/3] shape-xl overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&h=450&fit=crop&q=80"
                alt="Advanced dental implant technology and procedures at Healing Hands Healthcare Cape Town"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
                Ihre Vorteile
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
                Warum Implantate die beste Lösung sind
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Implantate bieten gegenüber herkömmlichem Zahnersatz entscheidende Vorteile. 
                Sie sind die einzige Lösung, die den verlorenen Zahn vollständig ersetzt - 
                inklusive der Wurzel.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="aspect-[4/3] rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #99CCCC20 0%, #336699 100%)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=450&fit=crop"
                alt="Zahnimplantat Behandlung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Implant Types Section */}
      <section className="py-20" style={{ backgroundColor: '#f8fbff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Implantat-Lösungen
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Für jeden Fall die passende Lösung
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der Einzelzahnversorgung bis zur kompletten Sanierung - 
              wir bieten individuelle Implantat-Lösungen.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {implantTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-[4/3] rounded-t-lg overflow-hidden">
                  <ImageWithFallback
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-foreground">{type.title}</CardTitle>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-1">{type.duration}</Badge>
                      <p className="text-sm font-medium text-primary">{type.price}</p>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {type.advantages.map((advantage, advantageIndex) => (
                      <li key={advantageIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Mehr erfahren
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Modernste Technologie
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Präzision durch digitale Implantologie
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mit modernster 3D-Diagnostik und computergesteuerter Implantation 
              erreichen wir höchste Präzision und Sicherheit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" 
                       style={{ backgroundColor: '#99CCCC40' }}>
                    <tech.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{tech.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tech.advantages.map((advantage, advantageIndex) => (
                      <li key={advantageIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: '#f8fbff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Behandlungsablauf
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Ihr Weg zum Implantat
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der ersten Beratung bis zum fertigen Zahnersatz begleiten wir Sie 
              durch alle Phasen der Implantat-Behandlung.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                    style={{ backgroundColor: '#003399' }}
                  >
                    <span className="text-lg">{step.step}</span>
                  </div>
                  <Card className="flex-1 border-border">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg text-foreground">{step.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #99CCCC20 0%, #336699 100%)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop"
                alt="Zufriedene Patienten"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
                Patientenerfahrungen
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
                Über 1000 erfolgreiche Implantationen
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Mit über 15 Jahren Erfahrung in der Implantologie haben wir bereits 
                vielen Patienten zu einem neuen Lächeln verholfen. Unsere Erfolgsquote 
                liegt bei über 98%.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Erfolgsquote</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Implantate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Users className="w-4 h-4 mr-2" />
                Patientenbewertungen ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#f8fbff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Vereinbaren Sie Ihre Implantat-Beratung
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              In einem ausführlichen Beratungsgespräch prüfen wir, ob Implantate 
              für Sie geeignet sind und erstellen einen individuellen Behandlungsplan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Beratungstermin buchen
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Kostenlose 3D-Diagnostik
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}