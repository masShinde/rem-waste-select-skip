export const truncateString = (str: string | undefined, maxLength: number) => {
    if(!str || !maxLength ) return '';
    if(str?.length < maxLength) return str;
    return `${str?.slice(0, maxLength)}...`
}