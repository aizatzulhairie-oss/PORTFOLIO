import React from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import { SectionRibbon } from '../components/SectionRibbon';
import { PageFooter } from '../components/PageFooter';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { AnimatedItem, AnimatedSection } from '../components/MotionWrappers';
import {
  Calendar,
  MapPin,
  Settings,
  FileSearch,
  Layers,
  BarChart,
  Users2,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  BookOpen,
  Search,
  ClipboardCheck,
  ShieldAlert,
  HardHat,
  Flame,
  Workflow,
  Sparkles,
} from 'lucide-react';

export const Section3Internship: React.FC = () => {
  return (
    <AnimatedSection id="section-internship" className="py-6 sm:py-8">
      {/* 1:1 PDF Sheet Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-7 md:p-9 max-w-5xl mx-auto relative overflow-hidden">
        
        {/* Header Banner */}
        <HeaderBanner title="INTERNSHIP EXPERIENCE" />

        {/* ================= INTERNSHIP 1 ================= */}
        <div className="mb-10 space-y-4">
          <SectionRibbon title="INTERNSHIP 1" variant="orange" />

          <AnimatedItem delay={0.05}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 sm:p-5 shadow-xs">
              
              {/* Title & Organization Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-28 h-10 shrink-0">
                    <ImagePlaceholder id="logo_insulet" type="logo" compact aspectRatio="aspect-[3/1]" />
                  </div>
                  <div className="h-8 w-[2px] bg-slate-300 hidden md:block" />
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-black text-[#0c2340] leading-tight uppercase">
                      MANUFACTURING ENGINEER (MAINTENANCE AND PROCESS)
                    </h3>
                  </div>
                </div>

                <div className="self-start md:self-center">
                  <span className="px-3.5 py-1 bg-[#ea580c] text-white text-xs font-black uppercase tracking-wider rounded-md shadow-xs">
                    INTERNSHIP
                  </span>
                </div>
              </div>

              {/* Duration & Location details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 text-xs font-bold text-[#0c2340] bg-slate-50 px-4 rounded-xl border border-slate-100 mt-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#ea580c] shrink-0" />
                  <span>
                    DURATION: <span className="font-semibold text-slate-700">6 JULY 2026 – 5 OCTOBER 2026 (3 MONTHS)</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ea580c] shrink-0" />
                  <span>
                    COMPANY: <span className="font-semibold text-slate-700">INSULET CORPORATION (MALAYSIA)</span>
                  </span>
                </div>
              </div>

              {/* Main Content Grid: Photos (Left) + Contributions (Right) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-4">
                
                {/* 3 Photos Stacked */}
                <div className="md:col-span-3 space-y-3">
                  <ImagePlaceholder id="internship_insulet_photo_1" aspectRatio="aspect-[4/3]" />
                  <ImagePlaceholder id="internship_insulet_photo_2" aspectRatio="aspect-[4/3]" />
                  <ImagePlaceholder id="internship_insulet_photo_3" aspectRatio="aspect-[4/3]" />
                </div>

                {/* Right: Contributions & Tools */}
                <div className="md:col-span-9 space-y-4">
                  <SectionRibbon title="ROLE & KEY CONTRIBUTIONS" size="small" />

                  {/* Bullet points with icons */}
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-2.5 shadow-xs">
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Settings className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Attached to the Process Engineering Team, supporting process improvement, quality investigations, and engineering studies within a regulated medical device manufacturing environment.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <FileSearch className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Closed 15+ NCMR investigations using DMAIC, 5 Why Analysis, Fishbone Diagram, process mapping, and station verification techniques.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Layers className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Assisted in PFMEA remediation and PFMEA-DFMEA alignment activities to strengthen risk management and process controls.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <BarChart className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Conducted Ppk/Cpk analysis and statistical studies using Minitab to evaluate process capability and performance.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Users2 className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Identified Critical-to-Process (CTP) contact points and supported manufacturing process optimisation initiatives.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Collaborated with cross-functional engineering and quality teams to drive root cause investigations and continuous improvement projects.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <FileCheck2 className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Supported maintenance and production activities while maintaining compliance with Good Documentation Practices (GDP) and current Good Manufacturing Practices (cGMP), ensuring accurate documentation, traceability, and adherence to established procedures.
                      </span>
                    </div>
                  </div>

                  {/* Key Tools & Methodologies */}
                  <div>
                    <SectionRibbon title="KEY TOOLS & METHODOLOGIES" size="small" />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      
                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">DMAIC</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <Search className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">5 WHY ANALYSIS</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <Workflow className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">FISHBONE DIAGRAM</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">PROCESS MAPPING</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <FileSearch className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">PFMEA / DFMEA</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">Ppk/Cpk (Minitab)</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">STATION VERIFICATION</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <FileCheck2 className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">GDP / cGMP</span>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </AnimatedItem>
        </div>

        {/* ================= INTERNSHIP 2 ================= */}
        <div className="space-y-4">
          <SectionRibbon title="INTERNSHIP 2" variant="orange" />

          <AnimatedItem delay={0.1}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 sm:p-5 shadow-xs">
              
              {/* Title & Organization Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-32 h-10 shrink-0">
                    <ImagePlaceholder id="logo_kolej_vokasional" type="logo" compact aspectRatio="aspect-[3/1]" />
                  </div>
                  <div className="h-8 w-[2px] bg-slate-300 hidden md:block" />
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-black text-[#0c2340] leading-tight uppercase">
                      WELDING INSTRUCTOR
                    </h3>
                  </div>
                </div>

                <div className="self-start md:self-center">
                  <span className="px-3.5 py-1 bg-[#ea580c] text-white text-xs font-black uppercase tracking-wider rounded-md shadow-xs">
                    INTERNSHIP
                  </span>
                </div>
              </div>

              {/* Duration & Location details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 text-xs font-bold text-[#0c2340] bg-slate-50 px-4 rounded-xl border border-slate-100 mt-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#ea580c] shrink-0" />
                  <span>
                    DURATION: <span className="font-semibold text-slate-700">MARCH 2026 – JUNE 2026 (4 MONTHS)</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ea580c] shrink-0" />
                  <span>
                    LOCATION: <span className="font-semibold text-slate-700">VOCATIONAL COLLEGE KUANTAN, PAHANG, MALAYSIA</span>
                  </span>
                </div>
              </div>

              {/* Main Content Grid: Photos (Left) + Contributions (Right) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-4">
                
                {/* 3 Photos Stacked */}
                <div className="md:col-span-3 space-y-3">
                  <ImagePlaceholder id="internship_welding_photo_1" aspectRatio="aspect-[4/3]" />
                  <ImagePlaceholder id="internship_welding_photo_2" aspectRatio="aspect-[4/3]" />
                  <ImagePlaceholder id="internship_welding_photo_3" aspectRatio="aspect-[4/3]" />
                </div>

                {/* Right: Contributions & Tools */}
                <div className="md:col-span-9 space-y-4">
                  <SectionRibbon title="ROLE & KEY CONTRIBUTIONS" size="small" />

                  {/* Bullet points with icons */}
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-2.5 shadow-xs">
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <GraduationCap className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Assisted in delivering theoretical and practical training for Sijil Vokasional Malaysia (SVM) and Diploma Vokasional Malaysia (DVM) students in welding technology.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <BookOpen className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Supported teaching of welding inspection, welding supervision, welding processes, and welding quality control aligned with industry practices.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Search className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Demonstrated welding techniques and proper use of SMAW, GMAW, and GTAW equipment during practical workshop sessions.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <ClipboardCheck className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Guided students in identifying welding defects and imperfections and understanding basic inspection principles used in fabrication and structural welding.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <ShieldAlert className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Assisted in supervising practical assessments while ensuring compliance with welding procedures, safety standards, and workshop best practices.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Users2 className="w-4 h-4 text-[#0c2340] shrink-0 mt-0.5" />
                      <span>
                        Contributed to competency-based training that reflects real industrial welding environments and fabrication workflows.
                      </span>
                    </div>
                  </div>

                  {/* Key Tools & Methodologies */}
                  <div>
                    <SectionRibbon title="KEY TOOLS & METHODOLOGIES" size="small" />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      
                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <Flame className="w-4 h-4 text-[#ea580c]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">SMAW (Stick)</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <Flame className="w-4 h-4 text-[#ea580c]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">GMAW (MIG)</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <Flame className="w-4 h-4 text-[#ea580c]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">GTAW (TIG)</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <Search className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">WELDING INSPECTION</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <ClipboardCheck className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">QUALITY CONTROL</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <HardHat className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">WELDING SUPERVISION</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">SAFETY STANDARDS</span>
                      </div>

                      <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center gap-2">
                        <Workflow className="w-4 h-4 text-[#0c2340]" />
                        <span className="text-[10px] font-black text-[#0c2340] uppercase">FABRICATION WORKFLOW</span>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </AnimatedItem>
        </div>

        {/* Footer */}
        <PageFooter />
      </div>
    </AnimatedSection>
  );
};
