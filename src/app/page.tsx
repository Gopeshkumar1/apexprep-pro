'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/sf/Navbar';
import { HeroSection } from '@/components/sf/HeroSection';
import { LearningPath } from '@/components/sf/LearningPath';
import { TrustBar } from '@/components/sf/TrustBar';
import { CoursesGrid } from '@/components/sf/CoursesGrid';
import { FeaturesSection } from '@/components/sf/FeaturesSection';
import { TopicQuestionsGrid } from '@/components/sf/TopicQuestionsGrid';
import { RecentQuestions } from '@/components/sf/RecentQuestions';
import { FAQSection } from '@/components/sf/FAQSection';
import { TestimonialsSection } from '@/components/sf/TestimonialsSection';
import { NewsletterCTA } from '@/components/sf/NewsletterCTA';
import { Footer } from '@/components/sf/Footer';
import { AdSlot } from '@/components/sf/AdSlot';
import { MCQQuizModal } from '@/components/sf/MCQQuizModal';
import { QuestionDetailModal } from '@/components/sf/QuestionDetailModal';
import { BookingModal } from '@/components/sf/BookingModal';
import { SF_QUESTIONS, Question, Topic } from '@/lib/sf-data';
import { useToast } from '@/components/ui/Toast';

export default function ApexPrepProPage() {
  const [isMCQOpen, setIsMCQOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const { showToast } = useToast();

  const handleOpenQuestion = (q?: Question) => {
    setSelectedQuestion(q || SF_QUESTIONS[0]);
    setIsQuestionModalOpen(true);
  };

  const handleSelectTopic = (topic: Topic) => {
    const matchedQuestion =
      SF_QUESTIONS.find((q) => q.topicId === topic.id) || SF_QUESTIONS[0];
    setSelectedQuestion(matchedQuestion);
    setIsQuestionModalOpen(true);
  };

  const handleSelectRole = (role: string) => {
    showToast(`Filtered interview guides for: ${role}`, 'info');
    if (['Developer', 'Admin', 'AI & Agentforce', 'Clouds', 'Company Wise'].includes(role)) {
      setActiveCategory(role);
    }
    const el = document.getElementById('topics');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    const matched = SF_QUESTIONS.find(
      (q) =>
        q.question.toLowerCase().includes(query.toLowerCase()) ||
        q.topicName.toLowerCase().includes(query.toLowerCase()) ||
        q.answer.toLowerCase().includes(query.toLowerCase())
    );
    if (matched) {
      setSelectedQuestion(matched);
      setIsQuestionModalOpen(true);
      showToast(`Found relevant guide: "${matched.question.substring(0, 40)}..."`, 'success');
    } else {
      showToast(`Searching guides for "${query}"...`, 'info');
      const el = document.getElementById('topics');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-surface-canvas text-slate-900 flex flex-col font-body selection:bg-brand-500 selection:text-white">
      {/* 1. Navigation Header */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenMCQ={() => setIsMCQOpen(true)}
      />

      {/* 2. Hero Section with Search & Role Selector Chips */}
      <HeroSection
        onSearch={handleSearch}
        onSelectRole={handleSelectRole}
        onOpenMCQ={() => setIsMCQOpen(true)}
      />

      {/* Top AdSense Placement */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdSlot format="horizontal" label="Advertisement • Google AdSense High CPC Unit" />
      </div>

      {/* 3. The 5-Step Learning Roadmap */}
      <LearningPath />

      {/* 4. Trust Bar (1,15,000+ Professionals & Top MNC Logos) */}
      <TrustBar />

      {/* 5. 7 Free Zero-to-Hero Structured Courses */}
      <CoursesGrid onSelectCourse={() => handleOpenQuestion()} />

      {/* Mid-Page AdSense Placement */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdSlot format="horizontal" label="Sponsored Partner • High Tech RPM Slot" />
      </div>

      {/* 6. Features Grid (One platform. Every edge you need) */}
      <FeaturesSection />

      {/* 7. Topic-Wise Question Bank (32 Curated Categories) */}
      <TopicQuestionsGrid
        onSelectTopic={handleSelectTopic}
        selectedCategory={activeCategory}
      />

      {/* 8. Fresh This Week / Recent Release Notes */}
      <RecentQuestions onOpenQuestion={() => handleOpenQuestion()} />

      {/* 9. Testimonials (Real Feedback from Placed Candidates) */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions (Accordion) */}
      <FAQSection />

      {/* 11. Weekly Question Drop Newsletter Lead Magnet */}
      <NewsletterCTA />

      {/* 12. Complete Developer Footer */}
      <Footer />

      {/* Interactive MCQ Quiz Engine Modal */}
      <MCQQuizModal isOpen={isMCQOpen} onClose={() => setIsMCQOpen(false)} />

      {/* Deep Architectural Question Modal with Syntax Code Snippet */}
      <QuestionDetailModal
        question={selectedQuestion}
        isOpen={isQuestionModalOpen}
        onClose={() => setIsQuestionModalOpen(false)}
      />

      {/* 1:1 Live Mock Session Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
