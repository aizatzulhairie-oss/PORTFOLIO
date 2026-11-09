import React from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import { SectionRibbon } from '../components/SectionRibbon';
import { PageFooter } from '../components/PageFooter';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { AnimatedItem, AnimatedSection } from '../components/MotionWrappers';
import {
  MapPin,
  Calendar,
  BarChart3,
  GraduationCap,
  ShieldCheck,
  Flame,
  Binary,
  Compass,
  Cpu,
  Activity,
  Award,
  Layers,
  Wrench,
  CheckSquare,
} from 'lucide-react';

export const Section1AboutMe: React.FC = () => {
  return (
    <AnimatedSection id="section-about" className="py-6 sm:py-8">
      {/* 1:1 PDF Sheet Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-7 md:p-9 max-w-5xl mx-auto relative overflow-hidden">
        
        {/* Header Banner */}
        <HeaderBanner title="BIODATA / ABOUT ME" />

        {/* TOP PROFILE CARD */}
        <AnimatedItem delay={0.05} className="mb-6">
          <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-gradient-to-br from-white via-[#fbfcfe] to-[#f4f7fb] p-4 sm:p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              
              {/* Left: Profile Photo Placeholder */}
              <div className="md:col-span-4 lg:col-span-3 flex justify-center">
                <div className="w-44 sm:w-48 md:w-full max-w-[200px]">
                  <ImagePlaceholder
                    id="profile_photo"
                    aspectRatio="aspect-[3/4]"
                    fit="cover"
                    className="shadow-sm"
                  />
                </div>
              </div>

              {/* Right: Info, Badges, Introduction */}
              <div className="md:col-span-8 lg:col-span-9 space-y-3">
                {/* Name & Tag */}
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0c2340] tracking-tight uppercase leading-tight">
                    AIZAT ZUL HAIRIE BIN WAHI
                  </h1>
                  <h2 className="text-sm sm:text-base font-extrabold text-[#0c2340]/90">
                    (AIZAT / JAT)
                  </h2>
                </div>

                {/* 3 Highlight Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  {/* Badge 1 */}
                  <div className="flex items-center gap-2 p-2 rounded-xl border border-[#0c2340]/20 bg-white shadow-xs">
                    <div className="p-1.5 rounded-lg bg-[#0c2340]/10 text-[#0c2340]">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#0c2340] leading-tight">
                      Six Sigma Yellow Belt
                    </span>
                  </div>

                  {/* Badge 2 */}
                  <div className="flex items-center gap-2 p-2 rounded-xl border border-[#0c2340]/20 bg-white shadow-xs">
                    <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600 font-black text-sm flex items-center justify-center w-7 h-7">
                      <span className="text-blue-500 font-extrabold">G</span>
                    </div>
                    <span className="text-xs font-bold text-[#0c2340] leading-tight">
                      Google Certified Data Analyst
                    </span>
                  </div>

                  {/* Badge 3 */}
                  <div className="flex items-center gap-2 p-2 rounded-xl border border-[#0c2340]/20 bg-white shadow-xs">
                    <div className="p-1.5 rounded-lg bg-[#0c2340]/10 text-[#0c2340]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#0c2340] leading-tight">
                      UTM Endowment Scholar
                    </span>
                  </div>
                </div>

                {/* Contact Row */}
                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 pt-1 text-xs font-bold text-[#0c2340]">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-[#0c2340]" />
                    <span>Kuala Paka, Terengganu, Malaysia</span>
                  </div>
                  <span className="hidden sm:inline text-slate-300">|</span>
                  <a
                    href="https://linkedin.com/in/aizat-zulhairie-961053295"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[#0077b5] hover:text-[#005582] transition-colors"
                  >
                    <span className="w-4 h-4 rounded-xs bg-[#0077b5] text-white flex items-center justify-center text-[10px] font-black leading-none">
                      in
                    </span>
                    <span className="font-semibold underline">
                      linkedin.com/in/aizat-zulhairie-961053295
                    </span>
                  </a>
                </div>

                {/* Professional Introduction Box */}
                <div className="pt-2">
                  <SectionRibbon title="PROFESSIONAL INTRODUCTION" size="small" />
                  <div className="rounded-xl border border-[#ea580c]/60 bg-white/90 p-3.5 text-xs text-slate-700 leading-relaxed shadow-xs">
                    <p>
                      My name is Aizat Zul Hairie, and I am currently pursuing a degree in
                      Technology with Education, majoring in Mechanical Engineering with a
                      specialization in Welding Technology at Universiti Teknologi Malaysia (UTM).
                      My educational background is rooted in technical and mechanical engineering,
                      which has equipped me with both theoretical knowledge and practical skills.
                      The addition of Welding Technology as a minor complements my major by
                      deepening my understanding of material behaviour, joining processes, and
                      inspection methods, all of which are crucial in the field of quality control
                      and quality assurance. With this combined expertise, I am particularly
                      interested in ensuring product reliability and maintaining high standards in
                      manufacturing and engineering processes.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </AnimatedItem>

        {/* BOTTOM TWO-COLUMN SPLIT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Academic Background & Technical Competencies (approx 40%) */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Academic Background */}
            <AnimatedItem delay={0.1}>
              <SectionRibbon title="ACADEMIC BACKGROUND" />
              <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 space-y-4 shadow-xs">
                
                {/* UTM */}
                <div className="flex gap-3 items-start pb-3 border-b border-slate-100">
                  <div className="w-12 h-12 shrink-0">
                    <ImagePlaceholder id="logo_utm" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-xs font-bold text-[#0c2340] leading-snug">
                      Bachelor of Technology with Education (Mechanical Engineering) (Hons.)
                    </h3>
                    <p className="text-[11px] font-semibold text-[#0c2340]/80">
                      Minor in Welding Technology
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium pt-0.5">
                      <Calendar className="w-3 h-3 text-[#ea580c]" />
                      <span>Oct 2023 – Sep 2027</span>
                    </div>
                  </div>
                </div>

                {/* KMKPH */}
                <div className="flex gap-3 items-start pb-3 border-b border-slate-100">
                  <div className="w-12 h-12 shrink-0">
                    <ImagePlaceholder id="logo_kmkph" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-[#0c2340] leading-snug">
                      Kolej Matrikulasi Kejuruteraan Pahang
                    </h4>
                    <p className="text-[11px] text-slate-600 font-medium">
                      Pre-University, Mechanical Engineering
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium pt-0.5">
                      <Calendar className="w-3 h-3 text-[#ea580c]" />
                      <span>Oct 2022 – May 2023</span>
                    </div>
                  </div>
                </div>

                {/* SMTT */}
                <div className="flex gap-3 items-start">
                  <div className="w-12 h-12 shrink-0">
                    <ImagePlaceholder id="logo_smtt" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-[#0c2340] leading-snug">
                      Sekolah Menengah Teknik Terengganu (TEKTRA / SMTT)
                    </h4>
                    <p className="text-[11px] text-slate-600 font-medium">
                      Sijil Pelajaran Malaysia (SPM), Mechanical Engineering
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium pt-0.5">
                      <Calendar className="w-3 h-3 text-[#ea580c]" />
                      <span>Feb 2020 – Dec 2021</span>
                    </div>
                  </div>
                </div>

              </div>
            </AnimatedItem>

            {/* Technical Competencies */}
            <AnimatedItem delay={0.15}>
              <SectionRibbon title="TECHNICAL COMPETENCIES" />
              <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-3.5 space-y-2.5 shadow-xs">
                
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <Flame className="w-4 h-4 text-[#0c2340] shrink-0" />
                  <span className="text-xs font-bold text-[#0c2340]">
                    Welding Technology & Joining Processes
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-[#0c2340] shrink-0" />
                  <span className="text-xs font-bold text-[#0c2340]">
                    Quality Control & Quality Assurance (QC/QA)
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <BarChart3 className="w-4 h-4 text-[#0c2340] shrink-0" />
                  <span className="text-xs font-bold text-[#0c2340]">
                    Data Analysis & Visualization (Power BI)
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <Compass className="w-4 h-4 text-[#0c2340] shrink-0" />
                  <span className="text-xs font-bold text-[#0c2340]">
                    Computer-Aided Design (AutoCAD / SolidWorks)
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <Activity className="w-4 h-4 text-[#0c2340] shrink-0" />
                  <span className="text-xs font-bold text-[#0c2340]">
                    Nondestructive Testing (NDT)
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <Wrench className="w-4 h-4 text-[#0c2340] shrink-0" />
                  <span className="text-xs font-bold text-[#0c2340]">
                    Process Improvement (Six Sigma, DMAIC, 7QC Tools)
                  </span>
                </div>

              </div>
            </AnimatedItem>

          </div>

          {/* RIGHT COLUMN: Area of Interest & Key Skills (approx 60%) */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Area of Interest */}
            <AnimatedItem delay={0.1}>
              <SectionRibbon title="AREA OF INTEREST" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                
                <div className="p-3 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-2 shadow-xs min-h-[92px]">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0c2340] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#0c2340] leading-tight">
                    Quality Control / Quality Assurance (QC/QA)
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-2 shadow-xs min-h-[92px]">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#ea580c] flex items-center justify-center">
                    <Flame className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#0c2340] leading-tight">
                    Welding Technology & Inspection
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-2 shadow-xs min-h-[92px]">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0c2340] flex items-center justify-center">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#0c2340] leading-tight">
                    Data Analytics & Process Improvement
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-2 shadow-xs min-h-[92px]">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#0c2340] flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#0c2340] leading-tight">
                    Manufacturing & Engineering Process
                  </span>
                </div>

              </div>
            </AnimatedItem>

            {/* Key Skills & Related Projects */}
            <AnimatedItem delay={0.2}>
              <SectionRibbon title="KEY SKILLS & RELATED PROJECTS" />
              <div className="space-y-3">
                
                {/* Skill 1: Microsoft Power BI */}
                <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center shadow-xs">
                  <div className="w-full sm:w-28 shrink-0 flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-10 h-10 mb-1">
                      <ImagePlaceholder id="logo_powerbi" type="logo" compact aspectRatio="aspect-square" />
                    </div>
                    <span className="text-[10px] font-black text-[#0c2340] text-center uppercase">
                      Microsoft Power BI
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 flex-1">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Welding QA/QC Dashboard – Power BI Analytics</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Harnessing the Power of Data with Power BI</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Extract, Transform and Load Data in Power BI</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Data Modeling in Power BI</span>
                    </li>
                  </ul>
                </div>

                {/* Skill 2: Quality Control */}
                <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center shadow-xs">
                  <div className="w-full sm:w-28 shrink-0 flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-10 h-10 mb-1">
                      <ImagePlaceholder id="logo_quality_control" type="logo" compact aspectRatio="aspect-square" />
                    </div>
                    <span className="text-[10px] font-black text-[#0c2340] text-center uppercase">
                      Quality Control
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 flex-1">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>EDU TEKTRA Mobile Apps</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Arc Welding Jigs & Training Features</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Six Sigma Yellow Belt Capstone Project: Reducing Weld Defects in Metal Piping Production</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Welding QA/QC Dashboard – Power BI Analytics</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Engineering Project Management Specialization</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Six Sigma Yellow Belt Specialization</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Quality Improvement and Management</span>
                    </li>
                  </ul>
                </div>

                {/* Skill 3: Welding Inspection */}
                <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center shadow-xs">
                  <div className="w-full sm:w-28 shrink-0 flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-10 h-10 mb-1">
                      <ImagePlaceholder id="logo_welding_inspection" type="logo" compact aspectRatio="aspect-square" />
                    </div>
                    <span className="text-[10px] font-black text-[#0c2340] text-center uppercase">
                      Welding Inspection
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 flex-1">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Welding Instructor at Vocational College</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Arc Welding Jigs & Training Features</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Self Project : Machine Learning-Based Prototype for Welding Porosity Defect Detection</span>
                    </li>
                  </ul>
                </div>

                {/* Skill 4: AutoCAD Mechanical */}
                <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center shadow-xs">
                  <div className="w-full sm:w-28 shrink-0 flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-10 h-10 mb-1">
                      <ImagePlaceholder id="logo_autocad" type="logo" compact aspectRatio="aspect-square" />
                    </div>
                    <span className="text-[10px] font-black text-[#0c2340] text-center uppercase">
                      AutoCAD Mechanical
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 flex-1">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Design for Welding Fabrication Project (e.g. jigs, fixtures, and training features)</span>
                    </li>
                  </ul>
                </div>

                {/* Skill 5: NDT */}
                <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center shadow-xs">
                  <div className="w-full sm:w-28 shrink-0 flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-10 h-10 mb-1">
                      <ImagePlaceholder id="logo_ndt" type="logo" compact aspectRatio="aspect-square" />
                    </div>
                    <span className="text-[10px] font-black text-[#0c2340] text-center uppercase">
                      Nondestructive Testing (NDT)
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 flex-1">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>NON-DESTRUCTIVE TESTING II FULL COURSE | NDT Course</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>SMAW - CS PLATE - 3G WELDER (AWS D1.1:2015)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#ea580c] mt-1 shrink-0" />
                      <span>Welding Processes in Heavy Manufacturing & Quality Controls</span>
                    </li>
                  </ul>
                </div>

              </div>
            </AnimatedItem>

          </div>
        </div>

        {/* Footer decoration */}
        <PageFooter />
      </div>
    </AnimatedSection>
  );
};
