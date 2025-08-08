export interface ChatMessage {
  id: string;
  type: 'user' | 'ai' | 'system';
  content: string;
  timestamp: Date;
  metadata?: {
    symptoms?: string[];
    diagnosis?: string;
    urgency?: 'low' | 'medium' | 'high' | 'emergency';
    recommendedActions?: string[];
    appointmentSuggestion?: {
      department: string;
      urgency: string;
      reason: string;
    };
    medicationPrediction?: {
      medication: string;
      likelihood: number;
      refillDate: string;
    };
  };
}

export interface SymptomAnalysis {
  symptoms: string[];
  possibleConditions: Array<{
    condition: string;
    probability: number;
    severity: 'mild' | 'moderate' | 'severe';
    description: string;
  }>;
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  recommendedDepartment: string;
  recommendedActions: string[];
}

export interface MedicationRefillPrediction {
  patientId: string;
  predictions: Array<{
    medication: string;
    currentSupply: number;
    dailyDosage: number;
    predictedRefillDate: string;
    confidence: number;
    priority: 'low' | 'medium' | 'high';
  }>;
}

class MedicalAIService {
  private conversationHistory: ChatMessage[] = [];
  private userSymptoms: string[] = [];
  private userMedications: string[] = [];

  // Common symptoms and their associated conditions
  private symptomDatabase = {
    'headache': {
      conditions: [
        { name: 'Tension Headache', probability: 0.6, severity: 'mild' as const },
        { name: 'Migraine', probability: 0.25, severity: 'moderate' as const },
        { name: 'Sinusitis', probability: 0.1, severity: 'mild' as const },
        { name: 'Hypertension', probability: 0.05, severity: 'moderate' as const }
      ],
      department: 'general',
      urgency: 'medium' as const
    },
    'chest pain': {
      conditions: [
        { name: 'Cardiac Issues', probability: 0.4, severity: 'severe' as const },
        { name: 'Anxiety', probability: 0.3, severity: 'moderate' as const },
        { name: 'Muscle Strain', probability: 0.2, severity: 'mild' as const },
        { name: 'Gastroesophageal Reflux', probability: 0.1, severity: 'mild' as const }
      ],
      department: 'emergency',
      urgency: 'emergency' as const
    },
    'shortness of breath': {
      conditions: [
        { name: 'Asthma', probability: 0.4, severity: 'moderate' as const },
        { name: 'Anxiety', probability: 0.25, severity: 'moderate' as const },
        { name: 'Heart Problems', probability: 0.2, severity: 'severe' as const },
        { name: 'Upper Respiratory Infection', probability: 0.15, severity: 'mild' as const }
      ],
      department: 'emergency',
      urgency: 'high' as const
    },
    'fever': {
      conditions: [
        { name: 'Viral Infection', probability: 0.5, severity: 'mild' as const },
        { name: 'Bacterial Infection', probability: 0.3, severity: 'moderate' as const },
        { name: 'Flu', probability: 0.15, severity: 'moderate' as const },
        { name: 'COVID-19', probability: 0.05, severity: 'moderate' as const }
      ],
      department: 'general',
      urgency: 'medium' as const
    },
    'cough': {
      conditions: [
        { name: 'Upper Respiratory Infection', probability: 0.4, severity: 'mild' as const },
        { name: 'Bronchitis', probability: 0.25, severity: 'moderate' as const },
        { name: 'Allergies', probability: 0.2, severity: 'mild' as const },
        { name: 'Pneumonia', probability: 0.1, severity: 'severe' as const },
        { name: 'Asthma', probability: 0.05, severity: 'moderate' as const }
      ],
      department: 'general',
      urgency: 'medium' as const
    },
    'nausea': {
      conditions: [
        { name: 'Gastroenteritis', probability: 0.4, severity: 'mild' as const },
        { name: 'Food Poisoning', probability: 0.25, severity: 'moderate' as const },
        { name: 'Migraine', probability: 0.15, severity: 'moderate' as const },
        { name: 'Pregnancy', probability: 0.1, severity: 'mild' as const },
        { name: 'Anxiety', probability: 0.1, severity: 'mild' as const }
      ],
      department: 'general',
      urgency: 'medium' as const
    },
    'dizziness': {
      conditions: [
        { name: 'Inner Ear Problems', probability: 0.3, severity: 'mild' as const },
        { name: 'Low Blood Pressure', probability: 0.25, severity: 'moderate' as const },
        { name: 'Dehydration', probability: 0.2, severity: 'mild' as const },
        { name: 'Anemia', probability: 0.15, severity: 'moderate' as const },
        { name: 'Vertigo', probability: 0.1, severity: 'moderate' as const }
      ],
      department: 'general',
      urgency: 'medium' as const
    }
  };

