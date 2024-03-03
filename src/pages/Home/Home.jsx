import Form from '../../Components/Form/Form';
import Card from '../../Components/Card/Card';
import data from '../../Data/projet.json';
import './Home.scss';


function Home() {
    return (
        <div id='home'>
            <h1 className='home-text'>
                Développeur Fontend
                <br />                
            </h1>
            <section id='profile'>
                <h2 className='profile-title'>Qui suis-je ?</h2>
                <div className='profile-content'>                    
                    <p className='profile-content__text'>
                        {/* description de mon profil */} 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus ducimus nulla eaque quis quia quod accusamus commodi blanditiis! Ad, iusto doloribus rerum repellendus unde similique quod nisi ipsa tempore?
                    </p>
                </div>
            </section>
            <section id="portfolio">
                <h2 className="portfolio-title">Mes réalisations</h2>
                <p className="ocr-legend">
                <div className='collection'>
                    {data.map(data => {
                        return (
                        <Card
                            key={data.id} 
                            id={data.id} 
                            title={data.title} 
                            cover={data.cover} 
                        />
                        )
                    })}
                </div>
                    {/* inclure les images des projets */} 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ut eaque. Ex deleniti, beatae atque laborum itaque soluta qui distinctio eveniet labore obcaecati alias corporis aspernatur temporibus dolor blanditiis autem!
                    
                </p>
                <div id="portfolio-cards">
                    {/* Insertion dynamique du portfolio depuis la BDD via l'API */}
                </div>
            </section> 
            <Form/>                         
        </div>
    );
}

export default Home;
