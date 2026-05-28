import '../../App.css'
import '../../index.css'
import UploudImage from './uploudImage'

const AddProduct = () => {


  return (
    <div className="container-forms">
      <div className="form-title">
        <h1>Adicionar Produto</h1>
      </div>
      <form action="#">
        <div className="form-input">
          <input className='info-input' type="text" placeholder='Nome do Produto' />
          <input className='info-input' type="text" placeholder='Descrição do Produto' />
          <input className='info-input' type="number" placeholder='Preço do Produto' />
        </div>
        <div>
          <UploudImage />
        </div>

        <div className="form-btn">
          <button type='submit' className='save-btn'>Adicionar Produto</button>
          <button type='submit' className='cancel-btn'>Cancelar</button>
        </div>
      </form>
    </div>

  )
}

export default AddProduct