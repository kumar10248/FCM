'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaLayerGroup, FaChevronRight, FaHome, FaClipboardCheck, FaBookOpen, FaGraduationCap,
  FaCube, FaRocket, FaStar, FaShieldAlt, FaAtom, FaSearch, FaBullseye } from 'react-icons/fa';
import { PracticeMode } from '../types';
import { hasQuestionsForMode } from '../lib/questions';

export default function PracticeSelectionPage() {
  const router = useRouter();
  const [selectedMode, setSelectedMode] = useState<PracticeMode | null>(null);
  const [activeTab, setActiveTab] = useState<'unit1' | 'unit2' | 'unit3'>('unit1');

  const handleStart = () => {
    if (selectedMode) {
      router.push(`/practice/${selectedMode}`);
    }
  };

  // Function to get button colors based on selected mode
  const getButtonColors = () => {
    if (!selectedMode) {
      return 'bg-gray-700 cursor-not-allowed opacity-50';
    }

    // UNIT-1 modes (amber/yellow theme)
    if (['module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'module7', 'unit1', 'unit1_assignment', 'unit1_passage', 'unit1_demo','unit1_all'].includes(selectedMode)) {
      return 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black shadow-lg transform hover:scale-105';
    }

    // UNIT-2 modes (blue theme)
    if (['unit2', 'unit2_assignment', 'unit2_passage', 'unit2_demo', 'unit2_all',
         'unit2_module1', 'unit2_module2', 'unit2_module3', 'unit2_module4', 
         'unit2_module5', 'unit2_module6', 'unit2_module7'].includes(selectedMode)) {
      return 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg transform hover:scale-105';
    }

    // UNIT-3 modes (green theme)
    if (['unit3', 'unit3_assignment', 'unit3_passage', 'unit3_demo','unit3_all',
         'unit3_module1', 'unit3_module2', 'unit3_module3', 'unit3_module4',
         'unit3_module5', 'unit3_module6', 'unit3_module7'].includes(selectedMode)) {
      return 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg transform hover:scale-105';
    }

    // Global practice modes
    switch (selectedMode) {
      case 'assignment':
        return 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg transform hover:scale-105';
      case 'passage':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg transform hover:scale-105';
      case 'demo-exam':
        return 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg transform hover:scale-105';
      case 'all':
        return 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black shadow-lg transform hover:scale-105';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg transform hover:scale-105';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <header className="bg-gradient-to-r from-black via-gray-900 to-black py-8 border-b border-amber-500/20 shadow-2xl relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-3 rounded-xl shadow-lg animate-pulse">
                <FaGraduationCap className="text-2xl text-black" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  FCWMC Exam Practice Center
                </span>
              </h1>
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-3 rounded-xl shadow-lg animate-pulse">
                <FaRocket className="text-2xl text-black" />
              </div>
            </div>
            <p className="text-center text-gray-400 mt-2 text-lg">Choose your practice mode and start your learning journey</p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <FaStar className="text-yellow-400 animate-pulse" />
              <span className="text-gray-300 text-sm">Practice makes perfect</span>
              <FaStar className="text-yellow-400 animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex-grow max-w-7xl relative z-10">
        <div className="w-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-4 md:p-8 shadow-2xl backdrop-blur-xl border border-gray-700/50">
          
          {/* Search and Filter Section */}
          <div className="mb-8 bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center gap-3 flex-1">
                <FaSearch className="text-amber-400 text-xl" />
                <div>
                  <h3 className="text-lg font-bold text-amber-300">Quick Navigation</h3>
                  <p className="text-gray-400 text-sm">Select a practice mode to begin your journey</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-lg border border-amber-500/30">
                <FaBullseye className="text-amber-400" />
                <span className="text-amber-300 font-medium">
                  {selectedMode ? `Selected: ${selectedMode.replace('_', ' ').toUpperCase()}` : 'No mode selected'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Mobile Tab Navigation */}
          <div className="lg:hidden mb-8">
            <div className="flex bg-gray-800/70 rounded-xl p-2 backdrop-blur-md border border-gray-700/50">
              <button
                onClick={() => setActiveTab('unit1')}
                className={`flex-1 py-4 px-4 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === 'unit1'
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg transform scale-105'
                    : 'text-gray-400 hover:text-amber-300 hover:bg-amber-500/10'
                }`}
              >
                <FaCube className="text-lg" />
                UNIT-1
              </button>
              <button
                onClick={() => setActiveTab('unit2')}
                className={`flex-1 py-4 px-4 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === 'unit2'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-400 hover:text-blue-300 hover:bg-blue-500/10'
                }`}
              >
                <FaShieldAlt className="text-lg" />
                UNIT-2
              </button>
              <button
                onClick={() => setActiveTab('unit3')}
                className={`flex-1 py-4 px-4 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === 'unit3'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-400 hover:text-green-300 hover:bg-green-500/10'
                }`}
              >
                <FaAtom className="text-lg" />
                UNIT-3
              </button>
            </div>
          </div>

          {/* Units Section */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-6 pl-2 border-l-4 border-amber-400 flex items-center">
              <span className="bg-amber-400 text-black rounded-full p-1 mr-2 text-xs flex items-center justify-center w-6 h-6 font-bold">U</span>
              Unit Practice
            </h3>
            
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8">
              {/* UNIT-1 */}
              <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 backdrop-blur-sm relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-16 translate-x-16"></div>
                
                <div className="text-center mb-6 relative z-10">
                  <div className="bg-gradient-to-br from-amber-800/80 to-amber-900/80 p-4 rounded-xl mb-4 inline-block shadow-lg group-hover:shadow-amber-500/20 transition-all duration-500 group-hover:scale-105">
                    <FaCube className="text-4xl text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-amber-300 group-hover:text-amber-200 transition-colors duration-300">UNIT-1</h3>
                  <p className="text-sm text-amber-400/70 font-bold group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    Wireless Communications for Everybody
                  </p>
                 
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                  {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                    const mode = `module${moduleNum}` as PracticeMode;
                    return (
                      <button
                        key={mode}
                        className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                          selectedMode === mode
                            ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-amber-500/30 ring-2 ring-amber-300/50'
                            : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-gray-600/90 hover:to-gray-700/90 border border-gray-600/50 hover:border-amber-500/30 text-gray-200 hover:text-amber-300'
                        }`}
                        onClick={() => setSelectedMode(mode)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-lg mb-1 font-bold relative z-10">M{moduleNum}</span>
                        <span className="text-xs opacity-80 relative z-10">Module {moduleNum}</span>
                      </button>
                    );
                  })}
                </div>
                <button
                  className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group/all ${
                    selectedMode === 'unit1'
                      ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-amber-500/30 ring-2 ring-amber-300/50'
                      : 'bg-gradient-to-br from-amber-700/20 to-amber-800/20 hover:from-amber-600/30 hover:to-amber-700/30 border border-amber-600/50 hover:border-amber-500/70 text-amber-300 hover:text-amber-200'
                  }`}
                  onClick={() => setSelectedMode('unit1')}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaRocket className="text-lg" />
                    All UNIT-1 Modules
                  </span>
                </button>
              </div>

              {/* UNIT-2 */}
              <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-16 translate-x-16"></div>
                
                <div className="text-center mb-6 relative z-10">
                  <div className="bg-gradient-to-br from-blue-800/80 to-blue-900/80 p-4 rounded-xl mb-4 inline-block shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500 group-hover:scale-105">
                    <FaShieldAlt className="text-4xl text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-blue-300 group-hover:text-blue-200 transition-colors duration-300">UNIT-2</h3>
                  <p className="text-sm font-bold text-blue-400/70 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    4G Network Fundamentals
                  </p>
                
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                  {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                    const mode = `unit2_module${moduleNum}` as PracticeMode;
                    const isAvailable = hasQuestionsForMode(mode);
                    
                    if (isAvailable) {
                      return (
                        <button
                          key={mode}
                          className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                            selectedMode === mode
                              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-300/50'
                              : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-gray-600/90 hover:to-gray-700/90 border border-gray-600/50 hover:border-blue-500/30 text-gray-200 hover:text-blue-300'
                          }`}
                          onClick={() => setSelectedMode(mode)}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          <span className="text-lg mb-1 font-bold relative z-10">M{moduleNum}</span>
                          <span className="text-xs opacity-80 relative z-10">Module {moduleNum}</span>
                        </button>
                      );
                    } else {
                      return (
                        <div
                          key={moduleNum}
                          className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 flex flex-col items-center justify-center opacity-50 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 to-transparent"></div>
                          <span className="text-lg mb-1 font-bold text-gray-500 relative z-10">M{moduleNum}</span>
                          <span className="text-xs text-gray-500 relative z-10">Soon</span>
                        </div>
                      );
                    }
                  })}
                </div>
                <button
                  className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group/all ${
                    selectedMode === 'unit2'
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-300/50'
                      : 'bg-gradient-to-br from-blue-700/20 to-blue-800/20 hover:from-blue-600/30 hover:to-blue-700/30 border border-blue-600/50 hover:border-blue-500/70 text-blue-300 hover:text-blue-200'
                  }`}
                  onClick={() => setSelectedMode('unit2')}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaStar className="text-lg" />
                    All UNIT-2 Modules
                  </span>
                </button>
              </div>

              {/* UNIT-3 */}
              <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-16 translate-x-16"></div>
                
                <div className="text-center mb-6 relative z-10">
                  <div className="bg-gradient-to-br from-green-800/80 to-green-900/80 p-4 rounded-xl mb-4 inline-block shadow-lg group-hover:shadow-green-500/20 transition-all duration-500 group-hover:scale-105">
                    <FaAtom className="text-4xl text-green-300 group-hover:text-green-200 transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-green-300 group-hover:text-green-200 transition-colors duration-300">UNIT-3</h3>
                  <p className="text-sm font-bold text-green-400/70 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    5G Network Architecture and Protocols 
                  </p>
                
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                  {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                    const mode = `unit3_module${moduleNum}` as PracticeMode;
                    const isAvailable = hasQuestionsForMode(mode);
                    
                    if (isAvailable) {
                      return (
                        <button
                          key={mode}
                          className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                            selectedMode === mode
                              ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30 ring-2 ring-green-300/50'
                              : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-gray-600/90 hover:to-gray-700/90 border border-gray-600/50 hover:border-green-500/30 text-gray-200 hover:text-green-300'
                          }`}
                          onClick={() => setSelectedMode(mode)}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          <span className="text-lg mb-1 font-bold relative z-10">M{moduleNum}</span>
                          <span className="text-xs opacity-80 relative z-10">Module {moduleNum}</span>
                        </button>
                      );
                    } else {
                      return (
                        <div
                          key={moduleNum}
                          className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 flex flex-col items-center justify-center opacity-50 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 to-transparent"></div>
                          <span className="text-lg mb-1 font-bold text-gray-500 relative z-10">M{moduleNum}</span>
                          <span className="text-xs text-gray-500 relative z-10">Soon</span>
                        </div>
                      );
                    }
                  })}
                </div>
                <button
                  className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group/all ${
                    hasQuestionsForMode('unit3')
                      ? selectedMode === 'unit3'
                        ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30 ring-2 ring-green-300/50'
                        : 'bg-gradient-to-br from-green-700/20 to-green-800/20 hover:from-green-600/30 hover:to-green-700/30 border border-green-600/50 hover:border-green-500/70 text-green-300 hover:text-green-200'
                      : 'bg-gradient-to-br from-green-700/20 to-green-800/20 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => hasQuestionsForMode('unit3') && setSelectedMode('unit3')}
                  disabled={!hasQuestionsForMode('unit3')}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaRocket className="text-lg" />
                    {hasQuestionsForMode('unit3') ? 'All UNIT-3 Modules' : 'Coming Soon'}
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Layout - Tab Content */}
            <div className="lg:hidden">
              {activeTab === 'unit1' && (
                <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-amber-600/30 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 backdrop-blur-sm relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-12 translate-x-12"></div>
                  
                  <div className="text-center mb-6 relative z-10">
                    <div className="bg-gradient-to-br from-amber-800/80 to-amber-900/80 p-4 rounded-xl mb-4 inline-block shadow-lg group-hover:shadow-amber-500/20 transition-all duration-500 group-hover:scale-105">
                      <FaCube className="text-4xl text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-amber-300 group-hover:text-amber-200 transition-colors duration-300">UNIT-1</h3>
                    <p className="text-sm font-bold text-amber-400/70 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                     Wireless Communications for Everybody
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                    {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                      const mode = `module${moduleNum}` as PracticeMode;
                      return (
                        <button
                          key={mode}
                          className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                            selectedMode === mode
                              ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-amber-500/30 ring-2 ring-amber-300/50'
                              : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-gray-600/90 hover:to-gray-700/90 border border-gray-600/50 hover:border-amber-500/30 text-gray-200 hover:text-amber-300'
                          }`}
                          onClick={() => setSelectedMode(mode)}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          <span className="text-xl mb-1 font-bold relative z-10">M{moduleNum}</span>
                          <span className="text-xs opacity-80 relative z-10">Module {moduleNum}</span>
                        </button>
                      );
                    })}
                  </div>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group/all ${
                      selectedMode === 'unit1'
                        ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-amber-500/30 ring-2 ring-amber-300/50'
                        : 'bg-gradient-to-br from-amber-700/20 to-amber-800/20 hover:from-amber-600/30 hover:to-amber-700/30 border border-amber-600/50 hover:border-amber-500/70 text-amber-300 hover:text-amber-200'
                    }`}
                    onClick={() => setSelectedMode('unit1')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaRocket className="text-lg" />
                      All UNIT-1 Modules
                    </span>
                  </button>
                </div>
              )}

              {activeTab === 'unit2' && (
                <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-12 translate-x-12"></div>
                  
                  <div className="text-center mb-6 relative z-10">
                    <div className="bg-gradient-to-br from-blue-800/80 to-blue-900/80 p-4 rounded-xl mb-4 inline-block shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500 group-hover:scale-105">
                      <FaShieldAlt className="text-4xl text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-blue-300 group-hover:text-blue-200 transition-colors duration-300">UNIT-2</h3>
                    <p className="text-sm font-bold text-blue-400/70 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      4G Network Fundamentals
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                    {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                      const mode = `unit2_module${moduleNum}` as PracticeMode;
                      const isAvailable = hasQuestionsForMode(mode);
                      
                      if (isAvailable) {
                        return (
                          <button
                            key={mode}
                            className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                              selectedMode === mode
                                ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-300/50'
                                : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-gray-600/90 hover:to-gray-700/90 border border-gray-600/50 hover:border-blue-500/30 text-gray-200 hover:text-blue-300'
                            }`}
                            onClick={() => setSelectedMode(mode)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            <span className="text-xl mb-1 font-bold relative z-10">M{moduleNum}</span>
                            <span className="text-xs opacity-80 relative z-10">Module {moduleNum}</span>
                          </button>
                        );
                      } else {
                        return (
                          <div
                            key={moduleNum}
                            className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 flex flex-col items-center justify-center opacity-50 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 to-transparent"></div>
                            <span className="text-xl mb-1 font-bold text-gray-500 relative z-10">M{moduleNum}</span>
                            <span className="text-xs text-gray-500 relative z-10">Soon</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group/all ${
                      hasQuestionsForMode('unit2')
                        ? selectedMode === 'unit2'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-300/50'
                          : 'bg-gradient-to-br from-blue-700/20 to-blue-800/20 hover:from-blue-600/30 hover:to-blue-700/30 border border-blue-600/50 hover:border-blue-500/70 text-blue-300 hover:text-blue-200'
                        : 'bg-gradient-to-br from-blue-700/20 to-blue-800/20 border border-blue-600/50 text-blue-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2') && setSelectedMode('unit2')}
                    disabled={!hasQuestionsForMode('unit2')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaStar className="text-lg" />
                      {hasQuestionsForMode('unit2') ? 'All UNIT-2 Modules' : 'Coming Soon'}
                    </span>
                  </button>
                </div>
              )}

              {activeTab === 'unit3' && (
                <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-green-600/30 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-12 translate-x-12"></div>
                  
                  <div className="text-center mb-6 relative z-10">
                    <div className="bg-gradient-to-br from-green-800/80 to-green-900/80 p-4 rounded-xl mb-4 inline-block shadow-lg group-hover:shadow-green-500/20 transition-all duration-500 group-hover:scale-105">
                      <FaAtom className="text-4xl text-green-300 group-hover:text-green-200 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-green-300 group-hover:text-green-200 transition-colors duration-300">UNIT-3</h3>
                    <p className="text-sm font-bold text-green-400/70 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      5G Network Architecture and Protocols
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                    {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                      const mode = `unit3_module${moduleNum}` as PracticeMode;
                      const isAvailable = hasQuestionsForMode(mode);
                      
                      if (isAvailable) {
                        return (
                          <button
                            key={mode}
                            className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                              selectedMode === mode
                                ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30 ring-2 ring-green-300/50'
                                : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-gray-600/90 hover:to-gray-700/90 border border-gray-600/50 hover:border-green-500/30 text-gray-200 hover:text-green-300'
                            }`}
                            onClick={() => setSelectedMode(mode)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            <span className="text-xl mb-1 font-bold relative z-10">M{moduleNum}</span>
                            <span className="text-xs opacity-80 relative z-10">Module {moduleNum}</span>
                          </button>
                        );
                      } else {
                        return (
                          <div
                            key={moduleNum}
                            className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 flex flex-col items-center justify-center opacity-50 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 to-transparent"></div>
                            <span className="text-xl mb-1 font-bold text-gray-500 relative z-10">M{moduleNum}</span>
                            <span className="text-xs text-gray-500 relative z-10">Soon</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group/all ${
                      hasQuestionsForMode('unit3')
                        ? selectedMode === 'unit3'
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30 ring-2 ring-green-300/50'
                          : 'bg-gradient-to-br from-green-700/20 to-green-800/20 hover:from-green-600/30 hover:to-green-700/30 border border-green-600/50 hover:border-green-500/70 text-green-300 hover:text-green-200'
                        : 'bg-gradient-to-br from-green-700/20 to-green-800/20 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3') && setSelectedMode('unit3')}
                    disabled={!hasQuestionsForMode('unit3')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaRocket className="text-lg" />
                      {hasQuestionsForMode('unit3') ? 'All UNIT-3 Modules' : 'Coming Soon'}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Unit-Specific Practice Modes */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-6 pl-2 border-l-4 border-indigo-400 flex items-center">
              <span className="bg-indigo-400 text-black rounded-full p-1 mr-2 text-xs flex items-center justify-center w-6 h-6 font-bold">S</span>
              Unit-Specific Practice
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* UNIT-1 Special */}
              <div className="group bg-gradient-to-br from-amber-900/30 to-amber-800/20 rounded-xl p-6 border border-amber-600/30 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-10 translate-x-10"></div>
                
                <h4 className="text-amber-300 font-bold mb-6 text-center relative z-10 text-xl group-hover:text-amber-200 transition-colors duration-300">UNIT-1 Special</h4>
                <div className="space-y-3 relative z-10">
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      selectedMode === 'unit1_assignment'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-amber-500/30 ring-2 ring-amber-300/50'
                        : 'bg-gradient-to-br from-amber-800/30 to-amber-900/30 hover:from-amber-700/40 hover:to-amber-800/40 border border-amber-600/50 hover:border-amber-500/70 text-amber-300 hover:text-amber-200'
                    }`}
                    onClick={() => setSelectedMode('unit1_assignment')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">Assignment</div>
                      <div className="text-sm opacity-80">UNIT-1 assignments only</div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      selectedMode === 'unit1_passage'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-amber-500/30 ring-2 ring-amber-300/50'
                        : 'bg-gradient-to-br from-amber-800/30 to-amber-900/30 hover:from-amber-700/40 hover:to-amber-800/40 border border-amber-600/50 hover:border-amber-500/70 text-amber-300 hover:text-amber-200'
                    }`}
                    onClick={() => setSelectedMode('unit1_passage')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">Passage Based</div>
                      <div className="text-sm opacity-80">UNIT-1 passages only</div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      selectedMode === 'unit1_demo'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-amber-500/30 ring-2 ring-amber-300/50'
                        : 'bg-gradient-to-br from-amber-800/30 to-amber-900/30 hover:from-amber-700/40 hover:to-amber-800/40 border border-amber-600/50 hover:border-amber-500/70 text-amber-300 hover:text-amber-200'
                    }`}
                    onClick={() => setSelectedMode('unit1_demo')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">Demo Exam</div>
                      <div className="text-sm opacity-80">UNIT-1 exam mode (20 MCQ + 4 passages)</div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      selectedMode === 'unit1_all'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-amber-500/30 ring-2 ring-amber-300/50'
                        : 'bg-gradient-to-br from-amber-800/30 to-amber-900/30 hover:from-amber-700/40 hover:to-amber-800/40 border border-amber-600/50 hover:border-amber-500/70 text-amber-300 hover:text-amber-200'
                    }`}
                    onClick={() => setSelectedMode('unit1_all')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">All Questions</div>
                      <div className="text-sm opacity-80">All UNIT-1 questions</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* UNIT-2 Special */}
              <div className="group bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl p-6 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-10 translate-x-10"></div>
                
                <h4 className="text-blue-300 font-bold mb-6 text-center relative z-10 text-xl group-hover:text-blue-200 transition-colors duration-300">UNIT-2 Special</h4>
                <div className="space-y-3 relative z-10">
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit2_assignment')
                        ? selectedMode === 'unit2_assignment'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-300/50'
                          : 'bg-gradient-to-br from-blue-800/30 to-blue-900/30 hover:from-blue-700/40 hover:to-blue-800/40 border border-blue-600/50 hover:border-blue-500/70 text-blue-300 hover:text-blue-200'
                        : 'bg-gradient-to-br from-blue-800/30 to-blue-900/30 border border-blue-600/50 text-blue-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_assignment') && setSelectedMode('unit2_assignment')}
                    disabled={!hasQuestionsForMode('unit2_assignment')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">Assignment</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit2_assignment') ? 'UNIT-2 assignments only' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit2_passage')
                        ? selectedMode === 'unit2_passage'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-300/50'
                          : 'bg-gradient-to-br from-blue-800/30 to-blue-900/30 hover:from-blue-700/40 hover:to-blue-800/40 border border-blue-600/50 hover:border-blue-500/70 text-blue-300 hover:text-blue-200'
                        : 'bg-gradient-to-br from-blue-800/30 to-blue-900/30 border border-blue-600/50 text-blue-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_passage') && setSelectedMode('unit2_passage')}
                    disabled={!hasQuestionsForMode('unit2_passage')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">Passage Based</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit2_passage') ? 'UNIT-2 passages only' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit2_demo')
                        ? selectedMode === 'unit2_demo'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-300/50'
                          : 'bg-gradient-to-br from-blue-800/30 to-blue-900/30 hover:from-blue-700/40 hover:to-blue-800/40 border border-blue-600/50 hover:border-blue-500/70 text-blue-300 hover:text-blue-200'
                        : 'bg-gradient-to-br from-blue-800/30 to-blue-900/30 border border-blue-600/50 text-blue-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_demo') && setSelectedMode('unit2_demo')}
                    disabled={!hasQuestionsForMode('unit2_demo')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">Demo Exam</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit2_demo') ? 'UNIT-2 exam mode (20 MCQ + 4 passages)' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit2_all')
                        ? selectedMode === 'unit2_all'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-300/50'
                          : 'bg-gradient-to-br from-blue-800/30 to-blue-900/30 hover:from-blue-700/40 hover:to-blue-800/40 border border-blue-600/50 hover:border-blue-500/70 text-blue-300 hover:text-blue-200'
                        : 'bg-gradient-to-br from-blue-800/30 to-blue-900/30 border border-blue-600/50 text-blue-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_all') && setSelectedMode('unit2_all')}
                    disabled={!hasQuestionsForMode('unit2_all')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">All Questions</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit2_all') ? 'All UNIT-2 questions' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* UNIT-3 Special */}
              <div className="group bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl p-6 border border-green-600/30 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-10 translate-x-10"></div>
                
                <h4 className="text-green-300 font-bold mb-6 text-center relative z-10 text-xl group-hover:text-green-200 transition-colors duration-300">UNIT-3 Special</h4>
                <div className="space-y-3 relative z-10">
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit3_assignment')
                        ? selectedMode === 'unit3_assignment'
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30 ring-2 ring-green-300/50'
                          : 'bg-gradient-to-br from-green-800/30 to-green-900/30 hover:from-green-700/40 hover:to-green-800/40 border border-green-600/50 hover:border-green-500/70 text-green-300 hover:text-green-200'
                        : 'bg-gradient-to-br from-green-800/30 to-green-900/30 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_assignment') && setSelectedMode('unit3_assignment')}
                    disabled={!hasQuestionsForMode('unit3_assignment')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">Assignment</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit3_assignment') ? 'UNIT-3 assignments only' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit3_passage')
                        ? selectedMode === 'unit3_passage'
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30 ring-2 ring-green-300/50'
                          : 'bg-gradient-to-br from-green-800/30 to-green-900/30 hover:from-green-700/40 hover:to-green-800/40 border border-green-600/50 hover:border-green-500/70 text-green-300 hover:text-green-200'
                        : 'bg-gradient-to-br from-green-800/30 to-green-900/30 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_passage') && setSelectedMode('unit3_passage')}
                    disabled={!hasQuestionsForMode('unit3_passage')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">Passage Based</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit3_passage') ? 'UNIT-2 passages only' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit3_demo')
                        ? selectedMode === 'unit3_demo'
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30 ring-2 ring-green-300/50'
                          : 'bg-gradient-to-br from-green-800/30 to-green-900/30 hover:from-green-700/40 hover:to-green-800/40 border border-green-600/50 hover:border-green-500/70 text-green-300 hover:text-green-200'
                        : 'bg-gradient-to-br from-green-800/30 to-green-900/30 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_demo') && setSelectedMode('unit3_demo')}
                    disabled={!hasQuestionsForMode('unit3_demo')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">Demo Exam</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit3_demo') ? 'UNIT-3 exam mode (20 MCQ + 4 passages)' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit3_all')
                        ? selectedMode === 'unit3_all'
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30 ring-2 ring-green-300/50'
                          : 'bg-gradient-to-br from-green-800/30 to-green-900/30 hover:from-green-700/40 hover:to-green-800/40 border border-green-600/50 hover:border-green-500/70 text-green-300 hover:text-green-200'
                        : 'bg-gradient-to-br from-green-800/30 to-green-900/30 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_all') && setSelectedMode('unit3_all')}
                    disabled={!hasQuestionsForMode('unit3_all')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-semibold">All Questions</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit3_all') ? 'All UNIT-3 Questions' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Global Special Practice Modes */}
          <div className="mb-10">
            <h3 className="text-lg font-medium mb-6 pl-2 border-l-4 border-purple-400 flex items-center">
              <span className="bg-purple-400 text-black rounded-full p-1 mr-2 text-xs flex items-center justify-center w-6 h-6 font-bold">G</span>
            EST Practice Modes
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Assignment Questions */}
              <button
                className={`p-6 rounded-lg transition duration-300 transform hover:scale-105 ${
                  selectedMode === 'assignment'
                    ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg ring-2 ring-purple-300'
                    : 'bg-gray-800/50 hover:bg-gray-700 border border-gray-600'
                }`}
                onClick={() => setSelectedMode('assignment')}
              >
                <div className="text-center">
                  <FaClipboardCheck className="text-3xl mb-3 mx-auto text-purple-400" />
                  <h4 className="font-semibold mb-2">Assignment Questions</h4>
                  <p className="text-sm opacity-80">Practice with assignment problems from all units</p>
                </div>
              </button>

              {/* Passage Based */}
              <button
                className={`p-6 rounded-lg transition duration-300 transform hover:scale-105 ${
                  selectedMode === 'passage'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg ring-2 ring-blue-300'
                    : 'bg-gray-800/50 hover:bg-gray-700 border border-gray-600'
                }`}
                onClick={() => setSelectedMode('passage')}
              >
                <div className="text-center">
                  <FaBookOpen className="text-3xl mb-3 mx-auto text-blue-400" />
                  <h4 className="font-semibold mb-2">Passage Based</h4>
                  <p className="text-sm opacity-80">Questions with reading comprehension passages</p>
                </div>
              </button>

              {/* Demo Exam */}
              <button
                className={`p-6 rounded-lg transition duration-300 transform hover:scale-105 ${
                  selectedMode === 'demo-exam'
                    ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg ring-2 ring-red-300'
                    : 'bg-gray-800/50 hover:bg-gray-700 border border-gray-600'
                }`}
                onClick={() => setSelectedMode('demo-exam')}
              >
                <div className="text-center">
                  <FaGraduationCap className="text-3xl mb-3 mx-auto text-red-400" />
                  <h4 className="font-semibold mb-2">Demo Exam</h4>
                  <p className="text-sm opacity-80">40 MCQ + 40 passage based Question</p>
                </div>
              </button>

              {/* All Questions */}
              <button
                className={`p-6 rounded-lg transition duration-300 transform hover:scale-105 ${
                  selectedMode === 'all'
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-lg ring-2 ring-amber-300'
                    : 'bg-gray-800/50 hover:bg-gray-700 border border-gray-600'
                }`}
                onClick={() => setSelectedMode('all')}
              >
                <div className="text-center">
                  <FaLayerGroup className="text-3xl mb-3 mx-auto text-amber-400" />
                  <h4 className="font-semibold mb-2">All Questions</h4>
                  <p className="text-sm opacity-80">Practice with all available questions</p>
                </div>
              </button>
            </div>
          </div>

          {/* Action Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-800/30 rounded-lg p-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-2">
                {selectedMode ? `Selected: ${selectedMode}` : 'Select a Practice Mode'}
              </h3>
              <p className="text-gray-400 text-sm">
                {selectedMode 
                  ? 'Click "Start Practice" to begin your learning session'
                  : 'Choose from the unit modules or special practice modes above'
                }
              </p>
            </div>
            
            <div className="flex gap-3">
              <Link 
                href="/" 
                className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 flex items-center space-x-2"
              >
                <FaHome />
                <span>Home</span>
              </Link>
              
              <button
                onClick={handleStart}
                disabled={!selectedMode}
                className={`px-8 py-3 rounded-lg font-semibold transition duration-300 flex items-center space-x-2 ${getButtonColors()}`}
              >
                <span>Start Practice</span>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
