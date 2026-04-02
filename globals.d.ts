declare module '*.svg'
declare module '*.svg?url' {
    const content: string
    export default content
}

declare module '*.svg?raw' {
    const content: string
    export default content
}

declare module '*.json'

declare module '*.csv?raw' {
    const content: string
    export default content
}

declare module '*.json?raw' {
    const content: string
    export default content
}
