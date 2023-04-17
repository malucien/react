export const formatDate = (date) => {
  if (!isValidDate(date)) {
    return "Invalid date";
  }

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(new Date(Date.parse(date)));
};

function isValidDate(date) {
  return !isNaN(Date.parse(date));
}
