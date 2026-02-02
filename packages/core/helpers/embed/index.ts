/**
 * Embed-related helpers for COVE visualizations
 * Used for generating embed codes and managing filter customization
 */

export { generateEmbedCode, getEmbedBaseUrl, getHelperScriptUrl, getEmbedPath, isDevMode } from './embedCodeGenerator'

export {
  extractFilters,
  getDefaultFilterValue,
  initializeFilterState,
  buildFilterUrlParams,
  type FilterMetadata,
  type FilterState
} from './filterUtils'

export { getConfigUrlParam, isValidConfigUrl, isValidMessageOrigin } from './urlValidation'

// Import embed helper to initialize iframe resizing
// This runs immediately when imported
import './embedHelper.js'
