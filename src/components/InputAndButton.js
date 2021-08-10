import React from 'react';
import PropTypes from 'prop-types';

class InputAndButton extends React.Component {
  render() {
    const { handleOnClick, onChange } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="input-header">
            Pesquise:
            <input
              onChange={ onChange }
              data-testid="query-input"
              type="text"
              id="input-header"
            />
          </label>
          <button
            data-testid="query-button"
            type="submit"
            onClick={ handleOnClick }
          >
            Pesquisar
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