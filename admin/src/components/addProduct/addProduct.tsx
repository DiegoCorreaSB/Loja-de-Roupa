const addProduct = () => {
  return (
    <div>
        <h1>Adicionar Produto</h1>
        <form action="">
            <input type="text" placeholder='Nome do Produto' />
            <input type="text" placeholder='Descrição do Produto' />
            <input type="number" placeholder='Preço do Produto' />
            <input type="text" placeholder='URL da Imagem do Produto' />
            <button type='submit'>Adicionar Produto</button>
        </form>
    </div>
  )
}