  // Common medications for refill prediction
  private medicationDatabase = {
    'hypertension': ['Amlodipine', 'Lisinopril', 'Metoprolol', 'Hydrochlorothiazide'],
    'diabetes': ['Metformin', 'Insulin', 'Glipizide', 'Januvia'],
    'depression': ['Sertraline', 'Fluoxetine', 'Escitalopram', 'Bupropion'],
    'anxiety': ['Lorazepam', 'Alprazolam', 'Buspirone', 'Clonazepam'],
    'asthma': ['Albuterol', 'Fluticasone', 'Montelukast', 'Budesonide'],
    'pain': ['Ibuprofen', 'Acetaminophen', 'Naproxen', 'Tramadol']
  };

  /**
   * Process user message and generate AI response
   */
  async processMessage(userMessage: string, patientId?: string): Promise<ChatMessage> {
    const messageId = 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    
    // Add user message to history
    const userMsg: ChatMessage = {
      id: messageId + '-user',
      type: 'user',
      content: userMessage,
      timestamp: new Date()
    };
    this.conversationHistory.push(userMsg);

    // Simulate AI processing delay
    await this.delay(1000 + Math.random() * 2000);

    // Analyze message content
    const analysisResult = this.analyzeMessage(userMessage);
    
    // Generate appropriate response
    const aiResponse = this.generateResponse(analysisResult, userMessage, patientId);
    
    const aiMsg: ChatMessage = {
      id: messageId + '-ai',
      type: 'ai',
      content: aiResponse.content,
      timestamp: new Date(),
      metadata: aiResponse.metadata
    };
    
    this.conversationHistory.push(aiMsg);
    return aiMsg;
  }

  /**
   * Analyze user message for symptoms, intent, and context
   */
  private analyzeMessage(message: string): any {
    const lowerMessage = message.toLowerCase();
    
    // Detect symptoms
    const detectedSymptoms = Object.keys(this.symptomDatabase).filter(symptom => 
      lowerMessage.includes(symptom)
    );

    // Detect intent
    let intent = 'general';
    if (lowerMessage.includes('appointment') || lowerMessage.includes('book') || lowerMessage.includes('schedule')) {
      intent = 'appointment';
    } else if (lowerMessage.includes('medication') || lowerMessage.includes('prescription') || lowerMessage.includes('refill')) {
      intent = 'medication';
    } else if (detectedSymptoms.length > 0) {
      intent = 'diagnosis';
    } else if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent')) {
      intent = 'emergency';
    }

    // Detect urgency indicators
    const urgencyKeywords = {
      emergency: ['emergency', 'urgent', 'severe', 'can\'t breathe', 'chest pain', 'unconscious'],
      high: ['worried', 'getting worse', 'several days', 'painful'],
      medium: ['uncomfortable', 'bothering', 'mild'],
      low: ['occasionally', 'sometimes', 'minor']
    };

