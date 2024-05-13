type generalAdmission = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  price: number;
  availableTicket: number;
};
export interface cardType {
  general: generalAdmission[];
}
