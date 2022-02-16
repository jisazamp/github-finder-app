import SpinnerImage from '../../assets/spinning-loading.gif';

const Spinner = () => {
  return (
    <div>
      <img className='w-20 h-20' src={SpinnerImage} alt='Spinner de carga' />
    </div>
  );
};

export default Spinner;
