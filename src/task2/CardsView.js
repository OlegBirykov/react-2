import PropTypes from 'prop-types';
import ProductModel from './data/ProductModel';
//import ShopCard from './ShopCard';

function CardsView(props) {
  const { cards } = props;


  return (
    <div className="t2-cards-view">
      <p>{cards[0].name}</p>
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel)).isRequired
}

export default CardsView;
