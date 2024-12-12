import IResults from "./Results"
interface IResponse {
  count: number
  next: string | null // Il link successivo, o null se non esiste
  previous: string | null // Il link precedente, o null se non esiste
  results: IResults[] // Array di articoli
}
export default IResponse