import Button from "./Button"
import InputComponent from "./InputComponent"

export default function ProductForm({
    onSubmit,
    onCancel

}){

    async function handleOnSubmit(e){
        e.preventDefault()
        console.log("Presionaste Guardar")
        onSubmit()

    }
    return(
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <form onSubmit={handleOnSubmit}>

                <div>
                    <InputComponent
                    label="Nombre"/>

                    <InputComponent
                    label="Precio"
                    />

                    <Button 
                    buttonType="submit"
                    type="success"
                    text= "Guardar"
                    disabled={false}/>

                    <Button 
                    text="Cancelar"
                    type="danger"
                    disabled={false}
                    onClick={onCancel}/>
                </div>
            </form>

        </div>
    )

    

}