export const isAuthenticate = (user) => {
    if(!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user'));
}