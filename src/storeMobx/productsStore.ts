import { makeAutoObservable, observable, action, reaction, toJS, configure, computed, runInAction } from 'mobx';
import axios from 'axios';
import { toast } from 'react-toastify';

import { productsJSON } from '../sourses/dataProduct/products';
import { categoriesJSON } from '../sourses/dataProduct/categories';
import { brandsJSON } from '../sourses/dataProduct/brands';
import { manufacturJSON } from '../sourses/dataProduct/country';
import { packingJSON } from '../sourses/dataProduct/packing';

import { IcategoryJSON } from '../models/index';
import { IProduct } from '../models/index';

class ProductsStore {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [...this.products];
  productById: IProduct | null | undefined = null;
  productImage: any = {};
  editedProduct: IProduct | null | undefined = null;

  category: IcategoryJSON[] = [...categoriesJSON];
  brands: string[] = [...brandsJSON];
  manufactur: string[] = [...manufacturJSON];
  packing: string[] = [...packingJSON];

  // cart: any = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  cart: any = [];
  cartProducts: any = [];
  totalPrice: number = 0;
  orderData: any = {};

  // favoriteItems: any = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : [];
  favoriteItems: any = [];
  favoriteProducts: any = [];
  viewedProducts: any = [];

  constructor() {
    makeAutoObservable(this),
      {
        products: observable,
        filteredProducts: observable,
        productById: observable,
        productImage: observable,
        editedProduct: observable,

        category: observable,
        brands: observable,
        manufactur: observable,
        packing: observable,

        cart: observable,
        cartProducts: observable,
        totalPrice: observable,
        orderData: observable,

        favoriteItems: observable,
        favoriteProducts: observable,
        viewedProducts: observable,

        setFavoriteItemIdAction: action,
        setFavoriteProductsAction: action,
        remuveFavoriteItemAction: action,
        setAllProductsAction: action,
        setNewProductAction: action,
        setProductImageAction: action,
        setProductDetailsAction: action,
        filterProducts: action,
        setViewedProducts: action,
        setEditedProduct: action,
        resetEditedProduct: action,
        sortProducts: action,
        filterByPrice: action,
        filterByBrand: action,
        filterByManufactur: action,
        filterByPacking: action,
        resetFilters: action,
        addToCart: action,
        remuveFromCart: action,
        remuveItemFromCart: action,
        setCartProducts: action,
        resetCartProducts: action,
        setQantityCartProducts: action,
        setTotalPrice: action,
        setOrderData: action,
        getAllProductsAPI: action,
        setAllProductsAPI: action,
        createProductAPI: action,
        editProductAPI: action,
        addProductImageAPI: action,
        deleteProductAPI: action,
        setOrderDataAPI: action,
      };
    // reaction(
    //   () => this.products,
    //   _ => console.log('this.products', toJS(this.products))
    // )
  }
  //Favorite
  setFavoriteItemIdAction(data: any) {
    this.favoriteItems = [...this.favoriteItems, data];
    localStorage.setItem('favorite', JSON.stringify(this.favoriteItems));
  }
  setFavoriteProductsAction(data: any) {
    this.favoriteProducts = [...data];
  }
  remuveFavoriteItemAction(data: any) {
    this.favoriteItems = this.favoriteItems.filter((item: any) => item !== data);
    localStorage.setItem('favorite', JSON.stringify(this.favoriteItems));
  }
  //Products
  setAllProductsAction(data: any) {
    this.products = [...data];
    this.filteredProducts = [...this.products];
  }

  setNewProductAction(data: any) {
    this.products = [...this.products, data];
    this.filteredProducts = [...this.products];
  }

  setProductImageAction(data: any) {
    this.productImage = data;
  }

  setProductDetailsAction(id: string) {
    this.productById = this.products.find((item: any) => item.id === id);
  }

  filterProducts(data: any) {
    const dataProducts = data.toLowerCase().trim();
    const filtered = this.products.filter((item: any) => item.name.toLowerCase().trim().includes(dataProducts));
    this.filteredProducts = filtered;
  }

  setViewedProducts(id: string) {
    const newProduct = this.products.find((item: any) => item.id === id);
    const undublicate = this.viewedProducts?.filter((item: any) => item?.id !== newProduct?.id);
    this.viewedProducts = [...undublicate, newProduct];
  }

  setEditedProduct(id: any) {
    this.editedProduct = this.products.find((item: any) => item.id === id);
  }

  resetEditedProduct() {
    this.editedProduct = null;
  }

  //Filters
  sortProducts(data: any) {
    const sortedProducts = this.products.sort((min: any, max: any) => {
      if (data === 'name' || data === 'brand') {
        return min[data].localeCompare(max[data]);
      }
      return min[data] - max[data];
    });
    this.filteredProducts = sortedProducts;
  }

