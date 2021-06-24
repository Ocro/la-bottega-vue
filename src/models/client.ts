// TODO trim les valeurs (soit dans le backend, soit mnt).
export default interface Client {
  id: number | null;
  name: string;
  firstname: string;
  address: string;
  npa: number | null;
  city: string;
  phone: string;
}
