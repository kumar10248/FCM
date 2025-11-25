'use client';

import { useState, useEffect } from 'react';
import { FeedbackForm } from './FeedbackForm';

export function FeedbackPopup() {
  const [shouldAutoOpen, setShouldAutoOpen] = useState(false);

  useEffect(() => {
    // Check if user has already submitted feedback
    const hasSubmittedFeedback = localStorage.getItem('feedbackSubmitted');
    const lastPopupShown = localStorage.getItem('lastFeedbackPopupShown');
    const now = Date.now();
    const oneDayInMs = 24 * 60 * 60 * 1000;

    // Show popup if:
    // 1. User hasn't submitted feedback OR
    // 2. Last popup was shown more than 1 day ago
    if (!hasSubmittedFeedback || (lastPopupShown && now - parseInt(lastPopupShown) > oneDayInMs)) {
      // Delay popup by 3 seconds after page load
      const timer = setTimeout(() => {
        setShouldAutoOpen(true);
        localStorage.setItem('lastFeedbackPopupShown', now.toString());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShouldAutoOpen(false);
  };

  return <FeedbackForm autoOpen={shouldAutoOpen} onClose={handleClose} />;
}
