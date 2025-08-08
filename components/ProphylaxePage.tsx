import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Calendar,
  ArrowRight,
  Heart,
  Sparkles,
  Target
} from 'lucide-react';

export function ProphylaxePage() {
  const benefits = [
    'Früherkennung von Karies und Zahnfleischerkrankungen',
    'Entfernung von hartnäckigen Belägen und Zahnstein',
    'Vorbeugung kostspieliger Behandlungen',
    'Erhaltung der natürlichen Zahnsubstanz',
    'Frischer Atem und sauberes Mundgefühl',
    'Reduzierung des Risikos für Herzerkrankungen'
  ];

  const treatmentSteps = [
    {
      step: '1',
      title: 'Untersuchung',
      description: 'Gründliche Kontrolle aller Zähne und des Zahnfleisches',
      duration: '10 Min.'
    },
    {
      step: '2',
      title: 'Zahnsteinentfernung',
      description: 'Professionelle Entfernung von Zahnstein mit Ultraschall',
      duration: '15 Min.'
    },
    {
      step: '3',
      title: 'Politur',
      description: 'Gründliche Reinigung und Politur aller Zahnoberflächen',
      duration: '15 Min.'
    },
    {
      step: '4',
      title: 'Fluoridierung',
      description: 'Stärkung des Zahnschmelzes durch Fluoridbehandlung',
      duration: '5 Min.'
    },
    {
      step: '5',
      title: 'Beratung',
      description: 'Individuelle Tipps zur häuslichen Mundpflege',
      duration: '10 Min.'
    }
  ];

  const services = [
    {
      title: 'Professionelle Zahnreinigung (PZR)',
      description: 'Umfassende Reinigung aller Zahnoberflächen',
      features: ['Entfernung von Plaque und Zahnstein', 'Politur der Zähne', 'Fluoridierung'],
      price: 'ab 89€'
    },
    {
      title: 'Vorsorgeuntersuchung',
      description: 'Halbjährliche Kontrolle Ihrer Zahngesundheit',
      features: ['Kariesfrüherkennung', 'Zahnfleischkontrolle', 'Röntgendiagnostik'],
      price: 'Kassenleistung'
    },
    {
      title: 'Kinderprophylaxe',
      description: 'Spielerische Heranführung an die Zahnpflege',
      features: ['Altersgerechte Beratung', 'Fissurenversiegelung', 'Fluoridierung'],
      price: 'ab 45€'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Prophylaxe & Vorsorge
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">
              Vorbeugung ist der beste <span className="text-primary">Zahnschutz</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Gesunde Zähne ein Leben lang - mit unserer professionellen Prophylaxe beugen Sie 
              Karies und Parodontitis vor und erhalten Ihre natürliche Zahnsubstanz. 
              Vorsorge ist günstiger als jede Reparatur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Prophylaxe-Termin buchen
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Kostenvoranschlag anfordern
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
                Ihre Vorteile
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
                Warum Prophylaxe so wichtig ist
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Regelmäßige professionelle Zahnreinigung entfernt bakterielle Beläge, 
                die Sie zu Hause nicht erreichen können. So beugen Sie Erkrankungen vor 
                und sparen langfristig Kosten und Zeit.
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
            
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=450&fit=crop"
                alt="Professionelle Zahnreinigung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Behandlungsablauf
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              So läuft Ihre Prophylaxe ab
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eine professionelle Zahnreinigung dauert etwa 60 Minuten und erfolgt 
              in mehreren schonenden Schritten.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {treatmentSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground bg-primary">
                    <span className="text-lg">{step.step}</span>
                  </div>
                  <Card className="flex-1 border-border bg-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg text-foreground">{step.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Unsere Prophylaxe-Leistungen
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Individuelle Vorsorge für jeden Patienten
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der klassischen Vorsorgeuntersuchung bis zur umfassenden 
              professionellen Zahnreinigung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {service.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
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
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=450&fit=crop"
                alt="Moderne Prophylaxe-Geräte"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
                Modernste Technik
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
                Schonende Reinigung mit neuester Technologie
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Mit modernsten Ultraschall- und Air-Flow-Geräten entfernen wir auch 
                hartnäckigste Verfärbungen schonend und effektiv. Unsere Geräte arbeiten 
                besonders sanft zum Zahnfleisch.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Sparkles, title: 'Air-Flow-Technik', description: 'Schonende Entfernung von Verfärbungen' },
                  { icon: Target, title: 'Ultraschall-Scaling', description: 'Präzise Zahnsteinentfernung ohne Schmerzen' },
                  { icon: Heart, title: 'Fluoridbehandlung', description: 'Stärkung des Zahnschmelzes' }
                ].map((tech, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10">
                      <tech.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-foreground">{tech.title}</h3>
                      <p className="text-muted-foreground text-sm">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
                Häufige Fragen
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
                Alles über Prophylaxe
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Wie oft sollte eine professionelle Zahnreinigung durchgeführt werden?',
                  answer: 'Empfohlen wird eine PZR alle 6 Monate. Bei erhöhtem Parodontitis-Risiko kann eine häufigere Behandlung sinnvoll sein.'
                },
                {
                  question: 'Übernimmt die Krankenkasse die Kosten für die Prophylaxe?',
                  answer: 'Die Vorsorgeuntersuchung wird von der Krankenkasse übernommen. Für die professionelle Zahnreinigung gibt es oft Zuschüsse.'
                },
                {
                  question: 'Ist eine professionelle Zahnreinigung schmerzhaft?',
                  answer: 'Moderne Geräte arbeiten sehr schonend. Bei empfindlichen Zähnen können wir eine lokale Betäubung anwenden.'
                },
                {
                  question: 'Kann ich nach der Behandlung normal essen?',
                  answer: 'Ja, Sie können direkt nach der Behandlung normal essen. Wir empfehlen, 2 Stunden auf färbende Lebensmittel zu verzichten.'
                }
              ].map((faq, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg mb-3 text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Starten Sie noch heute mit der Vorsorge
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vereinbaren Sie einen Termin für Ihre professionelle Zahnreinigung 
              und investieren Sie in Ihre langfristige Zahngesundheit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Jetzt Termin vereinbaren
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Beratung anfordern
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}