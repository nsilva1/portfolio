export const getCurrentHour = (): number => {
  const now = new Date();
  return now.getHours();
};

export const getGreeting = (): string => {
  const currentHour = getCurrentHour();

  if (currentHour < 12) {
    // Before 12 PM (noon)
    return `Good Morning`;
  } else if (currentHour < 18) {
    // Between 12 PM and 6 PM (18:00)
    return 'Good Afternoon';
  } else {
    // 6 PM (18:00) and onwards
    return 'Good Evening';
  }
};
