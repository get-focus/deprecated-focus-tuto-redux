import builder from 'focus-core/util/url/builder';

const moviesRoot = `http://localhost:8080/movies/`;

export default {
    create: builder(moviesRoot, 'POST'),
    load: builder(moviesRoot + '${id}', 'GET'),
    search: builder(moviesRoot + 'search?listState.skip=${skip}&listState.sortDesc=${sortDesc}&listState.top=${top}', 'POST'),
    update: builder(moviesRoot + '${id}', 'PUT')
};
