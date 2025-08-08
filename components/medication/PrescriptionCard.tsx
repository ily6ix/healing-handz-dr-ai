import { Clock, FileText, Download, Truck } from 'lucide-react';
import { Prescription } from './types';
import { getStatusIcon } from './utils';

interface PrescriptionCardProps {
  prescription: Prescription;
  containerColor: string;
  onContainerColor: string;
  statusLabel: string;
}

export function PrescriptionCard({ 
  prescription, 
  containerColor, 
  onContainerColor, 
  statusLabel 
}: PrescriptionCardProps) {
  const StatusIcon = getStatusIcon(prescription.status);

  return (
    <div className="md-card elevation-2">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-3">
            <div 
              className="w-10 h-10 shape-md flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: containerColor,
                color: onContainerColor
              }}
            >
              <StatusIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="title-medium mb-1" style={{ color: 'var(--md-sys-color-on-surface)' }}>
                {prescription.medicationName}
              </h3>
              <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                {prescription.dosage} • Quantity: {prescription.quantity}
              </p>
              <p className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Prescribed by {prescription.prescribedBy}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span 
              className="label-small px-2 py-1 shape-sm"
              style={{
                backgroundColor: containerColor,
                color: onContainerColor
              }}
            >
              {statusLabel}
            </span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
            <span className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              {prescription.status === 'ready' 
                ? `Collect by: ${new Date(prescription.collectionDeadline).toLocaleDateString()}`
                : prescription.status === 'preparing'
                ? 'Estimated ready: 2-3 business days'
                : `Collected on ${new Date(prescription.prescriptionDate).toLocaleDateString()}`
              }
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4" style={{ color: 'var(--md-sys-color-on-surface-variant)' }} />
            <span className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              {prescription.instructions}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="body-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
            Refills remaining: {prescription.refillsRemaining}
          </span>
          <div className="flex space-x-2">
            <button className="md-button-outlined flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
            {prescription.status === 'ready' ? (
              <button className="md-button-filled flex items-center space-x-2">
                <Truck className="w-4 h-4" />
                <span>Collect Now</span>
              </button>
            ) : prescription.status === 'preparing' ? (
              <button className="md-button-outlined">
                Track Progress
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}