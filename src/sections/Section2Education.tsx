import React from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import { SectionRibbon } from '../components/SectionRibbon';
import { PageFooter } from '../components/PageFooter';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { AnimatedItem, AnimatedSection } from '../components/MotionWrappers';
import {
  Calendar,
  Building,
  BarChart3,
  Trophy,
  Users,
  Wrench,
  CheckCircle,
} from 'lucide-react';

export const Section2Education: React.FC = () => {
  return (
    <AnimatedSection id="section-education" className="py-6 sm:py-8">
      {/* 1:1 PDF Sheet Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-7 md:p-9 max-w-5xl mx-auto relative overflow-hidden">
        
        {/* Header Banner */}
        <HeaderBanner title="EDUCATION & ACADEMIC ACHIEVEMENTS" />

        {/* SECTION 1: EDUCATION BACKGROUND */}
        <div className="space-y-4 mb-8">
          <SectionRibbon title="EDUCATION BACKGROUND" />

          {/* 1. UTM CARD */}
          <AnimatedItem delay={0.05}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 sm:p-5 shadow-xs transition-all hover:border-[#ea580c]/50">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="education_photo_utm"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-10 shrink-0">
                        <ImagePlaceholder id="logo_utm" type="logo" compact aspectRatio="aspect-[4/3]" />
                      </div>
                      <div className="h-6 w-[2px] bg-slate-300 hidden sm:block" />
                      <h3 className="text-sm sm:text-base font-black text-[#0c2340]">
                        Universiti Teknologi Malaysia (UTM)
                      </h3>
                    </div>

                    {/* CGPA Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#0c2340]/20 bg-slate-50 self-start sm:self-center">
                      <BarChart3 className="w-4 h-4 text-[#0c2340]" />
                      <div className="text-right leading-none">
                        <span className="text-[10px] text-slate-500 font-bold block">Current CGPA</span>
                        <span className="text-sm font-black text-[#0c2340]">3.99 (6/8)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#0c2340]">
                      Bachelor of Technology with Education (Mechanical Engineering) (Hons.)
                    </h4>
                    <p className="text-xs font-bold text-[#0c2340]/80">
                      Minor in Welding Technology
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium pt-1">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Oct 2023 – Sep 2027</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 2. KMKPH CARD */}
          <AnimatedItem delay={0.1}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 sm:p-5 shadow-xs transition-all hover:border-[#ea580c]/50">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="education_photo_kmkph"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-10 shrink-0">
                        <ImagePlaceholder id="logo_kmkph" type="logo" compact aspectRatio="aspect-[4/3]" />
                      </div>
                      <div className="h-6 w-[2px] bg-slate-300 hidden sm:block" />
                      <h3 className="text-sm sm:text-base font-black text-[#0c2340]">
                        Pahang Engineering Matriculation College (KMKPH)
                      </h3>
                    </div>

                    {/* CGPA Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#0c2340]/20 bg-slate-50 self-start sm:self-center">
                      <BarChart3 className="w-4 h-4 text-[#0c2340]" />
                      <div className="text-right leading-none">
                        <span className="text-[10px] text-slate-500 font-bold block">CGPA</span>
                        <span className="text-sm font-black text-[#0c2340]">4.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#0c2340]">
                      Pre-University, Mechanical Engineering
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Oct 2022 – May 2023</span>
                    </div>
                  </div>

                  {/* 2 Sub-columns: Activities & Skills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0c2340] mb-1">
                        <Users className="w-3.5 h-3.5 text-[#ea580c]" />
                        <span>Activities & Societies:</span>
                      </div>
                      <ul className="text-xs text-slate-700 pl-4 list-disc space-y-0.5">
                        <li>Peer Assisted Learning (Mechanical Engineering)</li>
                      </ul>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0c2340] mb-1">
                        <Wrench className="w-3.5 h-3.5 text-[#ea580c]" />
                        <span>Skills:</span>
                      </div>
                      <ul className="text-xs text-slate-700 pl-4 list-disc space-y-0.5">
                        <li>Computer-Aided Design (CAD)</li>
                        <li>Microsoft Excel</li>
                      </ul>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 3. SMTT CARD */}
          <AnimatedItem delay={0.15}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 sm:p-5 shadow-xs transition-all hover:border-[#ea580c]/50">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="education_photo_smtt"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-10 shrink-0">
                        <ImagePlaceholder id="logo_smtt" type="logo" compact aspectRatio="aspect-[4/3]" />
                      </div>
                      <div className="h-6 w-[2px] bg-slate-300 hidden sm:block" />
                      <h3 className="text-sm sm:text-base font-black text-[#0c2340]">
                        Sekolah Menengah Teknik Terengganu (TEKTRA / SMTT)
                      </h3>
                    </div>

                    {/* Result Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#0c2340]/20 bg-slate-50 self-start sm:self-center">
                      <BarChart3 className="w-4 h-4 text-[#0c2340]" />
                      <div className="text-right leading-none">
                        <span className="text-[10px] text-slate-500 font-bold block">Result</span>
                        <span className="text-sm font-black text-[#0c2340]">7A3B</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#0c2340]">
                      Sijil Pelajaran Malaysia (SPM), Mechanical Engineering
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Feb 2020 – Dec 2021</span>
                    </div>
                  </div>

                  {/* Activities & Societies */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0c2340] mb-1">
                      <Users className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Activities & Societies:</span>
                    </div>
                    <ul className="text-xs text-slate-700 pl-4 list-disc space-y-0.5 grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <li>Assistant Developer of EDU TEKTRA Project</li>
                      <li>School Prefect</li>
                      <li>TEKTRA Cyber Bridge Prefect</li>
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          </AnimatedItem>
        </div>

        {/* SECTION 2: ACADEMIC ACHIEVEMENTS & AWARDS */}
        <div className="space-y-3">
          <SectionRibbon title="ACADEMIC ACHIEVEMENTS & AWARDS" />

          {/* 1. ENDOWMENT MERDEKA */}
          <AnimatedItem delay={0.05}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-3.5 sm:p-4 flex flex-col sm:flex-row gap-4 items-center shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="w-full sm:w-44 shrink-0">
                <ImagePlaceholder
                  id="cert_endowment_merdeka"
                  type="certificate"
                  aspectRatio="aspect-[16/10]"
                  compact
                />
              </div>
              <div className="flex-1 space-y-1.5 w-full">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#ea580c] shrink-0" />
                  <h4 className="text-xs sm:text-sm font-black text-[#0c2340] uppercase">
                    ENDOWMENT MERDEKA SCHOLARSHIP AWARDS
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>Jul 2024</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                    <span>Universiti Teknologi Malaysia (UTM)</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>

          {/* 2. DIRECTOR'S AWARDS */}
          <AnimatedItem delay={0.1}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-3.5 sm:p-4 flex flex-col sm:flex-row gap-4 items-center shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="w-full sm:w-44 shrink-0">
                <ImagePlaceholder
                  id="cert_directors_award"
                  type="certificate"
                  aspectRatio="aspect-[16/10]"
                  compact
                />
              </div>
              <div className="flex-1 space-y-1.5 w-full">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#ea580c] shrink-0" />
                  <h4 className="text-xs sm:text-sm font-black text-[#0c2340] uppercase">
                    DIRECTOR'S AWARDS
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>Jul 2023</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                    <span>Pahang Engineering Matriculation College (KMKPH)</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>

          {/* 3. EXCELLENT STUDENTS AWARDS SPM 2021 */}
          <AnimatedItem delay={0.15}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-3.5 sm:p-4 flex flex-col sm:flex-row gap-4 items-center shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="w-full sm:w-44 shrink-0">
                <ImagePlaceholder
                  id="cert_excellent_spm"
                  type="certificate"
                  aspectRatio="aspect-[16/10]"
                  compact
                />
              </div>
              <div className="flex-1 space-y-1.5 w-full">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#ea580c] shrink-0" />
                  <h4 className="text-xs sm:text-sm font-black text-[#0c2340] uppercase">
                    EXCELLENT STUDENTS AWARDS SPM 2021
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>Jul 2022</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                    <span>Sekolah Menengah Teknik Terengganu (TEKTRA / SMTT)</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>

          {/* 4. INTERNATIONAL COCURICULUM AWARDS 2021 */}
          <AnimatedItem delay={0.2}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-3.5 sm:p-4 flex flex-col sm:flex-row gap-4 items-center shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="w-full sm:w-44 shrink-0">
                <ImagePlaceholder
                  id="cert_intl_cocurriculum"
                  type="certificate"
                  aspectRatio="aspect-[16/10]"
                  compact
                />
              </div>
              <div className="flex-1 space-y-1.5 w-full">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#ea580c] shrink-0" />
                  <h4 className="text-xs sm:text-sm font-black text-[#0c2340] uppercase">
                    INTERNATIONAL COCURICULUM AWARDS 2021
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>Aug 2021</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                    <span>Sekolah Menengah Teknik Terengganu (TEKTRA / SMTT)</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>

          {/* 5. MALAYSIA YOUNG SCIENTIST */}
          <AnimatedItem delay={0.25}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-3.5 sm:p-4 flex flex-col sm:flex-row gap-4 items-center shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="w-full sm:w-44 shrink-0">
                <ImagePlaceholder
                  id="cert_young_scientist"
                  type="certificate"
                  aspectRatio="aspect-[16/10]"
                  compact
                />
              </div>
              <div className="flex-1 space-y-1.5 w-full">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#ea580c] shrink-0" />
                  <h4 className="text-xs sm:text-sm font-black text-[#0c2340] uppercase">
                    MALAYSIA YOUNG SCIENTIST CONFERENCE AND EXHIBITION 2021 (BRONZE AWARDS)
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>Apr 2021</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                    <span>Sekolah Menengah Teknik Terengganu (TEKTRA / SMTT) & Universiti Teknologi Malaysia (UTM)</span>
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
