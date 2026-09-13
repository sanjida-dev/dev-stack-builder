import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/techData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load json");
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Could not fetch technology stack information.");
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`"${tech.name}" is already included in your stack.`);
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`Successfully added ${tech.name} to your stack!`);
  };

  const handleRemoveItem = (id, name) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.info(`Removed ${name} from your stack.`);
  };

  const handleClearStack = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("Cleared entire stack workspace.");
  };

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-800 antialiased font-sans">
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          <div className="w-full lg:w-3/4">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Explore the Technologies</h2>
<p className="text-gray-500 mb-6">Pick one technology per category to build your ideal stack.</p>

            </h2>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 space-y-4">
                <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 font-semibold text-sm">Loading tech profiles...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAddToStack={handleAddToStack}
                    isAdded={selectedStack.some((item) => item.id === tech.id)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/4 lg:sticky lg:top-24 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <div>
                <h3 className="font-extrabold text-lg text-gray-900">Your Stack</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {selectedStack.length} {selectedStack.length === 1 ? "Technology" : "Technologies"} Selected
                </p>
              </div>
              {selectedStack.length > 0 && (
                <button
                  onClick={handleClearStack}
                  className="text-xs font-semibold text-rose-500 hover:bg-rose-50 px-2.5 py-1.5 rounded-lg border border-rose-100"
                >
                  Remove All
                </button>
              )}
            </div>

            {selectedStack.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-xl px-4">
                <span className="text-3xl inline-block mb-2">📥</span>
                <p className="text-sm font-medium text-gray-400">
                  Your architecture canvas remains empty. Select items below.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                {selectedStack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-gray-50 border border-gray-100 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-white border border-gray-100 p-1.5 rounded-lg flex items-center justify-center">
                        <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-800">{item.name}</h4>
                        <span className="text-[10px] uppercase text-gray-400 font-semibold">{item.category}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="text-gray-400 hover:text-rose-500 p-1.5"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
