import React from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import { SectionRibbon } from '../components/SectionRibbon';
import { PageFooter } from '../components/PageFooter';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { AnimatedItem, AnimatedSection } from '../components/MotionWrappers';
import {
  ShieldCheck,
  BarChart3,
  Code,
  Cpu,
  Flame,
  Monitor,
  CheckSquare2,
  Calendar,
  ExternalLink,
} from 'lucide-react';

export const Section4Skills: React.FC = () => {
  return (
    <AnimatedSection id="section-skills" className="py-6 sm:py-8">
      {/* 1:1 PDF Sheet Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-7 md:p-9 max-w-5xl mx-auto relative overflow-hidden">
        
        {/* Header Banner */}
        <HeaderBanner title="SKILLS & CERTIFICATIONS" />

        {/* TOP SPLIT: Core Skills (Left) & Tools/Projects (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          
          {/* LEFT: Core Skills Overview */}
          <div className="md:col-span-5 space-y-3">
            <SectionRibbon title="CORE SKILLS OVERVIEW" />

            <div className="space-y-2.5">
              {/* 1. Quality & PLM */}
              <AnimatedItem delay={0.05}>
                <div className="p-3 rounded-xl border border-[#0c2340]/20 bg-white flex gap-3 items-start shadow-xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0c2340] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0c2340] leading-tight">
                      Quality & PLM
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                      NCMR investigation (15+ cases), root cause analysis (5 Why, Fishbone, DMAIC), process mapping, PFMEA / DFMEA, Arena PLM.
                    </p>
                  </div>
                </div>
              </AnimatedItem>

              {/* 2. Data Analytics */}
              <AnimatedItem delay={0.1}>
                <div className="p-3 rounded-xl border border-[#0c2340]/20 bg-white flex gap-3 items-start shadow-xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0c2340] shrink-0 mt-0.5">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0c2340] leading-tight">
                      Data Analytics
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                      Data analysis, visualization and reporting using Power BI, advanced Excel (formulas, Pivot, analysis), and data-driven decision making.
                    </p>
                  </div>
                </div>
              </AnimatedItem>

              {/* 3. Data Engineering & Coding */}
              <AnimatedItem delay={0.15}>
                <div className="p-3 rounded-xl border border-[#0c2340]/20 bg-white flex gap-3 items-start shadow-xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0c2340] shrink-0 mt-0.5">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0c2340] leading-tight">
                      Data Engineering & Coding
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                      Building ETL pipelines, data transformation and automation using Apache Spark, dbt, GitHub Codespaces, HTML and CSS.
                    </p>
                  </div>
                </div>
              </AnimatedItem>

              {/* 4. Machine Learning */}
              <AnimatedItem delay={0.2}>
                <div className="p-3 rounded-xl border border-[#0c2340]/20 bg-white flex gap-3 items-start shadow-xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0c2340] shrink-0 mt-0.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0c2340] leading-tight">
                      Machine Learning
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                      Developed a welding defect (porosity) detection model using Google's machine learning platform (image classification).
                    </p>
                  </div>
                </div>
              </AnimatedItem>

              {/* 5. Manufacturing & CAD */}
              <AnimatedItem delay={0.25}>
                <div className="p-3 rounded-xl border border-[#0c2340]/20 bg-white flex gap-3 items-start shadow-xs">
                  <div className="p-2 rounded-lg bg-amber-50 text-[#ea580c] shrink-0 mt-0.5">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0c2340] leading-tight">
                      Manufacturing & CAD
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                      Certified 3G SMAW welder (CIDB), welding process and inspection, NDT (PT), and thermal analysis using SOLIDWORKS Simulation.
                    </p>
                  </div>
                </div>
              </AnimatedItem>

              {/* 6. Office Productivity */}
              <AnimatedItem delay={0.3}>
                <div className="p-3 rounded-xl border border-[#0c2340]/20 bg-white flex gap-3 items-start shadow-xs">
                  <div className="p-2 rounded-lg bg-slate-100 text-[#0c2340] shrink-0 mt-0.5">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0c2340] leading-tight">
                      Office Productivity
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                      Proficient in Microsoft Office Suite (Word, Excel, PowerPoint).
                    </p>
                  </div>
                </div>
              </AnimatedItem>

            </div>
          </div>

          {/* RIGHT: Tools & Software (Grid 3x3) + Selected Engineering Projects */}
          <div className="md:col-span-7 space-y-5">
            
            {/* Technical Tools & Software (3x3 Grid) */}
            <div>
              <SectionRibbon title="TECHNICAL TOOLS & SOFTWARE" />
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                
                {/* 1. SOLIDWORKS */}
                <div className="p-2 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-1 shadow-xs min-h-[78px]">
                  <div className="w-8 h-8">
                    <ImagePlaceholder id="logo_solidworks" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <span className="text-[10px] font-black text-[#0c2340] leading-none">SOLIDWORKS</span>
                  <span className="text-[8px] text-slate-500 font-medium leading-none">(CAD & Simulation)</span>
                </div>

                {/* 2. Power BI */}
                <div className="p-2 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-1 shadow-xs min-h-[78px]">
                  <div className="w-8 h-8">
                    <ImagePlaceholder id="logo_powerbi_tools" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <span className="text-[10px] font-black text-[#0c2340] leading-none">Power BI</span>
                  <span className="text-[8px] text-slate-500 font-medium leading-none">(Data Visualization)</span>
                </div>

                {/* 3. Arena */}
                <div className="p-2 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-1 shadow-xs min-h-[78px]">
                  <div className="w-8 h-8">
                    <ImagePlaceholder id="logo_arena" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <span className="text-[10px] font-black text-[#0c2340] leading-none">Arena</span>
                  <span className="text-[8px] text-slate-500 font-medium leading-none">(Arena PLM)</span>
                  <span className="text-[8px] text-slate-400 font-medium leading-none">(NCMR / Quality)</span>
                </div>

                {/* 4. Python */}
                <div className="p-2 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-1 shadow-xs min-h-[78px]">
                  <div className="w-8 h-8">
                    <ImagePlaceholder id="logo_python" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <span className="text-[10px] font-black text-[#0c2340] leading-none">Python</span>
                  <span className="text-[8px] text-slate-500 font-medium leading-none">(Data & ML)</span>
                </div>

                {/* 5. Apache Spark */}
                <div className="p-2 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-1 shadow-xs min-h-[78px]">
                  <div className="w-8 h-8">
                    <ImagePlaceholder id="logo_spark" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <span className="text-[10px] font-black text-[#0c2340] leading-none">Apache Spark</span>
                  <span className="text-[8px] text-slate-500 font-medium leading-none">(Data Engineering)</span>
                </div>

                {/* 6. dbt */}
                <div className="p-2 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-1 shadow-xs min-h-[78px]">
                  <div className="w-8 h-8">
                    <ImagePlaceholder id="logo_dbt" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <span className="text-[10px] font-black text-[#0c2340] leading-none">dbt</span>
                  <span className="text-[8px] text-slate-500 font-medium leading-none">(Data Transformation)</span>
                </div>

                {/* 7. Apache Airflow */}
                <div className="p-2 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-1 shadow-xs min-h-[78px]">
                  <div className="w-8 h-8">
                    <ImagePlaceholder id="logo_airflow" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <span className="text-[10px] font-black text-[#0c2340] leading-none">Apache Airflow</span>
                  <span className="text-[8px] text-slate-500 font-medium leading-none">(Workflow Automation)</span>
                </div>

                {/* 8. Microsoft Excel */}
                <div className="p-2 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-1 shadow-xs min-h-[78px]">
                  <div className="w-8 h-8">
                    <ImagePlaceholder id="logo_excel" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <span className="text-[10px] font-black text-[#0c2340] leading-none">Microsoft Excel</span>
                  <span className="text-[8px] text-slate-500 font-medium leading-none">(Data Analysis)</span>
                </div>

                {/* 9. HTML / CSS */}
                <div className="p-2 rounded-xl border border-[#0c2340]/20 bg-white text-center flex flex-col items-center justify-center space-y-1 shadow-xs min-h-[78px]">
                  <div className="w-8 h-8">
                    <ImagePlaceholder id="logo_html_css" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <span className="text-[10px] font-black text-[#0c2340] leading-none">HTML / CSS</span>
                  <span className="text-[8px] text-slate-500 font-medium leading-none">(HTML) (CSS)</span>
                </div>

              </div>
            </div>

            {/* Selected Engineering Projects (4 Cards) */}
            <div>
              <SectionRibbon title="SELECTED ENGINEERING PROJECTS" />
              <div className="space-y-2 pt-1">
                
                {/* 1. ML Porosity */}
                <div className="rounded-xl border border-[#0c2340]/20 bg-white p-2.5 flex gap-3 items-center shadow-xs">
                  <div className="w-24 sm:w-28 shrink-0">
                    <ImagePlaceholder id="project_thumb_porosity" type="project" compact aspectRatio="aspect-[16/10]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">
                      ML-Based Welding Porosity Detector
                    </h5>
                    <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">
                      Developed an image classification model to detect welding porosity and automate visual inspection.
                    </p>
                  </div>
                </div>

                {/* 2. Gas Welding */}
                <div className="rounded-xl border border-[#0c2340]/20 bg-white p-2.5 flex gap-3 items-center shadow-xs">
                  <div className="w-24 sm:w-28 shrink-0">
                    <ImagePlaceholder id="project_thumb_gas_welding" type="project" compact aspectRatio="aspect-[16/10]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">
                      Gas Welding Lab - Material & Thermal Analysis
                    </h5>
                    <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">
                      Analyzed material suitability and heat distribution for gas welding using SOLIDWORKS Simulation.
                    </p>
                  </div>
                </div>

                {/* 3. NYC Taxi */}
                <div className="rounded-xl border border-[#0c2340]/20 bg-white p-2.5 flex gap-3 items-center shadow-xs">
                  <div className="w-24 sm:w-28 shrink-0">
                    <ImagePlaceholder id="project_thumb_data_pipeline" type="project" compact aspectRatio="aspect-[16/10]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">
                      End-to-End Data Pipeline: NYC Yellow Taxi Analytics (Q1 2024)
                    </h5>
                    <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">
                      Built an automated ELT pipeline (DuckDB, dbt, Airflow) processing 9.5M+ taxi records with data quality tests.
                    </p>
                  </div>
                </div>

                {/* 4. Welding Dashboard */}
                <div className="rounded-xl border border-[#0c2340]/20 bg-white p-2.5 flex gap-3 items-center shadow-xs">
                  <div className="w-24 sm:w-28 shrink-0">
                    <ImagePlaceholder id="project_thumb_welding_dashboard" type="project" compact aspectRatio="aspect-[16/10]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">
                      Welding QA/QC Dashboard - Power BI
                    </h5>
                    <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">
                      Developed an interactive dashboard to monitor welding defects, trends and welder performance for QA/QC.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: CERTIFICATIONS & PROFESSIONAL CREDENTIALS */}
        <div className="space-y-4">
          <SectionRibbon title="CERTIFICATIONS & PROFESSIONAL CREDENTIALS" />

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            
            {/* COLUMN 1 */}
            <div className="space-y-2.5">
              
              {/* 1. Siemens */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_siemens" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Basics of Robotics</h5>
                    <p className="text-[10px] text-slate-600">Siemens</p>
                    <p className="text-[9px] text-slate-400">Issued: Oct 2026</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 2. MyDIGITAL */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_mydigital" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Understanding Digital Transformation</h5>
                    <p className="text-[10px] text-slate-600">MyDigital Corporation</p>
                    <p className="text-[9px] text-slate-400">Issued: Oct 2026 | ID: 6KKPYC07AG75</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 3. Google PM */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_google_pm" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Google Project Management Professional Certificate (v.3)</h5>
                    <p className="text-[10px] text-slate-600">Google</p>
                    <p className="text-[9px] text-slate-400">Issued: Aug 2026</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 4. Insulet Arena */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_insulet_arena" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Arena Basic User/Approver Training Module</h5>
                    <p className="text-[10px] text-slate-600">Insulet Corporation</p>
                    <p className="text-[9px] text-slate-400">Issued: Jul 2026 | ID: 543854</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 5. Google Data Analytics */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_google_data" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Google Data Analytics Professional Certificate (v.3)</h5>
                    <p className="text-[10px] text-slate-600">Google</p>
                    <p className="text-[9px] text-slate-400">Issued: Jun 2026 | Skills: Data Analytics, PL/SQL, +4</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 6. UTM Cloud */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_utm_cloud" type="logo" compact aspectRatio="aspect-square" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Upskilling Program: Cloud Computing Essentials</h5>
                    <p className="text-[10px] text-slate-600">Universiti Teknologi Malaysia</p>
                    <p className="text-[9px] text-slate-400">Issued: Feb 2026 | Skills: Microsoft Azure, Cloud Computing</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 7. L&T EduTech Welding */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_lt_welding" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Welding Processes in Heavy Manufacturing & Quality Controls</h5>
                    <p className="text-[10px] text-slate-600">L&T EduTech</p>
                    <p className="text-[9px] text-slate-400">Issued: May 2025 | ID: 9060M8B7VQL1 | Skills: NDT</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 8. CIDB 3G Welder */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_cidb" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">SMAW - CS PLATE - 3G WELDER (AWS D1.1:2015)</h5>
                    <p className="text-[10px] text-slate-600">CIDB Technologies Sdn Bhd</p>
                    <p className="text-[9px] text-slate-400">Issued: Aug 2025 | Expires: Aug 2028 | ID: BE/MY/TR/25/WAB3/1663959 | Skills: NDT</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

            </div>

            {/* COLUMN 2 */}
            <div className="space-y-2.5">
              
              {/* 9. Augmintech */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_augmintech" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Non-Destructive Testing II Full Course | NDT Course</h5>
                    <p className="text-[10px] text-slate-600">Augmintech Education Pvt. Ltd.</p>
                    <p className="text-[9px] text-slate-400">Issued: Sep 2025 | ID: UC-bf61f6f8-7f37-4efd-943a-648cc84ad4f4</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 10. L&T Heavy Manufacturing */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_lt_heavy" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Heavy Manufacturing</h5>
                    <p className="text-[10px] text-slate-600">L&T EduTech</p>
                    <p className="text-[9px] text-slate-400">Issued: May 2025 | ID: GTF4SASHZ74S | Skills: Piping and Instrumentation Drawing (P&ID)</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 11. Microsoft Data Modeling */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_ms_data_model" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Data Modeling in Power BI</h5>
                    <p className="text-[10px] text-slate-600">Microsoft</p>
                    <p className="text-[9px] text-slate-400">Issued: May 2025 | ID: P2JSGZ4KZ0C5</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 12. Microsoft ETL */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_ms_etl" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Extract, Transform and Load Data in Power BI</h5>
                    <p className="text-[10px] text-slate-600">Microsoft</p>
                    <p className="text-[9px] text-slate-400">Issued: May 2025 | ID: L4CRALU1W21J</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 13. Microsoft Harnessing */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_ms_harnessing" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Harnessing the Power of Data with Power BI</h5>
                    <p className="text-[10px] text-slate-600">Microsoft</p>
                    <p className="text-[9px] text-slate-400">Issued: May 2025 | ID: 63J2JH6D3PJL</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 14. Microsoft Excel Data */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_ms_excel" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Preparing Data for Analysis with Microsoft Excel</h5>
                    <p className="text-[10px] text-slate-600">Microsoft</p>
                    <p className="text-[9px] text-slate-400">Issued: May 2025 | ID: P7UNGMSROYPM</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 15. Board Infinity */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_board_infinity" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Quality Improvement and Management</h5>
                    <p className="text-[10px] text-slate-600">Board Infinity</p>
                    <p className="text-[9px] text-slate-400">Issued: May 2025 | ID: 66591M1JC5OF | Skills: Quality Control, Quality Assurance</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 16. Kennesaw State University */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_kennesaw" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Six Sigma Yellow Belt Specialization</h5>
                    <p className="text-[10px] text-slate-600">Kennesaw State University</p>
                    <p className="text-[9px] text-slate-400">Issued: May 2025 | ID: UJN49202WT90 | Skills: Quality Control, Quality Assurance</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

              {/* 17. Rice University */}
              <div className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-8 shrink-0">
                    <ImagePlaceholder id="logo_cert_rice" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0c2340] leading-tight">Engineering Project Management Specialization</h5>
                    <p className="text-[10px] text-slate-600">Rice University</p>
                    <p className="text-[9px] text-slate-400">Issued: May 2025 | ID: JUEM22V906AW | Skills: Engineering Management, Quality Control, +1</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center shrink-0 text-[#0c2340]">
                  <CheckSquare2 className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Footer */}
        <PageFooter />
      </div>
    </AnimatedSection>
  );
};
