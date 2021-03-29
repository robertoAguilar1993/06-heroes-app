import { heroes } from '../data/heroes';


export const getHeroesByPublisher = (publisher) => {
    const validatePublisher  = ['DC Comics', 'Marvel Comics'];

    if (!validatePublisher.includes(publisher)) {
    throw new Error(`publisher ${publisher} no es valido`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}
