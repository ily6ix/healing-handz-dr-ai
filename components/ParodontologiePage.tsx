import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Shield,
  Calendar,
  Heart,
  Target,
  Activity
} from 'lucide-react';

export function ParodontologiePage() {
  const warningSignsArray = [
    'Zahnfleischbluten beim Zähneputzen',
    'Geschwollenes oder gerötetes Zahnfleisch',
    'Mundgeruch oder schlechter Geschmack',
    'Zahnfleischrückgang',
    'Lockere oder wandernde Zähne',
    'Empfindliche Zahnhälse'
  ];

  const treatmentPhases = [
    { phase: '1', title: 'Vorbehandlung', description: 'Professionelle Reinigung und Mundhygiene-Instruktion', duration: '1-2 Termine' },
    { phase: '2', title: 'Systematische Parodontitis-Therapie', description: 'Gründliche Reinigung der Zahnfleischtaschen', duration: '2-4 Termine' },
    { phase: '3', title: 'Heilungsphase', description: 'Kontrolle der Heilung und Nachsorge', duration: '6-12 Wochen' },
    { phase: '4', title: 'Erhaltungstherapie', description: 'Langfristige Betreuung und Prophylaxe', duration: 'Lebenslang' }
  ];

  const riskFactors = [
    { title: 'Rauchen', description: 'Erhöht das Risiko um das 3-8fache', icon: AlertTriangle },
    { title: 'Diabetes', description: 'Schlechte Blutzuckerkontrolle verstärkt Entzündungen', icon: Activity },
    { title: 'Stress', description: 'Schwächt das Immunsystem', icon: Heart },
    { title: 'Genetik', description: 'Familiäre Veranlagung', icon: Shield }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 50%, #e6f3ff 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Parodontologie
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">
              Gesundes <span className="text-primary">Zahnfleisch</span> für starke Zähne
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Parodontitis ist eine entzündliche Erkrankung des Zahnhalteapparates, 
              die unbehandelt zum Zahnverlust führen kann. Mit moderner Parodontologie 
              stoppen wir die Erkrankung und erhalten Ihre Zähne langfristig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Parodontitis-Check buchen
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Risiko-Test durchführen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
                Früherkennung
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
                Warnsignale ernst nehmen
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Parodontitis entwickelt sich oft schleichend und schmerzfrei. 
                Diese Anzeichen sollten Sie nicht ignorieren.
              </p>
              
              <div className="space-y-4">
                {warningSignsArray.map((sign, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="aspect-[4/3] rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #99CCCC20 0%, #336699 100%)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=450&fit=crop"
                alt="Parodontologie Untersuchung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Phases */}
      <section className="py-20" style={{ backgroundColor: '#f8fbff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Behandlungsphasen
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Systematische Parodontitis-Therapie
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {treatmentPhases.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white" 
                     style={{ backgroundColor: '#003399' }}>
                  <span className="text-lg">{phase.phase}</span>
                </div>
                <Card className="flex-1 border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg text-foreground">{phase.title}</h3>
                      <Badge variant="outline" className="text-xs">{phase.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/80 text-secondary-foreground">
              Risikofaktoren
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Was das Parodontitis-Risiko erhöht
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {riskFactors.map((factor, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" 
                       style={{ backgroundColor: '#ff000020' }}>
                    <factor.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{factor.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {factor.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#f8fbff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl mb-6 text-foreground">
              Lassen Sie Ihr Zahnfleisch untersuchen
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Eine frühzeitige Diagnose ist entscheidend für den Behandlungserfolg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Parodontitis-Check buchen
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Zweitmeinung einholen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}