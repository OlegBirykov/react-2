import PropTypes from 'prop-types';
import ProductModel from './data/ProductModel';
//import ShopItem from './ShopItem';

function ListView(props) {
  const { item } = props;


  return (
    <div className="t2-list-view">
    </div>
  );
}

ListView.propTypes = {
  item: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel)).isRequired
}

export default ListView;
