
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model StatsValue
 * 
 */
export type StatsValue = $Result.DefaultSelection<Prisma.$StatsValuePayload>
/**
 * Model VotingHistory
 * 
 */
export type VotingHistory = $Result.DefaultSelection<Prisma.$VotingHistoryPayload>
/**
 * Model Proposal
 * 
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model Votes
 * 
 */
export type Votes = $Result.DefaultSelection<Prisma.$VotesPayload>
/**
 * Model Council
 * 
 */
export type Council = $Result.DefaultSelection<Prisma.$CouncilPayload>
/**
 * Model Delegate
 * 
 */
export type Delegate = $Result.DefaultSelection<Prisma.$DelegatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProposalStatus: {
  Cancelled: 'Cancelled',
  Rejected: 'Rejected',
  Passed: 'Passed',
  Processing: 'Processing'
};

export type ProposalStatus = (typeof ProposalStatus)[keyof typeof ProposalStatus]


export const ProposalType: {
  Democracy: 'Democracy',
  CouncilMotion: 'CouncilMotion',
  CouncilExternalMotion: 'CouncilExternalMotion'
};

export type ProposalType = (typeof ProposalType)[keyof typeof ProposalType]

}

export type ProposalStatus = $Enums.ProposalStatus

export const ProposalStatus: typeof $Enums.ProposalStatus

export type ProposalType = $Enums.ProposalType

