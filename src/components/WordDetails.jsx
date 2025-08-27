import React, { useState } from "react";
import { Info, ListChecks, BookOpen } from "lucide-react";

export default function WordDetails({ wordData }) {
  const meaning = wordData.meanings[0]; //  only first main meaning
  const definition = meaning.definitions[0]; //  only first definition

  return (
    <div className="word-card">
      <h2 className="word">{wordData.word}</h2>
      <span className="pos">{meaning.partOfSpeech}</span>
      <hr className="divider" />

      {/* Definition */}
      <div className="section">
        <h3 className="section-title">
          <Info size={18} className="icon" /> Definition
        </h3>
        <p>{definition.definition}</p>
      </div>

      {/* Synonyms */}
      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <div className="section">
          <h3 className="section-title">
            <ListChecks size={18} className="icon" /> Synonyms
          </h3>
          <div className="synonyms">
            {meaning.synonyms.slice(0, 6).map((syn, i) => (
              <span key={i} className="tag">
                {syn}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Usage Example */}
      {definition.example && (
        <div className="section">
          <h3 className="section-title purple">
            <BookOpen size={18} className="icon" /> Usage Example
          </h3>
          <blockquote className="example">
            "{definition.example}"
          </blockquote>
        </div>
      )}
    </div>
  );
}
