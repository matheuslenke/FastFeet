import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function formatDate(date) {
  return format(parseISO(date), "dd'/'MM'/'yyyy", { locale: ptBR });
}
