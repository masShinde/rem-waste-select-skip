export const truncateString = (str: string | undefined, maxLength: number) => {
    if(!str || !maxLength ) return '';
    if(str?.length < maxLength) return str;
    return `${str?.slice(0, maxLength)}...`
}

export const getStyleByType =(type: any) => {
    const backgroundColor = type === 'success' ? '#22bb33' : type === 'error' ? '#bb2124' : type === 'warning' ? '#f0ad4e' : '#5bc0de'
    const color = type === 'success' ? '#fff' : type === 'error' ? '#fff' : type === 'warning' ? '#fff' : '#fff'
    return {backgroundColor, color}
  }