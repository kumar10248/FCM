'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaLayerGroup, FaChevronRight, FaHome, FaClipboardCheck, FaBookOpen, FaGraduationCap } from 'react-icons/fa';
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
    if (['module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'module7', 'unit1', 'unit1_assignment', 'unit1_passage', 'unit1_demo'].includes(selectedMode)) {
      return 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black shadow-lg transform hover:scale-105';
    }

    // UNIT-2 modes (blue theme)
    if (['unit2', 'unit2_assignment', 'unit2_passage', 'unit2_demo', 
         'unit2_module1', 'unit2_module2', 'unit2_module3', 'unit2_module4', 
         'unit2_module5', 'unit2_module6', 'unit2_module7'].includes(selectedMode)) {
      return 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg transform hover:scale-105';
    }

    // UNIT-3 modes (green theme)
    if (['unit3', 'unit3_assignment', 'unit3_passage', 'unit3_demo',
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <header className="bg-black py-8 border-b border-amber-500/20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
              FCWMC Practice Center
            </span>
          </h1>
          <p className="text-center text-gray-400 mt-2">Choose your practice mode and start learning</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex-grow max-w-7xl">
        <div className="w-full bg-gray-900/50 rounded-xl p-4 md:p-8 shadow-xl backdrop-blur-sm">
          
          {/* Mobile Tab Navigation */}
          <div className="lg:hidden mb-6">
            <div className="flex bg-gray-800/50 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('unit1')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'unit1'
                    ? 'bg-amber-600/20 text-amber-300 border border-amber-500/50'
                    : 'text-gray-400 hover:text-amber-300'
                }`}
              >
                UNIT-1
              </button>
              <button
                onClick={() => setActiveTab('unit2')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'unit2'
                    ? 'bg-blue-600/20 text-blue-300 border border-blue-500/50'
                    : 'text-gray-400 hover:text-blue-300'
                }`}
              >
                UNIT-2
              </button>
              <button
                onClick={() => setActiveTab('unit3')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'unit3'
                    ? 'bg-green-600/20 text-green-300 border border-green-500/50'
                    : 'text-gray-400 hover:text-green-300'
                }`}
              >
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
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="bg-amber-800/60 p-4 rounded-lg mb-4 inline-block">
                    <span className="text-3xl font-bold text-amber-300">U1</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-amber-300">UNIT-1</h3>
                  <p className="text-sm opacity-80 text-center">
                    Fundamentals & Core Concepts
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                    const mode = `module${moduleNum}` as PracticeMode;
                    return (
                      <button
                        key={mode}
                        className={`p-3 rounded-lg transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center ${
                          selectedMode === mode
                            ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-lg ring-2 ring-amber-300'
                            : 'bg-gray-700/80 hover:bg-gray-600 border border-gray-600'
                        }`}
                        onClick={() => setSelectedMode(mode)}
                      >
                        <span className="text-lg mb-1 font-bold">M{moduleNum}</span>
                        <span className="text-xs opacity-80">Mod {moduleNum}</span>
                      </button>
                    );
                  })}
                </div>
                <button
                  className={`w-full p-3 rounded-lg transition duration-300 transform hover:scale-105 ${
                    selectedMode === 'unit1'
                      ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-lg ring-2 ring-amber-300'
                      : 'bg-amber-700/20 hover:bg-amber-600/30 border border-amber-600/50 text-amber-300'
                  }`}
                  onClick={() => setSelectedMode('unit1')}
                >
                  <span className="font-semibold">All UNIT-1 Modules</span>
                </button>
              </div>

              {/* UNIT-2 */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="bg-blue-800/60 p-4 rounded-lg mb-4 inline-block">
                    <span className="text-3xl font-bold text-blue-300">U2</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-blue-300">UNIT-2</h3>
                  <p className="text-sm opacity-80 text-center">
                    Advanced Topics & Applications
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                    const mode = `unit2_module${moduleNum}` as PracticeMode;
                    const isAvailable = hasQuestionsForMode(mode);
                    
                    if (isAvailable) {
                      return (
                        <button
                          key={mode}
                          className={`p-3 rounded-lg transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center ${
                            selectedMode === mode
                              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg ring-2 ring-blue-300'
                              : 'bg-gray-700/80 hover:bg-gray-600 border border-gray-600'
                          }`}
                          onClick={() => setSelectedMode(mode)}
                        >
                          <span className="text-lg mb-1 font-bold">M{moduleNum}</span>
                          <span className="text-xs opacity-80">Available</span>
                        </button>
                      );
                    } else {
                      return (
                        <div
                          key={moduleNum}
                          className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 flex flex-col items-center justify-center opacity-50"
                        >
                          <span className="text-lg mb-1 font-bold text-gray-500">M{moduleNum}</span>
                          <span className="text-xs text-gray-500">Soon</span>
                        </div>
                      );
                    }
                  })}
                </div>
                <button
                  className={`w-full p-3 rounded-lg transition duration-300 transform hover:scale-105 ${
                    selectedMode === 'unit2'
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg ring-2 ring-blue-300'
                      : 'bg-blue-700/20 hover:bg-blue-600/30 border border-blue-600/50 text-blue-300'
                  }`}
                  onClick={() => setSelectedMode('unit2')}
                >
                  <span className="font-semibold">All UNIT-2 Modules</span>
                </button>
              </div>

              {/* UNIT-3 */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="bg-green-800/60 p-4 rounded-lg mb-4 inline-block">
                    <span className="text-3xl font-bold text-green-300">U3</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-green-300">UNIT-3</h3>
                  <p className="text-sm opacity-80 text-center">
                    Specialized Topics & Research
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                    const mode = `unit3_module${moduleNum}` as PracticeMode;
                    const isAvailable = hasQuestionsForMode(mode);
                    
                    if (isAvailable) {
                      return (
                        <button
                          key={mode}
                          className={`p-3 rounded-lg transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center ${
                            selectedMode === mode
                              ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg ring-2 ring-green-300'
                              : 'bg-gray-700/80 hover:bg-gray-600 border border-gray-600'
                          }`}
                          onClick={() => setSelectedMode(mode)}
                        >
                          <span className="text-lg mb-1 font-bold">M{moduleNum}</span>
                          <span className="text-xs opacity-80">Available</span>
                        </button>
                      );
                    } else {
                      return (
                        <div
                          key={moduleNum}
                          className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 flex flex-col items-center justify-center opacity-50"
                        >
                          <span className="text-lg mb-1 font-bold text-gray-500">M{moduleNum}</span>
                          <span className="text-xs text-gray-500">Soon</span>
                        </div>
                      );
                    }
                  })}
                </div>
                <button
                  className={`w-full p-3 rounded-lg transition duration-300 transform hover:scale-105 ${
                    hasQuestionsForMode('unit3')
                      ? selectedMode === 'unit3'
                        ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg ring-2 ring-green-300'
                        : 'bg-green-700/20 hover:bg-green-600/30 border border-green-600/50 text-green-300'
                      : 'bg-green-700/20 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => hasQuestionsForMode('unit3') && setSelectedMode('unit3')}
                  disabled={!hasQuestionsForMode('unit3')}
                >
                  <span className="font-semibold">
                    {hasQuestionsForMode('unit3') ? 'All UNIT-3 Modules' : 'Coming Soon'}
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Layout - Tab Content */}
            <div className="lg:hidden">
              {activeTab === 'unit1' && (
                <div className="bg-gray-800/50 rounded-lg p-6 border border-amber-600/30">
                  <div className="text-center mb-6">
                    <div className="bg-amber-800/60 p-4 rounded-lg mb-4 inline-block">
                      <span className="text-3xl font-bold text-amber-300">U1</span>
                    </div>
                    <h3 className="font-semibold text-xl mb-2 text-amber-300">UNIT-1</h3>
                    <p className="text-sm opacity-80 text-center">
                      Fundamentals & Core Concepts
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                      const mode = `module${moduleNum}` as PracticeMode;
                      return (
                        <button
                          key={mode}
                          className={`p-4 rounded-lg transition duration-300 flex flex-col items-center justify-center ${
                            selectedMode === mode
                              ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-lg ring-2 ring-amber-300'
                              : 'bg-gray-700/80 hover:bg-gray-600 border border-gray-600'
                          }`}
                          onClick={() => setSelectedMode(mode)}
                        >
                          <span className="text-xl mb-1 font-bold">M{moduleNum}</span>
                          <span className="text-xs opacity-80">Mod {moduleNum}</span>
                        </button>
                      );
                    })}
                  </div>
                  <button
                    className={`w-full p-3 rounded-lg transition duration-300 ${
                      selectedMode === 'unit1'
                        ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-lg ring-2 ring-amber-300'
                        : 'bg-amber-700/20 hover:bg-amber-600/30 border border-amber-600/50 text-amber-300'
                    }`}
                    onClick={() => setSelectedMode('unit1')}
                  >
                    <span className="font-semibold">All UNIT-1 Modules</span>
                  </button>
                </div>
              )}

              {activeTab === 'unit2' && (
                <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-600/30">
                  <div className="text-center mb-6">
                    <div className="bg-blue-800/60 p-4 rounded-lg mb-4 inline-block">
                      <span className="text-3xl font-bold text-blue-300">U2</span>
                    </div>
                    <h3 className="font-semibold text-xl mb-2 text-blue-300">UNIT-2</h3>
                    <p className="text-sm opacity-80 text-center">
                      Advanced Topics & Applications
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                      const mode = `unit2_module${moduleNum}` as PracticeMode;
                      const isAvailable = hasQuestionsForMode(mode);
                      
                      if (isAvailable) {
                        return (
                          <button
                            key={mode}
                            className={`p-4 rounded-lg transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center ${
                              selectedMode === mode
                                ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg ring-2 ring-blue-300'
                                : 'bg-gray-700/80 hover:bg-gray-600 border border-gray-600'
                            }`}
                            onClick={() => setSelectedMode(mode)}
                          >
                            <span className="text-xl mb-1 font-bold">M{moduleNum}</span>
                            <span className="text-xs opacity-80">Available</span>
                          </button>
                        );
                      } else {
                        return (
                          <div
                            key={moduleNum}
                            className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 flex flex-col items-center justify-center opacity-50"
                          >
                            <span className="text-xl mb-1 font-bold text-gray-500">M{moduleNum}</span>
                            <span className="text-xs text-gray-500">Soon</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <button
                    className={`w-full p-3 rounded-lg transition duration-300 transform hover:scale-105 ${
                      hasQuestionsForMode('unit2')
                        ? selectedMode === 'unit2'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg ring-2 ring-blue-300'
                          : 'bg-blue-700/20 hover:bg-blue-600/30 border border-blue-600/50 text-blue-300'
                        : 'bg-blue-700/20 border border-blue-600/50 text-blue-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2') && setSelectedMode('unit2')}
                    disabled={!hasQuestionsForMode('unit2')}
                  >
                    <span className="font-semibold">
                      {hasQuestionsForMode('unit2') ? 'All UNIT-2 Modules' : 'Coming Soon'}
                    </span>
                  </button>
                </div>
              )}

              {activeTab === 'unit3' && (
                <div className="bg-gray-800/50 rounded-lg p-6 border border-green-600/30">
                  <div className="text-center mb-6">
                    <div className="bg-green-800/60 p-4 rounded-lg mb-4 inline-block">
                      <span className="text-3xl font-bold text-green-300">U3</span>
                    </div>
                    <h3 className="font-semibold text-xl mb-2 text-green-300">UNIT-3</h3>
                    <p className="text-sm opacity-80 text-center">
                      Specialized Topics & Research
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                      const mode = `unit3_module${moduleNum}` as PracticeMode;
                      const isAvailable = hasQuestionsForMode(mode);
                      
                      if (isAvailable) {
                        return (
                          <button
                            key={mode}
                            className={`p-4 rounded-lg transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center ${
                              selectedMode === mode
                                ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg ring-2 ring-green-300'
                                : 'bg-gray-700/80 hover:bg-gray-600 border border-gray-600'
                            }`}
                            onClick={() => setSelectedMode(mode)}
                          >
                            <span className="text-xl mb-1 font-bold">M{moduleNum}</span>
                            <span className="text-xs opacity-80">Available</span>
                          </button>
                        );
                      } else {
                        return (
                          <div
                            key={moduleNum}
                            className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 flex flex-col items-center justify-center opacity-50"
                          >
                            <span className="text-xl mb-1 font-bold text-gray-500">M{moduleNum}</span>
                            <span className="text-xs text-gray-500">Soon</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <button
                    className={`w-full p-3 rounded-lg transition duration-300 transform hover:scale-105 ${
                      hasQuestionsForMode('unit3')
                        ? selectedMode === 'unit3'
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg ring-2 ring-green-300'
                          : 'bg-green-700/20 hover:bg-green-600/30 border border-green-600/50 text-green-300'
                        : 'bg-green-700/20 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3') && setSelectedMode('unit3')}
                    disabled={!hasQuestionsForMode('unit3')}
                  >
                    <span className="font-semibold">
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
              <div className="bg-amber-900/20 rounded-lg p-6 border border-amber-600/30">
                <h4 className="text-amber-300 font-semibold mb-4 text-center">UNIT-1 Special</h4>
                <div className="space-y-3">
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 ${
                      selectedMode === 'unit1_assignment'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg ring-2 ring-amber-300'
                        : 'bg-amber-800/20 hover:bg-amber-700/30 border border-amber-600/50 text-amber-300'
                    }`}
                    onClick={() => setSelectedMode('unit1_assignment')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Assignment</div>
                      <div className="text-sm opacity-80">UNIT-1 assignments only</div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 ${
                      selectedMode === 'unit1_passage'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg ring-2 ring-amber-300'
                        : 'bg-amber-800/20 hover:bg-amber-700/30 border border-amber-600/50 text-amber-300'
                    }`}
                    onClick={() => setSelectedMode('unit1_passage')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Passage Based</div>
                      <div className="text-sm opacity-80">UNIT-1 passages only</div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 ${
                      selectedMode === 'unit1_demo'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg ring-2 ring-amber-300'
                        : 'bg-amber-800/20 hover:bg-amber-700/30 border border-amber-600/50 text-amber-300'
                    }`}
                    onClick={() => setSelectedMode('unit1_demo')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Demo Exam</div>
                      <div className="text-sm opacity-80">UNIT-1 exam mode</div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 ${
                      selectedMode === 'unit1_all'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg ring-2 ring-amber-300'
                        : 'bg-amber-800/20 hover:bg-amber-700/30 border border-amber-600/50 text-amber-300'
                    }`}
                    onClick={() => setSelectedMode('unit1_all')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">All Questions</div>
                      <div className="text-sm opacity-80">All UNIT-1 questions</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* UNIT-2 Special */}
              <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-600/30">
                <h4 className="text-blue-300 font-semibold mb-4 text-center">UNIT-2 Special</h4>
                <div className="space-y-3">
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 transform hover:scale-105 ${
                      hasQuestionsForMode('unit2_assignment')
                        ? selectedMode === 'unit2_assignment'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg ring-2 ring-blue-300'
                          : 'bg-blue-800/20 hover:bg-blue-700/30 border border-blue-600/50 text-blue-300'
                        : 'bg-blue-800/20 border border-blue-600/50 text-blue-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_assignment') && setSelectedMode('unit2_assignment')}
                    disabled={!hasQuestionsForMode('unit2_assignment')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Assignment</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit2_assignment') ? 'Available' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 transform hover:scale-105 ${
                      hasQuestionsForMode('unit2_passage')
                        ? selectedMode === 'unit2_passage'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg ring-2 ring-blue-300'
                          : 'bg-blue-800/20 hover:bg-blue-700/30 border border-blue-600/50 text-blue-300'
                        : 'bg-blue-800/20 border border-blue-600/50 text-blue-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_passage') && setSelectedMode('unit2_passage')}
                    disabled={!hasQuestionsForMode('unit2_passage')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Passage Based</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit2_passage') ? 'Available' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 transform hover:scale-105 ${
                      hasQuestionsForMode('unit2_demo')
                        ? selectedMode === 'unit2_demo'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg ring-2 ring-blue-300'
                          : 'bg-blue-800/20 hover:bg-blue-700/30 border border-blue-600/50 text-blue-300'
                        : 'bg-blue-800/20 border border-blue-600/50 text-blue-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_demo') && setSelectedMode('unit2_demo')}
                    disabled={!hasQuestionsForMode('unit2_demo')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Demo Exam</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit2_demo') ? 'Available' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 transform hover:scale-105 ${
                      hasQuestionsForMode('unit2_all')
                        ? selectedMode === 'unit2_all'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg ring-2 ring-blue-300'
                          : 'bg-blue-800/20 hover:bg-blue-700/30 border border-blue-600/50 text-blue-300'
                        : 'bg-blue-800/20 border border-blue-600/50 text-blue-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_all') && setSelectedMode('unit2_all')}
                    disabled={!hasQuestionsForMode('unit2_all')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">All Questions</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit2_all') ? 'Available' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* UNIT-3 Special */}
              <div className="bg-green-900/20 rounded-lg p-6 border border-green-600/30">
                <h4 className="text-green-300 font-semibold mb-4 text-center">UNIT-3 Special</h4>
                <div className="space-y-3">
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 transform hover:scale-105 ${
                      hasQuestionsForMode('unit3_assignment')
                        ? selectedMode === 'unit3_assignment'
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg ring-2 ring-green-300'
                          : 'bg-green-800/20 hover:bg-green-700/30 border border-green-600/50 text-green-300'
                        : 'bg-green-800/20 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_assignment') && setSelectedMode('unit3_assignment')}
                    disabled={!hasQuestionsForMode('unit3_assignment')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Assignment</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit3_assignment') ? 'Available' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 transform hover:scale-105 ${
                      hasQuestionsForMode('unit3_passage')
                        ? selectedMode === 'unit3_passage'
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg ring-2 ring-green-300'
                          : 'bg-green-800/20 hover:bg-green-700/30 border border-green-600/50 text-green-300'
                        : 'bg-green-800/20 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_passage') && setSelectedMode('unit3_passage')}
                    disabled={!hasQuestionsForMode('unit3_passage')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Passage Based</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit3_passage') ? 'Available' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 transform hover:scale-105 ${
                      hasQuestionsForMode('unit3_demo')
                        ? selectedMode === 'unit3_demo'
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg ring-2 ring-green-300'
                          : 'bg-green-800/20 hover:bg-green-700/30 border border-green-600/50 text-green-300'
                        : 'bg-green-800/20 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_demo') && setSelectedMode('unit3_demo')}
                    disabled={!hasQuestionsForMode('unit3_demo')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Demo Exam</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit3_demo') ? 'Available' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-4 rounded-lg transition duration-300 transform hover:scale-105 ${
                      hasQuestionsForMode('unit3_all')
                        ? selectedMode === 'unit3_all'
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg ring-2 ring-green-300'
                          : 'bg-green-800/20 hover:bg-green-700/30 border border-green-600/50 text-green-300'
                        : 'bg-green-800/20 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_all') && setSelectedMode('unit3_all')}
                    disabled={!hasQuestionsForMode('unit3_all')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">All Questions</div>
                      <div className="text-sm opacity-80">
                        {hasQuestionsForMode('unit3_all') ? 'Available' : 'Coming Soon'}
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
              Global Practice Modes
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
                  <p className="text-sm opacity-80">Simulated exam with mixed question types</p>
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
