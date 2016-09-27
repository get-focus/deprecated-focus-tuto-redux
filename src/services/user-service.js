import fetch from './fetch';

export const loadUser = async ({id}) => {
    const response = await fetch(`http://localhost:9999/x/complex/${id}`)
    const data = await response.response.json();
    return {...data, status : response.status };
}

export const saveUser = async ({user}) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1500);
    });
    return {...user, firstName: 'Name changed by the server mwahaha'};

}

export const loadErrorUser = async ({user}) => {
  const response = await fetch(`http://localhost:9999/x/error`)
  const data = await response.response.json();

  return {...data, status : response.status };

}
