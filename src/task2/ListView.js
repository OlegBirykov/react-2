import PropTypes from 'prop-types';
import ProductModel from './data/ProductModel';
//import ShopItem from './ShopItem';

function ListView(props) {
  const { items } = props;


  return (
    <div className="t2-list-view">
      <p>{items[0].name}</p>
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel)).isRequired
}

export default ListView;
