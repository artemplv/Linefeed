const variants = {
  full: {
    month: 'short',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
  },
  time: {
    timeStyle: 'short',
  },
};

const formatDateTime = (value, variant = 'full') => {
  const options = variants[variant];

  const date = new Date(value);

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export default formatDateTime;
