export default function ServeExample(){
    //const data = await fetchDataFromDB()
    const data = 'dados do servidor'

    return (
        <div>
            <h1>Dados do Servidor</h1>
            <p>{data}</p>
            <ClientCounter/>
        </div>
    )

}