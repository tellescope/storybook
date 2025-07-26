export const messageValidators = {
  // Prevent empty messages
  notEmpty: (value: string): string | null => {
    return value.trim().length === 0 ? "Message cannot be empty" : null;
  },
  
  // Prevent spam (too many repeated characters)
  noSpam: (value: string): string | null => {
    const repeatedPattern = /(.)\1{10,}/;
    return repeatedPattern.test(value) ? "Message contains too many repeated characters" : null;
  },
  
  // Check for inappropriate content (basic example)
  contentFilter: (value: string): string | null => {
    const blockedWords = ['spam', 'test-blocked']; // Add your blocked words
    const hasBlockedWord = blockedWords.some(word => 
      value.toLowerCase().includes(word.toLowerCase())
    );
    return hasBlockedWord ? "Message contains inappropriate content" : null;
  },
  
  // Combine multiple validators
  combine: (...validators: Array<(value: string) => string | null>) => {
    return (value: string): string | null => {
      for (const validator of validators) {
        const error = validator(value);
        if (error) return error;
      }
      return null;
    };
  }
};