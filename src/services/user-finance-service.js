import fetch from './fetch';

export const loadUserFinance = async ({id}) => {
    const response = await fetch(`http://localhost:9999/x/complex/${id}`)
    const data = await response.response.json();
    return {...data, status : response.status };
}

export const saveUserFinance = async ({user}) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1500);
    });
    return {...finance, status : response.status };

}
