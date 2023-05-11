// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import './Cards.css'

function Cards(props) {
    return (
        <div>
            <div class="grid-container">
                {
                    props.item.map(products => {

                        return (
                            <div className='card'>
                                <img src={products.image} className="card-img-top" alt='...' />
                                <div className="card-body">
                                    <h5 className="card-title">{products.name}</h5>
                                    <h3>{products.price}</h3>
                                    <a href="#" className="btn btn-primary">Add Cart</a>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </div>
    );
}

export default Cards;