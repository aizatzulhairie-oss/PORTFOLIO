import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioImages as defaultImages, PortfolioImageItem } from '../data/portfolioImages';

interface ImageContextType {
  images: Record<string, PortfolioImageItem>;
  setImageSrc: (id: string, src: string) => void;
  resetImages: () => void;
  activeUploadId: string | null;
  setActiveUploadId: (id: string | null) => void;
  showGuide: boolean;
  setShowGuide: (show: boolean) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

const STORAGE_KEY = 'aizat_portfolio_custom_images';

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, PortfolioImageItem>>(() => {
    // Check if user has uploaded live preview images in browser
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = { ...defaultImages };
        Object.keys(parsed).forEach((k) => {
          if (merged[k]) {
            merged[k] = { ...merged[k], src: parsed[k] };
          }
        });
        return merged;
      }
    } catch {
      // fallback
    }
    return defaultImages;
  });

  const [activeUploadId, setActiveUploadId] = useState<string | null>(null);
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const setImageSrc = (id: string, src: string) => {
    setImages((prev) => {
      const updated = {
        ...prev,
        [id]: {
          ...prev[id],
          src,
        },
      };
      try {
        const storeObj: Record<string, string> = {};
        Object.keys(updated).forEach((k) => {
          if (updated[k].src) storeObj[k] = updated[k].src;
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storeObj));
      } catch {
        // quota exceeded or private mode
      }
      return updated;
    });
  };

  const resetImages = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setImages(defaultImages);
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        setImageSrc,
        resetImages,
        activeUploadId,
        setActiveUploadId,
        showGuide,
        setShowGuide,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const usePortfolioImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('usePortfolioImages must be used within an ImageProvider');
  }
  return context;
};
