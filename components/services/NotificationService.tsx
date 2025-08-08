import { toast } from 'sonner@2.0.3';

export interface AppointmentData {
  appointmentId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  idNumber: string;
  department: string;
  appointmentType: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  urgency: string;
  preferredContact: 'sms' | 'email' | 'phone';
  emergencyContact?: string;
  emergencyPhone?: string;
}

export interface NotificationResult {
  success: boolean;
  message: string;
  deliveryId?: string;
  estimatedDelivery?: string;
}

class NotificationService {
  private readonly API_BASE_URL = 'https://api.healinghandshealthcare.co.za'; // Mock API endpoint
  
  /**
   * Send appointment confirmation via SMS
   */
  async sendSMSConfirmation(appointmentData: AppointmentData): Promise<NotificationResult> {
    try {
      // Simulate API call to SMS service (e.g., Twilio, Clickatell for South Africa)
      const response = await this.simulateAPICall('/notifications/sms', {
        to: appointmentData.phone,
        message: this.generateSMSMessage(appointmentData),
        from: 'HealingHands'
      });

      if (response.success) {
        return {
          success: true,
          message: `SMS confirmation sent to ${appointmentData.phone}`,
          deliveryId: response.messageId,
          estimatedDelivery: 'within 5 minutes'
        };
      }

      throw new Error(response.error || 'Failed to send SMS');
    } catch (error) {
      console.error('SMS notification error:', error);
      return {
        success: false,
        message: 'Failed to send SMS confirmation. Please contact us directly.'
      };
    }
  }

  /**
   * Send appointment confirmation via email
   */
  async sendEmailConfirmation(appointmentData: AppointmentData): Promise<NotificationResult> {
    try {
      // Simulate API call to email service
      const response = await this.simulateAPICall('/notifications/email', {
        to: appointmentData.email,
        subject: 'Appointment Confirmation - Healing Hands Healthcare',
        html: this.generateEmailHTML(appointmentData),
        from: 'appointments@healinghandshealthcare.co.za'
      });

      if (response.success) {
        return {
          success: true,
          message: `Email confirmation sent to ${appointmentData.email}`,
          deliveryId: response.messageId,
          estimatedDelivery: 'within 10 minutes'
        };
      }

      throw new Error(response.error || 'Failed to send email');
    } catch (error) {
      console.error('Email notification error:', error);
      return {
        success: false,
        message: 'Failed to send email confirmation. Please contact us directly.'
      };
    }
  }

  /**
   * Schedule appointment confirmation call
   */
  async scheduleConfirmationCall(appointmentData: AppointmentData): Promise<NotificationResult> {
    try {
      // Simulate API call to voice service
      const response = await this.simulateAPICall('/notifications/voice', {
        to: appointmentData.phone,
        message: this.generateVoiceMessage(appointmentData),
        scheduledFor: new Date(Date.now() + 30 * 60 * 1000).toISOString() // 30 minutes from now
      });

      if (response.success) {
        return {
          success: true,
          message: `Confirmation call scheduled to ${appointmentData.phone}`,
          deliveryId: response.callId,
          estimatedDelivery: 'within 30 minutes'
        };
      }

      throw new Error(response.error || 'Failed to schedule call');
    } catch (error) {
      console.error('Voice notification error:', error);
      return {
        success: false,
        message: 'Failed to schedule confirmation call. Please contact us directly.'
      };
    }
  }

  /**
   * Send confirmation based on preferred contact method
   */
  async sendConfirmation(appointmentData: AppointmentData): Promise<NotificationResult> {
    const { preferredContact } = appointmentData;
    
    switch (preferredContact) {
      case 'sms':
        return await this.sendSMSConfirmation(appointmentData);
      case 'email':
        return await this.sendEmailConfirmation(appointmentData);
      case 'phone':
        return await this.scheduleConfirmationCall(appointmentData);
      default:
        // Default to SMS for public healthcare accessibility
        return await this.sendSMSConfirmation(appointmentData);
    }
  }

  /**
   * Send appointment reminder (can be called later)
   */
  async scheduleReminder(appointmentData: AppointmentData): Promise<NotificationResult> {
    try {
      const reminderDate = new Date(appointmentData.preferredDate);
      reminderDate.setHours(reminderDate.getHours() - 24); // 24 hours before

      const response = await this.simulateAPICall('/notifications/reminder', {
        appointmentId: appointmentData.appointmentId,
        scheduledFor: reminderDate.toISOString(),
        method: appointmentData.preferredContact,
        contact: appointmentData.preferredContact === 'email' ? appointmentData.email : appointmentData.phone
      });

      return {
        success: true,
        message: 'Appointment reminder scheduled',
        deliveryId: response.reminderId
      };
    } catch (error) {
      console.error('Reminder scheduling error:', error);
      return {
        success: false,
        message: 'Failed to schedule reminder'
      };
    }
  }

