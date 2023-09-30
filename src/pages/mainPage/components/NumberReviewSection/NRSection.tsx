import NumberAnimation from '../GrowNumber/NumberAnimation'
import stars from '../../../../assets/imagem_2023-09-29_200454798-removebg-preview.png'
import './NRSection.scss'

function NumberReviewSection() {
  return (
    <section className='NumberReviewSection'>

         <div className='flex'>
            <h2>Excelente</h2>
            <img src={stars} alt="estrelas" />

            <div>
               <NumberAnimation startNumber={1} finalNumber={4} /><b>,</b><NumberAnimation startNumber={1} finalNumber={7} />
            </div>
            

            <p>de 5 baseado em </p> 

            <NumberAnimation startNumber={796} finalNumber={863} />

            <p>avaliações </p> 

         </div>

    </section>
  )
}

export default NumberReviewSection