    let urgency = 'medium';
    for (const [level, keywords] of Object.entries(urgencyKeywords)) {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        urgency = level;
        break;
      }
    }

    return {
      symptoms: detectedSymptoms,
      intent,
      urgency,
      originalMessage: message
    };
  }

  /**
   * Generate appropriate AI response based on analysis
   */
  private generateResponse(analysis: any, originalMessage: string, patientId?: string): { content: string; metadata?: any } {
    const { symptoms, intent, urgency } = analysis;

    switch (intent) {
      case 'diagnosis':
        return this.generateDiagnosisResponse(symptoms, urgency);
      case 'appointment':
        return this.generateAppointmentResponse(symptoms);
      case 'medication':
        return this.generateMedicationResponse(patientId);
      case 'emergency':
        return this.generateEmergencyResponse();
      default:
        return this.generateGeneralResponse(originalMessage);
    }
  }

  /**
   * Generate diagnosis response based on symptoms
   */
  private generateDiagnosisResponse(symptoms: string[], urgency: string): { content: string; metadata: any } {
    if (symptoms.length === 0) {
      return {
        content: "I'd be happy to help you understand your symptoms. Could you please describe what you're experiencing? For example, are you having any pain, discomfort, or other symptoms?",
        metadata: {
          symptoms: [],
          recommendedActions: ['Describe your symptoms in detail', 'Include when symptoms started', 'Mention any triggers or patterns']
        }
      };
    }

    // Analyze symptoms and generate possible conditions
    const analysis = this.analyzeSymptoms(symptoms);
    
    let response = `I understand you're experiencing ${symptoms.join(', ')}. Based on the symptoms you've described, here are some possible conditions:\n\n`;
    
    analysis.possibleConditions.forEach((condition, index) => {
      response += `${index + 1}. **${condition.condition}** (${Math.round(condition.probability * 100)}% likelihood)\n   ${condition.description}\n\n`;
    });

    response += `**Urgency Level**: ${analysis.urgency.toUpperCase()}\n\n`;
    
    if (analysis.urgency === 'emergency') {
      response += "⚠️ **URGENT**: These symptoms may require immediate medical attention. Please consider visiting our emergency department or calling an ambulance if symptoms are severe.\n\n";
    }

    response += "**My Recommendations**:\n";
    analysis.recommendedActions.forEach((action, index) => {
      response += `${index + 1}. ${action}\n`;
    });

    if (analysis.recommendedDepartment !== 'emergency') {
      response += `\nI recommend booking an appointment with our ${analysis.recommendedDepartment} department. Would you like me to help you schedule an appointment?`;
    }

    return {
      content: response,
      metadata: {
        symptoms,
        diagnosis: analysis.possibleConditions[0]?.condition,
        urgency: analysis.urgency,
        recommendedActions: analysis.recommendedActions,
        appointmentSuggestion: {
          department: analysis.recommendedDepartment,
          urgency: analysis.urgency,
          reason: `Experiencing ${symptoms.join(', ')}`
        }
      }
    };
  }

  /**
   * Generate appointment booking response
   */
  private generateAppointmentResponse(symptoms: string[]): { content: string; metadata: any } {
    const response = `I'd be happy to help you book an appointment with Healing Hands Healthcare! 

Our available departments include:
- **General Medicine** - Primary healthcare and consultations
- **Cardiology** - Heart and cardiovascular care  
- **Neurology** - Neurological conditions
- **Ophthalmology** - Eye care and vision services
- **Emergency Care** - Urgent medical attention
- **Laboratory Services** - Blood tests and diagnostics

${symptoms.length > 0 ? `Based on your symptoms (${symptoms.join(', ')}), I'd recommend starting with our General Medicine department.` : ''}

**To book your appointment**, you can:
1. Use our online booking system (I can guide you there)
2. Call us at 021 123 4567
3. Visit us at 123 Long Street, Cape Town

Remember, all our services are **completely FREE** as part of South Africa's public healthcare system. Just bring your South African ID document.

Would you like me to take you to our online appointment booking system?`;

    return {
      content: response,
      metadata: {
        appointmentSuggestion: {
          department: symptoms.length > 0 ? 'general' : '',
          urgency: 'routine',
          reason: symptoms.length > 0 ? `Experiencing ${symptoms.join(', ')}` : 'General consultation'
        }
      }
    };
  }

  /**
   * Generate medication refill response
   */
  private generateMedicationResponse(patientId?: string): { content: string; metadata: any } {
    if (!patientId) {
      return {
        content: `I can help you with medication refills and predictions! 

**For existing patients**, I can:
- Predict when your medications might need refilling
- Check your prescription history
- Help you request refills online
- Provide medication reminders

**For new patients**, you'll need to:
1. Register with our system using your SA ID
2. Have your prescriptions on file
3. Set up your medication profile

To access our medication collection system, you can:
- Use our online portal (I can guide you there)
- Call our pharmacy at 021 123 4567
- Visit our medication collection counter

**All medication services are FREE** for public healthcare patients.

Would you like me to take you to our medication collection system?`,
        metadata: {
          recommendedActions: ['Access medication portal', 'Register if new patient', 'Check prescription history']
        }
      };
    }

    // Generate mock medication predictions
    const predictions = this.generateMedicationPredictions(patientId);
    
    let response = `Here are your medication refill predictions:\n\n`;
    
    predictions.predictions.forEach((pred, index) => {
      const urgency = pred.priority === 'high' ? '🔴 HIGH PRIORITY' : pred.priority === 'medium' ? '🟡 MEDIUM' : '🟢 LOW';
      response += `**${pred.medication}**\n`;
      response += `- Predicted refill needed: ${pred.predictedRefillDate}\n`;
      response += `- Current supply: ~${pred.currentSupply} days\n`;
      response += `- Priority: ${urgency}\n`;
      response += `- Confidence: ${Math.round(pred.confidence * 100)}%\n\n`;
    });

    response += `**Recommendations**:\n`;
    const highPriority = predictions.predictions.filter(p => p.priority === 'high');
    if (highPriority.length > 0) {
      response += `- Request refills for ${highPriority.map(p => p.medication).join(', ')} within the next week\n`;
    }
    response += `- Set up automatic refill reminders\n`;
    response += `- Keep emergency supply for critical medications\n\n`;
    
    response += `Would you like me to help you request these refills or set up reminders?`;

    return {
      content: response,
      metadata: {
        medicationPrediction: predictions.predictions[0] // Include first prediction
      }
    };
  }

  /**
   * Generate emergency response
   */
  private generateEmergencyResponse(): { content: string; metadata: any } {
    return {
      content: `🚨 **EMERGENCY ASSISTANCE**

If you are experiencing a medical emergency:

**IMMEDIATE ACTION REQUIRED:**
- Call **10177** (South African Emergency Services)
- Or call **021 123 4567** for our emergency department
- Or visit our emergency department at 123 Long Street, Cape Town

**Life-threatening symptoms include:**
- Chest pain or difficulty breathing
- Severe bleeding
- Loss of consciousness
- Severe allergic reactions
- Severe burns or injuries

**Our Emergency Department is open 24/7** and provides FREE emergency care.

**For urgent but non-life-threatening issues:**
- Our emergency department can see you immediately
- No appointment needed
- Bring your SA ID document

Is this a life-threatening emergency? If so, please call emergency services immediately.

For urgent appointments, would you like me to help you contact our emergency department?`,
      metadata: {
        urgency: 'emergency',
        recommendedActions: [
          'Call emergency services if life-threatening',
          'Visit emergency department',
          'Call hospital directly'
        ]
      }
    };
  }

  /**
   * Generate general response for other queries
   */
  private generateGeneralResponse(message: string): { content: string; metadata?: any } {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
    const isGreeting = greetings.some(greeting => message.toLowerCase().includes(greeting));

    if (isGreeting) {
      return {
        content: `Hello! I'm the Healing Hands Healthcare AI Assistant. I'm here to help you with:

🔍 **Symptom Analysis** - Describe your symptoms and I'll provide information about possible conditions
📅 **Appointment Booking** - Help you schedule appointments with our medical departments  
💊 **Medication Management** - Predict refill dates and manage prescriptions
🚨 **Emergency Guidance** - Immediate assistance for urgent medical situations

**Remember**: All our services are FREE as part of South Africa's public healthcare system.

How can I assist you today? You can tell me about any symptoms you're experiencing, ask about booking an appointment, or inquire about medication refills.`,
        metadata: {
          recommendedActions: [
            'Describe any symptoms you\'re experiencing',
            'Ask about booking an appointment',
            'Inquire about medication refills',
            'Get emergency guidance if needed'
          ]
        }
      };
    }

    // General medical information response
    return {
      content: `I'd be happy to help you with your healthcare needs! 

I can assist you with:
- **Symptom analysis and basic diagnosis**
- **Appointment booking with appropriate departments**
- **Medication refill predictions and reminders**
- **Emergency medical guidance**
- **General health information**

Could you please be more specific about what you'd like help with? For example:
- "I have a headache and fever"
- "I need to book an appointment"
- "When do I need to refill my medication?"
- "This seems urgent, what should I do?"

**Important**: I provide general medical information and guidance. For serious conditions or emergencies, please seek immediate medical attention.`,
      metadata: {
        recommendedActions: [
          'Be specific about your symptoms or needs',
          'Ask about appointments or medications',
          'Seek immediate help for emergencies'
        ]
      }
    };
  }

  /**
   * Analyze symptoms and return possible conditions
   */
  private analyzeSymptoms(symptoms: string[]): SymptomAnalysis {
    const allConditions: Array<{ condition: string; probability: number; severity: 'mild' | 'moderate' | 'severe'; description: string }> = [];
    let highestUrgency = 'low';
    let recommendedDepartment = 'general';

    symptoms.forEach(symptom => {
      const symptomData = this.symptomDatabase[symptom as keyof typeof this.symptomDatabase];
      if (symptomData) {
        // Update urgency level
        if (this.getUrgencyLevel(symptomData.urgency) > this.getUrgencyLevel(highestUrgency)) {
          highestUrgency = symptomData.urgency;
        }

        // Update recommended department
        if (symptomData.department === 'emergency') {
          recommendedDepartment = 'emergency';
        } else if (recommendedDepartment === 'general' && symptomData.department !== 'general') {
          recommendedDepartment = symptomData.department;
        }

        // Add conditions
        symptomData.conditions.forEach(condition => {
          const existing = allConditions.find(c => c.condition === condition.name);
          if (existing) {
            existing.probability = Math.min(existing.probability + condition.probability * 0.3, 0.95);
          } else {
            allConditions.push({
              condition: condition.name,
              probability: condition.probability,
              severity: condition.severity,
              description: this.getConditionDescription(condition.name)
            });
          }
        });
      }
    });

    // Sort by probability and take top 3
    allConditions.sort((a, b) => b.probability - a.probability);
    const topConditions = allConditions.slice(0, 3);

    const recommendedActions = this.generateRecommendations(highestUrgency, symptoms, recommendedDepartment);

    return {
      symptoms,
      possibleConditions: topConditions,
      urgency: highestUrgency as 'low' | 'medium' | 'high' | 'emergency',
      recommendedDepartment,
      recommendedActions
    };
  }

  /**
   * Get urgency level as number for comparison
   */
  private getUrgencyLevel(urgency: string): number {
    switch (urgency) {
      case 'emergency': return 4;
      case 'high': return 3;
      case 'medium': return 2;
      case 'low': return 1;
      default: return 0;
    }
  }

  /**
   * Get description for medical conditions
   */
  private getConditionDescription(condition: string): string {
    const descriptions: { [key: string]: string } = {
      'Tension Headache': 'Common type of headache often caused by stress, fatigue, or muscle tension.',
      'Migraine': 'Severe headache often accompanied by nausea, vomiting, and sensitivity to light.',
      'Sinusitis': 'Inflammation of the sinuses causing facial pain and congestion.',
      'Hypertension': 'High blood pressure that can cause headaches and other symptoms.',
      'Cardiac Issues': 'Problems with the heart that may require immediate medical attention.',
      'Anxiety': 'Mental health condition that can cause physical symptoms including chest pain.',
      'Muscle Strain': 'Injury to muscle fibers, often from overuse or sudden movement.',
      'Gastroesophageal Reflux': 'Stomach acid backing up into the esophagus causing chest discomfort.',
      'Asthma': 'Respiratory condition causing difficulty breathing and wheezing.',
      'Heart Problems': 'Various cardiac conditions that can affect breathing and circulation.',
      'Upper Respiratory Infection': 'Common cold or similar infection affecting the nose, throat, and airways.',
      'Viral Infection': 'Infection caused by a virus, often causing fever and general illness.',
      'Bacterial Infection': 'Infection caused by bacteria, may require antibiotic treatment.',
      'Flu': 'Influenza virus infection causing fever, body aches, and respiratory symptoms.',
      'COVID-19': 'Coronavirus infection that can cause various symptoms including fever and cough.',
      'Bronchitis': 'Inflammation of the bronchial tubes causing persistent cough.',
      'Allergies': 'Immune system reaction to allergens causing various symptoms.',
      'Pneumonia': 'Serious lung infection that requires medical treatment.',
      'Gastroenteritis': 'Inflammation of the stomach and intestines causing nausea and digestive issues.',
      'Food Poisoning': 'Illness caused by contaminated food, causing nausea and digestive symptoms.'
    };

    return descriptions[condition] || 'A medical condition that may require professional evaluation.';
  }

  /**
   * Generate recommendations based on analysis
   */
  private generateRecommendations(urgency: string, symptoms: string[], department: string): string[] {
    const recommendations = [];

    if (urgency === 'emergency') {
      recommendations.push('Seek immediate medical attention at our emergency department');
      recommendations.push('Call 021 123 4567 or emergency services if symptoms worsen');
    } else if (urgency === 'high') {
      recommendations.push('Schedule an urgent appointment within 1-2 days');
      recommendations.push('Monitor symptoms closely and seek immediate care if they worsen');
    } else {
      recommendations.push(`Book an appointment with our ${department} department`);
      recommendations.push('Monitor symptoms and note any changes or patterns');
    }

    recommendations.push('Stay hydrated and get adequate rest');
    recommendations.push('Avoid activities that may worsen symptoms');
    
    if (symptoms.includes('fever')) {
      recommendations.push('Monitor your temperature regularly');
      recommendations.push('Consider over-the-counter fever reducers if appropriate');
    }

    if (symptoms.includes('cough')) {
      recommendations.push('Stay hydrated to help thin mucus');
      recommendations.push('Use a humidifier or breathe steam to ease coughing');
    }

    return recommendations;
  }

  /**
   * Generate medication refill predictions
   */
  private generateMedicationPredictions(patientId: string): MedicationRefillPrediction {
    // Mock patient medication data
    const commonMedications = [
      { name: 'Metformin', dailyDose: 2, currentSupply: 15, condition: 'diabetes' },
      { name: 'Amlodipine', dailyDose: 1, currentSupply: 7, condition: 'hypertension' },
      { name: 'Albuterol Inhaler', dailyDose: 2, currentSupply: 20, condition: 'asthma' }
    ];

    const predictions = commonMedications.map(med => {
      const daysUntilRefill = Math.floor(med.currentSupply / med.dailyDose);
      const refillDate = new Date();
      refillDate.setDate(refillDate.getDate() + daysUntilRefill);

      let priority: 'low' | 'medium' | 'high' = 'low';
      if (daysUntilRefill <= 7) priority = 'high';
      else if (daysUntilRefill <= 14) priority = 'medium';

      return {
        medication: med.name,
        currentSupply: daysUntilRefill,
        dailyDosage: med.dailyDose,
        predictedRefillDate: refillDate.toLocaleDateString('en-ZA'),
        confidence: 0.85 + Math.random() * 0.1,
        priority
      };
    });

    return {
      patientId,
      predictions
    };
  }

  /**
   * Get conversation history
   */
  getConversationHistory(): ChatMessage[] {
    return this.conversationHistory;
  }

  /**
   * Clear conversation history
   */
  clearConversation(): void {
    this.conversationHistory = [];
    this.userSymptoms = [];
    this.userMedications = [];
  }

  /**
   * Utility function to add delay
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const medicalAIService = new MedicalAIService();