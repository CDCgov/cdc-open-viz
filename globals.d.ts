declare module '*.svg'

declare module '*.json'

declare module '*.csv?raw' {
    const content: string
    export default content
}

declare module '*.json?raw' {
    const content: string
    export default content
}
