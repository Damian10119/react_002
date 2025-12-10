function Button(
    {
    type,
    text,
    onclick,
    disabled
    }
    
    
){
    return (
        <button
            onclick={onclick}
            disabled={disabled}
            className={`${baseClasses} ${typeClasses[type]}`}
        >
            {text}
        </button>
    )
}

export default Button

const baseClasses="px-6 py-2 font-medium trasntition-colors rounded-lg"

const typeClasses= {
    primary: "bg-teal-600 text white hover:bg-teal-800",
    secondary: "bg-gray-600 text-white hover:bg-gray-800",
    danger: "bg-red-600 text-white hover:bg-red-800",
    success: "bg-green-600 text-white hover:bg-green-800",
    warning: "bg-yellow-600 text-white hover:bg-yellow-800"

}