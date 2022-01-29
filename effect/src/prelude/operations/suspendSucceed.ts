import * as T from "@effect-ts/core/EFfect";
import { LazyArgument } from "../../utils/LazyArgument";
import { Effect } from "../definition/Effect";

/**
 * @ets static ets/EffectOps suspendSucceed
 */
export function suspendSucceed<R, E, A>(effect: LazyArgument<Effect<R, E, A>>, __etsTrace?: string): Effect<R, E, A> {
  return T.suspend(effect, __etsTrace);
}