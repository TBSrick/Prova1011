import imagem from './IMG/imgg.jpg'; 
import Noticias from './Components/Post';
import Usuario from './Components/Comentario';
import kkkk from './IMG/kaue.png' 
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Blog de noticias</h1>
      <Noticias
      titulo='Lista de saída de brasileiros de Gaza tem bebês e crianças veja detalhes'
      imagem={imagem}
      descricao='Das mais de 30 pessoas autorizadas a deixar a Faixa de Gaza nesta sexta-feira (10) e que serão repatriadas pelo governo brasileiro, 22 têm dupla nacionalidade brasileira-palestina, nove são palestinos e dois de outros países. A expectativa é de que o primeiro voo com repatriados de Gaza chegue em solos brasileiros no próximo domingo (12).

      Os brasileiros e familiares entraram na 8ª lista de estrangeiros autorizados a deixar a Faixa de Gaza pela passagem de Rafah ao Egito. O conflito na região ocorre há mais de um mês. Ao todo, 4.026 pessoas foram autorizadas a deixar a Faixa de Gaza.'
      categoria='Guerra em Israel'

      />                          
<h1>comentarios: </h1>
    <Usuario
    Nome='McLovin'
    foto={kkkk} comentario='Tomara que eles consigam recuperar suas vidas'/>
    
    
    </div>
    
  );
}

export default App;
       