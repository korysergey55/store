import { useEffect, lazy } from 'react';
import { Suspense } from 'react';
import { useStore } from '../../storeMobx';
import { observer } from 'mobx-react';

import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRoute';
import CategoryRouts from '../../routes/CategoryRouts';
import { pathes } from '../../utils/pathes';

import Header from '../../containers/header/Header';
import Baner from '../../containers/baner/Baner';
import Loader from '../../containers/Loader/Loader';
import Footer from '../../containers/footer/Footer';
import { categoryRoutesArr } from '../../routes/categoryRoutesArr';

const HomePage = lazy(() => import('../../pages/homePage/HomePage'));
const ProductsPage = lazy(() => import('../productsPage/ProductsPage'));
const ProductDatailsPage = lazy(() => import('../productDetailsPage/ProductDatailPage'));
const ContactsPage = lazy(() => import('../../pages/contactsPage/contactsPage'));
const FavoritePage = lazy(() => import('../../pages/favoritePage/FavoritePage'));
const CartPage = lazy(() => import('../../pages/cartPage/CartPage'));
const OrderPage = lazy(() => import('../../pages/orderPage/OrderPage'));
const AdminPage = lazy(() => import('../adminPage/AdminPage'));
const LoginPage = lazy(() => import('../auth/LoginPage.js'));
const NotFoundPage = lazy(() => import('../notFoundComponent/NotFoundComponent'));

const CategoryTest = lazy(() => import('../../Components/productsPage/products/categoryList/CategoryList'));

const App = observer(() => {
  const { ProductsStore } = useStore();
  const { products } = ProductsStore;

  useEffect(() => {
    // ProductsStore.setAllProductsAPI(products)
    ProductsStore.getAllProductsAPI();
  }, []);

  return (
    <div className="appContainer">
      <Header />
      <Baner />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={pathes.home} element={<HomePage />} />
          <Route path={pathes.products} element={<ProductsPage />}>
            {/* <Route path={pathes.products + '/all'} element={<CategoryTest />} /> */}
            {categoryRoutesArr?.map(({ name, category, path, component: MyComponent }, index) => (
              <Route key={index} path={`products${path}`} element={<MyComponent />} />
            ))}
          </Route>
          <Route path={pathes.productDetails} element={<ProductDatailsPage />} />
          <Route path={pathes.contacts} element={<ContactsPage />} />
          <Route path={pathes.favorite} element={<FavoritePage />} />
          <Route path={pathes.cart} element={<CartPage />} />
          <Route path={pathes.order} element={<OrderPage />} />
          <Route path={pathes.admin} element={<PrivateRoute element={<AdminPage />} />} />
          <Route path={pathes.login} element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
});

export default App;
