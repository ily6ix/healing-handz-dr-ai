import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Shield,
  Calendar,
  Zap,
  Target,
  Heart
} from 'lucide-react';

export function EndodontiePage() {
  const symptoms = [
    'Starke Zahnschmerzen, besonders nachts',
    'Druckempfindlichkeit beim Kauen',
    'Anhaltende Empfindlichkeit bei Hitze/Kälte',
    'Schwellung am Zahnfleisch',
    'Aufbissschmerzen',
    'Geschmacksveränderungen'
  ];

  const treatmentSteps = [
    {
      step: '1',
      title: 'Diagnose & Betäubung',
      description: 'Röntgenaufnahme und schmerzfreie Lokalanästhesie',
      duration: '15 Min.',
      details: ['Digitales Röntgen', 'Vitalitätsprüfung', 'Lokale Betäubung', 'Kofferdam-Anlegung']
    },
    {
      step: '2',
      title: 'Zugang & Reinigung',
      description: 'Eröffnung des Zahns und Entfernung des entzündeten Gewebes',
      duration: '30 Min.',
      details: ['Trepanation', 'Nervgewebeentfernung', 'Erste Desinfektion', 'Längenmessung']
    },
    {
      step: '3',
      title: 'Aufbereitung',
      description: 'Maschinelle Erweiterung und gründliche Desinfektion',
      duration: '45 Min.',
      details: ['Maschinelle Aufbereitung', 'Spülung mit Desinfektionslösung', 'Trocknung', 'Medikamentöse Einlage']
    },
    {
      step: '4',
      title: 'Wurzelfüllung',
      description: 'Bakteriendichte Versiegelung der Wurzelkanäle',
      duration: '30 Min.',
      details: ['Kontrolle der Heilung', 'Thermoplastische Füllung', 'Röntgenkontrolle', 'Verschluss']
    }
  ];

  const technologies = [
    {
      title: 'Elektronische Längenmessung',
      description: 'Präzise Bestimmung der Wurzelkanallänge',
      icon: Target,
      benefits: ['Höchste Präzision', 'Weniger Röntgenaufnahmen', 'Bessere Prognose']
    },
    {
      title: 'Maschinelle Aufbereitung',
      description: 'Moderne Nickel-Titan-Instrumente',
      icon: Zap,
      benefits: ['Schonende Behandlung', 'Verkürzte Behandlungszeit', 'Bessere Reinigung']
    },
    {
      title: 'Mikroskop-Behandlung',
      description: 'Behandlung unter Vergrößerung',
      icon: Shield,
      benefits: ['Maximale Präzision', 'Bessere Sicht', 'Höhere Erfolgsquote']
    }
  ];

  const alternatives = [
    {
      title: 'Zahnextraktion',
      description: 'Entfernung des Zahns',
      pros: ['Schnelle Lösung', 'Keine weitere Behandlung nötig'],
      cons: ['Zahnverlust', 'Folgekosten für Zahnersatz', 'Funktionseinschränkung'],
      cost: 'ab 150€ + Zahnersatz'
    },
    {
      title: 'Wurzelspitzenresektion',
      description: 'Chirurgische Entfernung der Wurzelspitze',
      pros: ['Zahnerhalt möglich', 'Bei Misserfolg der Endodontie'],
      cons: ['Operative Behandlung', 'Nicht immer erfolgreich'],
      cost: 'ab 400€'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 50%, #e6f3ff 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Endodontie
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">
              <span className="text-primary">Wurzelbehandlung</span> - Zähne retten statt ziehen
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Wenn der Zahnnerv entzündet oder abgestorben ist, kann eine Wurzelbehandlung 
              den Zahn retten. Mit modernster Technik und schonenden Verfahren erhalten 
              wir Ihre natürlichen Zähne - schmerzfrei und mit hoher Erfolgsquote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Notfall-Termin buchen
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Zweitmeinung einholen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
                Wann ist eine Wurzelbehandlung nötig?
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
                Diese Symptome sollten Sie ernst nehmen
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ein entzündeter oder abgestorbener Zahnnerv verursacht oft starke Schmerzen. 
                Je schneller die Behandlung erfolgt, desto besser sind die Heilungschancen 
                und desto geringer die Schmerzen.
              </p>
              
              <div className="space-y-4 mb-8">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{symptom}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-4 rounded-lg border-2 border-red-200 bg-red-50">
                <p className="text-red-800 text-sm">
                  <strong>Notfall:</strong> Bei starken Schmerzen bieten wir auch außerhalb 
                  der Sprechzeiten Notfalltermine an. Rufen Sie uns an!
                </p>
              </div>
            </div>
            
            <div className="aspect-[4/3] rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #99CCCC20 0%, #336699 100%)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=450&fit=crop"
                alt="Endodontie Behandlung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-20" style={{ backgroundColor: '#f8fbff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Behandlungsablauf
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Moderne Wurzelbehandlung Schritt für Schritt
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dank modernster Technologie und örtlicher Betäubung ist die Wurzelbehandlung 
              heute eine schmerzfreie Behandlung mit hoher Erfolgsquote.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {treatmentSteps.map((step, index) => (
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

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Modernste Technologie
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Präzision für bessere Ergebnisse
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mit modernster Endodontie-Technologie erreichen wir Erfolgsquoten 
              von über 90% und können Behandlungszeiten deutlich verkürzen.
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
                    {tech.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alternatives Section */}
      <section className="py-20" style={{ backgroundColor: '#f8fbff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Behandlungsalternativen
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Warum Zahnerhalt die beste Wahl ist
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ein natürlicher Zahn ist durch nichts zu ersetzen. Hier sehen Sie die 
              Alternativen zur Wurzelbehandlung und warum der Zahnerhalt meist die 
              beste Lösung ist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {alternatives.map((alternative, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{alternative.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {alternative.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-green-600 mb-2">Vorteile:</h4>
                      <ul className="space-y-1">
                        {alternative.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-foreground">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm text-red-600 mb-2">Nachteile:</h4>
                      <ul className="space-y-1">
                        {alternative.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-center space-x-2">
                            <AlertTriangle className="w-3 h-3 text-red-500 flex-shrink-0" />
                            <span className="text-sm text-foreground">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2 border-t border-border">
                      <span className="text-sm text-primary font-medium">{alternative.cost}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg text-foreground mb-2">Unser Ziel: Zahnerhalt</h3>
                <p className="text-muted-foreground">
                  Mit über 90% Erfolgsquote ist die moderne Wurzelbehandlung oft die 
                  beste Lösung, um Ihren natürlichen Zahn zu erhalten. Nichts kann 
                  einen echten Zahn ersetzen!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Behandlungserfolg
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Bewährte Erfolgsquoten
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Dank modernster Technologie und langjähriger Erfahrung erreichen 
              wir bei Wurzelbehandlungen hervorragende Ergebnisse.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl text-primary mb-2">92%</div>
                <div className="text-sm text-muted-foreground">Erfolgsquote nach 5 Jahren</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Schmerzfreiheit nach Behandlung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-primary mb-2">800+</div>
                <div className="text-sm text-muted-foreground">Erfolgreiche Wurzelbehandlungen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#f8fbff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Retten Sie Ihren Zahn - wir helfen dabei
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bei Zahnschmerzen oder einer empfohlenen Wurzelbehandlung beraten wir Sie 
              gerne ausführlich über alle Möglichkeiten. Auch Notfalltermine sind möglich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Endodontie-Termin buchen
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Zap className="w-4 h-4 mr-2" />
                Notfall-Hotline anrufen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}