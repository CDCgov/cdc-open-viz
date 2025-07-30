// utils/validation.ts
import { ValidationInputs } from '../../types/legendTypes'

export const validateInputs = (inputs: ValidationInputs): void => {
    const { runtimeData, hash, configObj, legendMemo, legendSpecialClassLastMemo } = inputs

    // Throw errors if args missing - keeping exact same error throwing behavior
    if (!runtimeData) Error('No runtime data provided')
    if (!hash) Error('No hash provided')
    if (!configObj) Error('No config object provided')
    if (!legendMemo) Error('No legend memo provided')
    if (!legendSpecialClassLastMemo) Error('No legend special class last memo provided')
}