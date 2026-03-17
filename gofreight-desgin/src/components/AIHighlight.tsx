import React from 'react';

interface AIHighlightProps {
  show: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * AI Highlight wrapper component
 * Applies a gradient mask effect to highlight AI-filled fields
 */
export default function AIHighlight({ show, children, className = '' }: AIHighlightProps) {
  if (!show) {
    return <>{children}</>;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Gradient Background Layer */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(164.789deg, rgb(112, 218, 194) 0%, rgb(192, 220, 160) 50%, rgb(254, 215, 114) 100%)',
          opacity: 0.3,
          zIndex: 0
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-[1]">
        {children}
      </div>
    </div>
  );
}

/**
 * Inline AI Highlight for text spans
 * Used for inline text highlighting
 */
export function AIHighlightSpan({ show, children, className = '' }: AIHighlightProps) {
  if (!show) {
    return <>{children}</>;
  }

  return (
    <span 
      className={`relative inline-block ${className}`}
      style={{
        background: 'linear-gradient(164.789deg, rgb(112, 218, 194) 0%, rgb(192, 220, 160) 50%, rgb(254, 215, 114) 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 600,
        paddingLeft: '2px',
        paddingRight: '2px'
      }}
    >
      <span 
        style={{
          background: 'linear-gradient(164.789deg, rgba(112, 218, 194, 0.15) 0%, rgba(192, 220, 160, 0.15) 50%, rgba(254, 215, 114, 0.15) 100%)',
          color: '#333',
          WebkitTextFillColor: '#333',
          position: 'absolute',
          inset: 0,
          zIndex: -1
        }}
      />
      {children}
    </span>
  );
}
