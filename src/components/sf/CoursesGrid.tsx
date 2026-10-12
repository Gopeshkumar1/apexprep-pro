import React from 'react';
import { SF_COURSES, Course } from '@/lib/sf-data';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface CoursesGridProps {
  onSelectCourse?: (course: Course) => void;
}

export const CoursesGrid: React.FC<CoursesGridProps> = ({ onSelectCourse }) => {
  return (
    <section id="courses" className="py-20 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Structured Zero-to-Hero Handbooks</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
              All 7 Complete Curated Handbooks
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              100% free structured reading paths & cheat sheets from basics to architecture — quick to read, zero video filler.
            </p>
          </div>

          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full shrink-0 shadow-soft">
            ✓ 100% Free • No Sign-up Paywall
          </span>
        </div>

        {/* Featured Big Card (Admin Zero to Hero) */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-50 via-sky-50 to-white border border-brand-200 p-6 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold font-mono">
                <span>Featured • Complete Path</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                Salesforce Admin Zero to Hero
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-sans">
                A complete 6-phase path from setup basics to advanced automation, security, and reporting — everything an Admin needs, structured module by module.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2 font-medium">
                <span>📚 25 Modules</span>
                <span>•</span>
                <span>🎯 Zero to Hero Level</span>
                <span>•</span>
                <span className="text-emerald-600 font-bold">✅ 25/25 Live</span>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <Button
                size="lg"
                onClick={() => onSelectCourse?.(SF_COURSES[0])}
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-soft px-6 py-3.5 rounded-xl w-full sm:w-auto"
              >
                Start Learning Now →
              </Button>
            </div>
          </div>
        </div>

        {/* 6 Grid Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SF_COURSES.slice(1).map((course) => (
            <div
              key={course.id}
              className="bg-surface-canvas rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-brand-300 transition-all hover:-translate-y-1 shadow-card group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{course.icon}</span>
                  <span className="text-[10px] font-mono font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200">
                    {course.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-black text-lg text-slate-900 group-hover:text-brand-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">
                    {course.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {course.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/80 mt-6 space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                  <span>{course.modules} Modules</span>
                  <span>{course.level}</span>
                  <span
                    className={
                      course.status === 'Live'
                        ? 'text-emerald-600 font-bold'
                        : 'text-amber-600 font-bold'
                    }
                  >
                    ● {course.status}
                  </span>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  fullWidth
                  onClick={() => onSelectCourse?.(course)}
                  className="border-slate-300 text-slate-700 group-hover:border-brand-600 group-hover:text-brand-600 group-hover:bg-brand-50 text-xs font-bold py-2.5 rounded-xl transition-all"
                >
                  Start Course →
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
