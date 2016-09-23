import builder from 'focus-core/util/url/builder';

const commonRoot = `http://localhost:8080/common/`;

export default {
    /* loads */
    search: builder(commonRoot + 'search?listState.skip=${skip}&listState.top=${top}', 'POST')
};
