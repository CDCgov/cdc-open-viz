export const getFileExtension = (path: string): string => {
    const regex = /(?:\.([^.]+))?$/
    const outCome: RegExpExecArray | null = regex.exec(path)
    return outCome ? outCome[1] : ''
}