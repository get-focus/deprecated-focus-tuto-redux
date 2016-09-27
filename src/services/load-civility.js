export const loadCivility = () => Promise.resolve([{code: 'MR', label: 'M.'}, {code: 'MRS', label: 'Mme'}]);



export const loadUser = () => Promise.resolve({user: {name: "Amélie "}, localPermissions: ['test'], globalPermissions: ['truc']});
