import Button from './Button.jsx'

function HelloWorldTailwind(){
    return (
        <div className="min-h-screen bg-gray-100 flex itmes-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
            <h1 className="text-4xl font-bold text-blue-600">Hola mundo</h1>
            <p className="text-gray-500">Este es un componente sigue usando tailwind</p>
            <button
            type='primary'
            text="Primary Button"
            onClick={()=> alert("You clicked a primary button")}
            />

            <button
            type='secondary'
            text="Sec Button"
            onClick={()=> alert("You clicked a secondary button")}
            />

            <button
            type='danger'
            text="Be carefull"
            onClick={()=> alert("You clicked it")}
            />

            <button
            type='succcess'
            text="Well done"
            onClick={()=> alert("You clicked it")}
            />

            <button
            type='warning'
            text="Stop¡"
            onClick={()=> alert("You clicked it")}
            />

        </div>

        </div>
    )
}

export default HelloWorldTailwind