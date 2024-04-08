import { useStore } from '../../../../storeMobx/index.ts';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { Card } from 'antd';
const { Meta } = Card;

const CategoryList = observer(() => {
  const { ProductsStore } = useStore();
  const navigate = useNavigate();

  return (
    <div className={styles.containerCategory}>
      <ul className={styles.list}>
        {ProductsStore.category?.map((item, index) => (
          <Card
            className={styles.item}
            key={index}
            hoverable
            // style={{ width: 300, height: 360 }}
            onClick={() => navigate(item.route)}
            cover={
              <img
                className={styles.img}
                alt="product category"
                src={item.img ? item.img : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}
              />
            }
          >
            <Meta className={styles.titleCard} title={item.name} />
          </Card>
        ))}
      </ul>
    </div>
  );
});

export default CategoryList;
