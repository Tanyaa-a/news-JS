import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7841d021d51c457cb61156dcd252fe20', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
