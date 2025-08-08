export interface Prescription {
  id: string;
  medicationName: string;
  dosage: string;
  quantity: number;
  prescribedBy: string;
  prescriptionDate: string;
  readyForCollection: boolean;
  collectionDeadline: string;
  instructions: string;
  refillsRemaining: number;
  status: 'ready' | 'preparing' | 'collected' | 'expired';
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  patientId: string;
  insuranceNumber: string;
  profileImage?: string;
}

export interface LoginData {
  email: string;
  password: string;
  patientId: string;
}