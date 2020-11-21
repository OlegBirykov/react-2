import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ProectList from './ProectList';

function Portfolio(props) {
  const { proects, filters } = props;
  
  return (
    <div className="task-1">
      <Toolbar 
        filters={filters}
        selected="All" 
      />
      <ProectList proects={proects} />
    </div>
  );
}

Portfolio.propTypes = {
  proects: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string,
      category: PropTypes.string
    })
  ).isRequired,

  filters: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Portfolio;
