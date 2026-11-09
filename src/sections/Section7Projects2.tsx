import React from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import { SectionRibbon } from '../components/SectionRibbon';
import { PageFooter } from '../components/PageFooter';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { AnimatedItem, AnimatedSection } from '../components/MotionWrappers';
import { Calendar, Building, Users, Wrench } from 'lucide-react';

export const Section7Projects2: React.FC = () => {
  return (
    <AnimatedSection id="section-projects-2" className="py-6 sm:py-8">
      {/* 1:1 PDF Sheet Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-7 md:p-9 max-w-5xl mx-auto relative overflow-hidden">
        
        {/* Header Banner */}
        <HeaderBanner title="ENGINEERING PROJECTS" />

        {/* Subheader */}
        <div className="mb-4">
          <SectionRibbon title="PROJECT HIGHLIGHTS (2/2)" />
        </div>

        {/* 4 Project Cards */}
        <div className="space-y-4">
          
          {/* 1. END-TO-END MODERN DATA PIPELINE */}
          <AnimatedItem delay={0.05}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="project_photo_nyc_taxi"
                      type="project"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2">
                  <SectionRibbon title="END-TO-END MODERN DATA PIPELINE: NYC YELLOW TAXI ANALYTICS (Q1 2024)" size="project" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Q1 2024</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                      <span>UTM</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-50 text-[#ea580c] rounded-full border border-amber-200">
                      <Users className="w-3 h-3 text-[#ea580c]" />
                      <span>Contributors: Muhammad Hafiy</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Built an automated, production-grade ELT data pipeline processing over 9.5 million NYC yellow taxi records.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Ingested raw Parquet and CSV files into DuckDB and applied a 4-step data cleaning and validation funnel using dbt models.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Structured data into a high-performance star schema (fct_trips and dim_zones).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Automated the workflow with Apache Airflow with dbt data quality tests (zero-defect reporting).</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 2. WELDING QA/QC DASHBOARD */}
          <AnimatedItem delay={0.1}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="project_photo_welding_dashboard"
                      type="project"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2">
                  <SectionRibbon title="WELDING QA/QC DASHBOARD – POWER BI ANALYTICS" size="project" />

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
                      <span>Quality Control, Microsoft Power BI and +2 skills</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Developed an interactive Power BI dashboard to monitor and analyze welding defects in fabrication and pipeline projects.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Features: KPI cards (inspections, defects, defect rate %, repairs), defect distribution by type and process, trend analysis, welder performance table, and project drill-downs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Provided data-driven insights to reduce rework and improve quality control.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 3. MIRABRUSH PROJECT */}
          <AnimatedItem delay={0.15}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="project_photo_mirabrush"
                      type="project"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2">
                  <SectionRibbon title="MIRABRUSH PROJECT" size="project" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>May 2023 – Jun 2023</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                      <span>UTM</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 text-[#0c2340] rounded-full border border-blue-200">
                      <Wrench className="w-3 h-3 text-[#ea580c]" />
                      <span>Quality Management, Critical Thinking and +1 skill</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Developed MiraBrush, a 2-in-1 toothbrush with an integrated toothpaste dispenser for students and frequent travelers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Served as Product Designer and Quality Checker, applying the DMAIC methodology.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Designed the ergonomic structure, selected materials, and resolved a leakage issue in the internal tube mechanism.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Delivered a more practical, reliable and user-centered product design.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 4. EDU TEKTRA MOBILE APPS */}
          <AnimatedItem delay={0.2}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="project_photo_edu_tektra"
                      type="project"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2">
                  <SectionRibbon title="EDU TEKTRA MOBILE APPS" size="project" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Feb 2021 – Apr 2021</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Building className="w-3.5 h-3.5 text-[#0c2340]" />
                      <span>SMTT (TEKTRA)</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-50 text-[#ea580c] rounded-full border border-amber-200">
                      <Users className="w-3 h-3 text-[#ea580c]" />
                      <span>Contributors: Muhammad Nabil Hakem and Ahmad</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 text-[#0c2340] rounded-full border border-blue-200">
                      <Wrench className="w-3 h-3 text-[#ea580c]" />
                      <span>Quality Control and Figma (Software)</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Served as Developer Assistant and Designer for the Edu Tektra mobile app.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Developed a digital textbook hub for students and a room booking system for teachers (science labs, computer labs, workshops).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Contributed to front-end implementation and designed a user-friendly interface to ensure smooth navigation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Improved academic access and room scheduling efficiency within the school environment.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

        </div>

        {/* Footer with PAGE 2 / 2 badge */}
        <PageFooter pageNumber="PAGE 2 / 2" />
      </div>
    </AnimatedSection>
  );
};
