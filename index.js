function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;

  const loginAttempt = (passwordGuess) => {
    if (attemptCount >= maxAttempts) {
      return 'Account locked due to too many failed login attempts';
    }

    if (passwordGuess === userInfo.password) {
      return 'Login successful';
    }

    attemptCount++;
    return `Attempt ${attemptCount}: Login failed`;
  };

  return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};