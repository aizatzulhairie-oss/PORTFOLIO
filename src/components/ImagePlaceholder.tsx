import React, { useState } from 'react';
import { usePortfolioImages } from '../context/ImageContext';
import { autoImageNames } from '../data/autoImagePaths';
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

const EXTENSIONS = ['jpg', 'png', 'jpeg', 'webp', 'svg'];

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

  // Compute candidate paths automatically
  const candidates: string[] = [];
  if (item?.src && item.src.trim() !== '') {
    candidates.push(item.src);
  }

  const autoConfig = autoImageNames[id];
  if (autoConfig) {
    for (const name of autoConfig.names) {
      for (const ext of EXTENSIONS) {
        candidates.push(`/images/${autoConfig.folder}/${name}.${ext}`);
      }
    }
  }

  // Also add direct ID candidates as fallback
  for (const ext of EXTENSIONS) {
    const folder =
      placeholderType === 'logo'
        ? 'logos'
        : placeholderType === 'certificate'
        ? 'education'
        : placeholderType === 'project'
        ? 'projects'
        : 'profile';
    const fallbackPath = `/images/${folder}/${id}.${ext}`;
    if (!candidates.includes(fallbackPath)) {
      candidates.push(fallbackPath);
    }
  }

  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [allFailed, setAllFailed] = useState<boolean>(candidates.length === 0);

  const handleImageError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const currentPath = candidates[candidateIndex];

  const getIcon = () => {
    if (placeholderType === 'certificate') {
      return <Award className={`${compact ? 'w-5 h-5' : 'w-8 h-8'} text-[#0c2340]/60 mb-1`} />;
    }
    if (placeholderType === 'logo') {
      return <Building2 className={`${compact ? 'w-4 h-4' : 'w-6 h-6'} text-[#0c2340]/60 mb-1`} />;
    }
    return (
      <div className="relative mb-1 flex items-center justify-center">
        {/* Exact PDF-style photo icon */}
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
      {/* Hidden/Active Image element trying automatic candidate paths */}
      {!allFailed && currentPath && (
        <img
          key={currentPath}
          src={currentPath}
          alt={item?.label || id}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-full ${
            finalFit === 'contain' ? 'object-contain p-2' : 'object-cover'
          } ${isLoaded ? 'block' : 'hidden'}`}
          loading="lazy"
        />
      )}

      {/* Render placeholder whenever no image has successfully loaded */}
      {(!isLoaded || allFailed) && (
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
      )}
    </div>
  );
};
