import React, { useState, useEffect } from 'react';
import { usePortfolioImages } from '../context/ImageContext';
import { Award, Building2 } from 'lucide-react';

interface ImagePlaceholderProps {
  id: string;
  className?: string;
  type?: 'photo' | 'logo' | 'certificate' | 'project';
  customPlaceholderText?: string;
  aspectRatio?: string;
  fit?: 'cover' | 'contain';
  compact?: boolean;
}

// Single-source simple filename mapping
// All images live in ONE single folder: public/images/
const SIMPLE_NAMES: Record<string, string[]> = {
  // Page 1
  profile_photo: ['profile', 'profile_photo', 'profile/profile', 'aizat'],
  logo_utm: ['utm', 'logo_utm', 'logos/utm'],
  logo_kmkph: ['kmkph', 'logo_kmkph', 'logos/kmkph'],
  logo_smtt: ['smtt', 'tektra', 'logo_smtt', 'logos/smtt'],
  logo_powerbi: ['powerbi', 'logo_powerbi', 'logos/powerbi'],
  logo_quality_control: ['qc', 'quality_control', 'logos/qc'],
  logo_welding_inspection: ['welding_inspection', 'inspection', 'logos/welding_inspection'],
  logo_autocad: ['autocad', 'logo_autocad', 'logos/autocad'],
  logo_ndt: ['ndt', 'logo_ndt', 'logos/ndt'],

  // Page 2
  education_photo_utm: ['utm_student', 'utm_photo', 'education/utm'],
  education_photo_kmkph: ['kmkph_student', 'kmkph_photo', 'education/kmkph'],
  education_photo_smtt: ['smtt_student', 'smtt_photo', 'education/smtt'],
  cert_endowment_merdeka: ['cert_merdeka', 'endowment_merdeka', 'education/cert_merdeka'],
  cert_directors_award: ['cert_director', 'directors_award', 'education/cert_director'],
  cert_excellent_spm: ['cert_spm', 'spm_cert', 'education/cert_spm'],
  cert_intl_cocurriculum: ['cert_intl', 'intl_cert', 'education/cert_intl'],
  cert_young_scientist: ['cert_scientist', 'young_scientist', 'education/cert_scientist'],

  // Page 3
  logo_insulet: ['insulet', 'logo_insulet', 'logos/insulet'],
  internship_insulet_photo_1: ['insulet_1', 'internships/insulet_1'],
  internship_insulet_photo_2: ['insulet_2', 'internships/insulet_2'],
  internship_insulet_photo_3: ['insulet_3', 'internships/insulet_3'],
  logo_kolej_vokasional: ['kolej_vokasional', 'kv', 'logos/kolej_vokasional'],
  internship_welding_photo_1: ['welding_1', 'internships/welding_1'],
  internship_welding_photo_2: ['welding_2', 'internships/welding_2'],
  internship_welding_photo_3: ['welding_3', 'internships/welding_3'],

  // Page 4
  logo_solidworks: ['solidworks', 'logos/solidworks'],
  logo_powerbi_tools: ['powerbi_tools', 'powerbi', 'logos/powerbi'],
  logo_arena: ['arena', 'logos/arena'],
  logo_python: ['python', 'logos/python'],
  logo_spark: ['spark', 'logos/spark'],
  logo_dbt: ['dbt', 'logos/dbt'],
  logo_airflow: ['airflow', 'logos/airflow'],
  logo_excel: ['excel', 'logos/excel'],
  logo_html_css: ['html_css', 'logos/html_css'],
  project_thumb_porosity: ['porosity_thumb', 'projects/porosity_thumb'],
  project_thumb_gas_welding: ['gas_welding_thumb', 'projects/gas_welding_thumb'],
  project_thumb_data_pipeline: ['taxi_thumb', 'projects/taxi_thumb'],
  project_thumb_welding_dashboard: ['dashboard_thumb', 'projects/dashboard_thumb'],
  logo_cert_siemens: ['siemens', 'certifications/siemens'],
  logo_cert_mydigital: ['mydigital', 'certifications/mydigital'],
  logo_cert_google_pm: ['google_pm', 'certifications/google_pm'],
  logo_cert_insulet_arena: ['insulet_arena', 'certifications/insulet_arena'],
  logo_cert_google_data: ['google_data', 'certifications/google_data'],
  logo_cert_utm_cloud: ['utm_cloud', 'certifications/utm_cloud'],
  logo_cert_lt_welding: ['lt_welding', 'certifications/lt_welding'],
  logo_cert_cidb: ['cidb', 'certifications/cidb'],
  logo_cert_augmintech: ['augmintech', 'certifications/augmintech'],
  logo_cert_lt_heavy: ['lt_heavy', 'certifications/lt_heavy'],
  logo_cert_ms_data_model: ['ms_datamodel', 'certifications/ms_datamodel'],
  logo_cert_ms_etl: ['ms_etl', 'certifications/ms_etl'],
  logo_cert_ms_harnessing: ['ms_harnessing', 'certifications/ms_harnessing'],
  logo_cert_ms_excel: ['ms_excel', 'certifications/ms_excel'],
  logo_cert_board_infinity: ['board_infinity', 'certifications/board_infinity'],
  logo_cert_kennesaw: ['kennesaw', 'certifications/kennesaw'],
  logo_cert_rice: ['rice', 'certifications/rice'],

  // Page 5
  volunteering_photo_fest_johor: ['fest_johor', 'volunteering/fest_johor'],
  logo_yayasan_bank_rakyat: ['bank_rakyat', 'logos/bank_rakyat'],
  volunteering_photo_hari_komuniti: ['hari_komuniti', 'volunteering/hari_komuniti'],
  logo_plus: ['plus', 'logos/plus'],
  volunteering_photo_intl_exchange: ['intl_exchange', 'volunteering/intl_exchange'],
  volunteering_photo_utm_games: ['utm_games', 'volunteering/utm_games'],
  logo_kolej_10: ['kolej_10', 'logos/kolej_10'],
  volunteering_photo_permata: ['permata', 'volunteering/permata'],
  logo_permata: ['permata_logo', 'logos/permata_logo'],

  // Page 6 & 7
  project_photo_piping: ['piping', 'projects/piping'],
  project_photo_porosity_ml: ['porosity_ml', 'projects/porosity_ml'],
  project_photo_gas_welding: ['gas_welding', 'projects/gas_welding'],
  project_photo_six_sigma: ['six_sigma', 'projects/six_sigma'],
  project_photo_welding_jigs: ['welding_jigs', 'projects/welding_jigs'],
  project_photo_nyc_taxi: ['taxi_pipeline', 'projects/taxi_pipeline'],
  project_photo_welding_dashboard: ['welding_dashboard', 'projects/welding_dashboard'],
  project_photo_mirabrush: ['mirabrush', 'projects/mirabrush'],
  project_photo_edu_tektra: ['edu_tektra', 'projects/edu_tektra'],
};

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  id,
  className = '',
  type = 'photo',
  customPlaceholderText,
  aspectRatio,
  fit,
  compact = false,
}) => {
  const { images } = usePortfolioImages();

  const item = images[id];
  const placeholderType = item?.type || type;
  const placeholderText =
    customPlaceholderText ||
    item?.placeholderText ||
    (placeholderType === 'logo'
      ? 'INSERT LOGO HERE'
      : placeholderType === 'certificate'
      ? 'INSERT CERTIFICATE HERE'
      : placeholderType === 'project'
      ? 'INSERT PROJECT PHOTO HERE'
      : 'INSERT PHOTO HERE');

  const finalFit = fit || item?.fit || (placeholderType === 'logo' ? 'contain' : 'cover');

  // Build candidate paths: check both .png, .jpg, .jpeg, .webp in ONE single folder: /images/
  const candidateList: string[] = [];
  if (item?.src && item.src.trim() !== '') {
    candidateList.push(item.src);
  }

  const names = SIMPLE_NAMES[id] || [id];
  const extensions = ['png', 'jpg', 'jpeg', 'webp'];

  for (const name of names) {
    for (const ext of extensions) {
      const p = `/images/${name}.${ext}`;
      if (!candidateList.includes(p)) candidateList.push(p);
      const dotSlash = `./images/${name}.${ext}`;
      if (!candidateList.includes(dotSlash)) candidateList.push(dotSlash);
    }
  }

  const [pathIndex, setPathIndex] = useState(0);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  const currentPath = candidateList[pathIndex];

  const getIcon = () => {
    if (placeholderType === 'certificate') {
      return <Award className={`${compact ? 'w-5 h-5' : 'w-8 h-8'} text-[#0c2340]/60 mb-1`} />;
    }
    if (placeholderType === 'logo') {
      return <Building2 className={`${compact ? 'w-4 h-4' : 'w-6 h-6'} text-[#0c2340]/60 mb-1`} />;
    }
    return (
      <div className="relative mb-1 flex items-center justify-center">
        <div
          className={`border-2 border-[#0c2340]/60 rounded-md p-1 ${
            compact ? 'w-6 h-5' : 'w-10 h-8'
          } flex items-center justify-center relative overflow-hidden bg-white/70`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#0c2340]/70 absolute top-1 left-1.5" />
          <svg
            className="w-full h-full text-[#0c2340]/70 absolute -bottom-1"
            viewBox="0 0 24 16"
            fill="currentColor"
          >
            <path d="M0 16 L7 6 L12 12 L16 8 L24 16 Z" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border-2 border-[#0c2340]/25 bg-[#f4f7fb] flex flex-col items-center justify-center select-none ${
        aspectRatio || item?.aspectRatio || 'aspect-[4/3]'
      } ${className}`}
    >
      {loadedSrc ? (
        <img
          src={loadedSrc}
          alt={item?.label || id}
          className={`w-full h-full ${
            finalFit === 'contain' ? 'object-contain p-2' : 'object-cover'
          }`}
        />
      ) : (
        <>
          {currentPath && (
            <img
              key={currentPath}
              src={currentPath}
              alt=""
              className="hidden"
              onLoad={() => setLoadedSrc(currentPath)}
              onError={() => {
                if (pathIndex < candidateList.length - 1) {
                  setPathIndex((prev) => prev + 1);
                }
              }}
            />
          )}
          <div className="flex flex-col items-center justify-center p-2 text-center w-full h-full">
            {getIcon()}
            <span
              className={`font-black text-[#0c2340] tracking-tight leading-tight ${
                compact ? 'text-[8px]' : 'text-[10px] sm:text-[11px]'
              }`}
            >
              {placeholderText}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
