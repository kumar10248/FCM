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
    const twoDaysInMs = 48 * 60 * 60 * 1000; // 48 hours

    // Show popup if:
    // 1. User hasn't submitted feedback OR
    // 2. Last popup was shown more than 48 hours ago
    if (!hasSubmittedFeedback || (lastPopupShown && now - parseInt(lastPopupShown) > twoDaysInMs)) {
      // Show popup immediately
      setShouldAutoOpen(true);
      localStorage.setItem('lastFeedbackPopupShown', now.toString());
    }
  }, []);

  const handleClose = () => {
    setShouldAutoOpen(false);
  };

  return <FeedbackForm autoOpen={shouldAutoOpen} onClose={handleClose} />;
}
