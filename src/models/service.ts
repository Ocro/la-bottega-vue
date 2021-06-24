// TODO trim les valeurs (soit dans le backend, soit mnt).
export default interface Service {
  id: number | null;
  service: string | null;
  price: number;
  archived: boolean;
}
