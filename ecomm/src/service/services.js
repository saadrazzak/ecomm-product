import axios from "axios";

const URL = 'http://localhost:3001/users/';

class ProductService {
  static contactSvcObjRef;

  static Create() {
    if (this.contactSvcObjRef === undefined || this.contactSvcObjRef === null) {
      console.log('service created');
      this.contactSvcObjRef = new ProductService();
    }
    return this.contactSvcObjRef;
  }

  getUsers() {
    return axios.get(URL);
  }
}

export { ProductService };
