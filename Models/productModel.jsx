/* import firebase from 'firebase'
//creamos los productos a la DB
const producSchema = new firebase.Schema(
    {
        name: { type: String, unique: true, require: true },
        image: { type: String, required: true },
        color: { type: String, required: true },
        category: { type: String, required: true },
        created_at: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
);

const Product = firebase.model('Product', producSchema);
export default Product; */
