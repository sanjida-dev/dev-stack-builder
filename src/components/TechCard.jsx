import React from "react";

export default function TechCard({ tech, onAddToStack, isAdded }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative">
      {badge && (
        <span className="absolute top-4 right-4 bg-pink-50 text-pink-600 font-semibold text-xs px-2.5 py-1 rounded-full border border-pink-100">
          {badge}
        </span>
      )}

      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gray-50 rounded-xl p-2.5 border border-gray-100 flex items-center justify-center">
            <img src={icon} alt={`${name} logo`} className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-800">{name}</h3>
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded-md mt-1">
              {category}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs font-medium text-gray-500 border-t border-gray-50 pt-4 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-amber-500 font-bold text-sm">★</span>
            <span className="text-gray-700 font-semibold">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{difficulty}</span>
          </div>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full font-semibold py-2.5 px-4 rounded-xl transition-all ${
            isAdded
              ? "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
              : "bg-white border-2 border-gray-200 text-gray-700 hover:border-pink-500 hover:text-pink-500"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}
