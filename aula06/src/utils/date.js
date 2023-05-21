export default function formatDate(date) {
  const dateConverted = new Date(date);

  return new Intl.DateTimeFormat('pt-BR').format(dateConverted);
}
