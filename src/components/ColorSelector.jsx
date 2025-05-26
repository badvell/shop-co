import './ColorSelector.scss';

const ColorSelector = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <div className='color__selector'>
      <p className='color__selector-text'>Select Colors</p>
      <div className='color__content'>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onSelectColor(color)}
            className={`color__button ${
              selectedColor === color ? 'selected' : ''
            }`}
            style={{ backgroundColor: color }}
          >
            {selectedColor === color ? '✓' : null}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
