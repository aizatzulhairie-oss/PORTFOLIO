import React from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import { SectionRibbon } from '../components/SectionRibbon';
import { PageFooter } from '../components/PageFooter';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { AnimatedItem, AnimatedSection } from '../components/MotionWrappers';
import { Calendar, Building, Wrench } from 'lucide-react';

export const Section6Projects1: React.FC = () => {
  return (
    <AnimatedSection id="section-projects-1" className="py-6 sm:py-8">
      {/* 1:1 PDF Sheet Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-7 md:p-9 max-w-5xl mx-auto relative overflow-hidden">
        
        {/* Header Banner */}
        <HeaderBanner title="ENGINEERING PROJECTS" />

        {/* Subheader */}
        <div className="mb-4">
          <SectionRibbon title="PROJECT HIGHLIGHTS (1/2)" />
        </div>

        {/* 5 Project Cards */}
        <div className="space-y-4">
          
          {/* 1. PIPING DRAWINGS (SELF PROJECT) */}
          <AnimatedItem delay={0.05}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="project_photo_piping"
                      type="project"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2">
                  <SectionRibbon title="PIPING DRAWINGS (SELF PROJECT)" size="project" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Dec 2025 – Present</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                      <span>UTM</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 text-[#0c2340] rounded-full border border-blue-200">
                      <Wrench className="w-3 h-3 text-[#ea580c]" />
                      <span>SOLIDWORKS, CAD and +1 skill</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Practice developing Piping and Instrumentation Diagrams (P&ID) using SolidWorks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Interpret engineering standards, process flow and key components (valves, instruments, piping routes, safety devices).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Translate P&ID symbols into accurate 2D/3D representations and improve design workflow for industrial plant documentation.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 2. MACHINE LEARNING-BASED PROTOTYPE */}
          <AnimatedItem delay={0.1}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="project_photo_porosity_ml"
                      type="project"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2">
                  <SectionRibbon title="MACHINE LEARNING-BASED PROTOTYPE FOR WELDING POROSITY DEFECT DETECTION" size="project" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Feb 2026 – Feb 2026</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                      <span>UTM</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 text-[#0c2340] rounded-full border border-blue-200">
                      <Wrench className="w-3 h-3 text-[#ea580c]" />
                      <span>Machine Learning, HTML and +2 skills</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Developed an automated feasibility study for welding porosity defect detection using Google's machine learning platform.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Designed an image classification model with a standardized workflow: Image Input → Pre-processing → ML Classification → Output Display.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Future roadmap: real-time camera detection, multi-defect classification (e.g. cracks, slag inclusion), and higher accuracy with industrial datasets.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 3. GAS WELDING PROJECT LAB */}
          <AnimatedItem delay={0.15}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="project_photo_gas_welding"
                      type="project"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2">
                  <SectionRibbon title="GAS WELDING PROJECT LAB – MATERIAL SELECTION & THERMAL ANALYSIS" size="project" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Dec 2025 – Dec 2025</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                      <span>UTM</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 text-[#0c2340] rounded-full border border-blue-200">
                      <Wrench className="w-3 h-3 text-[#ea580c]" />
                      <span>Thermal Analysis, SOLIDWORKS and +2 skills</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Investigated various metals to determine suitable materials for gas welding.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Conducted thermal simulations using SolidWorks to analyze heat distribution.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Enhanced understanding of material behavior under high temperatures and welding processes.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 4. SIX SIGMA YELLOW BELT CAPSTONE */}
          <AnimatedItem delay={0.2}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="project_photo_six_sigma"
                      type="project"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2">
                  <SectionRibbon title="SIX SIGMA YELLOW BELT CAPSTONE PROJECT: REDUCING WELD DEFECTS IN METAL PIPING PRODUCTION" size="project" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>May 2025 – May 2025</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                      <span>UTM</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 text-[#0c2340] rounded-full border border-blue-200">
                      <Wrench className="w-3 h-3 text-[#ea580c]" />
                      <span>Six Sigma, DMAIC and +5 skills</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Applied the DMAIC methodology to reduce weld defects in a metal piping production line.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Identified a baseline defect rate of 12.4% (above 5% threshold) and defined CTQs (defect rate, rework hours, first-pass yield).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Analyzed process variability, identified root causes, and proposed improvement actions (process control and operator training).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Target: defect rate &lt; 5%, rework hours –40%, and first-pass yield ≥ 95%.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 5. ARC WELDING JIGS */}
          <AnimatedItem delay={0.25}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="project_photo_welding_jigs"
                      type="project"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2">
                  <SectionRibbon title="ARC WELDING JIGS & TRAINING FEATURES" size="project" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>-</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                      <span>UTM</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 text-[#0c2340] rounded-full border border-blue-200">
                      <Wrench className="w-3 h-3 text-[#ea580c]" />
                      <span>Arc Welding, AutoCAD and +5 skills</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Designed, modelled and fabricated custom welding jigs and training features.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Produced detailed CAD models and technical drawings using SolidWorks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Developed adjustable jigs for real-world welding simulation with ergonomic and safe setup.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Improved joint alignment accuracy and welding angle consistency.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Aligned with TVET and industry competency standards for welder training.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

        </div>

        {/* Footer with PAGE 1 / 2 badge */}
        <PageFooter pageNumber="PAGE 1 / 2" />
      </div>
    </AnimatedSection>
  );
};
