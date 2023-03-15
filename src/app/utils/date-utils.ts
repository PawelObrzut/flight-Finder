export const getFormattedTime = (timeISO8610: string): string => {
  return new Date(timeISO8610).toLocaleTimeString('sv-SE', {hour: '2-digit', minute: '2-digit'})
}

export const getFlightDuration = (departureAt: string, arrivalAt: string): string => {
  const duration = new Date(arrivalAt).getTime() - new Date(departureAt).getTime();
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${minutes}min`;
}
