/* eslint-disable */
import * as T from "@effect-ts/core/Effect"
import * as Tp from "@effect-ts/core/Collections/Immutable/Tuple"
import { Effect } from "../definition/Effect.js"
import { LazyArgument } from "../../utils/LazyArgument.js"

/**
 * Sequentially zips this effect with the specified effect
 *
 * @ets operator ets/Effect |
 * @ets fluent ets/Effect orElse
 */
export function orElse_<R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: LazyArgument<Effect<R2, E2, A2>>, __etsTrace?: string) {
    return T.orElse_(self, that, __etsTrace)
}