import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Heart, 
  CheckCircle, 
  Clock, 
  Sparkles,
  Calendar,
  Star,
  Smile,
  Award
} from 'lucide-react';

export function AesthetischePage() {
  const treatments = [
    {
      title: 'Veneers',
      description: 'Hauchdünne Keramikschalen für perfekte Frontzähne',
      image: 'https://images.unsplash.com/photo-1643297654798-b7ccd31ac027?w=400&h=300&fit=crop',
      benefits: ['Perfekte Zahnform', 'Natürliche Farbe', 'Lange Haltbarkeit'],
      duration: '2-3 Termine',
      price: 'ab 800€/Zahn'
    },
    {
      title: 'Zahnbleaching',
      description: 'Professionelle Aufhellung für strahlend weiße Zähne',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
      benefits: ['Bis zu 8 Stufen heller', 'Schonend & sicher', 'Sofortige Ergebnisse'],
      duration: '1-2 Termine',
      price: 'ab 350€'
    },
    {
      title: 'Composite-Bonding',
      description: 'Formkorrektur mit zahnfarbenem Kunststoff',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
      benefits: ['Substanzschonend', 'Sofortige Korrektur', 'Natürliches Ergebnis'],
      duration: '1 Termin',
      price: 'ab 150€/Zahn'
    },
    {
      title: 'Invisalign',
      description: 'Unsichtbare Zahnkorrektur mit transparenten Schienen',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      benefits: ['Nahezu unsichtbar', 'Herausnehmbar', 'Komfortabel'],
      duration: '6-18 Monate',
      price: 'ab 3.500€'
    }
  ];

  const beforeAfterCases = [
    {
      title: 'Verfärbte Frontzähne',
      treatment: 'Veneers',
      description: 'Komplette Umgestaltung der Frontzähne mit Keramik-Veneers',
      result: '8 Veneers für ein perfektes Lächeln'
    },
    {
      title: 'Zahnlücken',
      treatment: 'Composite-Bonding',
      description: 'Schließung von Zahnlücken ohne Beschleifen',
      result: 'Natürliches Ergebnis in nur einer Sitzung'
    },
    {
      title: 'Verfärbte Zähne',
      treatment: 'Professionelles Bleaching',
      description: 'Aufhellung um 6 Farbstufen',
      result: 'Strahlend weiße Zähne'
    }
  ];

  const smileDesignSteps = [
    {
      step: '1',
      title: 'Smile-Analyse',
      description: 'Digitale Analyse Ihres Lächelns',
      details: ['Gesichtsanalyse', 'Zahnform-Bestimmung', 'Farbanalyse', 'Proportions-Check']
    },
    {
      step: '2',
      title: 'Digital Mock-Up',
      description: 'Digitale Vorschau Ihres neuen Lächelns',
      details: ['3D-Simulation', 'Verschiedene Varianten', 'Gemeinsame Abstimmung', 'Optimierung']
    },
    {
      step: '3',
      title: 'Behandlungsplanung',
      description: 'Detaillierte Planung der Behandlung',
      details: ['Behandlungsschritte', 'Zeitplan', 'Kostenaufstellung', 'Alternative Optionen']
    },
    {
      step: '4',
      title: 'Umsetzung',
      description: 'Schonende Realisierung Ihres Traumlächelns',
      details: ['Minimale Zahnpräparation', 'Präzise Anfertigung', 'Perfekte Anpassung', 'Nachkontrolle']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 50%, #e6f3ff 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Ästhetische Zahnheilkunde
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">
              Ihr perfektes <span className="text-primary">Lächeln</span> wartet auf Sie
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ein strahlendes Lächeln öffnet Türen und schenkt Selbstvertrauen. 
              Mit modernster ästhetischer Zahnheilkunde verwirklichen wir Ihren Traum 
              von perfekten Zähnen - schonend, natürlich und dauerhaft schön.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Smile-Design Beratung
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Vorher-Nachher Galerie
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Unsere Behandlungen
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Wege zu Ihrem Traumlächeln
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der sanften Zahnaufhellung bis zur kompletten Lächeln-Transformation - 
              wir bieten alle modernen Methoden der ästhetischen Zahnheilkunde.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="aspect-[4/3] rounded-t-lg overflow-hidden">
                  <ImageWithFallback
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-foreground">{treatment.title}</CardTitle>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-1">{treatment.duration}</Badge>
                      <p className="text-sm font-medium text-primary">{treatment.price}</p>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {treatment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {treatment.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
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

      {/* Smile Design Process */}
      <section className="py-20" style={{ backgroundColor: '#f8fbff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Smile Design
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Ihr Weg zum perfekten Lächeln
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mit unserem systematischen Smile-Design-Konzept planen wir 
              Ihr neues Lächeln digital - vor Behandlungsbeginn.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {smileDesignSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                    style={{ backgroundColor: '#003399' }}
                  >
                    <span className="text-lg">{step.step}</span>
                  </div>
                  <Card className="flex-1 border-border">
                    <CardContent className="p-6">
                      <h3 className="text-lg text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2">
                            <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
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

      {/* Before/After Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Behandlungserfolge
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Beeindruckende Transformationen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sehen Sie, wie wir das Lächeln unserer Patienten transformiert haben. 
              Jede Behandlung ist individuell auf die Wünsche des Patienten abgestimmt.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {beforeAfterCases.map((caseStudy, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-primary" />
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {caseStudy.treatment}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-foreground">{caseStudy.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {caseStudy.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: '#99CCCC20' }}>
                    <p className="text-sm text-foreground">
                      <strong>Ergebnis:</strong> {caseStudy.result}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Vollständigen Fall ansehen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20" style={{ backgroundColor: '#f8fbff' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
                Modernste Technik
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
                Digitale Ästhetik für perfekte Ergebnisse
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Mit modernster Digitaltechnik können wir Ihr neues Lächeln bereits vor 
                der Behandlung simulieren. So sehen Sie das Ergebnis, bevor wir beginnen.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Digital Smile Design', description: 'Vorschau Ihres neuen Lächelns' },
                  { title: 'Intraoral-Scanner', description: 'Präzise digitale Abformung' },
                  { title: 'CAD/CAM-Technologie', description: 'Perfekte Passform und Ästhetik' }
                ].map((tech, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" 
                         style={{ backgroundColor: '#99CCCC40' }}>
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-foreground">{tech.title}</h3>
                      <p className="text-muted-foreground text-sm">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="aspect-[4/3] rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #99CCCC20 0%, #336699 100%)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=450&fit=crop"
                alt="Digitale Smile Design Technologie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Verwirklichen Sie Ihren Traum vom perfekten Lächeln
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              In einem unverbindlichen Beratungsgespräch zeigen wir Ihnen die 
              Möglichkeiten für Ihr neues Lächeln. Inklusive digitaler Vorschau!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Smile-Design Termin buchen
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Smile className="w-4 h-4 mr-2" />
                Kostenlose Smile-Analyse
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}