export const ProposalType: typeof $Enums.ProposalType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Proposals
 * const proposals = await prisma.proposal.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Proposals
   * const proposals = await prisma.proposal.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.votes`: Exposes CRUD operations for the **Votes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.votes.findMany()
    * ```
    */
  get votes(): Prisma.VotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.council`: Exposes CRUD operations for the **Council** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Councils
    * const councils = await prisma.council.findMany()
    * ```
    */
  get council(): Prisma.CouncilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delegate`: Exposes CRUD operations for the **Delegate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Delegates
    * const delegates = await prisma.delegate.findMany()
    * ```
    */
  get delegate(): Prisma.DelegateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Proposal: 'Proposal',
    Votes: 'Votes',
    Council: 'Council',
    Delegate: 'Delegate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "proposal" | "votes" | "council" | "delegate"
      txIsolationLevel: never
    }
    model: {
      Proposal: {
        payload: Prisma.$ProposalPayload<ExtArgs>
        fields: Prisma.ProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findFirst: {
            args: Prisma.ProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findMany: {
            args: Prisma.ProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          create: {
            args: Prisma.ProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          createMany: {
            args: Prisma.ProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          update: {
            args: Prisma.ProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.ProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProposalFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProposalAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      Votes: {
        payload: Prisma.$VotesPayload<ExtArgs>
        fields: Prisma.VotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          findFirst: {
            args: Prisma.VotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          findMany: {
            args: Prisma.VotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>[]
          }
          create: {
            args: Prisma.VotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          createMany: {
            args: Prisma.VotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          update: {
            args: Prisma.VotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          deleteMany: {
            args: Prisma.VotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          aggregate: {
            args: Prisma.VotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVotes>
          }
          groupBy: {
            args: Prisma.VotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VotesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VotesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VotesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VotesCountArgs<ExtArgs>
            result: $Utils.Optional<VotesCountAggregateOutputType> | number
          }
        }
      }
      Council: {
        payload: Prisma.$CouncilPayload<ExtArgs>
        fields: Prisma.CouncilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouncilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouncilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouncilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouncilPayload>
          }
          findFirst: {
            args: Prisma.CouncilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouncilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouncilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouncilPayload>
          }
          findMany: {
            args: Prisma.CouncilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouncilPayload>[]
          }
          create: {
            args: Prisma.CouncilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouncilPayload>
          }
          createMany: {
            args: Prisma.CouncilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CouncilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouncilPayload>
          }
          update: {
            args: Prisma.CouncilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouncilPayload>
          }
          deleteMany: {
            args: Prisma.CouncilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouncilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouncilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouncilPayload>
          }
          aggregate: {
            args: Prisma.CouncilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCouncil>
          }
          groupBy: {
            args: Prisma.CouncilGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouncilGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CouncilFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CouncilAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CouncilCountArgs<ExtArgs>
            result: $Utils.Optional<CouncilCountAggregateOutputType> | number
          }
        }
      }
      Delegate: {
        payload: Prisma.$DelegatePayload<ExtArgs>
        fields: Prisma.DelegateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DelegateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DelegateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          findFirst: {
            args: Prisma.DelegateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DelegateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          findMany: {
            args: Prisma.DelegateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>[]
          }
          create: {
            args: Prisma.DelegateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          createMany: {
            args: Prisma.DelegateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DelegateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          update: {
            args: Prisma.DelegateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          deleteMany: {
            args: Prisma.DelegateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DelegateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DelegateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegatePayload>
          }
          aggregate: {
            args: Prisma.DelegateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelegate>
          }
          groupBy: {
            args: Prisma.DelegateGroupByArgs<ExtArgs>
            result: $Utils.Optional<DelegateGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DelegateFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DelegateAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DelegateCountArgs<ExtArgs>
            result: $Utils.Optional<DelegateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    proposal?: ProposalOmit
    votes?: VotesOmit
    council?: CouncilOmit
    delegate?: DelegateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model StatsValue
   */





  export type StatsValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    motionsProposed?: boolean
    participation?: boolean
    termStart?: boolean
  }, ExtArgs["result"]["statsValue"]>



  export type StatsValueSelectScalar = {
    motionsProposed?: boolean
    participation?: boolean
    termStart?: boolean
  }

  export type StatsValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"motionsProposed" | "participation" | "termStart", ExtArgs["result"]["statsValue"]>

  export type $StatsValuePayload = {
    name: "StatsValue"
    objects: {}
    scalars: {
      motionsProposed: number
      participation: string
      termStart: string
    }
    composites: {}
  }

  type StatsValueGetPayload<S extends boolean | null | undefined | StatsValueDefaultArgs> = $Result.GetResult<Prisma.$StatsValuePayload, S>





  /**
   * Fields of the StatsValue model
   */
  interface StatsValueFieldRefs {
    readonly motionsProposed: FieldRef<"StatsValue", 'Int'>
    readonly participation: FieldRef<"StatsValue", 'String'>
    readonly termStart: FieldRef<"StatsValue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StatsValue without action
   */
  export type StatsValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatsValue
     */
    select?: StatsValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatsValue
     */
    omit?: StatsValueOmit<ExtArgs> | null
  }


  /**
   * Model VotingHistory
   */





  export type VotingHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    proposalId?: boolean
    title?: boolean
    date?: boolean
    vote?: boolean
  }, ExtArgs["result"]["votingHistory"]>



  export type VotingHistorySelectScalar = {
    proposalId?: boolean
    title?: boolean
    date?: boolean
    vote?: boolean
  }

  export type VotingHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"proposalId" | "title" | "date" | "vote", ExtArgs["result"]["votingHistory"]>

  export type $VotingHistoryPayload = {
    name: "VotingHistory"
    objects: {}
    scalars: {
      proposalId: string
      title: string
      date: string
      vote: boolean
    }
    composites: {}
  }

  type VotingHistoryGetPayload<S extends boolean | null | undefined | VotingHistoryDefaultArgs> = $Result.GetResult<Prisma.$VotingHistoryPayload, S>





  /**
   * Fields of the VotingHistory model
   */
  interface VotingHistoryFieldRefs {
    readonly proposalId: FieldRef<"VotingHistory", 'String'>
    readonly title: FieldRef<"VotingHistory", 'String'>
    readonly date: FieldRef<"VotingHistory", 'String'>
    readonly vote: FieldRef<"VotingHistory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VotingHistory without action
   */
  export type VotingHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VotingHistory
     */
    select?: VotingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VotingHistory
     */
    omit?: VotingHistoryOmit<ExtArgs> | null
  }


  /**
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalAvgAggregateOutputType = {
    idx: number | null
    threshold: number | null
    ayePercentage: number | null
    nayPercentage: number | null
    totalVotes: number | null
  }

  export type ProposalSumAggregateOutputType = {
    idx: number | null
    threshold: number | null
    ayePercentage: number | null
    nayPercentage: number | null
    totalVotes: number | null
  }

  export type ProposalMinAggregateOutputType = {
    id: string | null
    idx: number | null
    extrinsicId: string | null
    preimage: string | null
    deposit: string | null
    title: string | null
    summary: string | null
    description: string | null
    link: string | null
    successful: boolean | null
    proposer: string | null
    proposalType: $Enums.ProposalType | null
    createdAt: Date | null
    updatedAt: Date | null
    hash: string | null
    status: $Enums.ProposalStatus | null
    method: string | null
    section: string | null
    threshold: number | null
    ayePercentage: number | null
    nayPercentage: number | null
    totalVotes: number | null
  }

  export type ProposalMaxAggregateOutputType = {
    id: string | null
    idx: number | null
    extrinsicId: string | null
    preimage: string | null
    deposit: string | null
    title: string | null
    summary: string | null
    description: string | null
    link: string | null
    successful: boolean | null
    proposer: string | null
    proposalType: $Enums.ProposalType | null
    createdAt: Date | null
    updatedAt: Date | null
    hash: string | null
    status: $Enums.ProposalStatus | null
    method: string | null
    section: string | null
    threshold: number | null
    ayePercentage: number | null
    nayPercentage: number | null
    totalVotes: number | null
  }

  export type ProposalCountAggregateOutputType = {
    id: number
    idx: number
    extrinsicId: number
    preimage: number
    deposit: number
    title: number
    summary: number
    description: number
    link: number
    successful: number
    proposer: number
    proposalType: number
    createdAt: number
    updatedAt: number
    hash: number
    status: number
    method: number
    section: number
    args: number
    threshold: number
    ayePercentage: number
    nayPercentage: number
    totalVotes: number
    _all: number
  }


  export type ProposalAvgAggregateInputType = {
    idx?: true
    threshold?: true
    ayePercentage?: true
    nayPercentage?: true
    totalVotes?: true
  }

  export type ProposalSumAggregateInputType = {
    idx?: true
    threshold?: true
    ayePercentage?: true
    nayPercentage?: true
    totalVotes?: true
  }

  export type ProposalMinAggregateInputType = {
    id?: true
    idx?: true
    extrinsicId?: true
    preimage?: true
    deposit?: true
    title?: true
    summary?: true
    description?: true
    link?: true
    successful?: true
    proposer?: true
    proposalType?: true
    createdAt?: true
    updatedAt?: true
    hash?: true
    status?: true
    method?: true
    section?: true
    threshold?: true
    ayePercentage?: true
    nayPercentage?: true
    totalVotes?: true
  }

  export type ProposalMaxAggregateInputType = {
    id?: true
    idx?: true
    extrinsicId?: true
    preimage?: true
    deposit?: true
    title?: true
    summary?: true
    description?: true
    link?: true
    successful?: true
    proposer?: true
    proposalType?: true
    createdAt?: true
    updatedAt?: true
    hash?: true
    status?: true
    method?: true
    section?: true
    threshold?: true
    ayePercentage?: true
    nayPercentage?: true
    totalVotes?: true
  }

  export type ProposalCountAggregateInputType = {
    id?: true
    idx?: true
    extrinsicId?: true
    preimage?: true
    deposit?: true
    title?: true
    summary?: true
    description?: true
    link?: true
    successful?: true
    proposer?: true
    proposalType?: true
    createdAt?: true
    updatedAt?: true
    hash?: true
    status?: true
    method?: true
    section?: true
    args?: true
    threshold?: true
    ayePercentage?: true
    nayPercentage?: true
    totalVotes?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposal to aggregate.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type ProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithAggregationInput | ProposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: ProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _avg?: ProposalAvgAggregateInputType
    _sum?: ProposalSumAggregateInputType
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id: string
    idx: number
    extrinsicId: string
    preimage: string
    deposit: string
    title: string
    summary: string
    description: string
    link: string
    successful: boolean
    proposer: string
    proposalType: $Enums.ProposalType
    createdAt: Date
    updatedAt: Date
    hash: string | null
    status: $Enums.ProposalStatus
    method: string
    section: string
    args: JsonValue | null
    threshold: number
    ayePercentage: number | null
    nayPercentage: number | null
    totalVotes: number
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idx?: boolean
    extrinsicId?: boolean
    preimage?: boolean
    deposit?: boolean
    title?: boolean
    summary?: boolean
    description?: boolean
    link?: boolean
    successful?: boolean
    proposer?: boolean
    proposalType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hash?: boolean
    status?: boolean
    method?: boolean
    section?: boolean
    args?: boolean
    threshold?: boolean
    ayePercentage?: boolean
    nayPercentage?: boolean
    totalVotes?: boolean
  }, ExtArgs["result"]["proposal"]>



  export type ProposalSelectScalar = {
    id?: boolean
    idx?: boolean
    extrinsicId?: boolean
    preimage?: boolean
    deposit?: boolean
    title?: boolean
    summary?: boolean
    description?: boolean
    link?: boolean
    successful?: boolean
    proposer?: boolean
    proposalType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hash?: boolean
    status?: boolean
    method?: boolean
    section?: boolean
    args?: boolean
    threshold?: boolean
    ayePercentage?: boolean
    nayPercentage?: boolean
    totalVotes?: boolean
  }

  export type ProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idx" | "extrinsicId" | "preimage" | "deposit" | "title" | "summary" | "description" | "link" | "successful" | "proposer" | "proposalType" | "createdAt" | "updatedAt" | "hash" | "status" | "method" | "section" | "args" | "threshold" | "ayePercentage" | "nayPercentage" | "totalVotes", ExtArgs["result"]["proposal"]>

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idx: number
      extrinsicId: string
      preimage: string
      deposit: string
      title: string
      summary: string
      description: string
      link: string
      successful: boolean
      proposer: string
      proposalType: $Enums.ProposalType
      createdAt: Date
      updatedAt: Date
      hash: string | null
      status: $Enums.ProposalStatus
      method: string
      section: string
      args: Prisma.JsonValue | null
      threshold: number
      ayePercentage: number | null
      nayPercentage: number | null
      totalVotes: number
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = $Result.GetResult<Prisma.$ProposalPayload, S>

  type ProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface ProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposal'], meta: { name: 'Proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {ProposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalFindUniqueArgs>(args: SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalFindFirstArgs>(args?: SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalFindManyArgs>(args?: SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposal.
     * @param {ProposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends ProposalCreateArgs>(args: SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposals.
     * @param {ProposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalCreateManyArgs>(args?: SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Proposal.
     * @param {ProposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends ProposalDeleteArgs>(args: SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposal.
     * @param {ProposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalUpdateArgs>(args: SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposals.
     * @param {ProposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalDeleteManyArgs>(args?: SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalUpdateManyArgs>(args: SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proposal.
     * @param {ProposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends ProposalUpsertArgs>(args: SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * @param {ProposalFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const proposal = await prisma.proposal.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProposalFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Proposal.
     * @param {ProposalAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const proposal = await prisma.proposal.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProposalAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends ProposalCountArgs>(
      args?: Subset<T, ProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposal model
   */
  readonly fields: ProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proposal model
   */
  interface ProposalFieldRefs {
    readonly id: FieldRef<"Proposal", 'String'>
    readonly idx: FieldRef<"Proposal", 'Int'>
    readonly extrinsicId: FieldRef<"Proposal", 'String'>
    readonly preimage: FieldRef<"Proposal", 'String'>
    readonly deposit: FieldRef<"Proposal", 'String'>
    readonly title: FieldRef<"Proposal", 'String'>
    readonly summary: FieldRef<"Proposal", 'String'>
    readonly description: FieldRef<"Proposal", 'String'>
    readonly link: FieldRef<"Proposal", 'String'>
    readonly successful: FieldRef<"Proposal", 'Boolean'>
    readonly proposer: FieldRef<"Proposal", 'String'>
    readonly proposalType: FieldRef<"Proposal", 'ProposalType'>
    readonly createdAt: FieldRef<"Proposal", 'DateTime'>
    readonly updatedAt: FieldRef<"Proposal", 'DateTime'>
    readonly hash: FieldRef<"Proposal", 'String'>
    readonly status: FieldRef<"Proposal", 'ProposalStatus'>
    readonly method: FieldRef<"Proposal", 'String'>
    readonly section: FieldRef<"Proposal", 'String'>
    readonly args: FieldRef<"Proposal", 'Json'>
    readonly threshold: FieldRef<"Proposal", 'Int'>
    readonly ayePercentage: FieldRef<"Proposal", 'Int'>
    readonly nayPercentage: FieldRef<"Proposal", 'Int'>
    readonly totalVotes: FieldRef<"Proposal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Proposal findUnique
   */
  export type ProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findUniqueOrThrow
   */
  export type ProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findFirst
   */
  export type ProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findFirstOrThrow
   */
  export type ProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findMany
   */
  export type ProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter, which Proposals to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal create
   */
  export type ProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data needed to create a Proposal.
     */
    data: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
  }

  /**
   * Proposal createMany
   */
  export type ProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
  }

  /**
   * Proposal update
   */
  export type ProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data needed to update a Proposal.
     */
    data: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
    /**
     * Choose, which Proposal to update.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal updateMany
   */
  export type ProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
  }

  /**
   * Proposal upsert
   */
  export type ProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The filter to search for the Proposal to update in case it exists.
     */
    where: ProposalWhereUniqueInput
    /**
     * In case the Proposal found by the `where` argument doesn't exist, create a new Proposal with this data.
     */
    create: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
    /**
     * In case the Proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
  }

  /**
   * Proposal delete
   */
  export type ProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter which Proposal to delete.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal deleteMany
   */
  export type ProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposals to delete
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to delete.
     */
    limit?: number
  }

  /**
   * Proposal findRaw
   */
  export type ProposalFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Proposal aggregateRaw
   */
  export type ProposalAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Proposal without action
   */
  export type ProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
  }


  /**
   * Model Votes
   */

  export type AggregateVotes = {
    _count: VotesCountAggregateOutputType | null
    _avg: VotesAvgAggregateOutputType | null
    _sum: VotesSumAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  export type VotesAvgAggregateOutputType = {
    refIdx: number | null
    pId: number | null
    amount: number | null
  }

  export type VotesSumAggregateOutputType = {
    refIdx: number | null
    pId: number | null
    amount: number | null
  }

  export type VotesMinAggregateOutputType = {
    id: string | null
    refIdx: number | null
    pId: number | null
    voter: string | null
    voteAye: boolean | null
    conviction: string | null
    amount: number | null
  }

  export type VotesMaxAggregateOutputType = {
    id: string | null
    refIdx: number | null
    pId: number | null
    voter: string | null
    voteAye: boolean | null
    conviction: string | null
    amount: number | null
  }

  export type VotesCountAggregateOutputType = {
    id: number
    refIdx: number
    pId: number
    voter: number
    voteAye: number
    conviction: number
    amount: number
    _all: number
  }


  export type VotesAvgAggregateInputType = {
    refIdx?: true
    pId?: true
    amount?: true
  }

  export type VotesSumAggregateInputType = {
    refIdx?: true
    pId?: true
    amount?: true
  }

  export type VotesMinAggregateInputType = {
    id?: true
    refIdx?: true
    pId?: true
    voter?: true
    voteAye?: true
    conviction?: true
    amount?: true
  }

  export type VotesMaxAggregateInputType = {
    id?: true
    refIdx?: true
    pId?: true
    voter?: true
    voteAye?: true
    conviction?: true
    amount?: true
  }

  export type VotesCountAggregateInputType = {
    id?: true
    refIdx?: true
    pId?: true
    voter?: true
    voteAye?: true
    conviction?: true
    amount?: true
    _all?: true
  }

  export type VotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to aggregate.
     */
    where?: VotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VotesOrderByWithRelationInput | VotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VotesMaxAggregateInputType
  }

  export type GetVotesAggregateType<T extends VotesAggregateArgs> = {
        [P in keyof T & keyof AggregateVotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVotes[P]>
      : GetScalarType<T[P], AggregateVotes[P]>
  }




  export type VotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotesWhereInput
    orderBy?: VotesOrderByWithAggregationInput | VotesOrderByWithAggregationInput[]
    by: VotesScalarFieldEnum[] | VotesScalarFieldEnum
    having?: VotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VotesCountAggregateInputType | true
    _avg?: VotesAvgAggregateInputType
    _sum?: VotesSumAggregateInputType
    _min?: VotesMinAggregateInputType
    _max?: VotesMaxAggregateInputType
  }

  export type VotesGroupByOutputType = {
    id: string
    refIdx: number
    pId: number
    voter: string
    voteAye: boolean
    conviction: string | null
    amount: number
    _count: VotesCountAggregateOutputType | null
    _avg: VotesAvgAggregateOutputType | null
    _sum: VotesSumAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  type GetVotesGroupByPayload<T extends VotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VotesGroupByOutputType[P]>
            : GetScalarType<T[P], VotesGroupByOutputType[P]>
        }
      >
    >


  export type VotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refIdx?: boolean
    pId?: boolean
    voter?: boolean
    voteAye?: boolean
    conviction?: boolean
    amount?: boolean
  }, ExtArgs["result"]["votes"]>



  export type VotesSelectScalar = {
    id?: boolean
    refIdx?: boolean
    pId?: boolean
    voter?: boolean
    voteAye?: boolean
    conviction?: boolean
    amount?: boolean
  }

  export type VotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "refIdx" | "pId" | "voter" | "voteAye" | "conviction" | "amount", ExtArgs["result"]["votes"]>

  export type $VotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Votes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      refIdx: number
      pId: number
      voter: string
      voteAye: boolean
      conviction: string | null
      amount: number
    }, ExtArgs["result"]["votes"]>
    composites: {}
  }

  type VotesGetPayload<S extends boolean | null | undefined | VotesDefaultArgs> = $Result.GetResult<Prisma.$VotesPayload, S>

  type VotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VotesCountAggregateInputType | true
    }

  export interface VotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Votes'], meta: { name: 'Votes' } }
    /**
     * Find zero or one Votes that matches the filter.
     * @param {VotesFindUniqueArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VotesFindUniqueArgs>(args: SelectSubset<T, VotesFindUniqueArgs<ExtArgs>>): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Votes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VotesFindUniqueOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VotesFindUniqueOrThrowArgs>(args: SelectSubset<T, VotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesFindFirstArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VotesFindFirstArgs>(args?: SelectSubset<T, VotesFindFirstArgs<ExtArgs>>): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Votes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesFindFirstOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VotesFindFirstOrThrowArgs>(args?: SelectSubset<T, VotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.votes.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.votes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const votesWithIdOnly = await prisma.votes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VotesFindManyArgs>(args?: SelectSubset<T, VotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Votes.
     * @param {VotesCreateArgs} args - Arguments to create a Votes.
     * @example
     * // Create one Votes
     * const Votes = await prisma.votes.create({
     *   data: {
     *     // ... data to create a Votes
     *   }
     * })
     * 
     */
    create<T extends VotesCreateArgs>(args: SelectSubset<T, VotesCreateArgs<ExtArgs>>): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VotesCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const votes = await prisma.votes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VotesCreateManyArgs>(args?: SelectSubset<T, VotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Votes.
     * @param {VotesDeleteArgs} args - Arguments to delete one Votes.
     * @example
     * // Delete one Votes
     * const Votes = await prisma.votes.delete({
     *   where: {
     *     // ... filter to delete one Votes
     *   }
     * })
     * 
     */
    delete<T extends VotesDeleteArgs>(args: SelectSubset<T, VotesDeleteArgs<ExtArgs>>): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Votes.
     * @param {VotesUpdateArgs} args - Arguments to update one Votes.
     * @example
     * // Update one Votes
     * const votes = await prisma.votes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VotesUpdateArgs>(args: SelectSubset<T, VotesUpdateArgs<ExtArgs>>): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VotesDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.votes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VotesDeleteManyArgs>(args?: SelectSubset<T, VotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const votes = await prisma.votes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VotesUpdateManyArgs>(args: SelectSubset<T, VotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Votes.
     * @param {VotesUpsertArgs} args - Arguments to update or create a Votes.
     * @example
     * // Update or create a Votes
     * const votes = await prisma.votes.upsert({
     *   create: {
     *     // ... data to create a Votes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Votes we want to update
     *   }
     * })
     */
    upsert<T extends VotesUpsertArgs>(args: SelectSubset<T, VotesUpsertArgs<ExtArgs>>): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * @param {VotesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const votes = await prisma.votes.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VotesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Votes.
     * @param {VotesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const votes = await prisma.votes.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VotesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.votes.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VotesCountArgs>(
      args?: Subset<T, VotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VotesAggregateArgs>(args: Subset<T, VotesAggregateArgs>): Prisma.PrismaPromise<GetVotesAggregateType<T>>

    /**
     * Group by Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VotesGroupByArgs['orderBy'] }
        : { orderBy?: VotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Votes model
   */
  readonly fields: VotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Votes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Votes model
   */
  interface VotesFieldRefs {
    readonly id: FieldRef<"Votes", 'String'>
    readonly refIdx: FieldRef<"Votes", 'Int'>
    readonly pId: FieldRef<"Votes", 'Int'>
    readonly voter: FieldRef<"Votes", 'String'>
    readonly voteAye: FieldRef<"Votes", 'Boolean'>
    readonly conviction: FieldRef<"Votes", 'String'>
    readonly amount: FieldRef<"Votes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Votes findUnique
   */
  export type VotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Votes
     */
    omit?: VotesOmit<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where: VotesWhereUniqueInput
  }

  /**
   * Votes findUniqueOrThrow
   */
  export type VotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Votes
     */
    omit?: VotesOmit<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where: VotesWhereUniqueInput
  }

  /**
   * Votes findFirst
   */
  export type VotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Votes
     */
    omit?: VotesOmit<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VotesOrderByWithRelationInput | VotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * Votes findFirstOrThrow
   */
  export type VotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Votes
     */
    omit?: VotesOmit<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VotesOrderByWithRelationInput | VotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * Votes findMany
   */
  export type VotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Votes
     */
    omit?: VotesOmit<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VotesOrderByWithRelationInput | VotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * Votes create
   */
  export type VotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Votes
     */
    omit?: VotesOmit<ExtArgs> | null
    /**
     * The data needed to create a Votes.
     */
    data: XOR<VotesCreateInput, VotesUncheckedCreateInput>
  }

  /**
   * Votes createMany
   */
  export type VotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VotesCreateManyInput | VotesCreateManyInput[]
  }

  /**
   * Votes update
   */
  export type VotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Votes
     */
    omit?: VotesOmit<ExtArgs> | null
    /**
     * The data needed to update a Votes.
     */
    data: XOR<VotesUpdateInput, VotesUncheckedUpdateInput>
    /**
     * Choose, which Votes to update.
     */
    where: VotesWhereUniqueInput
  }

  /**
   * Votes updateMany
   */
  export type VotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VotesUpdateManyMutationInput, VotesUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VotesWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Votes upsert
   */
  export type VotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Votes
     */
    omit?: VotesOmit<ExtArgs> | null
    /**
     * The filter to search for the Votes to update in case it exists.
     */
    where: VotesWhereUniqueInput
    /**
     * In case the Votes found by the `where` argument doesn't exist, create a new Votes with this data.
     */
    create: XOR<VotesCreateInput, VotesUncheckedCreateInput>
    /**
     * In case the Votes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VotesUpdateInput, VotesUncheckedUpdateInput>
  }

  /**
   * Votes delete
   */
  export type VotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Votes
     */
    omit?: VotesOmit<ExtArgs> | null
    /**
     * Filter which Votes to delete.
     */
    where: VotesWhereUniqueInput
  }

  /**
   * Votes deleteMany
   */
  export type VotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VotesWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Votes findRaw
   */
  export type VotesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Votes aggregateRaw
   */
  export type VotesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Votes without action
   */
  export type VotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Votes
     */
    omit?: VotesOmit<ExtArgs> | null
  }


  /**
   * Model Council
   */

  export type AggregateCouncil = {
    _count: CouncilCountAggregateOutputType | null
    _min: CouncilMinAggregateOutputType | null
    _max: CouncilMaxAggregateOutputType | null
  }

  export type CouncilMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    backing: string | null
    votes: string | null
    description: string | null
    hasDiscord: boolean | null
    hasTwitter: boolean | null
    twitter: string | null
    discord: string | null
    verified: boolean | null
  }

  export type CouncilMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    backing: string | null
    votes: string | null
    description: string | null
    hasDiscord: boolean | null
    hasTwitter: boolean | null
    twitter: string | null
    discord: string | null
    verified: boolean | null
  }

  export type CouncilCountAggregateOutputType = {
    id: number
    name: number
    address: number
    backing: number
    votes: number
    description: number
    hasDiscord: number
    hasTwitter: number
    twitter: number
    discord: number
    verified: number
    _all: number
  }


  export type CouncilMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    backing?: true
    votes?: true
    description?: true
    hasDiscord?: true
    hasTwitter?: true
    twitter?: true
    discord?: true
    verified?: true
  }

  export type CouncilMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    backing?: true
    votes?: true
    description?: true
    hasDiscord?: true
    hasTwitter?: true
    twitter?: true
    discord?: true
    verified?: true
  }

  export type CouncilCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    backing?: true
    votes?: true
    description?: true
    hasDiscord?: true
    hasTwitter?: true
    twitter?: true
    discord?: true
    verified?: true
    _all?: true
  }

  export type CouncilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Council to aggregate.
     */
    where?: CouncilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Councils to fetch.
     */
    orderBy?: CouncilOrderByWithRelationInput | CouncilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouncilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Councils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Councils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Councils
    **/
    _count?: true | CouncilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouncilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouncilMaxAggregateInputType
  }

  export type GetCouncilAggregateType<T extends CouncilAggregateArgs> = {
        [P in keyof T & keyof AggregateCouncil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouncil[P]>
      : GetScalarType<T[P], AggregateCouncil[P]>
  }




  export type CouncilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouncilWhereInput
    orderBy?: CouncilOrderByWithAggregationInput | CouncilOrderByWithAggregationInput[]
    by: CouncilScalarFieldEnum[] | CouncilScalarFieldEnum
    having?: CouncilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouncilCountAggregateInputType | true
    _min?: CouncilMinAggregateInputType
    _max?: CouncilMaxAggregateInputType
  }

  export type CouncilGroupByOutputType = {
    id: string
    name: string
    address: string
    backing: string
    votes: string
    description: string
    hasDiscord: boolean
    hasTwitter: boolean
    twitter: string | null
    discord: string | null
    verified: boolean
    _count: CouncilCountAggregateOutputType | null
    _min: CouncilMinAggregateOutputType | null
    _max: CouncilMaxAggregateOutputType | null
  }

  type GetCouncilGroupByPayload<T extends CouncilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouncilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouncilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouncilGroupByOutputType[P]>
            : GetScalarType<T[P], CouncilGroupByOutputType[P]>
        }
      >
    >


  export type CouncilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    backing?: boolean
    votes?: boolean
    description?: boolean
    hasDiscord?: boolean
    hasTwitter?: boolean
    twitter?: boolean
    discord?: boolean
    verified?: boolean
    stats?: boolean | StatsValueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["council"]>



  export type CouncilSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    backing?: boolean
    votes?: boolean
    description?: boolean
    hasDiscord?: boolean
    hasTwitter?: boolean
    twitter?: boolean
    discord?: boolean
    verified?: boolean
  }

  export type CouncilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "backing" | "votes" | "description" | "hasDiscord" | "hasTwitter" | "twitter" | "discord" | "verified" | "stats", ExtArgs["result"]["council"]>
  export type CouncilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CouncilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Council"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      backing: string
      votes: string
      description: string
      hasDiscord: boolean
      hasTwitter: boolean
      twitter: string | null
      discord: string | null
      verified: boolean
    }, ExtArgs["result"]["council"]>
    composites: {
      stats: Prisma.$StatsValuePayload | null
    }
  }

  type CouncilGetPayload<S extends boolean | null | undefined | CouncilDefaultArgs> = $Result.GetResult<Prisma.$CouncilPayload, S>

  type CouncilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouncilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouncilCountAggregateInputType | true
    }

  export interface CouncilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Council'], meta: { name: 'Council' } }
    /**
     * Find zero or one Council that matches the filter.
     * @param {CouncilFindUniqueArgs} args - Arguments to find a Council
     * @example
     * // Get one Council
     * const council = await prisma.council.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouncilFindUniqueArgs>(args: SelectSubset<T, CouncilFindUniqueArgs<ExtArgs>>): Prisma__CouncilClient<$Result.GetResult<Prisma.$CouncilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Council that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouncilFindUniqueOrThrowArgs} args - Arguments to find a Council
     * @example
     * // Get one Council
     * const council = await prisma.council.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouncilFindUniqueOrThrowArgs>(args: SelectSubset<T, CouncilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouncilClient<$Result.GetResult<Prisma.$CouncilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Council that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouncilFindFirstArgs} args - Arguments to find a Council
     * @example
     * // Get one Council
     * const council = await prisma.council.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouncilFindFirstArgs>(args?: SelectSubset<T, CouncilFindFirstArgs<ExtArgs>>): Prisma__CouncilClient<$Result.GetResult<Prisma.$CouncilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Council that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouncilFindFirstOrThrowArgs} args - Arguments to find a Council
     * @example
     * // Get one Council
     * const council = await prisma.council.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouncilFindFirstOrThrowArgs>(args?: SelectSubset<T, CouncilFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouncilClient<$Result.GetResult<Prisma.$CouncilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Councils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouncilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Councils
     * const councils = await prisma.council.findMany()
     * 
     * // Get first 10 Councils
     * const councils = await prisma.council.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const councilWithIdOnly = await prisma.council.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouncilFindManyArgs>(args?: SelectSubset<T, CouncilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouncilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Council.
     * @param {CouncilCreateArgs} args - Arguments to create a Council.
     * @example
     * // Create one Council
     * const Council = await prisma.council.create({
     *   data: {
     *     // ... data to create a Council
     *   }
     * })
     * 
     */
    create<T extends CouncilCreateArgs>(args: SelectSubset<T, CouncilCreateArgs<ExtArgs>>): Prisma__CouncilClient<$Result.GetResult<Prisma.$CouncilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Councils.
     * @param {CouncilCreateManyArgs} args - Arguments to create many Councils.
     * @example
     * // Create many Councils
     * const council = await prisma.council.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouncilCreateManyArgs>(args?: SelectSubset<T, CouncilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Council.
     * @param {CouncilDeleteArgs} args - Arguments to delete one Council.
     * @example
     * // Delete one Council
     * const Council = await prisma.council.delete({
     *   where: {
     *     // ... filter to delete one Council
     *   }
     * })
     * 
     */
    delete<T extends CouncilDeleteArgs>(args: SelectSubset<T, CouncilDeleteArgs<ExtArgs>>): Prisma__CouncilClient<$Result.GetResult<Prisma.$CouncilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Council.
     * @param {CouncilUpdateArgs} args - Arguments to update one Council.
     * @example
     * // Update one Council
     * const council = await prisma.council.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouncilUpdateArgs>(args: SelectSubset<T, CouncilUpdateArgs<ExtArgs>>): Prisma__CouncilClient<$Result.GetResult<Prisma.$CouncilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Councils.
     * @param {CouncilDeleteManyArgs} args - Arguments to filter Councils to delete.
     * @example
     * // Delete a few Councils
     * const { count } = await prisma.council.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouncilDeleteManyArgs>(args?: SelectSubset<T, CouncilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Councils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouncilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Councils
     * const council = await prisma.council.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouncilUpdateManyArgs>(args: SelectSubset<T, CouncilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Council.
     * @param {CouncilUpsertArgs} args - Arguments to update or create a Council.
     * @example
     * // Update or create a Council
     * const council = await prisma.council.upsert({
     *   create: {
     *     // ... data to create a Council
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Council we want to update
     *   }
     * })
     */
    upsert<T extends CouncilUpsertArgs>(args: SelectSubset<T, CouncilUpsertArgs<ExtArgs>>): Prisma__CouncilClient<$Result.GetResult<Prisma.$CouncilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Councils that matches the filter.
     * @param {CouncilFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const council = await prisma.council.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CouncilFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Council.
     * @param {CouncilAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const council = await prisma.council.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CouncilAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Councils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouncilCountArgs} args - Arguments to filter Councils to count.
     * @example
     * // Count the number of Councils
     * const count = await prisma.council.count({
     *   where: {
     *     // ... the filter for the Councils we want to count
     *   }
     * })
    **/
    count<T extends CouncilCountArgs>(
      args?: Subset<T, CouncilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouncilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Council.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouncilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouncilAggregateArgs>(args: Subset<T, CouncilAggregateArgs>): Prisma.PrismaPromise<GetCouncilAggregateType<T>>

    /**
     * Group by Council.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouncilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouncilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouncilGroupByArgs['orderBy'] }
        : { orderBy?: CouncilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouncilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouncilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Council model
   */
  readonly fields: CouncilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Council.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouncilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Council model
   */
  interface CouncilFieldRefs {
    readonly id: FieldRef<"Council", 'String'>
    readonly name: FieldRef<"Council", 'String'>
    readonly address: FieldRef<"Council", 'String'>
    readonly backing: FieldRef<"Council", 'String'>
    readonly votes: FieldRef<"Council", 'String'>
    readonly description: FieldRef<"Council", 'String'>
    readonly hasDiscord: FieldRef<"Council", 'Boolean'>
    readonly hasTwitter: FieldRef<"Council", 'Boolean'>
    readonly twitter: FieldRef<"Council", 'String'>
    readonly discord: FieldRef<"Council", 'String'>
    readonly verified: FieldRef<"Council", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Council findUnique
   */
  export type CouncilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Council
     */
    select?: CouncilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Council
     */
    omit?: CouncilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouncilInclude<ExtArgs> | null
    /**
     * Filter, which Council to fetch.
     */
    where: CouncilWhereUniqueInput
  }

  /**
   * Council findUniqueOrThrow
   */
  export type CouncilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Council
     */
    select?: CouncilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Council
     */
    omit?: CouncilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouncilInclude<ExtArgs> | null
    /**
     * Filter, which Council to fetch.
     */
    where: CouncilWhereUniqueInput
  }

  /**
   * Council findFirst
   */
  export type CouncilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Council
     */
    select?: CouncilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Council
     */
    omit?: CouncilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouncilInclude<ExtArgs> | null
    /**
     * Filter, which Council to fetch.
     */
    where?: CouncilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Councils to fetch.
     */
    orderBy?: CouncilOrderByWithRelationInput | CouncilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Councils.
     */
    cursor?: CouncilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Councils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Councils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Councils.
     */
    distinct?: CouncilScalarFieldEnum | CouncilScalarFieldEnum[]
  }

  /**
   * Council findFirstOrThrow
   */
  export type CouncilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Council
     */
    select?: CouncilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Council
     */
    omit?: CouncilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouncilInclude<ExtArgs> | null
    /**
     * Filter, which Council to fetch.
     */
    where?: CouncilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Councils to fetch.
     */
    orderBy?: CouncilOrderByWithRelationInput | CouncilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Councils.
     */
    cursor?: CouncilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Councils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Councils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Councils.
     */
    distinct?: CouncilScalarFieldEnum | CouncilScalarFieldEnum[]
  }

  /**
   * Council findMany
   */
  export type CouncilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Council
     */
    select?: CouncilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Council
     */
    omit?: CouncilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouncilInclude<ExtArgs> | null
    /**
     * Filter, which Councils to fetch.
     */
    where?: CouncilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Councils to fetch.
     */
    orderBy?: CouncilOrderByWithRelationInput | CouncilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Councils.
     */
    cursor?: CouncilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Councils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Councils.
     */
    skip?: number
    distinct?: CouncilScalarFieldEnum | CouncilScalarFieldEnum[]
  }

  /**
   * Council create
   */
  export type CouncilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Council
     */
    select?: CouncilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Council
     */
    omit?: CouncilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouncilInclude<ExtArgs> | null
    /**
     * The data needed to create a Council.
     */
    data: XOR<CouncilCreateInput, CouncilUncheckedCreateInput>
  }

  /**
   * Council createMany
   */
  export type CouncilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Councils.
     */
    data: CouncilCreateManyInput | CouncilCreateManyInput[]
  }

  /**
   * Council update
   */
  export type CouncilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Council
     */
    select?: CouncilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Council
     */
    omit?: CouncilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouncilInclude<ExtArgs> | null
    /**
     * The data needed to update a Council.
     */
    data: XOR<CouncilUpdateInput, CouncilUncheckedUpdateInput>
    /**
     * Choose, which Council to update.
     */
    where: CouncilWhereUniqueInput
  }

  /**
   * Council updateMany
   */
  export type CouncilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Councils.
     */
    data: XOR<CouncilUpdateManyMutationInput, CouncilUncheckedUpdateManyInput>
    /**
     * Filter which Councils to update
     */
    where?: CouncilWhereInput
    /**
     * Limit how many Councils to update.
     */
    limit?: number
  }

  /**
   * Council upsert
   */
  export type CouncilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Council
     */
    select?: CouncilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Council
     */
    omit?: CouncilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouncilInclude<ExtArgs> | null
    /**
     * The filter to search for the Council to update in case it exists.
     */
    where: CouncilWhereUniqueInput
    /**
     * In case the Council found by the `where` argument doesn't exist, create a new Council with this data.
     */
    create: XOR<CouncilCreateInput, CouncilUncheckedCreateInput>
    /**
     * In case the Council was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouncilUpdateInput, CouncilUncheckedUpdateInput>
  }

  /**
   * Council delete
   */
  export type CouncilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Council
     */
    select?: CouncilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Council
     */
    omit?: CouncilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouncilInclude<ExtArgs> | null
    /**
     * Filter which Council to delete.
     */
    where: CouncilWhereUniqueInput
  }

  /**
   * Council deleteMany
   */
  export type CouncilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Councils to delete
     */
    where?: CouncilWhereInput
    /**
     * Limit how many Councils to delete.
     */
    limit?: number
  }

  /**
   * Council findRaw
   */
  export type CouncilFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Council aggregateRaw
   */
  export type CouncilAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Council without action
   */
  export type CouncilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Council
     */
    select?: CouncilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Council
     */
    omit?: CouncilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouncilInclude<ExtArgs> | null
  }


  /**
   * Model Delegate
   */

  export type AggregateDelegate = {
    _count: DelegateCountAggregateOutputType | null
    _avg: DelegateAvgAggregateOutputType | null
    _sum: DelegateSumAggregateOutputType | null
    _min: DelegateMinAggregateOutputType | null
    _max: DelegateMaxAggregateOutputType | null
  }

  export type DelegateAvgAggregateOutputType = {
    totalDelegators: number | null
    participation: number | null
  }

  export type DelegateSumAggregateOutputType = {
    totalDelegators: number | null
    participation: number | null
  }

  export type DelegateMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    votingPower: string | null
    totalDelegators: number | null
    participation: number | null
    description: string | null
    twitter: string | null
    discord: string | null
  }

  export type DelegateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    votingPower: string | null
    totalDelegators: number | null
    participation: number | null
    description: string | null
    twitter: string | null
    discord: string | null
  }

  export type DelegateCountAggregateOutputType = {
    id: number
    name: number
    address: number
    votingPower: number
    totalDelegators: number
    participation: number
    description: number
    twitter: number
    discord: number
    _all: number
  }


  export type DelegateAvgAggregateInputType = {
    totalDelegators?: true
    participation?: true
  }

  export type DelegateSumAggregateInputType = {
    totalDelegators?: true
    participation?: true
  }

  export type DelegateMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    votingPower?: true
    totalDelegators?: true
    participation?: true
    description?: true
    twitter?: true
    discord?: true
  }

  export type DelegateMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    votingPower?: true
    totalDelegators?: true
    participation?: true
    description?: true
    twitter?: true
    discord?: true
  }

  export type DelegateCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    votingPower?: true
    totalDelegators?: true
    participation?: true
    description?: true
    twitter?: true
    discord?: true
    _all?: true
  }

  export type DelegateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delegate to aggregate.
     */
    where?: DelegateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegates to fetch.
     */
    orderBy?: DelegateOrderByWithRelationInput | DelegateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DelegateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Delegates
    **/
    _count?: true | DelegateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DelegateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DelegateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DelegateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DelegateMaxAggregateInputType
  }

  export type GetDelegateAggregateType<T extends DelegateAggregateArgs> = {
        [P in keyof T & keyof AggregateDelegate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelegate[P]>
      : GetScalarType<T[P], AggregateDelegate[P]>
  }




  export type DelegateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegateWhereInput
    orderBy?: DelegateOrderByWithAggregationInput | DelegateOrderByWithAggregationInput[]
    by: DelegateScalarFieldEnum[] | DelegateScalarFieldEnum
    having?: DelegateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DelegateCountAggregateInputType | true
    _avg?: DelegateAvgAggregateInputType
    _sum?: DelegateSumAggregateInputType
    _min?: DelegateMinAggregateInputType
    _max?: DelegateMaxAggregateInputType
  }

  export type DelegateGroupByOutputType = {
    id: string
    name: string
    address: string
    votingPower: string
    totalDelegators: number
    participation: number
    description: string
    twitter: string | null
    discord: string | null
    _count: DelegateCountAggregateOutputType | null
    _avg: DelegateAvgAggregateOutputType | null
    _sum: DelegateSumAggregateOutputType | null
    _min: DelegateMinAggregateOutputType | null
    _max: DelegateMaxAggregateOutputType | null
  }

  type GetDelegateGroupByPayload<T extends DelegateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DelegateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DelegateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DelegateGroupByOutputType[P]>
            : GetScalarType<T[P], DelegateGroupByOutputType[P]>
        }
      >
    >


  export type DelegateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    votingPower?: boolean
    totalDelegators?: boolean
    participation?: boolean
    description?: boolean
    twitter?: boolean
    discord?: boolean
    votingHistory?: boolean | VotingHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delegate"]>



  export type DelegateSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    votingPower?: boolean
    totalDelegators?: boolean
    participation?: boolean
    description?: boolean
    twitter?: boolean
    discord?: boolean
  }

  export type DelegateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "votingPower" | "totalDelegators" | "participation" | "description" | "twitter" | "discord" | "votingHistory", ExtArgs["result"]["delegate"]>
  export type DelegateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DelegatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delegate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      votingPower: string
      totalDelegators: number
      participation: number
      description: string
      twitter: string | null
      discord: string | null
    }, ExtArgs["result"]["delegate"]>
    composites: {
      votingHistory: Prisma.$VotingHistoryPayload[]
    }
  }

  type DelegateGetPayload<S extends boolean | null | undefined | DelegateDefaultArgs> = $Result.GetResult<Prisma.$DelegatePayload, S>

  type DelegateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DelegateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DelegateCountAggregateInputType | true
    }

  export interface DelegateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delegate'], meta: { name: 'Delegate' } }
    /**
     * Find zero or one Delegate that matches the filter.
     * @param {DelegateFindUniqueArgs} args - Arguments to find a Delegate
     * @example
     * // Get one Delegate
     * const delegate = await prisma.delegate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DelegateFindUniqueArgs>(args: SelectSubset<T, DelegateFindUniqueArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delegate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DelegateFindUniqueOrThrowArgs} args - Arguments to find a Delegate
     * @example
     * // Get one Delegate
     * const delegate = await prisma.delegate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DelegateFindUniqueOrThrowArgs>(args: SelectSubset<T, DelegateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delegate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateFindFirstArgs} args - Arguments to find a Delegate
     * @example
     * // Get one Delegate
     * const delegate = await prisma.delegate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DelegateFindFirstArgs>(args?: SelectSubset<T, DelegateFindFirstArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delegate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateFindFirstOrThrowArgs} args - Arguments to find a Delegate
     * @example
     * // Get one Delegate
     * const delegate = await prisma.delegate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DelegateFindFirstOrThrowArgs>(args?: SelectSubset<T, DelegateFindFirstOrThrowArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Delegates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Delegates
     * const delegates = await prisma.delegate.findMany()
     * 
     * // Get first 10 Delegates
     * const delegates = await prisma.delegate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const delegateWithIdOnly = await prisma.delegate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DelegateFindManyArgs>(args?: SelectSubset<T, DelegateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delegate.
     * @param {DelegateCreateArgs} args - Arguments to create a Delegate.
     * @example
     * // Create one Delegate
     * const Delegate = await prisma.delegate.create({
     *   data: {
     *     // ... data to create a Delegate
     *   }
     * })
     * 
     */
    create<T extends DelegateCreateArgs>(args: SelectSubset<T, DelegateCreateArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Delegates.
     * @param {DelegateCreateManyArgs} args - Arguments to create many Delegates.
     * @example
     * // Create many Delegates
     * const delegate = await prisma.delegate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DelegateCreateManyArgs>(args?: SelectSubset<T, DelegateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Delegate.
     * @param {DelegateDeleteArgs} args - Arguments to delete one Delegate.
     * @example
     * // Delete one Delegate
     * const Delegate = await prisma.delegate.delete({
     *   where: {
     *     // ... filter to delete one Delegate
     *   }
     * })
     * 
     */
    delete<T extends DelegateDeleteArgs>(args: SelectSubset<T, DelegateDeleteArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delegate.
     * @param {DelegateUpdateArgs} args - Arguments to update one Delegate.
     * @example
     * // Update one Delegate
     * const delegate = await prisma.delegate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DelegateUpdateArgs>(args: SelectSubset<T, DelegateUpdateArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Delegates.
     * @param {DelegateDeleteManyArgs} args - Arguments to filter Delegates to delete.
     * @example
     * // Delete a few Delegates
     * const { count } = await prisma.delegate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DelegateDeleteManyArgs>(args?: SelectSubset<T, DelegateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Delegates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Delegates
     * const delegate = await prisma.delegate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DelegateUpdateManyArgs>(args: SelectSubset<T, DelegateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Delegate.
     * @param {DelegateUpsertArgs} args - Arguments to update or create a Delegate.
     * @example
     * // Update or create a Delegate
     * const delegate = await prisma.delegate.upsert({
     *   create: {
     *     // ... data to create a Delegate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delegate we want to update
     *   }
     * })
     */
    upsert<T extends DelegateUpsertArgs>(args: SelectSubset<T, DelegateUpsertArgs<ExtArgs>>): Prisma__DelegateClient<$Result.GetResult<Prisma.$DelegatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Delegates that matches the filter.
     * @param {DelegateFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const delegate = await prisma.delegate.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DelegateFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Delegate.
     * @param {DelegateAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const delegate = await prisma.delegate.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DelegateAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Delegates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateCountArgs} args - Arguments to filter Delegates to count.
     * @example
     * // Count the number of Delegates
     * const count = await prisma.delegate.count({
     *   where: {
     *     // ... the filter for the Delegates we want to count
     *   }
     * })
    **/
    count<T extends DelegateCountArgs>(
      args?: Subset<T, DelegateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DelegateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delegate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DelegateAggregateArgs>(args: Subset<T, DelegateAggregateArgs>): Prisma.PrismaPromise<GetDelegateAggregateType<T>>

    /**
     * Group by Delegate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DelegateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DelegateGroupByArgs['orderBy'] }
        : { orderBy?: DelegateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DelegateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDelegateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delegate model
   */
  readonly fields: DelegateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delegate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DelegateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Delegate model
   */
  interface DelegateFieldRefs {
    readonly id: FieldRef<"Delegate", 'String'>
    readonly name: FieldRef<"Delegate", 'String'>
    readonly address: FieldRef<"Delegate", 'String'>
    readonly votingPower: FieldRef<"Delegate", 'String'>
    readonly totalDelegators: FieldRef<"Delegate", 'Int'>
    readonly participation: FieldRef<"Delegate", 'Int'>
    readonly description: FieldRef<"Delegate", 'String'>
    readonly twitter: FieldRef<"Delegate", 'String'>
    readonly discord: FieldRef<"Delegate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Delegate findUnique
   */
  export type DelegateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter, which Delegate to fetch.
     */
    where: DelegateWhereUniqueInput
  }

  /**
   * Delegate findUniqueOrThrow
   */
  export type DelegateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter, which Delegate to fetch.
     */
    where: DelegateWhereUniqueInput
  }

  /**
   * Delegate findFirst
   */
  export type DelegateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter, which Delegate to fetch.
     */
    where?: DelegateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegates to fetch.
     */
    orderBy?: DelegateOrderByWithRelationInput | DelegateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Delegates.
     */
    cursor?: DelegateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Delegates.
     */
    distinct?: DelegateScalarFieldEnum | DelegateScalarFieldEnum[]
  }

  /**
   * Delegate findFirstOrThrow
   */
  export type DelegateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter, which Delegate to fetch.
     */
    where?: DelegateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegates to fetch.
     */
    orderBy?: DelegateOrderByWithRelationInput | DelegateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Delegates.
     */
    cursor?: DelegateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Delegates.
     */
    distinct?: DelegateScalarFieldEnum | DelegateScalarFieldEnum[]
  }

  /**
   * Delegate findMany
   */
  export type DelegateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter, which Delegates to fetch.
     */
    where?: DelegateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegates to fetch.
     */
    orderBy?: DelegateOrderByWithRelationInput | DelegateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Delegates.
     */
    cursor?: DelegateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegates.
     */
    skip?: number
    distinct?: DelegateScalarFieldEnum | DelegateScalarFieldEnum[]
  }

  /**
   * Delegate create
   */
  export type DelegateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * The data needed to create a Delegate.
     */
    data: XOR<DelegateCreateInput, DelegateUncheckedCreateInput>
  }

  /**
   * Delegate createMany
   */
  export type DelegateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Delegates.
     */
    data: DelegateCreateManyInput | DelegateCreateManyInput[]
  }

  /**
   * Delegate update
   */
  export type DelegateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * The data needed to update a Delegate.
     */
    data: XOR<DelegateUpdateInput, DelegateUncheckedUpdateInput>
    /**
     * Choose, which Delegate to update.
     */
    where: DelegateWhereUniqueInput
  }

  /**
   * Delegate updateMany
   */
  export type DelegateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Delegates.
     */
    data: XOR<DelegateUpdateManyMutationInput, DelegateUncheckedUpdateManyInput>
    /**
     * Filter which Delegates to update
     */
    where?: DelegateWhereInput
    /**
     * Limit how many Delegates to update.
     */
    limit?: number
  }

  /**
   * Delegate upsert
   */
  export type DelegateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * The filter to search for the Delegate to update in case it exists.
     */
    where: DelegateWhereUniqueInput
    /**
     * In case the Delegate found by the `where` argument doesn't exist, create a new Delegate with this data.
     */
    create: XOR<DelegateCreateInput, DelegateUncheckedCreateInput>
    /**
     * In case the Delegate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DelegateUpdateInput, DelegateUncheckedUpdateInput>
  }

  /**
   * Delegate delete
   */
  export type DelegateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
    /**
     * Filter which Delegate to delete.
     */
    where: DelegateWhereUniqueInput
  }

  /**
   * Delegate deleteMany
   */
  export type DelegateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delegates to delete
     */
    where?: DelegateWhereInput
    /**
     * Limit how many Delegates to delete.
     */
    limit?: number
  }

  /**
   * Delegate findRaw
   */
  export type DelegateFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Delegate aggregateRaw
   */
  export type DelegateAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Delegate without action
   */
  export type DelegateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegate
     */
    select?: DelegateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegate
     */
    omit?: DelegateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ProposalScalarFieldEnum: {
    id: 'id',
    idx: 'idx',
    extrinsicId: 'extrinsicId',
    preimage: 'preimage',
    deposit: 'deposit',
    title: 'title',
    summary: 'summary',
    description: 'description',
    link: 'link',
    successful: 'successful',
    proposer: 'proposer',
    proposalType: 'proposalType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hash: 'hash',
    status: 'status',
    method: 'method',
    section: 'section',
    args: 'args',
    threshold: 'threshold',
    ayePercentage: 'ayePercentage',
    nayPercentage: 'nayPercentage',
    totalVotes: 'totalVotes'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const VotesScalarFieldEnum: {
    id: 'id',
    refIdx: 'refIdx',
    pId: 'pId',
    voter: 'voter',
    voteAye: 'voteAye',
    conviction: 'conviction',
    amount: 'amount'
  };

  export type VotesScalarFieldEnum = (typeof VotesScalarFieldEnum)[keyof typeof VotesScalarFieldEnum]


  export const CouncilScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    backing: 'backing',
    votes: 'votes',
    description: 'description',
    hasDiscord: 'hasDiscord',
    hasTwitter: 'hasTwitter',
    twitter: 'twitter',
    discord: 'discord',
    verified: 'verified'
  };

  export type CouncilScalarFieldEnum = (typeof CouncilScalarFieldEnum)[keyof typeof CouncilScalarFieldEnum]


  export const DelegateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    votingPower: 'votingPower',
    totalDelegators: 'totalDelegators',
    participation: 'participation',
    description: 'description',
    twitter: 'twitter',
    discord: 'discord'
  };

  export type DelegateScalarFieldEnum = (typeof DelegateScalarFieldEnum)[keyof typeof DelegateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ProposalType'
   */
  export type EnumProposalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalType'>
    


  /**
   * Reference to a field of type 'ProposalType[]'
   */
  export type ListEnumProposalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ProposalStatus'
   */
  export type EnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus'>
    


  /**
   * Reference to a field of type 'ProposalStatus[]'
   */
  export type ListEnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id?: StringFilter<"Proposal"> | string
    idx?: IntFilter<"Proposal"> | number
    extrinsicId?: StringFilter<"Proposal"> | string
    preimage?: StringFilter<"Proposal"> | string
    deposit?: StringFilter<"Proposal"> | string
    title?: StringFilter<"Proposal"> | string
    summary?: StringFilter<"Proposal"> | string
    description?: StringFilter<"Proposal"> | string
    link?: StringFilter<"Proposal"> | string
    successful?: BoolFilter<"Proposal"> | boolean
    proposer?: StringFilter<"Proposal"> | string
    proposalType?: EnumProposalTypeFilter<"Proposal"> | $Enums.ProposalType
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    hash?: StringNullableFilter<"Proposal"> | string | null
    status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    method?: StringFilter<"Proposal"> | string
    section?: StringFilter<"Proposal"> | string
    args?: JsonNullableFilter<"Proposal">
    threshold?: IntFilter<"Proposal"> | number
    ayePercentage?: IntNullableFilter<"Proposal"> | number | null
    nayPercentage?: IntNullableFilter<"Proposal"> | number | null
    totalVotes?: IntFilter<"Proposal"> | number
  }

  export type ProposalOrderByWithRelationInput = {
    id?: SortOrder
    idx?: SortOrder
    extrinsicId?: SortOrder
    preimage?: SortOrder
    deposit?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    link?: SortOrder
    successful?: SortOrder
    proposer?: SortOrder
    proposalType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hash?: SortOrder
    status?: SortOrder
    method?: SortOrder
    section?: SortOrder
    args?: SortOrder
    threshold?: SortOrder
    ayePercentage?: SortOrder
    nayPercentage?: SortOrder
    totalVotes?: SortOrder
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    idx?: IntFilter<"Proposal"> | number
    extrinsicId?: StringFilter<"Proposal"> | string
    preimage?: StringFilter<"Proposal"> | string
    deposit?: StringFilter<"Proposal"> | string
    title?: StringFilter<"Proposal"> | string
    summary?: StringFilter<"Proposal"> | string
    description?: StringFilter<"Proposal"> | string
    link?: StringFilter<"Proposal"> | string
    successful?: BoolFilter<"Proposal"> | boolean
    proposer?: StringFilter<"Proposal"> | string
    proposalType?: EnumProposalTypeFilter<"Proposal"> | $Enums.ProposalType
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    hash?: StringNullableFilter<"Proposal"> | string | null
    status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    method?: StringFilter<"Proposal"> | string
    section?: StringFilter<"Proposal"> | string
    args?: JsonNullableFilter<"Proposal">
    threshold?: IntFilter<"Proposal"> | number
    ayePercentage?: IntNullableFilter<"Proposal"> | number | null
    nayPercentage?: IntNullableFilter<"Proposal"> | number | null
    totalVotes?: IntFilter<"Proposal"> | number
  }, "id">

  export type ProposalOrderByWithAggregationInput = {
    id?: SortOrder
    idx?: SortOrder
    extrinsicId?: SortOrder
    preimage?: SortOrder
    deposit?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    link?: SortOrder
    successful?: SortOrder
    proposer?: SortOrder
    proposalType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hash?: SortOrder
    status?: SortOrder
    method?: SortOrder
    section?: SortOrder
    args?: SortOrder
    threshold?: SortOrder
    ayePercentage?: SortOrder
    nayPercentage?: SortOrder
    totalVotes?: SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _avg?: ProposalAvgOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
    _sum?: ProposalSumOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proposal"> | string
    idx?: IntWithAggregatesFilter<"Proposal"> | number
    extrinsicId?: StringWithAggregatesFilter<"Proposal"> | string
    preimage?: StringWithAggregatesFilter<"Proposal"> | string
    deposit?: StringWithAggregatesFilter<"Proposal"> | string
    title?: StringWithAggregatesFilter<"Proposal"> | string
    summary?: StringWithAggregatesFilter<"Proposal"> | string
    description?: StringWithAggregatesFilter<"Proposal"> | string
    link?: StringWithAggregatesFilter<"Proposal"> | string
    successful?: BoolWithAggregatesFilter<"Proposal"> | boolean
    proposer?: StringWithAggregatesFilter<"Proposal"> | string
    proposalType?: EnumProposalTypeWithAggregatesFilter<"Proposal"> | $Enums.ProposalType
    createdAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    hash?: StringNullableWithAggregatesFilter<"Proposal"> | string | null
    status?: EnumProposalStatusWithAggregatesFilter<"Proposal"> | $Enums.ProposalStatus
    method?: StringWithAggregatesFilter<"Proposal"> | string
    section?: StringWithAggregatesFilter<"Proposal"> | string
    args?: JsonNullableWithAggregatesFilter<"Proposal">
    threshold?: IntWithAggregatesFilter<"Proposal"> | number
    ayePercentage?: IntNullableWithAggregatesFilter<"Proposal"> | number | null
    nayPercentage?: IntNullableWithAggregatesFilter<"Proposal"> | number | null
    totalVotes?: IntWithAggregatesFilter<"Proposal"> | number
  }

  export type VotesWhereInput = {
    AND?: VotesWhereInput | VotesWhereInput[]
    OR?: VotesWhereInput[]
    NOT?: VotesWhereInput | VotesWhereInput[]
    id?: StringFilter<"Votes"> | string
    refIdx?: IntFilter<"Votes"> | number
    pId?: IntFilter<"Votes"> | number
    voter?: StringFilter<"Votes"> | string
    voteAye?: BoolFilter<"Votes"> | boolean
    conviction?: StringNullableFilter<"Votes"> | string | null
    amount?: IntFilter<"Votes"> | number
  }

  export type VotesOrderByWithRelationInput = {
    id?: SortOrder
    refIdx?: SortOrder
    pId?: SortOrder
    voter?: SortOrder
    voteAye?: SortOrder
    conviction?: SortOrder
    amount?: SortOrder
  }

  export type VotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VotesWhereInput | VotesWhereInput[]
    OR?: VotesWhereInput[]
    NOT?: VotesWhereInput | VotesWhereInput[]
    refIdx?: IntFilter<"Votes"> | number
    pId?: IntFilter<"Votes"> | number
    voter?: StringFilter<"Votes"> | string
    voteAye?: BoolFilter<"Votes"> | boolean
    conviction?: StringNullableFilter<"Votes"> | string | null
    amount?: IntFilter<"Votes"> | number
  }, "id">

  export type VotesOrderByWithAggregationInput = {
    id?: SortOrder
    refIdx?: SortOrder
    pId?: SortOrder
    voter?: SortOrder
    voteAye?: SortOrder
    conviction?: SortOrder
    amount?: SortOrder
    _count?: VotesCountOrderByAggregateInput
    _avg?: VotesAvgOrderByAggregateInput
    _max?: VotesMaxOrderByAggregateInput
    _min?: VotesMinOrderByAggregateInput
    _sum?: VotesSumOrderByAggregateInput
  }

  export type VotesScalarWhereWithAggregatesInput = {
    AND?: VotesScalarWhereWithAggregatesInput | VotesScalarWhereWithAggregatesInput[]
    OR?: VotesScalarWhereWithAggregatesInput[]
    NOT?: VotesScalarWhereWithAggregatesInput | VotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Votes"> | string
    refIdx?: IntWithAggregatesFilter<"Votes"> | number
    pId?: IntWithAggregatesFilter<"Votes"> | number
    voter?: StringWithAggregatesFilter<"Votes"> | string
    voteAye?: BoolWithAggregatesFilter<"Votes"> | boolean
    conviction?: StringNullableWithAggregatesFilter<"Votes"> | string | null
    amount?: IntWithAggregatesFilter<"Votes"> | number
  }

  export type CouncilWhereInput = {
    AND?: CouncilWhereInput | CouncilWhereInput[]
    OR?: CouncilWhereInput[]
    NOT?: CouncilWhereInput | CouncilWhereInput[]
    id?: StringFilter<"Council"> | string
    name?: StringFilter<"Council"> | string
    address?: StringFilter<"Council"> | string
    backing?: StringFilter<"Council"> | string
    votes?: StringFilter<"Council"> | string
    description?: StringFilter<"Council"> | string
    hasDiscord?: BoolFilter<"Council"> | boolean
    hasTwitter?: BoolFilter<"Council"> | boolean
    twitter?: StringNullableFilter<"Council"> | string | null
    discord?: StringNullableFilter<"Council"> | string | null
    verified?: BoolFilter<"Council"> | boolean
    stats?: XOR<StatsValueNullableCompositeFilter, StatsValueObjectEqualityInput> | null
  }

  export type CouncilOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    backing?: SortOrder
    votes?: SortOrder
    description?: SortOrder
    hasDiscord?: SortOrder
    hasTwitter?: SortOrder
    twitter?: SortOrder
    discord?: SortOrder
    verified?: SortOrder
    stats?: StatsValueOrderByInput
  }

  export type CouncilWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: CouncilWhereInput | CouncilWhereInput[]
    OR?: CouncilWhereInput[]
    NOT?: CouncilWhereInput | CouncilWhereInput[]
    name?: StringFilter<"Council"> | string
    backing?: StringFilter<"Council"> | string
    votes?: StringFilter<"Council"> | string
    description?: StringFilter<"Council"> | string
    hasDiscord?: BoolFilter<"Council"> | boolean
    hasTwitter?: BoolFilter<"Council"> | boolean
    twitter?: StringNullableFilter<"Council"> | string | null
    discord?: StringNullableFilter<"Council"> | string | null
    verified?: BoolFilter<"Council"> | boolean
    stats?: XOR<StatsValueNullableCompositeFilter, StatsValueObjectEqualityInput> | null
  }, "id" | "address">

  export type CouncilOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    backing?: SortOrder
    votes?: SortOrder
    description?: SortOrder
    hasDiscord?: SortOrder
    hasTwitter?: SortOrder
    twitter?: SortOrder
    discord?: SortOrder
    verified?: SortOrder
    _count?: CouncilCountOrderByAggregateInput
    _max?: CouncilMaxOrderByAggregateInput
    _min?: CouncilMinOrderByAggregateInput
  }

  export type CouncilScalarWhereWithAggregatesInput = {
    AND?: CouncilScalarWhereWithAggregatesInput | CouncilScalarWhereWithAggregatesInput[]
    OR?: CouncilScalarWhereWithAggregatesInput[]
    NOT?: CouncilScalarWhereWithAggregatesInput | CouncilScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Council"> | string
    name?: StringWithAggregatesFilter<"Council"> | string
    address?: StringWithAggregatesFilter<"Council"> | string
    backing?: StringWithAggregatesFilter<"Council"> | string
    votes?: StringWithAggregatesFilter<"Council"> | string
    description?: StringWithAggregatesFilter<"Council"> | string
    hasDiscord?: BoolWithAggregatesFilter<"Council"> | boolean
    hasTwitter?: BoolWithAggregatesFilter<"Council"> | boolean
    twitter?: StringNullableWithAggregatesFilter<"Council"> | string | null
    discord?: StringNullableWithAggregatesFilter<"Council"> | string | null
    verified?: BoolWithAggregatesFilter<"Council"> | boolean
  }

  export type DelegateWhereInput = {
    AND?: DelegateWhereInput | DelegateWhereInput[]
    OR?: DelegateWhereInput[]
    NOT?: DelegateWhereInput | DelegateWhereInput[]
    id?: StringFilter<"Delegate"> | string
    name?: StringFilter<"Delegate"> | string
    address?: StringFilter<"Delegate"> | string
    votingPower?: StringFilter<"Delegate"> | string
    totalDelegators?: IntFilter<"Delegate"> | number
    participation?: IntFilter<"Delegate"> | number
    description?: StringFilter<"Delegate"> | string
    twitter?: StringNullableFilter<"Delegate"> | string | null
    discord?: StringNullableFilter<"Delegate"> | string | null
    votingHistory?: VotingHistoryCompositeListFilter | VotingHistoryObjectEqualityInput[]
  }

  export type DelegateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    votingPower?: SortOrder
    totalDelegators?: SortOrder
    participation?: SortOrder
    description?: SortOrder
    twitter?: SortOrder
    discord?: SortOrder
    votingHistory?: VotingHistoryOrderByCompositeAggregateInput
  }

  export type DelegateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: DelegateWhereInput | DelegateWhereInput[]
    OR?: DelegateWhereInput[]
    NOT?: DelegateWhereInput | DelegateWhereInput[]
    name?: StringFilter<"Delegate"> | string
    votingPower?: StringFilter<"Delegate"> | string
    totalDelegators?: IntFilter<"Delegate"> | number
    participation?: IntFilter<"Delegate"> | number
    description?: StringFilter<"Delegate"> | string
    twitter?: StringNullableFilter<"Delegate"> | string | null
    discord?: StringNullableFilter<"Delegate"> | string | null
    votingHistory?: VotingHistoryCompositeListFilter | VotingHistoryObjectEqualityInput[]
  }, "id" | "address">

  export type DelegateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    votingPower?: SortOrder
    totalDelegators?: SortOrder
    participation?: SortOrder
    description?: SortOrder
    twitter?: SortOrder
    discord?: SortOrder
    _count?: DelegateCountOrderByAggregateInput
    _avg?: DelegateAvgOrderByAggregateInput
    _max?: DelegateMaxOrderByAggregateInput
    _min?: DelegateMinOrderByAggregateInput
    _sum?: DelegateSumOrderByAggregateInput
  }

  export type DelegateScalarWhereWithAggregatesInput = {
    AND?: DelegateScalarWhereWithAggregatesInput | DelegateScalarWhereWithAggregatesInput[]
    OR?: DelegateScalarWhereWithAggregatesInput[]
    NOT?: DelegateScalarWhereWithAggregatesInput | DelegateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Delegate"> | string
    name?: StringWithAggregatesFilter<"Delegate"> | string
    address?: StringWithAggregatesFilter<"Delegate"> | string
    votingPower?: StringWithAggregatesFilter<"Delegate"> | string
    totalDelegators?: IntWithAggregatesFilter<"Delegate"> | number
    participation?: IntWithAggregatesFilter<"Delegate"> | number
    description?: StringWithAggregatesFilter<"Delegate"> | string
    twitter?: StringNullableWithAggregatesFilter<"Delegate"> | string | null
    discord?: StringNullableWithAggregatesFilter<"Delegate"> | string | null
  }

  export type ProposalCreateInput = {
    id?: string
    idx: number
    extrinsicId: string
    preimage: string
    deposit: string
    title: string
    summary: string
    description: string
    link: string
    successful: boolean
    proposer: string
    proposalType: $Enums.ProposalType
    createdAt?: Date | string
    updatedAt: Date | string
    hash?: string | null
    status: $Enums.ProposalStatus
    method: string
    section: string
    args?: InputJsonValue | null
    threshold: number
    ayePercentage?: number | null
    nayPercentage?: number | null
    totalVotes: number
  }

  export type ProposalUncheckedCreateInput = {
    id?: string
    idx: number
    extrinsicId: string
    preimage: string
    deposit: string
    title: string
    summary: string
    description: string
    link: string
    successful: boolean
    proposer: string
    proposalType: $Enums.ProposalType
    createdAt?: Date | string
    updatedAt: Date | string
    hash?: string | null
    status: $Enums.ProposalStatus
    method: string
    section: string
    args?: InputJsonValue | null
    threshold: number
    ayePercentage?: number | null
    nayPercentage?: number | null
    totalVotes: number
  }

  export type ProposalUpdateInput = {
    idx?: IntFieldUpdateOperationsInput | number
    extrinsicId?: StringFieldUpdateOperationsInput | string
    preimage?: StringFieldUpdateOperationsInput | string
    deposit?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    successful?: BoolFieldUpdateOperationsInput | boolean
    proposer?: StringFieldUpdateOperationsInput | string
    proposalType?: EnumProposalTypeFieldUpdateOperationsInput | $Enums.ProposalType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    method?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    args?: InputJsonValue | InputJsonValue | null
    threshold?: IntFieldUpdateOperationsInput | number
    ayePercentage?: NullableIntFieldUpdateOperationsInput | number | null
    nayPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    totalVotes?: IntFieldUpdateOperationsInput | number
  }

  export type ProposalUncheckedUpdateInput = {
    idx?: IntFieldUpdateOperationsInput | number
    extrinsicId?: StringFieldUpdateOperationsInput | string
    preimage?: StringFieldUpdateOperationsInput | string
    deposit?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    successful?: BoolFieldUpdateOperationsInput | boolean
    proposer?: StringFieldUpdateOperationsInput | string
    proposalType?: EnumProposalTypeFieldUpdateOperationsInput | $Enums.ProposalType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    method?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    args?: InputJsonValue | InputJsonValue | null
    threshold?: IntFieldUpdateOperationsInput | number
    ayePercentage?: NullableIntFieldUpdateOperationsInput | number | null
    nayPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    totalVotes?: IntFieldUpdateOperationsInput | number
  }

  export type ProposalCreateManyInput = {
    id?: string
    idx: number
    extrinsicId: string
    preimage: string
    deposit: string
    title: string
    summary: string
    description: string
    link: string
    successful: boolean
    proposer: string
    proposalType: $Enums.ProposalType
    createdAt?: Date | string
    updatedAt: Date | string
    hash?: string | null
    status: $Enums.ProposalStatus
    method: string
    section: string
    args?: InputJsonValue | null
    threshold: number
    ayePercentage?: number | null
    nayPercentage?: number | null
    totalVotes: number
  }

  export type ProposalUpdateManyMutationInput = {
    idx?: IntFieldUpdateOperationsInput | number
    extrinsicId?: StringFieldUpdateOperationsInput | string
    preimage?: StringFieldUpdateOperationsInput | string
    deposit?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    successful?: BoolFieldUpdateOperationsInput | boolean
    proposer?: StringFieldUpdateOperationsInput | string
    proposalType?: EnumProposalTypeFieldUpdateOperationsInput | $Enums.ProposalType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    method?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    args?: InputJsonValue | InputJsonValue | null
    threshold?: IntFieldUpdateOperationsInput | number
    ayePercentage?: NullableIntFieldUpdateOperationsInput | number | null
    nayPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    totalVotes?: IntFieldUpdateOperationsInput | number
  }

  export type ProposalUncheckedUpdateManyInput = {
    idx?: IntFieldUpdateOperationsInput | number
    extrinsicId?: StringFieldUpdateOperationsInput | string
    preimage?: StringFieldUpdateOperationsInput | string
    deposit?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    successful?: BoolFieldUpdateOperationsInput | boolean
    proposer?: StringFieldUpdateOperationsInput | string
    proposalType?: EnumProposalTypeFieldUpdateOperationsInput | $Enums.ProposalType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    method?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    args?: InputJsonValue | InputJsonValue | null
    threshold?: IntFieldUpdateOperationsInput | number
    ayePercentage?: NullableIntFieldUpdateOperationsInput | number | null
    nayPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    totalVotes?: IntFieldUpdateOperationsInput | number
  }

  export type VotesCreateInput = {
    id?: string
    refIdx: number
    pId: number
    voter: string
    voteAye: boolean
    conviction?: string | null
    amount: number
  }

  export type VotesUncheckedCreateInput = {
    id?: string
    refIdx: number
    pId: number
    voter: string
    voteAye: boolean
    conviction?: string | null
    amount: number
  }

  export type VotesUpdateInput = {
    refIdx?: IntFieldUpdateOperationsInput | number
    pId?: IntFieldUpdateOperationsInput | number
    voter?: StringFieldUpdateOperationsInput | string
    voteAye?: BoolFieldUpdateOperationsInput | boolean
    conviction?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type VotesUncheckedUpdateInput = {
    refIdx?: IntFieldUpdateOperationsInput | number
    pId?: IntFieldUpdateOperationsInput | number
    voter?: StringFieldUpdateOperationsInput | string
    voteAye?: BoolFieldUpdateOperationsInput | boolean
    conviction?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type VotesCreateManyInput = {
    id?: string
    refIdx: number
    pId: number
    voter: string
    voteAye: boolean
    conviction?: string | null
    amount: number
  }

  export type VotesUpdateManyMutationInput = {
    refIdx?: IntFieldUpdateOperationsInput | number
    pId?: IntFieldUpdateOperationsInput | number
    voter?: StringFieldUpdateOperationsInput | string
    voteAye?: BoolFieldUpdateOperationsInput | boolean
    conviction?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type VotesUncheckedUpdateManyInput = {
    refIdx?: IntFieldUpdateOperationsInput | number
    pId?: IntFieldUpdateOperationsInput | number
    voter?: StringFieldUpdateOperationsInput | string
    voteAye?: BoolFieldUpdateOperationsInput | boolean
    conviction?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type CouncilCreateInput = {
    id?: string
    name: string
    address: string
    backing: string
    votes: string
    description: string
    hasDiscord: boolean
    hasTwitter: boolean
    twitter?: string | null
    discord?: string | null
    verified: boolean
    stats?: XOR<StatsValueNullableCreateEnvelopeInput, StatsValueCreateInput> | null
  }

  export type CouncilUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    backing: string
    votes: string
    description: string
    hasDiscord: boolean
    hasTwitter: boolean
    twitter?: string | null
    discord?: string | null
    verified: boolean
    stats?: XOR<StatsValueNullableCreateEnvelopeInput, StatsValueCreateInput> | null
  }

  export type CouncilUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    backing?: StringFieldUpdateOperationsInput | string
    votes?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hasDiscord?: BoolFieldUpdateOperationsInput | boolean
    hasTwitter?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    stats?: XOR<StatsValueNullableUpdateEnvelopeInput, StatsValueCreateInput> | null
  }

  export type CouncilUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    backing?: StringFieldUpdateOperationsInput | string
    votes?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hasDiscord?: BoolFieldUpdateOperationsInput | boolean
    hasTwitter?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    stats?: XOR<StatsValueNullableUpdateEnvelopeInput, StatsValueCreateInput> | null
  }

  export type CouncilCreateManyInput = {
    id?: string
    name: string
    address: string
    backing: string
    votes: string
    description: string
    hasDiscord: boolean
    hasTwitter: boolean
    twitter?: string | null
    discord?: string | null
    verified: boolean
    stats?: XOR<StatsValueNullableCreateEnvelopeInput, StatsValueCreateInput> | null
  }

  export type CouncilUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    backing?: StringFieldUpdateOperationsInput | string
    votes?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hasDiscord?: BoolFieldUpdateOperationsInput | boolean
    hasTwitter?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    stats?: XOR<StatsValueNullableUpdateEnvelopeInput, StatsValueCreateInput> | null
  }

  export type CouncilUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    backing?: StringFieldUpdateOperationsInput | string
    votes?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    hasDiscord?: BoolFieldUpdateOperationsInput | boolean
    hasTwitter?: BoolFieldUpdateOperationsInput | boolean
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    stats?: XOR<StatsValueNullableUpdateEnvelopeInput, StatsValueCreateInput> | null
  }

  export type DelegateCreateInput = {
    id?: string
    name: string
    address: string
    votingPower: string
    totalDelegators: number
    participation: number
    description: string
    twitter?: string | null
    discord?: string | null
    votingHistory?: XOR<VotingHistoryListCreateEnvelopeInput, VotingHistoryCreateInput> | VotingHistoryCreateInput[]
  }

  export type DelegateUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    votingPower: string
    totalDelegators: number
    participation: number
    description: string
    twitter?: string | null
    discord?: string | null
    votingHistory?: XOR<VotingHistoryListCreateEnvelopeInput, VotingHistoryCreateInput> | VotingHistoryCreateInput[]
  }

  export type DelegateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    votingPower?: StringFieldUpdateOperationsInput | string
    totalDelegators?: IntFieldUpdateOperationsInput | number
    participation?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    votingHistory?: XOR<VotingHistoryListUpdateEnvelopeInput, VotingHistoryCreateInput> | VotingHistoryCreateInput[]
  }

  export type DelegateUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    votingPower?: StringFieldUpdateOperationsInput | string
    totalDelegators?: IntFieldUpdateOperationsInput | number
    participation?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    votingHistory?: XOR<VotingHistoryListUpdateEnvelopeInput, VotingHistoryCreateInput> | VotingHistoryCreateInput[]
  }

  export type DelegateCreateManyInput = {
    id?: string
    name: string
    address: string
    votingPower: string
    totalDelegators: number
    participation: number
    description: string
    twitter?: string | null
    discord?: string | null
    votingHistory?: XOR<VotingHistoryListCreateEnvelopeInput, VotingHistoryCreateInput> | VotingHistoryCreateInput[]
  }

  export type DelegateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    votingPower?: StringFieldUpdateOperationsInput | string
    totalDelegators?: IntFieldUpdateOperationsInput | number
    participation?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    votingHistory?: XOR<VotingHistoryListUpdateEnvelopeInput, VotingHistoryCreateInput> | VotingHistoryCreateInput[]
  }

  export type DelegateUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    votingPower?: StringFieldUpdateOperationsInput | string
    totalDelegators?: IntFieldUpdateOperationsInput | number
    participation?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    votingHistory?: XOR<VotingHistoryListUpdateEnvelopeInput, VotingHistoryCreateInput> | VotingHistoryCreateInput[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumProposalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalType | EnumProposalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalType[] | ListEnumProposalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalType[] | ListEnumProposalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalTypeFilter<$PrismaModel> | $Enums.ProposalType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type EnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ProposalCountOrderByAggregateInput = {
    id?: SortOrder
    idx?: SortOrder
    extrinsicId?: SortOrder
    preimage?: SortOrder
    deposit?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    link?: SortOrder
    successful?: SortOrder
    proposer?: SortOrder
    proposalType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hash?: SortOrder
    status?: SortOrder
    method?: SortOrder
    section?: SortOrder
    args?: SortOrder
    threshold?: SortOrder
    ayePercentage?: SortOrder
    nayPercentage?: SortOrder
    totalVotes?: SortOrder
  }

  export type ProposalAvgOrderByAggregateInput = {
    idx?: SortOrder
    threshold?: SortOrder
    ayePercentage?: SortOrder
    nayPercentage?: SortOrder
    totalVotes?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    idx?: SortOrder
    extrinsicId?: SortOrder
    preimage?: SortOrder
    deposit?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    link?: SortOrder
    successful?: SortOrder
    proposer?: SortOrder
    proposalType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hash?: SortOrder
    status?: SortOrder
    method?: SortOrder
    section?: SortOrder
    threshold?: SortOrder
    ayePercentage?: SortOrder
    nayPercentage?: SortOrder
    totalVotes?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id?: SortOrder
    idx?: SortOrder
    extrinsicId?: SortOrder
    preimage?: SortOrder
    deposit?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    link?: SortOrder
    successful?: SortOrder
    proposer?: SortOrder
    proposalType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hash?: SortOrder
    status?: SortOrder
    method?: SortOrder
    section?: SortOrder
    threshold?: SortOrder
    ayePercentage?: SortOrder
    nayPercentage?: SortOrder
    totalVotes?: SortOrder
  }

  export type ProposalSumOrderByAggregateInput = {
    idx?: SortOrder
    threshold?: SortOrder
    ayePercentage?: SortOrder
    nayPercentage?: SortOrder
    totalVotes?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumProposalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalType | EnumProposalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalType[] | ListEnumProposalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalType[] | ListEnumProposalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProposalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalTypeFilter<$PrismaModel>
    _max?: NestedEnumProposalTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type VotesCountOrderByAggregateInput = {
    id?: SortOrder
    refIdx?: SortOrder
    pId?: SortOrder
    voter?: SortOrder
    voteAye?: SortOrder
    conviction?: SortOrder
    amount?: SortOrder
  }

  export type VotesAvgOrderByAggregateInput = {
    refIdx?: SortOrder
    pId?: SortOrder
    amount?: SortOrder
  }

  export type VotesMaxOrderByAggregateInput = {
    id?: SortOrder
    refIdx?: SortOrder
    pId?: SortOrder
    voter?: SortOrder
    voteAye?: SortOrder
    conviction?: SortOrder
    amount?: SortOrder
  }

  export type VotesMinOrderByAggregateInput = {
    id?: SortOrder
    refIdx?: SortOrder
    pId?: SortOrder
    voter?: SortOrder
    voteAye?: SortOrder
    conviction?: SortOrder
    amount?: SortOrder
  }

  export type VotesSumOrderByAggregateInput = {
    refIdx?: SortOrder
    pId?: SortOrder
    amount?: SortOrder
  }

  export type StatsValueNullableCompositeFilter = {
    equals?: StatsValueObjectEqualityInput | null
    is?: StatsValueWhereInput | null
    isNot?: StatsValueWhereInput | null
    isSet?: boolean
  }

  export type StatsValueObjectEqualityInput = {
    motionsProposed: number
    participation: string
    termStart: string
  }

  export type StatsValueOrderByInput = {
    motionsProposed?: SortOrder
    participation?: SortOrder
    termStart?: SortOrder
  }

  export type CouncilCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    backing?: SortOrder
    votes?: SortOrder
    description?: SortOrder
    hasDiscord?: SortOrder
    hasTwitter?: SortOrder
    twitter?: SortOrder
    discord?: SortOrder
    verified?: SortOrder
  }

  export type CouncilMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    backing?: SortOrder
    votes?: SortOrder
    description?: SortOrder
    hasDiscord?: SortOrder
    hasTwitter?: SortOrder
    twitter?: SortOrder
    discord?: SortOrder
    verified?: SortOrder
  }

  export type CouncilMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    backing?: SortOrder
    votes?: SortOrder
    description?: SortOrder
    hasDiscord?: SortOrder
    hasTwitter?: SortOrder
    twitter?: SortOrder
    discord?: SortOrder
    verified?: SortOrder
  }

  export type VotingHistoryCompositeListFilter = {
    equals?: VotingHistoryObjectEqualityInput[]
    every?: VotingHistoryWhereInput
    some?: VotingHistoryWhereInput
    none?: VotingHistoryWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type VotingHistoryObjectEqualityInput = {
    proposalId: string
    title: string
    date: string
    vote: boolean
  }

  export type VotingHistoryOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type DelegateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    votingPower?: SortOrder
    totalDelegators?: SortOrder
    participation?: SortOrder
    description?: SortOrder
    twitter?: SortOrder
    discord?: SortOrder
  }

  export type DelegateAvgOrderByAggregateInput = {
    totalDelegators?: SortOrder
    participation?: SortOrder
  }

  export type DelegateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    votingPower?: SortOrder
    totalDelegators?: SortOrder
    participation?: SortOrder
    description?: SortOrder
    twitter?: SortOrder
    discord?: SortOrder
  }

  export type DelegateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    votingPower?: SortOrder
    totalDelegators?: SortOrder
    participation?: SortOrder
    description?: SortOrder
    twitter?: SortOrder
    discord?: SortOrder
  }

  export type DelegateSumOrderByAggregateInput = {
    totalDelegators?: SortOrder
    participation?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumProposalTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProposalType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumProposalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProposalStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type StatsValueNullableCreateEnvelopeInput = {
    set?: StatsValueCreateInput | null
  }

  export type StatsValueCreateInput = {
    motionsProposed: number
    participation: string
    termStart: string
  }

  export type StatsValueNullableUpdateEnvelopeInput = {
    set?: StatsValueCreateInput | null
    upsert?: StatsValueUpsertInput
    unset?: boolean
  }

  export type VotingHistoryListCreateEnvelopeInput = {
    set?: VotingHistoryCreateInput | VotingHistoryCreateInput[]
  }

  export type VotingHistoryCreateInput = {
    proposalId: string
    title: string
    date: string
    vote: boolean
  }

  export type VotingHistoryListUpdateEnvelopeInput = {
    set?: VotingHistoryCreateInput | VotingHistoryCreateInput[]
    push?: VotingHistoryCreateInput | VotingHistoryCreateInput[]
    updateMany?: VotingHistoryUpdateManyInput
    deleteMany?: VotingHistoryDeleteManyInput
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumProposalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalType | EnumProposalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalType[] | ListEnumProposalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalType[] | ListEnumProposalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalTypeFilter<$PrismaModel> | $Enums.ProposalType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumProposalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalType | EnumProposalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalType[] | ListEnumProposalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalType[] | ListEnumProposalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProposalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalTypeFilter<$PrismaModel>
    _max?: NestedEnumProposalTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type StatsValueWhereInput = {
    AND?: StatsValueWhereInput | StatsValueWhereInput[]
    OR?: StatsValueWhereInput[]
    NOT?: StatsValueWhereInput | StatsValueWhereInput[]
    motionsProposed?: IntFilter<"StatsValue"> | number
    participation?: StringFilter<"StatsValue"> | string
    termStart?: StringFilter<"StatsValue"> | string
  }

  export type VotingHistoryWhereInput = {
    AND?: VotingHistoryWhereInput | VotingHistoryWhereInput[]
    OR?: VotingHistoryWhereInput[]
    NOT?: VotingHistoryWhereInput | VotingHistoryWhereInput[]
    proposalId?: StringFilter<"VotingHistory"> | string
    title?: StringFilter<"VotingHistory"> | string
    date?: StringFilter<"VotingHistory"> | string
    vote?: BoolFilter<"VotingHistory"> | boolean
  }

  export type StatsValueUpsertInput = {
    set: StatsValueCreateInput | null
    update: StatsValueUpdateInput
  }

  export type VotingHistoryUpdateManyInput = {
    where: VotingHistoryWhereInput
    data: VotingHistoryUpdateInput
  }

  export type VotingHistoryDeleteManyInput = {
    where: VotingHistoryWhereInput
  }

  export type StatsValueUpdateInput = {
    motionsProposed?: IntFieldUpdateOperationsInput | number
    participation?: StringFieldUpdateOperationsInput | string
    termStart?: StringFieldUpdateOperationsInput | string
  }

  export type VotingHistoryUpdateInput = {
    proposalId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    vote?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}