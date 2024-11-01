import LstAddresses from "./LstAddresses";
import TipoPerfil from "./TipoPerfil";

export default interface User {
    name: string,
    email: string,
    senha: string,
    foto: string,
    tipoPerfil: TipoPerfil,
    lstAddresses: LstAddresses[],
    unidade: string
}