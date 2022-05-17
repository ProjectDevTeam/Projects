import { request } from "../request";

const getTheme = () => {
    return request.get('/getTheme', { baseURL: 'config' })
}
const getThemeLists = () => {
    return request.get('getThemeLists', { baseURL: 'config' })
}
export { getTheme, getThemeLists }