  /**
   * Generate SMS message content
   */
  private generateSMSMessage(data: AppointmentData): string {
    const date = new Date(data.preferredDate).toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return `HEALING HANDS HEALTHCARE
Appointment Confirmed!

Patient: ${data.firstName} ${data.lastName}
ID: ${data.idNumber}
Ref: ${data.appointmentId}

Date: ${date}
Time: ${data.preferredTime}
Dept: ${data.department}
Type: ${data.appointmentType}

Location: 123 Long Street, Cape Town
FREE Public Healthcare Service

Please bring your SA ID document.
Arrive 15 minutes early.

Questions? Call 021 123 4567

To cancel, reply CANCEL ${data.appointmentId}`;
  }

  /**
   * Generate email HTML content
   */
  private generateEmailHTML(data: AppointmentData): string {
    const date = new Date(data.preferredDate).toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Appointment Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #006A6B; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .appointment-details { background: white; padding: 15px; margin: 20px 0; border-left: 4px solid #006A6B; }
        .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
        .btn { background: #006A6B; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Healing Hands Healthcare</h1>
          <p>Cape Town Public Healthcare Centre</p>
        </div>
        
        <div class="content">
          <h2>Appointment Confirmed!</h2>
          <p>Dear ${data.firstName} ${data.lastName},</p>
          <p>Your appointment has been successfully booked. This is a <strong>FREE</strong> public healthcare service.</p>
          
          <div class="appointment-details">
            <h3>Appointment Details</h3>
            <p><strong>Reference:</strong> ${data.appointmentId}</p>
            <p><strong>Patient:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>ID Number:</strong> ${data.idNumber}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${data.preferredTime}</p>
            <p><strong>Department:</strong> ${data.department}</p>
            <p><strong>Type:</strong> ${data.appointmentType}</p>
            <p><strong>Urgency:</strong> ${data.urgency}</p>
          </div>
          
          <div class="appointment-details">
            <h3>Important Information</h3>
            <ul>
              <li><strong>Location:</strong> 123 Long Street, Cape Town, 8001</li>
              <li>Please arrive <strong>15 minutes early</strong></li>
              <li>Bring your <strong>South African ID document</strong></li>
              <li>All services are <strong>completely free</strong></li>
              <li>No payment or medical aid required</li>
            </ul>
          </div>
          
          <div class="appointment-details">
            <h3>Before Your Visit</h3>
            <p><strong>Reason for visit:</strong> ${data.reason}</p>
            ${data.emergencyContact ? `<p><strong>Emergency Contact:</strong> ${data.emergencyContact} (${data.emergencyPhone})</p>` : ''}
          </div>
          
          <p style="text-align: center; margin: 30px 0;">
            <a href="tel:0211234567" class="btn">Call Us: 021 123 4567</a>
          </p>
        </div>
        
        <div class="footer">
          <p>Healing Hands Healthcare - Public Healthcare Centre</p>
          <p>123 Long Street, Cape Town, 8001</p>
          <p>Phone: 021 123 4567 | Email: appointments@healinghandshealthcare.co.za</p>
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
    `;
  }

  /**
   * Generate voice message content
   */
  private generateVoiceMessage(data: AppointmentData): string {
    const date = new Date(data.preferredDate).toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return `Hello ${data.firstName}. This is Healing Hands Healthcare calling to confirm your appointment. 

Your appointment is confirmed for ${date} at ${data.preferredTime} in our ${data.department} department. 

Your reference number is ${data.appointmentId}.

Please remember to bring your South African ID document and arrive 15 minutes early. Our address is 123 Long Street, Cape Town.

This is a free public healthcare service. No payment is required.

If you need to cancel or reschedule, please call us at 021 123 4567.

Thank you for choosing Healing Hands Healthcare.`;
  }

  /**
   * Simulate API call (in real implementation, use actual HTTP client)
   */
  private async simulateAPICall(endpoint: string, data: any): Promise<any> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    // Simulate success rate (95% success in real world)
    const success = Math.random() > 0.05;
    
    if (success) {
      return {
        success: true,
        messageId: 'MSG-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        callId: 'CALL-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        reminderId: 'REM-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        timestamp: new Date().toISOString()
      };
    } else {
      return {
        success: false,
        error: 'Service temporarily unavailable. Please try again.'
      };
    }
  }
}

export const notificationService = new NotificationService();