import { CheckCircle, RefreshCw, Package, AlertTriangle, Clock } from 'lucide-react';

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'ready':
      return 'var(--md-sys-color-primary)';
    case 'preparing':
      return 'var(--md-sys-color-tertiary)';
    case 'collected':
      return 'var(--md-sys-color-secondary)';
    case 'expired':
      return 'var(--md-sys-color-error)';
    default:
      return 'var(--md-sys-color-outline)';
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case 'ready':
      return CheckCircle;
    case 'preparing':
      return RefreshCw;
    case 'collected':
      return Package;
    case 'expired':
      return AlertTriangle;
    default:
      return Clock;
  }
};