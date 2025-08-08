import { User, Prescription } from './types';

export const mockUser: User = {
  id: '1',
  firstName: 'Thabo',
  lastName: 'Mthembu',
  email: 'thabo.mthembu@email.co.za',
  phone: '021 987 6543',
  dateOfBirth: '1985-03-15',
  patientId: 'P2024-001234',
  insuranceNumber: 'DS-123456789',
  profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
};

export const mockPrescriptions: Prescription[] = [
  {
    id: '1',
    medicationName: 'Metformin 500mg',
    dosage: '500mg twice daily',
    quantity: 60,
    prescribedBy: 'Dr. Sarah Johnson',
    prescriptionDate: '2024-01-15',
    readyForCollection: true,
    collectionDeadline: '2024-02-15',
    instructions: 'Take with food. Monitor blood sugar levels.',
    refillsRemaining: 2,
    status: 'ready'
  },
  {
    id: '2',
    medicationName: 'Lisinopril 10mg',
    dosage: '10mg once daily',
    quantity: 30,
    prescribedBy: 'Dr. Michael Williams',
    prescriptionDate: '2024-01-20',
    readyForCollection: false,
    collectionDeadline: '2024-02-20',
    instructions: 'Take at the same time each day.',
    refillsRemaining: 1,
    status: 'preparing'
  },
  {
    id: '3',
    medicationName: 'Amoxicillin 500mg',
    dosage: '500mg three times daily',
    quantity: 21,
    prescribedBy: 'Dr. Sarah Johnson',
    prescriptionDate: '2024-01-10',
    readyForCollection: true,
    collectionDeadline: '2024-01-25',
    instructions: 'Complete the full course. Take with water.',
    refillsRemaining: 0,
    status: 'collected'
  }
];