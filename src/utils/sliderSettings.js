import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  nextArrow: (
    <button type="button">
      <FontAwesomeIcon icon={faChevronDown} color="white" />
    </button>
  ),
  prevArrow: (
    <button type="button">
      <FontAwesomeIcon icon={faChevronUp} color="white" />
    </button>
  ),
};