  filterByPrice(data: any) {
    const sortedProducts = this.products.filter((item: any) => item.price >= data[0] && item.price <= data[1]);
    this.filteredProducts = sortedProducts;
  }

  filterByBrand(data: any) {
    const sortedProducts = this.products.filter((item: any) => item.brand.includes(data));
    this.filteredProducts = sortedProducts;
  }

  filterByManufactur(data: any) {
    const sortedProducts = this.products.filter((item: any) => item.manufactur.includes(data));
    this.filteredProducts = sortedProducts;
  }

  filterByPacking(data: any) {
    const sortedProducts = this.products.filter((item: any) => item.weight.includes(data));
    this.filteredProducts = sortedProducts;
  }

  resetFilters() {
    this.filteredProducts = [...this.products];
  }

  //Cart
  addToCart(id: any, notification = true) {
    this.cart = [...this.cart, id];
    localStorage.setItem('cart', JSON.stringify(this.cart));

    notification &&
      toast.success('Product was added to cart', {
        theme: 'colored',
      });
  }

  remuveFromCart(id: any) {
    this.cart = this.cart.filter((cartItem: any) => cartItem !== id);
    localStorage.setItem('cart', JSON.stringify(this.cart));

    toast.info('The product has been removed from the cart', {
      theme: 'colored',
    });
  }

  remuveItemFromCart(id: any) {
    const item = this.cart.indexOf(id);
    this.cart.splice(item, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  setCartProducts(items: any) {
    this.cartProducts = [...items];
  }

  resetCartProducts() {
    this.cartProducts = [];
    this.cart = [];
  }
  setQantityCartProducts(id: string, type: string) {
    this.cartProducts?.map((item: any) => {
      if (item.id === id && type === 'increment') {
        return (item.qantity = item.qantity += 1);
      }
      if (item.id === id && type === 'decrement') {
        return (item.qantity = item.qantity -= 1);
      }
      return item;
    });
  }

  setTotalPrice() {
    const price = this.cartProducts?.reduce((acc: any, product: any) => {
      acc += Number(product?.price * product.qantity);
      return acc;
    }, 0);
    this.totalPrice = price;
  }

  //Order
  setOrderData(data: any) {
    this.orderData = data;
  }

  //API
  getAllProductsAPI = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_BASE_URL + `products/.json`);
      if (!response || response.statusText !== 'OK') {
        throw new Error();
      }
      let newProducts = [];
      for (const [key, value] of Object.entries(response.data)) {
        let ubdetedProduct: any = value;
        ubdetedProduct.id = key;
        newProducts.push(ubdetedProduct);
      }
      this.setAllProductsAction(newProducts);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  setAllProductsAPI = async (products: any) => {
    try {
      await products.forEach((product: any) => {
        const response = axios.post(process.env.REACT_APP_BASE_URL + `products/.json`, product);
        return response;
      });
    } catch (error) {
      console.log(error);
    }
  };

  createProductAPI = async (newProduct: any) => {
    try {
      const response = await axios.post(process.env.REACT_APP_BASE_URL + `products/.json`, newProduct);
      if (response && response.status === 200) {
        toast.success('New product was added in the Database!', {
          theme: 'colored',
        });
      }
      // if (response && response.status === 200) {
      //   this.addProductImageAPI(response.data.name)
      // }
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  editProductAPI = async (product: any, id: string) => {
    try {
      const response = await axios.patch(process.env.REACT_APP_BASE_URL + `products/${id}.json`, product);
      if (response && response.status === 200) {
        toast.success('Product was edited in the Database!', {
          theme: 'colored',
        });
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  addProductImageAPI = async (id: any) => {
    try {
      const response = await axios.patch(
        process.env.REACT_APP_BASE_URL + `products/${id}.json`,
        { image: this.productImage },
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      if (response && response.status === 200) return response;
    } catch (error) {
      console.log(error);
    }
  };

  deleteProductAPI = async (id: string) => {
    try {
      const response = await axios.delete(process.env.REACT_APP_BASE_URL + `products/${id}.json`);
      if (response && response.status === 200) {
        toast.success('Product was successfully delated from Database!', {
          theme: 'colored',
        });
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  //API-Order
  setOrderDataAPI = async (newOrder: any) => {
    try {
      const response = await axios.post(process.env.REACT_APP_BASE_URL + `order/.json`, newOrder);
      if (response && response.status === 200) {
        this.resetCartProducts();
        localStorage.setItem('cart', JSON.stringify(''));
        toast.success('Your order has been placed!', {
          theme: 'colored',
        });
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export default new ProductsStore();
