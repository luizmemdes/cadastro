/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, useFieldArray } from 'react-hook-form';
import { criar } from '../Services/ServiceApi';

const UserForm = () => {
    const { register, handleSubmit, control } = useForm()
    const {fields, append, remove} = useFieldArray({
        control,
        name: "lstAddresses"
    });
    const onSubmit = async (data: any) => {
        console.log(data);
        try {
           const response = await criar(data);
           console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }        
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Dados de acesso do usuário</h2>
                <div>
                    <label>Nome: </label>
                    <input type="text" {...register("name")} required/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" {...register("email")} required/>
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" {...register("senha")} required/>
                </div>
                <div>
                    <label>Foto: </label>
                    <input type="text" {...register("foto")} required/>
                </div>
                <div>
                    <label>Tipo de perfil: </label>
                    <input type="text" {...register("tipoPerfil.tipo")} required/>
                </div>

                <div>
                    <label>Nível de acesso Perfil: </label>
                    <input type="text" {...register("tipoPerfil.nivelAcesso")} required/>
                </div>

                <div>
                    <label>Foto: </label>
                    <input type="text" {...register("foto")} required/>
                </div>

                
                <br/>
                <h2>Endereços</h2>
                {fields.map((field: any, index: any) => (
                    <div key={field.id}>
                        <div>
                            <label>Rua: </label>
                            <input type="text" {...register(`lstAddresses[${index}].street`)} required/>
                        </div>
                        <div>
                            <label>Número: </label>
                            <input type="text" {...register(`lstAddresses[${index}].number`)} required/>
                        </div>
                        <div>
                            <label>Complemento: </label>
                            <input type="text" {...register(`lstAddresses[${index}].complement`)} required/>
                        </div>
                        <div>
                            <label>Vizinhança: </label>
                            <input type="text" {...register(`lstAddresses[${index}].neighborhood`)} required/>
                        </div>
                        <div>
                            <label>Cidade: </label>
                            <input type="text" {...register(`lstAddresses[${index}].city`)} required/>
                        </div>
                        <div>
                            <label>Estado: </label>
                            <input type="text" {...register(`lstAddresses[${index}].state`)} required/>
                        </div>
                        <div>
                            <label>País: </label>
                            <input type="text" {...register(`lstAddresses[${index}].country`)} required/>
                        </div>
                        <div>
                            <label>CEP: </label>
                            <input type="text" {...register(`lstAddresses[${index}].zipCode`)} required/>
                        </div>
                        <div>
                            <label>Bairro: </label>
                            <input type="text" {...register(`lstAddresses[${index}].district`)} required/>
                        </div>
                        <button type="button" onClick={() => remove(index)}>Remover Endereço</button>
                    </div>
                ))}
                <button type="button" onClick={() => append({})}>Adicionar Endereço</button>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default UserForm;