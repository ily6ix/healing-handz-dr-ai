import { useState, useRef, useEffect } from 'react';
import { 
  Bot,
  Send,
  Loader2,
  User,
  Calendar,
  Pill,
  Stethoscope,
  AlertTriangle,
  RefreshCw,
  MessageSquare,
  Heart,
  Activity,
  Clock,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  ChevronLeft
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';
import { medicalAIService, ChatMessage } from './services/MedicalAIService';

interface AIChatbotPageProps {
  onNavigate: (page: string) => void;
}

export function AIChatbotPage({ onNavigate }: AIChatbotPageProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    { id: 'symptoms', icon: Stethoscope, label: 'Describe Symptoms', message: 'I have some symptoms I\'d like to discuss' },
    { id: 'appointment', icon: Calendar, label: 'Book Appointment', message: 'I need to book an appointment' },
    { id: 'medication', icon: Pill, label: 'Medication Refill', message: 'I need help with medication refills' },
    { id: 'emergency', icon: AlertTriangle, label: 'Emergency Help', message: 'This is urgent, I need immediate help' }
  ];

  const commonQuestions = [
    { question: 'I have a headache and fever', category: 'symptoms' },
    { question: 'I\'m having chest pain', category: 'emergency' },
    { question: 'I need to refill my diabetes medication', category: 'medication' },
    { question: 'I want to schedule a general check-up', category: 'appointment' },
    { question: 'I\'m feeling dizzy and nauseous', category: 'symptoms' },
    { question: 'How do I access my prescription history?', category: 'medication' }
  ];

  useEffect(() => {
    // Initialize with welcome message
    const welcomeMessage: ChatMessage = {
      id: 'welcome-' + Date.now(),
      type: 'ai',
      content: `Hello! I'm Dr. AI, your virtual medical assistant at Healing Hands Healthcare. 

I can help you with:
🔍 **Symptom Analysis** - Describe symptoms for preliminary assessment
📅 **Appointment Booking** - Schedule visits with our medical departments
💊 **Medication Management** - Track refills and predict medication needs
🚨 **Emergency Guidance** - Immediate assistance for urgent situations

**Remember**: I provide general guidance and information. All our services are FREE for SA citizens with valid ID.

How can I help you today?`,
      timestamp: new Date(),
      metadata: {
        recommendedActions: [
          'Describe any symptoms you\'re experiencing',
          'Ask about booking appointments',
          'Check medication refill schedules',
          'Get emergency medical guidance'
        ]
      }
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (messageText?: string) => {
    const message = messageText || inputMessage.trim();
    if (!message || isLoading) return;

    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Add user message immediately
      const userMessage: ChatMessage = {
        id: 'user-' + Date.now(),
        type: 'user',
        content: message,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);

      // Get AI response
      const aiResponse = await medicalAIService.processMessage(message, 'patient-123');
      
      setIsTyping(false);
      setMessages(prev => [...prev, aiResponse]);

      // Handle special actions based on AI response
      if (aiResponse.metadata?.appointmentSuggestion) {
        // Could automatically populate appointment form
        console.log('Appointment suggestion:', aiResponse.metadata.appointmentSuggestion);
      }

      if (aiResponse.metadata?.urgency === 'emergency') {
        toast.error('Emergency situation detected. Consider seeking immediate medical attention.');
      }

    } catch (error) {
      console.error('Error processing message:', error);
      setIsTyping(false);
      toast.error('Sorry, I encountered an error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (action: typeof quickActions[0]) => {
    handleSendMessage(action.message);
  };

  const handleCommonQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const clearChat = () => {
    medicalAIService.clearConversation();
    setMessages([]);
    // Re-add welcome message
    const welcomeMessage: ChatMessage = {
      id: 'welcome-' + Date.now(),
      type: 'ai',
      content: `Hello! I'm Dr. AI, your virtual medical assistant. How can I help you today?`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    toast.success('Chat cleared successfully');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' });
  };

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'emergency': return 'var(--md-sys-color-error)';
      case 'high': return 'var(--md-sys-color-tertiary)';
      case 'medium': return 'var(--md-sys-color-primary)';
      case 'low': return 'var(--md-sys-color-secondary)';
      default: return 'var(--md-sys-color-outline)';
    }
  };

  const renderMessage = (message: ChatMessage) => {
    const isUser = message.type === 'user';
    
    return (
      <div key={message.id} className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        {!isUser && (
          <div 
            className="w-8 h-8 shape-md flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: 'var(--md-sys-color-primary)',
              color: 'var(--md-sys-color-on-primary)'
            }}
          >
            <Bot className="w-4 h-4" />
          </div>
        )}
        
        <div className={`max-w-[80%] ${isUser ? 'order-1' : ''}`}>
          <div 
            className={`p-3 shape-md ${
              isUser 
                ? 'surface-container-high ml-auto' 
                : 'surface-container-low'
            }`}
            style={{
              backgroundColor: isUser 
                ? 'var(--md-sys-color-primary)' 
                : 'var(--md-sys-color-surface-container-low)',
              color: isUser 
                ? 'var(--md-sys-color-on-primary)' 
                : 'var(--md-sys-color-on-surface)'
            }}
          >
            <div className="body-medium whitespace-pre-wrap">
              {message.content}
            </div>
            
            {/* Metadata badges */}
            {message.metadata && !isUser && (
              <div className="flex flex-wrap gap-2 mt-3">
                {message.metadata.urgency && (
                  <Badge 
                    variant="outline" 
                    className="text-xs"
                    style={{ 
                      borderColor: getUrgencyColor(message.metadata.urgency),
                      color: getUrgencyColor(message.metadata.urgency)
                    }}
                  >
                    {message.metadata.urgency.toUpperCase()} PRIORITY
                  </Badge>
                )}
                
                {message.metadata.symptoms && message.metadata.symptoms.length > 0 && (
                  <Badge variant="outline" className="text-xs">
                    <Stethoscope className="w-3 h-3 mr-1" />
                    {message.metadata.symptoms.length} Symptoms
                  </Badge>
                )}
                
                {message.metadata.appointmentSuggestion && (
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    Appointment Suggested
                  </Badge>
                )}
                
                {message.metadata.medicationPrediction && (
                  <Badge variant="outline" className="text-xs">
                    <Pill className="w-3 h-3 mr-1" />
                    Refill Prediction
                  </Badge>
                )}
              </div>
            )}
            
            {/* Quick action buttons */}
            {message.metadata?.appointmentSuggestion && (
              <div className="mt-3">
                <Button 
                  size="sm" 
                  className="md-button-outlined text-xs"
                  onClick={() => onNavigate('appointment')}
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  Book Appointment
                </Button>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 mt-1 px-1">
            <span className="label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              {formatTime(message.timestamp)}
            </span>
            {message.metadata?.diagnosis && (
              <span className="label-small" style={{ color: 'var(--md-sys-color-primary)' }}>
                • {message.metadata.diagnosis}
              </span>
            )}
          </div>
        </div>
        
        {isUser && (
          <div 
            className="w-8 h-8 shape-md flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: 'var(--md-sys-color-tertiary-container)',
              color: 'var(--md-sys-color-on-tertiary-container)'
            }}
          >
            <User className="w-4 h-4" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen surface flex flex-col">
      {/* Header */}
      <header className="surface-container-low border-b border-[var(--md-sys-color-outline-variant)] p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center space-x-2 text-sm state-layer relative shape-md p-2 -m-2 lg:hidden"
                style={{ color: 'var(--md-sys-color-primary)' }}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              
              <div 
                className="w-12 h-12 shape-md flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--md-sys-color-primary)',
                  color: 'var(--md-sys-color-on-primary)'
                }}
              >
                <Bot className="w-6 h-6" />
              </div>
              
              <div>
                <h1 className="title-large" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                  Dr. AI Assistant
                </h1>
                <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Virtual Medical Assistant • Available 24/7
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearChat}
                className="md-button-outlined"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Clear Chat
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar with Quick Actions (Desktop) */}
        <div className="hidden lg:block w-80 surface-container-low border-r border-[var(--md-sys-color-outline-variant)] p-4">
          <div className="space-y-6">
            {/* Quick Actions */}
            <div>
              <h3 className="title-small mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Quick Actions
              </h3>
              <div className="space-y-2">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => handleQuickAction(action)}
                    className="w-full p-3 text-left shape-md border border-[var(--md-sys-color-outline-variant)] hover:surface-container transition-all motion-duration-short4 motion-easing-standard"
                    style={{ color: 'var(--md-sys-color-on-surface)' }}
                  >
                    <div className="flex items-center space-x-3">
                      <action.icon className="w-5 h-5" style={{ color: 'var(--md-sys-color-primary)' }} />
                      <span className="body-medium">{action.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Common Questions */}
            <div>
              <h3 className="title-small mb-3" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                Common Questions
              </h3>
              <div className="space-y-2">
                {commonQuestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleCommonQuestion(item.question)}
                    className="w-full p-2 text-left text-xs shape-sm surface-container-low hover:surface-container transition-all motion-duration-short4 motion-easing-standard"
                    style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Health Tips */}
            <div 
              className="p-4 shape-md"
              style={{ 
                backgroundColor: 'var(--md-sys-color-primary-container)',
                color: 'var(--md-sys-color-on-primary-container)'
              }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-4 h-4" />
                <span className="title-small">Health Tip</span>
              </div>
              <p className="body-small">
                Regular check-ups can help detect health issues early. Schedule your annual health screening today!
              </p>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="max-w-4xl mx-auto">
              {messages.map(renderMessage)}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-3 justify-start mb-4">
                  <div 
                    className="w-8 h-8 shape-md flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'var(--md-sys-color-primary)',
                      color: 'var(--md-sys-color-on-primary)'
                    }}
                  >
                    <Bot className="w-4 h-4" />
                  </div>
                  <div 
                    className="p-3 shape-md surface-container-low"
                  >
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 shape-full surface-container-highest animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 shape-full surface-container-highest animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 shape-full surface-container-highest animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Quick Actions (Mobile) */}
          <div className="lg:hidden p-4 border-t border-[var(--md-sys-color-outline-variant)]">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action)}
                  className="flex items-center space-x-2 px-3 py-2 shape-md border border-[var(--md-sys-color-outline-variant)] whitespace-nowrap hover:surface-container transition-all motion-duration-short4 motion-easing-standard"
                  style={{ color: 'var(--md-sys-color-on-surface)' }}
                >
                  <action.icon className="w-4 h-4" style={{ color: 'var(--md-sys-color-primary)' }} />
                  <span className="label-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-[var(--md-sys-color-outline-variant)]">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end space-x-3">
                <div className="flex-1">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Describe your symptoms, ask about appointments, or request help..."
                    disabled={isLoading}
                    className="min-h-[44px] resize-none"
                  />
                </div>
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isLoading}
                  className="md-button-filled p-3 shape-md"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
              
              {/* Disclaimer */}
              <p 
                className="text-xs text-center mt-2"
                style={{ color: 'var(--md-sys-color-on-surface-variant)' }}
              >
                Dr. AI provides general medical information. For emergencies, call 021 123 4567 or emergency services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}