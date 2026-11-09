import React from 'react';
import { HeaderBanner } from '../components/HeaderBanner';
import { SectionRibbon } from '../components/SectionRibbon';
import { PageFooter } from '../components/PageFooter';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { AnimatedItem, AnimatedSection } from '../components/MotionWrappers';
import { Calendar, Users, Award, Shield } from 'lucide-react';

export const Section5Volunteering: React.FC = () => {
  return (
    <AnimatedSection id="section-volunteering" className="py-6 sm:py-8">
      {/* 1:1 PDF Sheet Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-7 md:p-9 max-w-5xl mx-auto relative overflow-hidden">
        
        {/* Header Banner */}
        <HeaderBanner title="VOLUNTEERING & CO-CURRICULAR ACTIVITIES" />

        {/* 5 Volunteering Cards */}
        <div className="space-y-4">
          
          {/* 1. FEST JOHOR */}
          <AnimatedItem delay={0.05}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="volunteering_photo_fest_johor"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2.5">
                  <SectionRibbon title="FEST JOHOR – TECHNICAL TEAM MEMBER" size="small" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="w-24 h-7">
                      <ImagePlaceholder id="logo_yayasan_bank_rakyat" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Jun 2024 (1 Month)</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-[#ea580c] rounded-full border border-amber-200 font-bold">
                      <Users className="w-3 h-3" />
                      <span>Technical Team Member</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Served as a Technical Team Member and volunteer at FEST Johor, working with TVET students from various vocational colleges.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Supported STEM activities and the development of industry-relevant technical skills.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Gained experience in technical support, knowledge sharing, and cross-team collaboration.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 2. HARI KOMUNITI 2026 */}
          <AnimatedItem delay={0.1}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="volunteering_photo_hari_komuniti"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2.5">
                  <SectionRibbon title="HARI KOMUNITI 2026 – VOLUNTEER STAFF" size="small" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="w-24 h-7">
                      <ImagePlaceholder id="logo_plus" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Jan 2026 (1 Month)</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-[#ea580c] rounded-full border border-amber-200 font-bold">
                      <Users className="w-3 h-3" />
                      <span>Volunteer Staff</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Participated in Hari Komuniti 2026 at Masjid Kahar, Pontian, Johor, representing PLUS Section 4.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Contributed to community engagement and social development activities.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>A meaningful experience in giving back to the community and strengthening teamwork with fellow volunteers.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 3. INTERNATIONAL EXCHANGE */}
          <AnimatedItem delay={0.15}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="volunteering_photo_intl_exchange"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2.5">
                  <SectionRibbon title="INTERNATIONAL EXCHANGE – FACILITATOR" size="small" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="w-20 h-7">
                      <ImagePlaceholder id="logo_utm" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Oct 2025 (1 Month)</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-[#ea580c] rounded-full border border-amber-200 font-bold">
                      <Users className="w-3 h-3" />
                      <span>Facilitator</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Served as a facilitator for an international exchange programme with students from Kaichi Mirai High School, Japan (20 October 2025).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Led discussions on SNS digitalization etiquette between Japan and Malaysia.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Bridged cultural and language differences through teamwork and mutual respect.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Gained broader perspectives on cross-cultural communication, digital awareness, and cultural intelligence in the era of Industry 4.0.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 4. UTM GAMES – RUGBY PLAYER */}
          <AnimatedItem delay={0.2}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="volunteering_photo_utm_games"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2.5">
                  <SectionRibbon title="UTM GAMES – RUGBY PLAYER" size="small" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="w-24 h-7">
                      <ImagePlaceholder id="logo_kolej_10" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Nov 2024 (1 Month)</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-[#ea580c] rounded-full border border-amber-200 font-bold">
                      <Award className="w-3 h-3" />
                      <span>Rugby Player</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Represented Kolej 10 in the UTM Games rugby competition among various colleges.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Strengthened teamwork, discipline, resilience, and leadership on and off the field.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Gained valuable experience in teamwork, time management, and sportsmanship.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </AnimatedItem>

          {/* 5. PERMATA UTM */}
          <AnimatedItem delay={0.25}>
            <div className="rounded-2xl border-2 border-[#0c2340]/20 bg-white p-4 shadow-xs hover:border-[#ea580c]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Photo Placeholder */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="w-full max-w-[200px]">
                    <ImagePlaceholder
                      id="volunteering_photo_permata"
                      aspectRatio="aspect-[4/3]"
                      fit="cover"
                      className="shadow-xs"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-2.5">
                  <SectionRibbon title="PERSATUAN MAHASISWA ANAK TERENGGANU – EXCO" size="small" />

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#0c2340] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="w-24 h-7">
                      <ImagePlaceholder id="logo_permata" type="logo" compact aspectRatio="aspect-[2.5/1]" />
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>2024 – 2025 (1 Year)</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-[#ea580c] rounded-full border border-amber-200 font-bold">
                      <Users className="w-3 h-3" />
                      <span>EXCO Bureau & Public Relation (PR)</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Served as an EXCO member for the Bureau and Public Relation (PR) at PERMATA UTM.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Managed club communications, event promotion, and stakeholder engagement.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ea580c] mt-1.5 shrink-0 rounded-xs" />
                      <span>Supported the planning and execution of student programmes that strengthen the Terengganu student community at UTM.</span>
                    </li>
                  </ul>
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
