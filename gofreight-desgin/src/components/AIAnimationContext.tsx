import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface AIAnimationContextValue {
  /** true = first visit this session, play shimmer animation */
  shouldAnimate: boolean;
  /** true = shimmer reveal animation has finished playing */
  shimmerDone: boolean;
  /** true = user completed review, fade-out highlights */
  reviewCompleted: boolean;
  /** call to trigger the fade-out */
  completeReview: () => void;
  /** reset animation so shimmer replays on next AI Create visit */
  resetAnimation: () => void;
}

const AIAnimationContext = createContext<AIAnimationContextValue>({
  shouldAnimate: false,
  shimmerDone: false,
  reviewCompleted: false,
  completeReview: () => {},
  resetAnimation: () => {},
});

const SESSION_KEY = "gf-ai-shimmer-played";

export function AIAnimationProvider({ children }: { children: React.ReactNode }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shimmerDone, setShimmerDone] = useState(false);
  const [reviewCompleted, setReviewCompleted] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(SESSION_KEY)) {
        setShouldAnimate(true);
        setShimmerDone(false);
        sessionStorage.setItem(SESSION_KEY, "1");
      } else {
        // No animation needed — mark shimmer as already done
        setShimmerDone(true);
      }
    } catch {
      setShimmerDone(true);
    }
  }, []);

  // Fire shimmerDone after the animation duration (0.4s delay + 0.7s anim + 0.3s buffer)
  useEffect(() => {
    if (shouldAnimate && !shimmerDone) {
      const timer = setTimeout(() => setShimmerDone(true), 1400);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate, shimmerDone]);

  const completeReview = useCallback(() => {
    setReviewCompleted(true);
  }, []);

  const resetAnimation = useCallback(() => {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      // ignore
    }
    setShouldAnimate(true);
    setShimmerDone(false);
    setReviewCompleted(false);
  }, []);

  return (
    <AIAnimationContext.Provider value={{ shouldAnimate, shimmerDone, reviewCompleted, completeReview, resetAnimation }}>
      {children}
    </AIAnimationContext.Provider>
  );
}

export function useAIAnimation() {
  return useContext(AIAnimationContext);
}