import Button from "./Button";
import "./ColourComponent.css";

const ColourComponent = (props) => {
    const { product, onAdd } = props;

    // Button component styling for addToCart button
    const styles = {
        backgroundColor: "#EECC51",
    };

    return (
        <div key={product.id} className="colourItemContainer">
            <div
                className="productImg"
                style={{ background: "#" + product.colour }}
            ></div>
            <div className="dataContainer">
                <h3 className="productTitle">{product.name}</h3>
                {/* Conditionallly checks if item is reduced price item, then change style */}
                <div className="unitsContainer">
                    <p>{product.volume}&nbsp;ml</p>
                    {product.id === 5 ? (
                        <p className="reducedPrice">€&nbsp;{product.price}</p>
                    ) : (
                        <p>€&nbsp;{product.price}</p>
                    )}
                </div>
            </div>
            <Button
                style={styles}
                text="Add to cart"
                onClick={() => onAdd(product)}
            />
        </div>
    );
};

export default ColourComponent;
