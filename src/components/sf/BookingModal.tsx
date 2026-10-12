'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Video } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '2-5 Years (Developer)',
    targetRole: 'Senior Salesforce Developer (LWC & Integrations)',
    preferredDate: '',
  });

  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('🎉 Mock session request confirmed! We will WhatsApp you meeting details.', 'success');
    onClose();
  };

  const experienceOptions = [
    { value: '0-2 Yrs', label: 'Fresher / Junior (0-2 Yrs)' },
    { value: '2-5 Yrs', label: 'Mid-Level Developer (2-5 Yrs)' },
    { value: '5-8 Yrs', label: 'Senior Developer / Tech Lead (5-8 Yrs)' },
    { value: '8+ Yrs', label: 'Solution / Technical Architect (8+ Yrs)' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="🤝 Book 1:1 Live Mock Interview Session"
      className="bg-white text-slate-900 max-w-xl"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-xs text-slate-600">
          Practice 1-on-1 with a Senior Salesforce Architect. Includes live coding on LWC & Triggers, scenario design grilling, and direct resume feedback.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Input
            label="Full Name"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-surface-canvas border-slate-300 text-slate-900"
          />

          <Input
            label="Email Address"
            required
            type="email"
            placeholder="rahul@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-surface-canvas border-slate-300 text-slate-900"
          />

          <Input
            label="WhatsApp Mobile Number"
            required
            type="tel"
            placeholder="10-digit mobile"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-surface-canvas border-slate-300 text-slate-900"
          />

          <Select
            label="Your Experience"
            options={experienceOptions}
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="bg-surface-canvas border-slate-300 text-slate-900"
          />
        </div>

        <Input
          label="Target Role / Dream Company"
          placeholder="e.g. LWC Developer at Deloitte or Accenture"
          value={formData.targetRole}
          onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
          className="bg-surface-canvas border-slate-300 text-slate-900"
        />

        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs font-mono text-emerald-800">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-emerald-600" />
            <span>45 Min 1:1 Video Call (Google Meet)</span>
          </div>
          <span className="text-emerald-700 font-bold">100% Free for Community</span>
        </div>

        <Button
          type="submit"
          fullWidth
          className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 text-xs rounded-xl shadow-soft"
        >
          Confirm Free Session Request →
        </Button>
      </form>
    </Modal>
  );
};
