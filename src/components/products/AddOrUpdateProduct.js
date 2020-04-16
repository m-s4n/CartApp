import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/category/categoryActions";
import { saveProduct } from "../../redux/actions/product/productActions";
import { getProducts } from "../../redux/actions/product/productActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products, // state daki products ' da çekebilirsin
  categories, // kategorileride çekebilirsin
  getProducts, // getProduct metodunuda çekebiliriz
  getCategories, // Parametrelerle neye ihtiyacın varsa çek
  history,
  saveProduct,
  currentCategory, // ve saveProduct metoduda çekilir
  ...props // props ları genişletiyoruz
}) {
  // Bir ürün ekleyeceğimiz zaman bazi değerleri sabit getirmek istiyoruz
  //propslardaki product
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});
  // state deki productı setProduct fonksiyonu ile set edebilirim.
  // set state yerine bu kullnıldı
  useEffect(() => {
    // state den gelen kategorinin lenti eğer 0 sa reduxdan gelen getCategories çalıştır
    if (categories.length === 0) {
      // direkt link ile gittyse categorilei doldur.
      getCategories();
      getProducts(currentCategory);
    }
    setProduct({ ...props.product });
    // setProduct operasyonu ile state ki product nasnesine bu şekilde set ettik
  }, [props.product]); // props.product tı izle o yerleşince bunu bitir.

  function handleChange(event) {
    const { name, value } = event.target;
    validate(name, value);
    // previousProduct ne demek  state mizdeki 18. satırdaki o product
    setProduct((previousProduct) => ({
      ...previousProduct, // o prodcutı al üzerine yaz
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
    // Handle change içinde bir kural çalıştırabilirim
    
  }

  function validate(name, value) {
    if (name === "productName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors, //kopyala
        productName: "Ürün ismi olmalıdır", // Yeni alanda oluşturabilirsin veye değiştirebilrsin
      }));
    }
    else{
      setErrors((previousErrors) => ({
        ...previousErrors, //kopyala
        productName: '', // Yeni alanda oluşturabilirsin veye değiştirebilrsin
      }));
    }
  }
  function handleSave(event) {
    //ekle butanuna tıklanırsa
    event.preventDefault();
    saveProduct(product).then(() => {
      // Redux dan gelen saveProduct kullan
      history.push("/"); // Kaydettikten sonra şu kodu çalıştır Yönlendirme 
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    ></ProductDetail>
  );
}
export function getProductById(products, productId) {
  let product = products.find((product) => product.id == productId) || null;
  return product;
}
const mapDispatchToProps = {
  getCategories: getCategories, // Bu fonksiyonları bağla
  saveProduct: saveProduct,
  getProducts:getProducts
};

// Redux daki stateleri bağlıcaz
//ownProps class da da kullanılabilir
// nedir bu componentlerin kendi içinde barındırdığı propslar
//Yani güncellemek istediğimde querystring  vericem
//query string i bunla okuyacam.
function mapStateToProps(state, ownProps) {
  //Parametrelere bak productId yi çek.
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {}; // ilk kez eklenecekse boş

  return {
    product: product, // propslara n
    products: state.productListReducer,
    categories: state.categoryListReducer,
    currentCategory: state.changeCategoryReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
