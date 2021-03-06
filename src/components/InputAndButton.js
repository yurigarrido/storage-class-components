import React from 'react';
import PropTypes from 'prop-types';

class InputAndButton extends React.Component {
  render() {
    const { handleOnClick, onChange } = this.props;
    return (
      <div className="search-bar">
        <form autoComplete="off">
          <label htmlFor="input-header">
            <span className="none">Pesquise:</span>
            <input
              onChange={ onChange }
              data-testid="query-input"
              type="text"
              id="input-header"
              placeholder="Buscar produtos"
              autoComplete={ false }
            />
          </label>
          <button
            className="search-button"
            data-testid="query-button"
            type="submit"
            onClick={ handleOnClick }
          >
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    );
  }
}

export default InputAndButton;

InputAndButton.propTypes = {
  handleOnClick: PropTypes.func,
  onChange: PropTypes.func,
};

InputAndButton.defaultProps = {
  handleOnClick: undefined,
  onChange: undefined,
};
