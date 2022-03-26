import instance from './instance';

type User = {
    email: string,
    password: string
}
export const signup = (user: User) => {
    const url = `/signup`;
    return instance.post(url, user);
}
export const signin = (user: User) => {
    const url = `/signin`;
    return instance.post(url, user);
}