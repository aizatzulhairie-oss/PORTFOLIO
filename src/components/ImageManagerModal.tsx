import React, { useState } from 'react';
import { usePortfolioImages } from '../context/ImageContext';
import {
  X,
  Upload,
  BookOpen,
  Image as ImageIcon,
  CheckCircle2,
  Copy,
  RotateCcw,
  ExternalLink,
  Code2,
  GitBranch,
  Download,
} from 'lucide-react';

export const ImageManagerModal: React.FC = () => {
  const {
    images,
    setImageSrc,
    resetImages,
    activeUploadId,
    setActiveUploadId,
    showGuide,
    setShowGuide,
  } = usePortfolioImages();

  const [activeTab, setActiveTab] = useState<'upload' | 'guide' | 'code' | 'github'>('upload');
  const [selectedId, setSelectedId] = useState<string>(activeUploadId || 'profile_photo');
  const [urlInput, setUrlInput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Sync selectedId when activeUploadId opens
  React.useEffect(() => {
    if (activeUploadId) {
      setSelectedId(activeUploadId);
      setActiveTab('upload');
    }
  }, [activeUploadId]);

  const isOpen = showGuide || !!activeUploadId;

  if (!isOpen) return null;

  const currentItem = images[selectedId] || images['profile_photo'];

  const downloadUpdatedConfigFile = () => {
    const fileContent = `/**
 * Central Image Configuration for Aizat Zul Hairie - Engineering Portfolio
 * Generated from Image Manager
 */
export interface PortfolioImageItem {
  id: string;
  label: string;
  type: 'photo' | 'logo' | 'certificate' | 'project';
  placeholderText: string;
  recommendedPath: string;
  src?: string;
  aspectRatio?: string;
  fit?: 'cover' | 'contain';
  description?: string;
}

export const portfolioImages: Record<string, PortfolioImageItem> = ${JSON.stringify(
      images,
      null,
      2
    )};
`;

    const blob = new Blob([fileContent], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolioImages.ts';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && selectedId) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setImageSrc(selectedId, uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (urlInput.trim() && selectedId) {
      setImageSrc(selectedId, urlInput.trim());
      setUrlInput('');
    }
  };

  const handleRemoveImage = () => {
    if (selectedId) {
      setImageSrc(selectedId, '');
    }
  };

  const generateConfigSnippet = () => {
    return `// In src/data/portfolioImages.ts:\n${selectedId}: {\n  ...portfolioImages.${selectedId},\n  src: "${currentItem?.src || currentItem?.recommendedPath || ''}",\n}`;
  };

  const copyConfig = () => {
    navigator.clipboard.writeText(generateConfigSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border-2 border-[#0c2340]">
        
        {/* Modal Header */}
        <div className="bg-[#0c2340] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#ea580c]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#ea580c] rounded-lg">
              <ImageIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg tracking-wide uppercase">
                Photo & Logo Management
              </h3>
              <p className="text-xs text-slate-300">
                Easily preview, upload, and configure images for your engineering portfolio
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setShowGuide(false);
              setActiveUploadId(null);
            }}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'upload'
                ? 'border-[#ea580c] text-[#0c2340] bg-white rounded-t-lg shadow-sm'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Upload className="w-4 h-4 text-[#ea580c]" />
            Live Image Tester
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'guide'
                ? 'border-[#ea580c] text-[#0c2340] bg-white rounded-t-lg shadow-sm'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#ea580c]" />
            Upload Guide (Beginner Instructions)
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'code'
                ? 'border-[#ea580c] text-[#0c2340] bg-white rounded-t-lg shadow-sm'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Code2 className="w-4 h-4 text-[#ea580c]" />
            portfolioImages.ts Helper
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'github'
                ? 'border-[#ea580c] text-[#0c2340] bg-white rounded-t-lg shadow-sm'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <GitBranch className="w-4 h-4 text-[#ea580c]" />
            GitHub & Saving Files
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'upload' && (
            <div className="space-y-6">
              {/* Select target placeholder */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0c2340] mb-1.5">
                  Choose Placeholder to Edit:
                </label>
                <select
                  value={selectedId}
                  onChange={(e) => setSelectedId(e.target.value)}
                  className="w-full px-3 py-2 text-sm border-2 border-slate-300 rounded-lg focus:border-[#ea580c] focus:outline-none bg-white font-medium"
                >
                  {Object.values(images).map((img) => (
                    <option key={img.id} value={img.id}>
                      [{img.type.toUpperCase()}] {img.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preview card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-[#f4f7fb] p-4 rounded-xl border border-slate-200">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[11px] font-bold text-slate-500 uppercase mb-2">
                    Current Preview
                  </span>
                  <div className="w-48 max-w-full aspect-[4/3] rounded-lg border-2 border-[#0c2340]/30 bg-white overflow-hidden flex items-center justify-center relative shadow-sm">
                    {currentItem?.src ? (
                      <img
                        src={currentItem.src}
                        alt={currentItem.label}
                        className={`w-full h-full ${
                          currentItem.fit === 'contain' ? 'object-contain p-2' : 'object-cover'
                        }`}
                      />
                    ) : (
                      <div className="text-center p-3">
                        <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-1" />
                        <span className="text-[10px] font-bold text-[#0c2340]">
                          {currentItem?.placeholderText || 'EMPTY PLACEHOLDER'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-extrabold text-[#0c2340] text-sm leading-tight">
                      {currentItem?.label}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 font-mono">
                      Target File: {currentItem?.recommendedPath}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      {currentItem?.description || 'No description provided.'}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 space-y-2">
                    <label className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-lg cursor-pointer shadow transition-all">
                      <Upload className="w-4 h-4" />
                      Upload File From Computer (Live Test)
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </label>

                    {currentItem?.src && (
                      <button
                        onClick={handleRemoveImage}
                        className="w-full px-4 py-2 border border-rose-300 text-rose-600 hover:bg-rose-50 text-xs font-bold rounded-lg transition-all"
                      >
                        Reset to Empty Placeholder
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Or paste image URL / public path */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0c2340]">
                  Or Enter Image URL / Public File Path:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. /images/profile/my_photo.jpg or https://..."
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-[#ea580c] focus:outline-none font-mono"
                  />
                  <button
                    onClick={handleApplyUrl}
                    className="px-4 py-2 bg-[#0c2340] hover:bg-[#1a365d] text-white text-xs font-bold rounded-lg transition-all"
                  >
                    Apply Path
                  </button>
                </div>
              </div>

              {/* Reset all */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={resetImages}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-rose-600 font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset all placeholders to empty
                </button>
                <span className="text-[11px] text-slate-400">
                  Total Placeholders: {Object.keys(images).length}
                </span>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-5 text-sm text-slate-700">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs font-medium">
                <strong>Beginner-Friendly Image Upload System:</strong> You can permanently place images
                into the project folders, or update <code>src/data/portfolioImages.ts</code>. Here is
                the step-by-step tutorial:
              </div>

              <div className="space-y-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-2">
                  <h4 className="font-bold text-[#0c2340] flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#ea580c] text-white text-xs flex items-center justify-center font-bold">
                      1
                    </span>
                    Folder Organization
                  </h4>
                  <p className="text-xs text-slate-600">
                    Place your image files into the designated subfolders inside <code>public/images/</code>:
                  </p>
                  <ul className="text-xs space-y-1 list-disc list-inside font-mono bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <li>public/images/profile/ (your headshot / portrait)</li>
                    <li>public/images/education/ (campus photos, certificates)</li>
                    <li>public/images/internships/ (Insulet & Vocational College photos)</li>
                    <li>public/images/logos/ (UTM, KMKPH, SMTT, Insulet, PLUS, etc.)</li>
                    <li>public/images/certifications/ (Siemens, CIDB, Google, Microsoft, etc.)</li>
                    <li>public/images/volunteering/ (FEST Johor, Hari Komuniti, Rugby, etc.)</li>
                    <li>public/images/projects/ (Piping CAD, Porosity ML, Taxi pipeline, etc.)</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-2">
                  <h4 className="font-bold text-[#0c2340] flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#ea580c] text-white text-xs flex items-center justify-center font-bold">
                      2
                    </span>
                    Configuring <code>src/data/portfolioImages.ts</code>
                  </h4>
                  <p className="text-xs text-slate-600">
                    Open <code>src/data/portfolioImages.ts</code> in your editor. Find the corresponding ID and change the <code>src</code> property to point to your image file.
                  </p>
                  <pre className="text-[11px] font-mono bg-slate-900 text-emerald-400 p-3 rounded-lg overflow-x-auto">
{`profile_photo: {
  id: 'profile_photo',
  label: 'Personal Profile Photo',
  src: '/images/profile/my_photo.jpg', // <-- Insert your file path here!
  fit: 'cover',
}`}
                  </pre>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-2">
                  <h4 className="font-bold text-[#0c2340] flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#ea580c] text-white text-xs flex items-center justify-center font-bold">
                      3
                    </span>
                    Resizing & Positioning (No Layout Distortions)
                  </h4>
                  <p className="text-xs text-slate-600">
                    For logos, the portfolio automatically applies <code>fit: 'contain'</code> so logos are never cropped or stretched. For photographs, <code>fit: 'cover'</code> ensures the photos fill their designated frame gracefully.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-2">
                  <h4 className="font-bold text-[#0c2340] flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#ea580c] text-white text-xs flex items-center justify-center font-bold">
                      4
                    </span>
                    Mobile Preview & Publishing
                  </h4>
                  <p className="text-xs text-slate-600">
                    Use your browser's inspect device toolbar (or open this app on your smartphone). All multi-column cards and diagonal headers fluidly stack on smaller screens while preserving exact proportions on desktop!
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Here is the code block for the currently selected item (<code>{selectedId}</code>):
              </p>
              <div className="relative">
                <pre className="text-xs font-mono bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto">
                  {generateConfigSnippet()}
                </pre>
                <button
                  onClick={copyConfig}
                  className="absolute top-3 right-3 px-3 py-1 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-md flex items-center gap-1 shadow"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Code
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-500">
                Whenever you save new image files, update their entries in <code>src/data/portfolioImages.ts</code>.
              </p>
            </div>
          )}

          {activeTab === 'github' && (
            <div className="space-y-5 text-sm text-slate-700">
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
                <h4 className="text-xs font-bold text-[#0c2340] uppercase flex items-center gap-1.5">
                  <GitBranch className="w-4 h-4 text-[#ea580c]" />
                  Will Uploaded Images Be Saved When I Push to GitHub?
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Important:</strong> When you test-upload an image in your web browser, it is stored temporarily in your local browser memory so you can immediately preview it. 
                  However, <strong>GitHub only saves actual physical files</strong> located in your project's folders!
                </p>
              </div>

              {/* 3 Steps for GitHub */}
              <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-3">
                <h4 className="font-extrabold text-[#0c2340] text-xs uppercase tracking-wide">
                  To permanently save your images to GitHub (3 Easy Steps):
                </h4>

                <div className="space-y-3 text-xs">
                  <div className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-[#ea580c] text-white text-[11px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <span className="font-bold text-[#0c2340]">Put your image files in <code>public/images/</code></span>
                      <p className="text-slate-600 mt-0.5">
                        Copy your photo or logo files into their respective subfolders (e.g. <code>public/images/profile/my_photo.jpg</code>).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-[#ea580c] text-white text-[11px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <span className="font-bold text-[#0c2340]">Update <code>src/data/portfolioImages.ts</code></span>
                      <p className="text-slate-600 mt-0.5">
                        Point the <code>src</code> path to your file (or click the button below to download the updated config file automatically).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-[#ea580c] text-white text-[11px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <span className="font-bold text-[#0c2340]">Commit & Push to GitHub</span>
                      <p className="text-slate-600 mt-0.5">
                        Run these terminal commands in your project root:
                      </p>
                      <pre className="mt-1.5 p-2.5 bg-slate-900 text-emerald-400 font-mono text-[11px] rounded-lg">
git add public/images/ src/data/portfolioImages.ts&#10;git commit -m &quot;Add portfolio photos and images&quot;&#10;git push
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-[#0c2340] uppercase">
                  1-Click Helper: Download Current Configuration File
                </h4>
                <p className="text-xs text-slate-600">
                  If you have configured paths or tested images in the browser, you can download the generated <code>portfolioImages.ts</code> file and replace the one in your project:
                </p>
                <button
                  onClick={downloadUpdatedConfigFile}
                  className="w-full sm:w-auto px-4 py-2 bg-[#0c2340] hover:bg-[#1a365d] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 shadow transition-all"
                >
                  <Download className="w-4 h-4 text-[#ea580c]" />
                  Download Updated portfolioImages.ts
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Aizat Zul Hairie Bin Wahi • 1:1 Engineering Portfolio
          </span>
          <button
            onClick={() => {
              setShowGuide(false);
              setActiveUploadId(null);
            }}
            className="px-4 py-2 bg-[#0c2340] hover:bg-[#1a365d] text-white text-xs font-extrabold uppercase tracking-wider rounded-lg transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
