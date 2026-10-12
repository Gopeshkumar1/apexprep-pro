import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { ShieldCheck } from 'lucide-react';

export interface SizeChartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeChartModal: React.FC<SizeChartModalProps> = ({
  isOpen,
  onClose,
}) => {
  const sizeData = [
    { age: '0–6 Months', height: '55–65 cm', chest: '16–17.5 in', waist: '16.5 in' },
    { age: '6–12 Months', height: '65–75 cm', chest: '17.5–18.5 in', waist: '17.5 in' },
    { age: '1–2 Years', height: '75–85 cm', chest: '19–20 in', waist: '18.5 in' },
    { age: '2–4 Years', height: '85–100 cm', chest: '21–22 in', waist: '20 in' },
    { age: '4–6 Years', height: '100–115 cm', chest: '23–24 in', waist: '21.5 in' },
    { age: '6–8 Years', height: '115–128 cm', chest: '25–26.5 in', waist: '23 in' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Kids Size Measurement Guide 📏">
      <div className="space-y-4">
        <p className="text-xs text-slate">
          All our garments are pre-shrunk and tailored to standard Indian children sizing. If your child is between sizes, we recommend picking 1 size larger for relaxed comfort!
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-100">
          <table className="w-full text-xs text-left">
            <thead className="bg-cream font-heading font-extrabold text-navy">
              <tr>
                <th className="p-3">Age Group</th>
                <th className="p-3">Child Height</th>
                <th className="p-3">Chest Circumference</th>
                <th className="p-3">Waist</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sizeData.map((s) => (
                <tr key={s.age} className="hover:bg-gray-50 font-medium">
                  <td className="p-3 font-bold text-primary">{s.age}</td>
                  <td className="p-3 text-navy">{s.height}</td>
                  <td className="p-3 text-navy">{s.chest}</td>
                  <td className="p-3 text-slate">{s.waist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-secondary-light/60 rounded-2xl border border-secondary/20 flex items-center gap-2 text-xs text-secondary-dark font-medium">
          <ShieldCheck className="w-4 h-4 shrink-0 text-secondary" />
          <span>Need help choosing? Send child height to our WhatsApp for instant recommendation.</span>
        </div>
      </div>
    </Modal>
  );
};
