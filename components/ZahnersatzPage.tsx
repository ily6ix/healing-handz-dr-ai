import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Smile, 
  CheckCircle, 
  Clock, 
  Award,
  Calendar,
  Shield,
  Sparkles,
  Users
} from 'lucide-react';

export function ZahnersatzPage() {
  const prostheticTypes = [
    {
      title: 'Kronen',
      description: 'Überkronung stark geschädigter Zähne',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop',
      features: ['Vollkeramik oder Metallkeramik', 'Perfekte Farbabstimmung', 'Langlebig und stabil'],
      duration: '2-3 Termine',
      price: 'ab 450€'
    },
    {
      title: 'Brücken',
      description: 'Festsitzender Ersatz für fehlende Zähne',
      image: 'https://images.unsplash.com/photo-1643297654798-b7ccd31ac027?w=400&h=300&fit=crop',
      features: ['Festsitzend ohne herausnehmbare Teile', 'Natürliches Kaugefühl', 'Ästhetisch ansprechend'],
      duration: '2-3 Termine',
      price: 'ab 1.200€'
    },
    {
      title: 'Teilprothesen',
      description: 'Herausnehmbarer Ersatz bei mehreren fehlenden Zähnen',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
      features: ['Präzise Passform', 'Stabile Verankerung', 'Komfortable Handhabung'],
      duration: '3-4 Termine',
      price: 'ab 800€'
    },
    {
      title: 'Vollprothesen',
      description: 'Kompletter Zahnersatz für zahnlose Kiefer',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
      features: ['Individuelle Anfertigung', 'Optimale Passform', 'Natürliche Ästhetik'],
      duration: '4-5 Termine',
      price: 'ab 1.500€'
    }
  ];

  const materials = [
    {
      name: 'Vollkeramik',
      description: 'Höchste Ästhetik, metallfrei',
      advantages: ['Sehr natürliches Aussehen', 'Biokompatibel', 'Keine Verfärbungen'],
      icon: Sparkles
    },
    {
      name: 'Metallkeramik',
      description: 'Bewährte Kombination aus Stabilität und Ästhetik',
      advantages: ['Sehr stabil', 'Lange Haltbarkeit', 'Gutes Preis-Leistungs-Verhältnis'],
      icon: Shield
    },
    {
      name: 'Zirkonoxid',
      description: 'Hochmoderne Keramik mit maximaler Festigkeit',
      advantages: ['Extrem stabil', 'Metallfrei', 'Perfekte Ästhetik'],
      icon: Award
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Beratung & Planung',
      description: 'Ausführliche Untersuchung und Behandlungsplanung',
      details: ['Digitale Abformung', '3D-Planung', 'Kostenvoranschlag']
    },
    {
      step: '2',
      title: 'Vorbereitung',
      description: 'Professionelle Vorbereitung der Zähne',
      details: ['Zahnpräparation', 'Provisorische Versorgung', 'Farbbestimmung']
    },
    {
      step: '3',
      title: 'Herstellung',
      description: 'Präzise Anfertigung im Partnerlabor',
      details: ['CAD/CAM-Technologie', 'Qualitätskontrolle', 'Individuelle Anpassung']
    },
    {
      step: '4',
      title: 'Eingliederung',
      description: 'Einsetzen und Anpassung des Zahnersatzes',
      details: ['Passformkontrolle', 'Bisskorrektur', 'Nachsorge-Termine']
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
                  Dental Prosthetics & Restorative Care
                </span>
              </div>
              <h1 className="display-small mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Professional <span style={{ color: 'var(--md-sys-color-primary)' }}>dental restoration</span> services
              </h1>
              <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                When teeth are lost or severely damaged, our modern dental restoration services 
                restore both function and aesthetics. From individual crowns to complete prosthetics - 
                we find the optimal solution for your oral health needs at our Cape Town facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="md-button-filled flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
                <button className="md-button-outlined flex items-center space-x-2">
                  <Smile className="w-4 h-4" />
                  <span>Request Cost Estimate</span>
                </button>
              </div>
            </div>
            
            <div className="aspect-[4/3] shape-xl overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=600&h=450&fit=crop&q=80"
                alt="Modern dental prosthetics and restoration equipment at Healing Hands Healthcare"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Prosthetics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Arten von Zahnersatz
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Die richtige Lösung für jeden Fall
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Je nach Ausgangssituation bieten wir verschiedene Formen des Zahnersatzes an - 
              von festsitzend bis herausnehmbar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {prostheticTypes.map((type, index) => (
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
                    <CardTitle className="text-xl text-foreground">{type.title}</CardTitle>
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
                    {type.features.map((feature, featureIndex) => (
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

      {/* Materials Section */}
      <section className="py-20" style={{ backgroundColor: '#f8fbff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Materialien
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Hochwertige Materialien für optimale Ergebnisse
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wir verwenden ausschließlich bewährte und innovative Materialien 
              höchster Qualität für Ihren Zahnersatz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" 
                       style={{ backgroundColor: '#99CCCC40' }}>
                    <material.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{material.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {material.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {material.advantages.map((advantage, advantageIndex) => (
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Behandlungsablauf
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Ihr Weg zum perfekten Zahnersatz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der ersten Beratung bis zur fertigen Versorgung begleiten wir Sie 
              durch jeden Schritt der Behandlung.
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
                      <h3 className="text-lg text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-1">
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
      <section className="py-20 surface-container-low">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] shape-xl overflow-hidden surface-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=450&fit=crop&q=80"
                alt="Advanced dental technology and digital imaging equipment at our Cape Town facility"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <div className="inline-flex items-center px-3 py-1 shape-md surface-container-high mb-4">
                <span className="label-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Advanced Technology
                </span>
              </div>
              <h2 className="headline-large mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Digital precision for perfect results
              </h2>
              <p className="body-large mb-8" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Using state-of-the-art CAD/CAM technology and digital impressions, we create 
                dental prosthetics with the highest precision. This means perfect fit and 
                optimal comfort for our patients in Cape Town.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Digital Impressions', description: 'No uncomfortable impression trays required' },
                  { title: 'CAD/CAM Manufacturing', description: 'Precise computer-assisted production' },
                  { title: '3D Planning', description: 'Visualization of results before treatment' }
                ].map((tech, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div 
                      className="w-10 h-10 shape-md flex items-center justify-center flex-shrink-0"
                      style={{ 
                        backgroundColor: 'var(--md-sys-color-primary-container)',
                        color: 'var(--md-sys-color-on-primary-container)'
                      }}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="title-medium mb-1" style={{ color: 'var(--md-sys-color-on-surface)' }}>{tech.title}</h3>
                      <p className="body-medium" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Lassen Sie sich zu Ihrem Zahnersatz beraten
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              In einem ausführlichen Beratungsgespräch finden wir gemeinsam die 
              optimale Lösung für Ihre individuelle Situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Beratungstermin vereinbaren
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Kostenplan erstellen lassen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}