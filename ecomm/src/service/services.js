import axios from "axios";

const URL = 'http://localhost:3001';

class ProductService {
  static contactSvcObjRef;

  static Create() {
    if (this.contactSvcObjRef === undefined || this.contactSvcObjRef === null) {
      console.log('service created');
      this.contactSvcObjRef = new ProductService();
    }
    return this.contactSvcObjRef;
  }

  getUsersData() {
    return axios.get(URL+ '/users/');
  }
  getProductsData() {
    return axios.get(URL+ '/products/');
  }
}

export { ProductService };
