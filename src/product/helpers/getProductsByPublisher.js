import { products } from '../data/products';


export const getProductsByPublisher = ( publisher ) =>{

    const validPublishers = ['DC Comics','Marvel Comics'];
    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return products.filter( product => product.publisher === publisher );
}
