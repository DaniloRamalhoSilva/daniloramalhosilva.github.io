import React from "react";

class ArtEmPixels extends React.Component{
  render(){
    return(
      <section className="tudo">
        <header className="heder">

        <div className="imagemHeder">
            <a
                href="https://www.betrybe.com/?utm_source=google&utm_medium=cpc&utm_campaign=pmax2&utm_content=ad1&gclid=Cj0KCQjw1tGUBhDXARIsAIJx01mclCfhWYFE24Etja5PNr5ofwcfUz4PZi5MB7lluoMLlY2gmkTUqkQaAiwqEALw_wcB">
                  <img src="https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca4630bc5747_Logo.svg"
                    loading="lazy" alt="" className="image-45"></img></a>
        </div>
        <div className="textoHeder">
            <h1 id="title">Paleta de Cores</h1>
        </div>

    </header>

    <main className="main">

        <section className="conteinerCor" id="color-palette">
        </section>

        <div className="masterQuadro">            
            <section className="CotainerQudro" id="pixel-board">
            </section>
        </div>

        <div className="masterGabarito">

            <h2 id="desafio" >Desafio</h2>         

            <div className="conteinerImagSeta"  >
                <div className="btn"><i id="btE" className="fa-solid fa-circle-arrow-left imag"></i></div>
                <div><img id="imag" src="desenhos/emojo.png" alt=""></img></div>
                <div className="btn"><i id="btD" className="fa-solid fa-circle-arrow-right imag"></i></div>                       
                
            </div>
           
                      
        </div>
      

    </main>

    <section>
        <footer className="footer">
            <span>
                Projeto do modulo 1.5 da Trybe para aplicação dos conhecimentos de HTML, CSS e JavaScript.
                <br/>Produzido por Danilo Ramalho Silva 
            </span>            
            {/* <div>
                <a href="daniloti@hotmail.com"><img className="icon" src="imagem/icon/email.png" alt="" /></a>
                <a href="https://github.com/DaniloRamalhoSilva"><img className="icon" src="imagem/icon/logogithub.png"
                        alt="" /></a>
                <a href="https://daniloramalhosilva.github.io/"><img className="icon" src="imagem/icon/logoinstagram.png"
                        alt="" /></a>
                <a href="https://www.linkedin.com/in/danilo-ramalho-silva-2740b415b"><img className="icon"
                        src="imagem/icon/logolinkedin.png" alt="" /></a>
            </div> */}
        </footer>
    </section>
</section>
    );     
    
  }
}

export default ArtEmPixels;