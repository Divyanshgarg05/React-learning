import "./Product.css";
import Price from "./Price";
function Product({ title , idx }){
    let oldPrices = ["12,495","11,990","1,599","599"];
    let newPrices = ["899","9,990","899","278"];
    let description = [
        ["8,000 DPI","5 Programmable buttons"],
       [ "intuitive surface","Designed for iPad pro"],
       [ "designed for iPad Pro","intuitive surface"],
       [ "Wireless","Optical orientation"]];
    
    return(
        <div className="Product" >
            <h4>{title}</h4>
           
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;
