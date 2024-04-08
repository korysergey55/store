import { Route, Routes } from 'react-router-dom';
import { categoryRoutesArr } from './categoryRoutesArr';

const CategoryRouts = () => {
  return (
    <Routes>
      {categoryRoutesArr?.map(({ name, category, path, component: MyComponent }, index) => (
        <Route
          name={name}
          key={index}
          path={`products/:${path}`}
          render={() => <MyComponent category={category} key={index} />}
        />
      ))}
    </Routes>
  );
};

export default CategoryRouts;
