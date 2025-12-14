export default function InputComponent({
    label
}){
    return(
        <div className="pb-3">
            <label >{label}</label>
            <input 
        
                type="text" 
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                        focus:border-blue-500"   
             />
        </div>
    )
}