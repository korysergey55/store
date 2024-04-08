import styles from './styles.module.scss';

interface IProps {
  item: string,
  changePhoto: (item: string) => string
}

const PhotoList = ({ item, changePhoto }: IProps) => {
  return (
    <li className={styles.li} onClick={() => changePhoto(item)}>
      <img className={styles.img} src={item} alt="Product photo" />
    </li>
  );
};

export default PhotoList;
