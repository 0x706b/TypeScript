/**
 * @tsplus type type-and-static/A
 */
export interface A {}

/**
 * @tsplus type type-and-static/AOps
 */
export interface AOps {}

export const A: AOps = {}

/**
 * @tsplus type type-and-static/AAspects
 */
export interface AAspects {}

/**
 * @tsplus static type-and-static/AOps $
 */
export const AAspects: AAspects = {}

A.$;