
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
 * Model Startup
 * 
 */
export type Startup = $Result.DefaultSelection<Prisma.$StartupPayload>
/**
 * Model MarketingChannel
 * 
 */
export type MarketingChannel = $Result.DefaultSelection<Prisma.$MarketingChannelPayload>
/**
 * Model TechStack
 * 
 */
export type TechStack = $Result.DefaultSelection<Prisma.$TechStackPayload>
/**
 * Model SyncState
 * 
 */
export type SyncState = $Result.DefaultSelection<Prisma.$SyncStatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Startups
 * const startups = await prisma.startup.findMany()
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
   * // Fetch zero or more Startups
   * const startups = await prisma.startup.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.startup`: Exposes CRUD operations for the **Startup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Startups
    * const startups = await prisma.startup.findMany()
    * ```
    */
  get startup(): Prisma.StartupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketingChannel`: Exposes CRUD operations for the **MarketingChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketingChannels
    * const marketingChannels = await prisma.marketingChannel.findMany()
    * ```
    */
  get marketingChannel(): Prisma.MarketingChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.techStack`: Exposes CRUD operations for the **TechStack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechStacks
    * const techStacks = await prisma.techStack.findMany()
    * ```
    */
  get techStack(): Prisma.TechStackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncState`: Exposes CRUD operations for the **SyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncStates
    * const syncStates = await prisma.syncState.findMany()
    * ```
    */
  get syncState(): Prisma.SyncStateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Startup: 'Startup',
    MarketingChannel: 'MarketingChannel',
    TechStack: 'TechStack',
    SyncState: 'SyncState'
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
      modelProps: "startup" | "marketingChannel" | "techStack" | "syncState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Startup: {
        payload: Prisma.$StartupPayload<ExtArgs>
        fields: Prisma.StartupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StartupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StartupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          findFirst: {
            args: Prisma.StartupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StartupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          findMany: {
            args: Prisma.StartupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>[]
          }
          create: {
            args: Prisma.StartupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          createMany: {
            args: Prisma.StartupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StartupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>[]
          }
          delete: {
            args: Prisma.StartupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          update: {
            args: Prisma.StartupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          deleteMany: {
            args: Prisma.StartupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StartupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StartupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>[]
          }
          upsert: {
            args: Prisma.StartupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupPayload>
          }
          aggregate: {
            args: Prisma.StartupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStartup>
          }
          groupBy: {
            args: Prisma.StartupGroupByArgs<ExtArgs>
            result: $Utils.Optional<StartupGroupByOutputType>[]
          }
          count: {
            args: Prisma.StartupCountArgs<ExtArgs>
            result: $Utils.Optional<StartupCountAggregateOutputType> | number
          }
        }
      }
      MarketingChannel: {
        payload: Prisma.$MarketingChannelPayload<ExtArgs>
        fields: Prisma.MarketingChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketingChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketingChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingChannelPayload>
          }
          findFirst: {
            args: Prisma.MarketingChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketingChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingChannelPayload>
          }
          findMany: {
            args: Prisma.MarketingChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingChannelPayload>[]
          }
          create: {
            args: Prisma.MarketingChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingChannelPayload>
          }
          createMany: {
            args: Prisma.MarketingChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketingChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingChannelPayload>[]
          }
          delete: {
            args: Prisma.MarketingChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingChannelPayload>
          }
          update: {
            args: Prisma.MarketingChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingChannelPayload>
          }
          deleteMany: {
            args: Prisma.MarketingChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketingChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketingChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingChannelPayload>[]
          }
          upsert: {
            args: Prisma.MarketingChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingChannelPayload>
          }
          aggregate: {
            args: Prisma.MarketingChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketingChannel>
          }
          groupBy: {
            args: Prisma.MarketingChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketingChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketingChannelCountArgs<ExtArgs>
            result: $Utils.Optional<MarketingChannelCountAggregateOutputType> | number
          }
        }
      }
      TechStack: {
        payload: Prisma.$TechStackPayload<ExtArgs>
        fields: Prisma.TechStackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechStackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechStackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          findFirst: {
            args: Prisma.TechStackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechStackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          findMany: {
            args: Prisma.TechStackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>[]
          }
          create: {
            args: Prisma.TechStackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          createMany: {
            args: Prisma.TechStackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TechStackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>[]
          }
          delete: {
            args: Prisma.TechStackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          update: {
            args: Prisma.TechStackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          deleteMany: {
            args: Prisma.TechStackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechStackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TechStackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>[]
          }
          upsert: {
            args: Prisma.TechStackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          aggregate: {
            args: Prisma.TechStackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechStack>
          }
          groupBy: {
            args: Prisma.TechStackGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechStackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechStackCountArgs<ExtArgs>
            result: $Utils.Optional<TechStackCountAggregateOutputType> | number
          }
        }
      }
      SyncState: {
        payload: Prisma.$SyncStatePayload<ExtArgs>
        fields: Prisma.SyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          findFirst: {
            args: Prisma.SyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          findMany: {
            args: Prisma.SyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          create: {
            args: Prisma.SyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          createMany: {
            args: Prisma.SyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          delete: {
            args: Prisma.SyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          update: {
            args: Prisma.SyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          deleteMany: {
            args: Prisma.SyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyncStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          upsert: {
            args: Prisma.SyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          aggregate: {
            args: Prisma.SyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncState>
          }
          groupBy: {
            args: Prisma.SyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<SyncStateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    startup?: StartupOmit
    marketingChannel?: MarketingChannelOmit
    techStack?: TechStackOmit
    syncState?: SyncStateOmit
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
   * Count Type StartupCountOutputType
   */

  export type StartupCountOutputType = {
    marketingChannels: number
    techStack: number
  }

  export type StartupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marketingChannels?: boolean | StartupCountOutputTypeCountMarketingChannelsArgs
    techStack?: boolean | StartupCountOutputTypeCountTechStackArgs
  }

  // Custom InputTypes
  /**
   * StartupCountOutputType without action
   */
  export type StartupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupCountOutputType
     */
    select?: StartupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StartupCountOutputType without action
   */
  export type StartupCountOutputTypeCountMarketingChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketingChannelWhereInput
  }

  /**
   * StartupCountOutputType without action
   */
  export type StartupCountOutputTypeCountTechStackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechStackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Startup
   */

  export type AggregateStartup = {
    _count: StartupCountAggregateOutputType | null
    _avg: StartupAvgAggregateOutputType | null
    _sum: StartupSumAggregateOutputType | null
    _min: StartupMinAggregateOutputType | null
    _max: StartupMaxAggregateOutputType | null
  }

  export type StartupAvgAggregateOutputType = {
    xFollowerCount: number | null
    rank: number | null
    mrr: number | null
    revenueTotal: number | null
    revenueLast30Days: number | null
    activeSubscriptions: number | null
    growth30d: number | null
    growthMRR30d: number | null
    askingPrice: number | null
  }

  export type StartupSumAggregateOutputType = {
    xFollowerCount: number | null
    rank: number | null
    mrr: number | null
    revenueTotal: number | null
    revenueLast30Days: number | null
    activeSubscriptions: number | null
    growth30d: number | null
    growthMRR30d: number | null
    askingPrice: number | null
  }

  export type StartupMinAggregateOutputType = {
    slug: string | null
    name: string | null
    icon: string | null
    description: string | null
    website: string | null
    country: string | null
    category: string | null
    targetAudience: string | null
    paymentProvider: string | null
    foundedDate: Date | null
    xHandle: string | null
    xFollowerCount: number | null
    rank: number | null
    mrr: number | null
    revenueTotal: number | null
    revenueLast30Days: number | null
    activeSubscriptions: number | null
    growth30d: number | null
    growthMRR30d: number | null
    onSale: boolean | null
    askingPrice: number | null
    detailFetchedAt: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type StartupMaxAggregateOutputType = {
    slug: string | null
    name: string | null
    icon: string | null
    description: string | null
    website: string | null
    country: string | null
    category: string | null
    targetAudience: string | null
    paymentProvider: string | null
    foundedDate: Date | null
    xHandle: string | null
    xFollowerCount: number | null
    rank: number | null
    mrr: number | null
    revenueTotal: number | null
    revenueLast30Days: number | null
    activeSubscriptions: number | null
    growth30d: number | null
    growthMRR30d: number | null
    onSale: boolean | null
    askingPrice: number | null
    detailFetchedAt: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type StartupCountAggregateOutputType = {
    slug: number
    name: number
    icon: number
    description: number
    website: number
    country: number
    category: number
    targetAudience: number
    paymentProvider: number
    foundedDate: number
    xHandle: number
    xFollowerCount: number
    rank: number
    mrr: number
    revenueTotal: number
    revenueLast30Days: number
    activeSubscriptions: number
    growth30d: number
    growthMRR30d: number
    onSale: number
    askingPrice: number
    detailFetchedAt: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type StartupAvgAggregateInputType = {
    xFollowerCount?: true
    rank?: true
    mrr?: true
    revenueTotal?: true
    revenueLast30Days?: true
    activeSubscriptions?: true
    growth30d?: true
    growthMRR30d?: true
    askingPrice?: true
  }

  export type StartupSumAggregateInputType = {
    xFollowerCount?: true
    rank?: true
    mrr?: true
    revenueTotal?: true
    revenueLast30Days?: true
    activeSubscriptions?: true
    growth30d?: true
    growthMRR30d?: true
    askingPrice?: true
  }

  export type StartupMinAggregateInputType = {
    slug?: true
    name?: true
    icon?: true
    description?: true
    website?: true
    country?: true
    category?: true
    targetAudience?: true
    paymentProvider?: true
    foundedDate?: true
    xHandle?: true
    xFollowerCount?: true
    rank?: true
    mrr?: true
    revenueTotal?: true
    revenueLast30Days?: true
    activeSubscriptions?: true
    growth30d?: true
    growthMRR30d?: true
    onSale?: true
    askingPrice?: true
    detailFetchedAt?: true
    updatedAt?: true
    createdAt?: true
  }

  export type StartupMaxAggregateInputType = {
    slug?: true
    name?: true
    icon?: true
    description?: true
    website?: true
    country?: true
    category?: true
    targetAudience?: true
    paymentProvider?: true
    foundedDate?: true
    xHandle?: true
    xFollowerCount?: true
    rank?: true
    mrr?: true
    revenueTotal?: true
    revenueLast30Days?: true
    activeSubscriptions?: true
    growth30d?: true
    growthMRR30d?: true
    onSale?: true
    askingPrice?: true
    detailFetchedAt?: true
    updatedAt?: true
    createdAt?: true
  }

  export type StartupCountAggregateInputType = {
    slug?: true
    name?: true
    icon?: true
    description?: true
    website?: true
    country?: true
    category?: true
    targetAudience?: true
    paymentProvider?: true
    foundedDate?: true
    xHandle?: true
    xFollowerCount?: true
    rank?: true
    mrr?: true
    revenueTotal?: true
    revenueLast30Days?: true
    activeSubscriptions?: true
    growth30d?: true
    growthMRR30d?: true
    onSale?: true
    askingPrice?: true
    detailFetchedAt?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type StartupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Startup to aggregate.
     */
    where?: StartupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startups to fetch.
     */
    orderBy?: StartupOrderByWithRelationInput | StartupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StartupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Startups
    **/
    _count?: true | StartupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StartupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StartupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StartupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StartupMaxAggregateInputType
  }

  export type GetStartupAggregateType<T extends StartupAggregateArgs> = {
        [P in keyof T & keyof AggregateStartup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStartup[P]>
      : GetScalarType<T[P], AggregateStartup[P]>
  }




  export type StartupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StartupWhereInput
    orderBy?: StartupOrderByWithAggregationInput | StartupOrderByWithAggregationInput[]
    by: StartupScalarFieldEnum[] | StartupScalarFieldEnum
    having?: StartupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StartupCountAggregateInputType | true
    _avg?: StartupAvgAggregateInputType
    _sum?: StartupSumAggregateInputType
    _min?: StartupMinAggregateInputType
    _max?: StartupMaxAggregateInputType
  }

  export type StartupGroupByOutputType = {
    slug: string
    name: string
    icon: string | null
    description: string | null
    website: string | null
    country: string | null
    category: string | null
    targetAudience: string | null
    paymentProvider: string | null
    foundedDate: Date | null
    xHandle: string | null
    xFollowerCount: number | null
    rank: number | null
    mrr: number | null
    revenueTotal: number | null
    revenueLast30Days: number | null
    activeSubscriptions: number | null
    growth30d: number | null
    growthMRR30d: number | null
    onSale: boolean
    askingPrice: number | null
    detailFetchedAt: Date | null
    updatedAt: Date
    createdAt: Date
    _count: StartupCountAggregateOutputType | null
    _avg: StartupAvgAggregateOutputType | null
    _sum: StartupSumAggregateOutputType | null
    _min: StartupMinAggregateOutputType | null
    _max: StartupMaxAggregateOutputType | null
  }

  type GetStartupGroupByPayload<T extends StartupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StartupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StartupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StartupGroupByOutputType[P]>
            : GetScalarType<T[P], StartupGroupByOutputType[P]>
        }
      >
    >


  export type StartupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    website?: boolean
    country?: boolean
    category?: boolean
    targetAudience?: boolean
    paymentProvider?: boolean
    foundedDate?: boolean
    xHandle?: boolean
    xFollowerCount?: boolean
    rank?: boolean
    mrr?: boolean
    revenueTotal?: boolean
    revenueLast30Days?: boolean
    activeSubscriptions?: boolean
    growth30d?: boolean
    growthMRR30d?: boolean
    onSale?: boolean
    askingPrice?: boolean
    detailFetchedAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    marketingChannels?: boolean | Startup$marketingChannelsArgs<ExtArgs>
    techStack?: boolean | Startup$techStackArgs<ExtArgs>
    _count?: boolean | StartupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["startup"]>

  export type StartupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    website?: boolean
    country?: boolean
    category?: boolean
    targetAudience?: boolean
    paymentProvider?: boolean
    foundedDate?: boolean
    xHandle?: boolean
    xFollowerCount?: boolean
    rank?: boolean
    mrr?: boolean
    revenueTotal?: boolean
    revenueLast30Days?: boolean
    activeSubscriptions?: boolean
    growth30d?: boolean
    growthMRR30d?: boolean
    onSale?: boolean
    askingPrice?: boolean
    detailFetchedAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["startup"]>

  export type StartupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    website?: boolean
    country?: boolean
    category?: boolean
    targetAudience?: boolean
    paymentProvider?: boolean
    foundedDate?: boolean
    xHandle?: boolean
    xFollowerCount?: boolean
    rank?: boolean
    mrr?: boolean
    revenueTotal?: boolean
    revenueLast30Days?: boolean
    activeSubscriptions?: boolean
    growth30d?: boolean
    growthMRR30d?: boolean
    onSale?: boolean
    askingPrice?: boolean
    detailFetchedAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["startup"]>

  export type StartupSelectScalar = {
    slug?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    website?: boolean
    country?: boolean
    category?: boolean
    targetAudience?: boolean
    paymentProvider?: boolean
    foundedDate?: boolean
    xHandle?: boolean
    xFollowerCount?: boolean
    rank?: boolean
    mrr?: boolean
    revenueTotal?: boolean
    revenueLast30Days?: boolean
    activeSubscriptions?: boolean
    growth30d?: boolean
    growthMRR30d?: boolean
    onSale?: boolean
    askingPrice?: boolean
    detailFetchedAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type StartupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"slug" | "name" | "icon" | "description" | "website" | "country" | "category" | "targetAudience" | "paymentProvider" | "foundedDate" | "xHandle" | "xFollowerCount" | "rank" | "mrr" | "revenueTotal" | "revenueLast30Days" | "activeSubscriptions" | "growth30d" | "growthMRR30d" | "onSale" | "askingPrice" | "detailFetchedAt" | "updatedAt" | "createdAt", ExtArgs["result"]["startup"]>
  export type StartupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marketingChannels?: boolean | Startup$marketingChannelsArgs<ExtArgs>
    techStack?: boolean | Startup$techStackArgs<ExtArgs>
    _count?: boolean | StartupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StartupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StartupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StartupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Startup"
    objects: {
      marketingChannels: Prisma.$MarketingChannelPayload<ExtArgs>[]
      techStack: Prisma.$TechStackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      slug: string
      name: string
      icon: string | null
      description: string | null
      website: string | null
      country: string | null
      category: string | null
      targetAudience: string | null
      paymentProvider: string | null
      foundedDate: Date | null
      xHandle: string | null
      xFollowerCount: number | null
      rank: number | null
      mrr: number | null
      revenueTotal: number | null
      revenueLast30Days: number | null
      activeSubscriptions: number | null
      growth30d: number | null
      growthMRR30d: number | null
      onSale: boolean
      askingPrice: number | null
      detailFetchedAt: Date | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["startup"]>
    composites: {}
  }

  type StartupGetPayload<S extends boolean | null | undefined | StartupDefaultArgs> = $Result.GetResult<Prisma.$StartupPayload, S>

  type StartupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StartupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StartupCountAggregateInputType | true
    }

  export interface StartupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Startup'], meta: { name: 'Startup' } }
    /**
     * Find zero or one Startup that matches the filter.
     * @param {StartupFindUniqueArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StartupFindUniqueArgs>(args: SelectSubset<T, StartupFindUniqueArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Startup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StartupFindUniqueOrThrowArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StartupFindUniqueOrThrowArgs>(args: SelectSubset<T, StartupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Startup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupFindFirstArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StartupFindFirstArgs>(args?: SelectSubset<T, StartupFindFirstArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Startup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupFindFirstOrThrowArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StartupFindFirstOrThrowArgs>(args?: SelectSubset<T, StartupFindFirstOrThrowArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Startups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Startups
     * const startups = await prisma.startup.findMany()
     * 
     * // Get first 10 Startups
     * const startups = await prisma.startup.findMany({ take: 10 })
     * 
     * // Only select the `slug`
     * const startupWithSlugOnly = await prisma.startup.findMany({ select: { slug: true } })
     * 
     */
    findMany<T extends StartupFindManyArgs>(args?: SelectSubset<T, StartupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Startup.
     * @param {StartupCreateArgs} args - Arguments to create a Startup.
     * @example
     * // Create one Startup
     * const Startup = await prisma.startup.create({
     *   data: {
     *     // ... data to create a Startup
     *   }
     * })
     * 
     */
    create<T extends StartupCreateArgs>(args: SelectSubset<T, StartupCreateArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Startups.
     * @param {StartupCreateManyArgs} args - Arguments to create many Startups.
     * @example
     * // Create many Startups
     * const startup = await prisma.startup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StartupCreateManyArgs>(args?: SelectSubset<T, StartupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Startups and returns the data saved in the database.
     * @param {StartupCreateManyAndReturnArgs} args - Arguments to create many Startups.
     * @example
     * // Create many Startups
     * const startup = await prisma.startup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Startups and only return the `slug`
     * const startupWithSlugOnly = await prisma.startup.createManyAndReturn({
     *   select: { slug: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StartupCreateManyAndReturnArgs>(args?: SelectSubset<T, StartupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Startup.
     * @param {StartupDeleteArgs} args - Arguments to delete one Startup.
     * @example
     * // Delete one Startup
     * const Startup = await prisma.startup.delete({
     *   where: {
     *     // ... filter to delete one Startup
     *   }
     * })
     * 
     */
    delete<T extends StartupDeleteArgs>(args: SelectSubset<T, StartupDeleteArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Startup.
     * @param {StartupUpdateArgs} args - Arguments to update one Startup.
     * @example
     * // Update one Startup
     * const startup = await prisma.startup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StartupUpdateArgs>(args: SelectSubset<T, StartupUpdateArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Startups.
     * @param {StartupDeleteManyArgs} args - Arguments to filter Startups to delete.
     * @example
     * // Delete a few Startups
     * const { count } = await prisma.startup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StartupDeleteManyArgs>(args?: SelectSubset<T, StartupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Startups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Startups
     * const startup = await prisma.startup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StartupUpdateManyArgs>(args: SelectSubset<T, StartupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Startups and returns the data updated in the database.
     * @param {StartupUpdateManyAndReturnArgs} args - Arguments to update many Startups.
     * @example
     * // Update many Startups
     * const startup = await prisma.startup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Startups and only return the `slug`
     * const startupWithSlugOnly = await prisma.startup.updateManyAndReturn({
     *   select: { slug: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StartupUpdateManyAndReturnArgs>(args: SelectSubset<T, StartupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Startup.
     * @param {StartupUpsertArgs} args - Arguments to update or create a Startup.
     * @example
     * // Update or create a Startup
     * const startup = await prisma.startup.upsert({
     *   create: {
     *     // ... data to create a Startup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Startup we want to update
     *   }
     * })
     */
    upsert<T extends StartupUpsertArgs>(args: SelectSubset<T, StartupUpsertArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Startups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupCountArgs} args - Arguments to filter Startups to count.
     * @example
     * // Count the number of Startups
     * const count = await prisma.startup.count({
     *   where: {
     *     // ... the filter for the Startups we want to count
     *   }
     * })
    **/
    count<T extends StartupCountArgs>(
      args?: Subset<T, StartupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StartupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Startup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StartupAggregateArgs>(args: Subset<T, StartupAggregateArgs>): Prisma.PrismaPromise<GetStartupAggregateType<T>>

    /**
     * Group by Startup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupGroupByArgs} args - Group by arguments.
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
      T extends StartupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StartupGroupByArgs['orderBy'] }
        : { orderBy?: StartupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StartupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStartupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Startup model
   */
  readonly fields: StartupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Startup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StartupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marketingChannels<T extends Startup$marketingChannelsArgs<ExtArgs> = {}>(args?: Subset<T, Startup$marketingChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    techStack<T extends Startup$techStackArgs<ExtArgs> = {}>(args?: Subset<T, Startup$techStackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Startup model
   */
  interface StartupFieldRefs {
    readonly slug: FieldRef<"Startup", 'String'>
    readonly name: FieldRef<"Startup", 'String'>
    readonly icon: FieldRef<"Startup", 'String'>
    readonly description: FieldRef<"Startup", 'String'>
    readonly website: FieldRef<"Startup", 'String'>
    readonly country: FieldRef<"Startup", 'String'>
    readonly category: FieldRef<"Startup", 'String'>
    readonly targetAudience: FieldRef<"Startup", 'String'>
    readonly paymentProvider: FieldRef<"Startup", 'String'>
    readonly foundedDate: FieldRef<"Startup", 'DateTime'>
    readonly xHandle: FieldRef<"Startup", 'String'>
    readonly xFollowerCount: FieldRef<"Startup", 'Int'>
    readonly rank: FieldRef<"Startup", 'Int'>
    readonly mrr: FieldRef<"Startup", 'Float'>
    readonly revenueTotal: FieldRef<"Startup", 'Float'>
    readonly revenueLast30Days: FieldRef<"Startup", 'Float'>
    readonly activeSubscriptions: FieldRef<"Startup", 'Int'>
    readonly growth30d: FieldRef<"Startup", 'Float'>
    readonly growthMRR30d: FieldRef<"Startup", 'Float'>
    readonly onSale: FieldRef<"Startup", 'Boolean'>
    readonly askingPrice: FieldRef<"Startup", 'Float'>
    readonly detailFetchedAt: FieldRef<"Startup", 'DateTime'>
    readonly updatedAt: FieldRef<"Startup", 'DateTime'>
    readonly createdAt: FieldRef<"Startup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Startup findUnique
   */
  export type StartupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter, which Startup to fetch.
     */
    where: StartupWhereUniqueInput
  }

  /**
   * Startup findUniqueOrThrow
   */
  export type StartupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter, which Startup to fetch.
     */
    where: StartupWhereUniqueInput
  }

  /**
   * Startup findFirst
   */
  export type StartupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter, which Startup to fetch.
     */
    where?: StartupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startups to fetch.
     */
    orderBy?: StartupOrderByWithRelationInput | StartupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Startups.
     */
    cursor?: StartupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Startups.
     */
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[]
  }

  /**
   * Startup findFirstOrThrow
   */
  export type StartupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter, which Startup to fetch.
     */
    where?: StartupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startups to fetch.
     */
    orderBy?: StartupOrderByWithRelationInput | StartupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Startups.
     */
    cursor?: StartupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Startups.
     */
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[]
  }

  /**
   * Startup findMany
   */
  export type StartupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter, which Startups to fetch.
     */
    where?: StartupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Startups to fetch.
     */
    orderBy?: StartupOrderByWithRelationInput | StartupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Startups.
     */
    cursor?: StartupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Startups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Startups.
     */
    skip?: number
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[]
  }

  /**
   * Startup create
   */
  export type StartupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * The data needed to create a Startup.
     */
    data: XOR<StartupCreateInput, StartupUncheckedCreateInput>
  }

  /**
   * Startup createMany
   */
  export type StartupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Startups.
     */
    data: StartupCreateManyInput | StartupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Startup createManyAndReturn
   */
  export type StartupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * The data used to create many Startups.
     */
    data: StartupCreateManyInput | StartupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Startup update
   */
  export type StartupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * The data needed to update a Startup.
     */
    data: XOR<StartupUpdateInput, StartupUncheckedUpdateInput>
    /**
     * Choose, which Startup to update.
     */
    where: StartupWhereUniqueInput
  }

  /**
   * Startup updateMany
   */
  export type StartupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Startups.
     */
    data: XOR<StartupUpdateManyMutationInput, StartupUncheckedUpdateManyInput>
    /**
     * Filter which Startups to update
     */
    where?: StartupWhereInput
    /**
     * Limit how many Startups to update.
     */
    limit?: number
  }

  /**
   * Startup updateManyAndReturn
   */
  export type StartupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * The data used to update Startups.
     */
    data: XOR<StartupUpdateManyMutationInput, StartupUncheckedUpdateManyInput>
    /**
     * Filter which Startups to update
     */
    where?: StartupWhereInput
    /**
     * Limit how many Startups to update.
     */
    limit?: number
  }

  /**
   * Startup upsert
   */
  export type StartupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * The filter to search for the Startup to update in case it exists.
     */
    where: StartupWhereUniqueInput
    /**
     * In case the Startup found by the `where` argument doesn't exist, create a new Startup with this data.
     */
    create: XOR<StartupCreateInput, StartupUncheckedCreateInput>
    /**
     * In case the Startup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StartupUpdateInput, StartupUncheckedUpdateInput>
  }

  /**
   * Startup delete
   */
  export type StartupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
    /**
     * Filter which Startup to delete.
     */
    where: StartupWhereUniqueInput
  }

  /**
   * Startup deleteMany
   */
  export type StartupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Startups to delete
     */
    where?: StartupWhereInput
    /**
     * Limit how many Startups to delete.
     */
    limit?: number
  }

  /**
   * Startup.marketingChannels
   */
  export type Startup$marketingChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelInclude<ExtArgs> | null
    where?: MarketingChannelWhereInput
    orderBy?: MarketingChannelOrderByWithRelationInput | MarketingChannelOrderByWithRelationInput[]
    cursor?: MarketingChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketingChannelScalarFieldEnum | MarketingChannelScalarFieldEnum[]
  }

  /**
   * Startup.techStack
   */
  export type Startup$techStackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    where?: TechStackWhereInput
    orderBy?: TechStackOrderByWithRelationInput | TechStackOrderByWithRelationInput[]
    cursor?: TechStackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TechStackScalarFieldEnum | TechStackScalarFieldEnum[]
  }

  /**
   * Startup without action
   */
  export type StartupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Startup
     */
    select?: StartupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Startup
     */
    omit?: StartupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInclude<ExtArgs> | null
  }


  /**
   * Model MarketingChannel
   */

  export type AggregateMarketingChannel = {
    _count: MarketingChannelCountAggregateOutputType | null
    _avg: MarketingChannelAvgAggregateOutputType | null
    _sum: MarketingChannelSumAggregateOutputType | null
    _min: MarketingChannelMinAggregateOutputType | null
    _max: MarketingChannelMaxAggregateOutputType | null
  }

  export type MarketingChannelAvgAggregateOutputType = {
    id: number | null
  }

  export type MarketingChannelSumAggregateOutputType = {
    id: number | null
  }

  export type MarketingChannelMinAggregateOutputType = {
    id: number | null
    startupSlug: string | null
    slug: string | null
    category: string | null
  }

  export type MarketingChannelMaxAggregateOutputType = {
    id: number | null
    startupSlug: string | null
    slug: string | null
    category: string | null
  }

  export type MarketingChannelCountAggregateOutputType = {
    id: number
    startupSlug: number
    slug: number
    category: number
    _all: number
  }


  export type MarketingChannelAvgAggregateInputType = {
    id?: true
  }

  export type MarketingChannelSumAggregateInputType = {
    id?: true
  }

  export type MarketingChannelMinAggregateInputType = {
    id?: true
    startupSlug?: true
    slug?: true
    category?: true
  }

  export type MarketingChannelMaxAggregateInputType = {
    id?: true
    startupSlug?: true
    slug?: true
    category?: true
  }

  export type MarketingChannelCountAggregateInputType = {
    id?: true
    startupSlug?: true
    slug?: true
    category?: true
    _all?: true
  }

  export type MarketingChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingChannel to aggregate.
     */
    where?: MarketingChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingChannels to fetch.
     */
    orderBy?: MarketingChannelOrderByWithRelationInput | MarketingChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketingChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketingChannels
    **/
    _count?: true | MarketingChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketingChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketingChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketingChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketingChannelMaxAggregateInputType
  }

  export type GetMarketingChannelAggregateType<T extends MarketingChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketingChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketingChannel[P]>
      : GetScalarType<T[P], AggregateMarketingChannel[P]>
  }




  export type MarketingChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketingChannelWhereInput
    orderBy?: MarketingChannelOrderByWithAggregationInput | MarketingChannelOrderByWithAggregationInput[]
    by: MarketingChannelScalarFieldEnum[] | MarketingChannelScalarFieldEnum
    having?: MarketingChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketingChannelCountAggregateInputType | true
    _avg?: MarketingChannelAvgAggregateInputType
    _sum?: MarketingChannelSumAggregateInputType
    _min?: MarketingChannelMinAggregateInputType
    _max?: MarketingChannelMaxAggregateInputType
  }

  export type MarketingChannelGroupByOutputType = {
    id: number
    startupSlug: string
    slug: string
    category: string | null
    _count: MarketingChannelCountAggregateOutputType | null
    _avg: MarketingChannelAvgAggregateOutputType | null
    _sum: MarketingChannelSumAggregateOutputType | null
    _min: MarketingChannelMinAggregateOutputType | null
    _max: MarketingChannelMaxAggregateOutputType | null
  }

  type GetMarketingChannelGroupByPayload<T extends MarketingChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketingChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketingChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketingChannelGroupByOutputType[P]>
            : GetScalarType<T[P], MarketingChannelGroupByOutputType[P]>
        }
      >
    >


  export type MarketingChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupSlug?: boolean
    slug?: boolean
    category?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketingChannel"]>

  export type MarketingChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupSlug?: boolean
    slug?: boolean
    category?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketingChannel"]>

  export type MarketingChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupSlug?: boolean
    slug?: boolean
    category?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketingChannel"]>

  export type MarketingChannelSelectScalar = {
    id?: boolean
    startupSlug?: boolean
    slug?: boolean
    category?: boolean
  }

  export type MarketingChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startupSlug" | "slug" | "category", ExtArgs["result"]["marketingChannel"]>
  export type MarketingChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }
  export type MarketingChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }
  export type MarketingChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }

  export type $MarketingChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketingChannel"
    objects: {
      startup: Prisma.$StartupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startupSlug: string
      slug: string
      category: string | null
    }, ExtArgs["result"]["marketingChannel"]>
    composites: {}
  }

  type MarketingChannelGetPayload<S extends boolean | null | undefined | MarketingChannelDefaultArgs> = $Result.GetResult<Prisma.$MarketingChannelPayload, S>

  type MarketingChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketingChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketingChannelCountAggregateInputType | true
    }

  export interface MarketingChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketingChannel'], meta: { name: 'MarketingChannel' } }
    /**
     * Find zero or one MarketingChannel that matches the filter.
     * @param {MarketingChannelFindUniqueArgs} args - Arguments to find a MarketingChannel
     * @example
     * // Get one MarketingChannel
     * const marketingChannel = await prisma.marketingChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketingChannelFindUniqueArgs>(args: SelectSubset<T, MarketingChannelFindUniqueArgs<ExtArgs>>): Prisma__MarketingChannelClient<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketingChannel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketingChannelFindUniqueOrThrowArgs} args - Arguments to find a MarketingChannel
     * @example
     * // Get one MarketingChannel
     * const marketingChannel = await prisma.marketingChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketingChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketingChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketingChannelClient<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingChannelFindFirstArgs} args - Arguments to find a MarketingChannel
     * @example
     * // Get one MarketingChannel
     * const marketingChannel = await prisma.marketingChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketingChannelFindFirstArgs>(args?: SelectSubset<T, MarketingChannelFindFirstArgs<ExtArgs>>): Prisma__MarketingChannelClient<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingChannelFindFirstOrThrowArgs} args - Arguments to find a MarketingChannel
     * @example
     * // Get one MarketingChannel
     * const marketingChannel = await prisma.marketingChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketingChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketingChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketingChannelClient<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketingChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketingChannels
     * const marketingChannels = await prisma.marketingChannel.findMany()
     * 
     * // Get first 10 MarketingChannels
     * const marketingChannels = await prisma.marketingChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketingChannelWithIdOnly = await prisma.marketingChannel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketingChannelFindManyArgs>(args?: SelectSubset<T, MarketingChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketingChannel.
     * @param {MarketingChannelCreateArgs} args - Arguments to create a MarketingChannel.
     * @example
     * // Create one MarketingChannel
     * const MarketingChannel = await prisma.marketingChannel.create({
     *   data: {
     *     // ... data to create a MarketingChannel
     *   }
     * })
     * 
     */
    create<T extends MarketingChannelCreateArgs>(args: SelectSubset<T, MarketingChannelCreateArgs<ExtArgs>>): Prisma__MarketingChannelClient<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketingChannels.
     * @param {MarketingChannelCreateManyArgs} args - Arguments to create many MarketingChannels.
     * @example
     * // Create many MarketingChannels
     * const marketingChannel = await prisma.marketingChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketingChannelCreateManyArgs>(args?: SelectSubset<T, MarketingChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketingChannels and returns the data saved in the database.
     * @param {MarketingChannelCreateManyAndReturnArgs} args - Arguments to create many MarketingChannels.
     * @example
     * // Create many MarketingChannels
     * const marketingChannel = await prisma.marketingChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketingChannels and only return the `id`
     * const marketingChannelWithIdOnly = await prisma.marketingChannel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketingChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketingChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketingChannel.
     * @param {MarketingChannelDeleteArgs} args - Arguments to delete one MarketingChannel.
     * @example
     * // Delete one MarketingChannel
     * const MarketingChannel = await prisma.marketingChannel.delete({
     *   where: {
     *     // ... filter to delete one MarketingChannel
     *   }
     * })
     * 
     */
    delete<T extends MarketingChannelDeleteArgs>(args: SelectSubset<T, MarketingChannelDeleteArgs<ExtArgs>>): Prisma__MarketingChannelClient<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketingChannel.
     * @param {MarketingChannelUpdateArgs} args - Arguments to update one MarketingChannel.
     * @example
     * // Update one MarketingChannel
     * const marketingChannel = await prisma.marketingChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketingChannelUpdateArgs>(args: SelectSubset<T, MarketingChannelUpdateArgs<ExtArgs>>): Prisma__MarketingChannelClient<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketingChannels.
     * @param {MarketingChannelDeleteManyArgs} args - Arguments to filter MarketingChannels to delete.
     * @example
     * // Delete a few MarketingChannels
     * const { count } = await prisma.marketingChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketingChannelDeleteManyArgs>(args?: SelectSubset<T, MarketingChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketingChannels
     * const marketingChannel = await prisma.marketingChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketingChannelUpdateManyArgs>(args: SelectSubset<T, MarketingChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingChannels and returns the data updated in the database.
     * @param {MarketingChannelUpdateManyAndReturnArgs} args - Arguments to update many MarketingChannels.
     * @example
     * // Update many MarketingChannels
     * const marketingChannel = await prisma.marketingChannel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketingChannels and only return the `id`
     * const marketingChannelWithIdOnly = await prisma.marketingChannel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketingChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketingChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketingChannel.
     * @param {MarketingChannelUpsertArgs} args - Arguments to update or create a MarketingChannel.
     * @example
     * // Update or create a MarketingChannel
     * const marketingChannel = await prisma.marketingChannel.upsert({
     *   create: {
     *     // ... data to create a MarketingChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketingChannel we want to update
     *   }
     * })
     */
    upsert<T extends MarketingChannelUpsertArgs>(args: SelectSubset<T, MarketingChannelUpsertArgs<ExtArgs>>): Prisma__MarketingChannelClient<$Result.GetResult<Prisma.$MarketingChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketingChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingChannelCountArgs} args - Arguments to filter MarketingChannels to count.
     * @example
     * // Count the number of MarketingChannels
     * const count = await prisma.marketingChannel.count({
     *   where: {
     *     // ... the filter for the MarketingChannels we want to count
     *   }
     * })
    **/
    count<T extends MarketingChannelCountArgs>(
      args?: Subset<T, MarketingChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketingChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketingChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketingChannelAggregateArgs>(args: Subset<T, MarketingChannelAggregateArgs>): Prisma.PrismaPromise<GetMarketingChannelAggregateType<T>>

    /**
     * Group by MarketingChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingChannelGroupByArgs} args - Group by arguments.
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
      T extends MarketingChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketingChannelGroupByArgs['orderBy'] }
        : { orderBy?: MarketingChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketingChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketingChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketingChannel model
   */
  readonly fields: MarketingChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketingChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketingChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    startup<T extends StartupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StartupDefaultArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MarketingChannel model
   */
  interface MarketingChannelFieldRefs {
    readonly id: FieldRef<"MarketingChannel", 'Int'>
    readonly startupSlug: FieldRef<"MarketingChannel", 'String'>
    readonly slug: FieldRef<"MarketingChannel", 'String'>
    readonly category: FieldRef<"MarketingChannel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MarketingChannel findUnique
   */
  export type MarketingChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelInclude<ExtArgs> | null
    /**
     * Filter, which MarketingChannel to fetch.
     */
    where: MarketingChannelWhereUniqueInput
  }

  /**
   * MarketingChannel findUniqueOrThrow
   */
  export type MarketingChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelInclude<ExtArgs> | null
    /**
     * Filter, which MarketingChannel to fetch.
     */
    where: MarketingChannelWhereUniqueInput
  }

  /**
   * MarketingChannel findFirst
   */
  export type MarketingChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelInclude<ExtArgs> | null
    /**
     * Filter, which MarketingChannel to fetch.
     */
    where?: MarketingChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingChannels to fetch.
     */
    orderBy?: MarketingChannelOrderByWithRelationInput | MarketingChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingChannels.
     */
    cursor?: MarketingChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingChannels.
     */
    distinct?: MarketingChannelScalarFieldEnum | MarketingChannelScalarFieldEnum[]
  }

  /**
   * MarketingChannel findFirstOrThrow
   */
  export type MarketingChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelInclude<ExtArgs> | null
    /**
     * Filter, which MarketingChannel to fetch.
     */
    where?: MarketingChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingChannels to fetch.
     */
    orderBy?: MarketingChannelOrderByWithRelationInput | MarketingChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingChannels.
     */
    cursor?: MarketingChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingChannels.
     */
    distinct?: MarketingChannelScalarFieldEnum | MarketingChannelScalarFieldEnum[]
  }

  /**
   * MarketingChannel findMany
   */
  export type MarketingChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelInclude<ExtArgs> | null
    /**
     * Filter, which MarketingChannels to fetch.
     */
    where?: MarketingChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingChannels to fetch.
     */
    orderBy?: MarketingChannelOrderByWithRelationInput | MarketingChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketingChannels.
     */
    cursor?: MarketingChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingChannels.
     */
    skip?: number
    distinct?: MarketingChannelScalarFieldEnum | MarketingChannelScalarFieldEnum[]
  }

  /**
   * MarketingChannel create
   */
  export type MarketingChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketingChannel.
     */
    data: XOR<MarketingChannelCreateInput, MarketingChannelUncheckedCreateInput>
  }

  /**
   * MarketingChannel createMany
   */
  export type MarketingChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketingChannels.
     */
    data: MarketingChannelCreateManyInput | MarketingChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingChannel createManyAndReturn
   */
  export type MarketingChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * The data used to create many MarketingChannels.
     */
    data: MarketingChannelCreateManyInput | MarketingChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketingChannel update
   */
  export type MarketingChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketingChannel.
     */
    data: XOR<MarketingChannelUpdateInput, MarketingChannelUncheckedUpdateInput>
    /**
     * Choose, which MarketingChannel to update.
     */
    where: MarketingChannelWhereUniqueInput
  }

  /**
   * MarketingChannel updateMany
   */
  export type MarketingChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketingChannels.
     */
    data: XOR<MarketingChannelUpdateManyMutationInput, MarketingChannelUncheckedUpdateManyInput>
    /**
     * Filter which MarketingChannels to update
     */
    where?: MarketingChannelWhereInput
    /**
     * Limit how many MarketingChannels to update.
     */
    limit?: number
  }

  /**
   * MarketingChannel updateManyAndReturn
   */
  export type MarketingChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * The data used to update MarketingChannels.
     */
    data: XOR<MarketingChannelUpdateManyMutationInput, MarketingChannelUncheckedUpdateManyInput>
    /**
     * Filter which MarketingChannels to update
     */
    where?: MarketingChannelWhereInput
    /**
     * Limit how many MarketingChannels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketingChannel upsert
   */
  export type MarketingChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketingChannel to update in case it exists.
     */
    where: MarketingChannelWhereUniqueInput
    /**
     * In case the MarketingChannel found by the `where` argument doesn't exist, create a new MarketingChannel with this data.
     */
    create: XOR<MarketingChannelCreateInput, MarketingChannelUncheckedCreateInput>
    /**
     * In case the MarketingChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketingChannelUpdateInput, MarketingChannelUncheckedUpdateInput>
  }

  /**
   * MarketingChannel delete
   */
  export type MarketingChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelInclude<ExtArgs> | null
    /**
     * Filter which MarketingChannel to delete.
     */
    where: MarketingChannelWhereUniqueInput
  }

  /**
   * MarketingChannel deleteMany
   */
  export type MarketingChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingChannels to delete
     */
    where?: MarketingChannelWhereInput
    /**
     * Limit how many MarketingChannels to delete.
     */
    limit?: number
  }

  /**
   * MarketingChannel without action
   */
  export type MarketingChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingChannel
     */
    select?: MarketingChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingChannel
     */
    omit?: MarketingChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingChannelInclude<ExtArgs> | null
  }


  /**
   * Model TechStack
   */

  export type AggregateTechStack = {
    _count: TechStackCountAggregateOutputType | null
    _avg: TechStackAvgAggregateOutputType | null
    _sum: TechStackSumAggregateOutputType | null
    _min: TechStackMinAggregateOutputType | null
    _max: TechStackMaxAggregateOutputType | null
  }

  export type TechStackAvgAggregateOutputType = {
    id: number | null
  }

  export type TechStackSumAggregateOutputType = {
    id: number | null
  }

  export type TechStackMinAggregateOutputType = {
    id: number | null
    startupSlug: string | null
    slug: string | null
    category: string | null
  }

  export type TechStackMaxAggregateOutputType = {
    id: number | null
    startupSlug: string | null
    slug: string | null
    category: string | null
  }

  export type TechStackCountAggregateOutputType = {
    id: number
    startupSlug: number
    slug: number
    category: number
    _all: number
  }


  export type TechStackAvgAggregateInputType = {
    id?: true
  }

  export type TechStackSumAggregateInputType = {
    id?: true
  }

  export type TechStackMinAggregateInputType = {
    id?: true
    startupSlug?: true
    slug?: true
    category?: true
  }

  export type TechStackMaxAggregateInputType = {
    id?: true
    startupSlug?: true
    slug?: true
    category?: true
  }

  export type TechStackCountAggregateInputType = {
    id?: true
    startupSlug?: true
    slug?: true
    category?: true
    _all?: true
  }

  export type TechStackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechStack to aggregate.
     */
    where?: TechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechStacks to fetch.
     */
    orderBy?: TechStackOrderByWithRelationInput | TechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TechStacks
    **/
    _count?: true | TechStackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechStackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechStackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechStackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechStackMaxAggregateInputType
  }

  export type GetTechStackAggregateType<T extends TechStackAggregateArgs> = {
        [P in keyof T & keyof AggregateTechStack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechStack[P]>
      : GetScalarType<T[P], AggregateTechStack[P]>
  }




  export type TechStackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechStackWhereInput
    orderBy?: TechStackOrderByWithAggregationInput | TechStackOrderByWithAggregationInput[]
    by: TechStackScalarFieldEnum[] | TechStackScalarFieldEnum
    having?: TechStackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechStackCountAggregateInputType | true
    _avg?: TechStackAvgAggregateInputType
    _sum?: TechStackSumAggregateInputType
    _min?: TechStackMinAggregateInputType
    _max?: TechStackMaxAggregateInputType
  }

  export type TechStackGroupByOutputType = {
    id: number
    startupSlug: string
    slug: string
    category: string | null
    _count: TechStackCountAggregateOutputType | null
    _avg: TechStackAvgAggregateOutputType | null
    _sum: TechStackSumAggregateOutputType | null
    _min: TechStackMinAggregateOutputType | null
    _max: TechStackMaxAggregateOutputType | null
  }

  type GetTechStackGroupByPayload<T extends TechStackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechStackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechStackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechStackGroupByOutputType[P]>
            : GetScalarType<T[P], TechStackGroupByOutputType[P]>
        }
      >
    >


  export type TechStackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupSlug?: boolean
    slug?: boolean
    category?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["techStack"]>

  export type TechStackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupSlug?: boolean
    slug?: boolean
    category?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["techStack"]>

  export type TechStackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupSlug?: boolean
    slug?: boolean
    category?: boolean
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["techStack"]>

  export type TechStackSelectScalar = {
    id?: boolean
    startupSlug?: boolean
    slug?: boolean
    category?: boolean
  }

  export type TechStackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startupSlug" | "slug" | "category", ExtArgs["result"]["techStack"]>
  export type TechStackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }
  export type TechStackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }
  export type TechStackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | StartupDefaultArgs<ExtArgs>
  }

  export type $TechStackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TechStack"
    objects: {
      startup: Prisma.$StartupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startupSlug: string
      slug: string
      category: string | null
    }, ExtArgs["result"]["techStack"]>
    composites: {}
  }

  type TechStackGetPayload<S extends boolean | null | undefined | TechStackDefaultArgs> = $Result.GetResult<Prisma.$TechStackPayload, S>

  type TechStackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechStackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechStackCountAggregateInputType | true
    }

  export interface TechStackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TechStack'], meta: { name: 'TechStack' } }
    /**
     * Find zero or one TechStack that matches the filter.
     * @param {TechStackFindUniqueArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechStackFindUniqueArgs>(args: SelectSubset<T, TechStackFindUniqueArgs<ExtArgs>>): Prisma__TechStackClient<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TechStack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechStackFindUniqueOrThrowArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechStackFindUniqueOrThrowArgs>(args: SelectSubset<T, TechStackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechStackClient<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechStack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackFindFirstArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechStackFindFirstArgs>(args?: SelectSubset<T, TechStackFindFirstArgs<ExtArgs>>): Prisma__TechStackClient<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TechStack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackFindFirstOrThrowArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechStackFindFirstOrThrowArgs>(args?: SelectSubset<T, TechStackFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechStackClient<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TechStacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechStacks
     * const techStacks = await prisma.techStack.findMany()
     * 
     * // Get first 10 TechStacks
     * const techStacks = await prisma.techStack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const techStackWithIdOnly = await prisma.techStack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechStackFindManyArgs>(args?: SelectSubset<T, TechStackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TechStack.
     * @param {TechStackCreateArgs} args - Arguments to create a TechStack.
     * @example
     * // Create one TechStack
     * const TechStack = await prisma.techStack.create({
     *   data: {
     *     // ... data to create a TechStack
     *   }
     * })
     * 
     */
    create<T extends TechStackCreateArgs>(args: SelectSubset<T, TechStackCreateArgs<ExtArgs>>): Prisma__TechStackClient<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TechStacks.
     * @param {TechStackCreateManyArgs} args - Arguments to create many TechStacks.
     * @example
     * // Create many TechStacks
     * const techStack = await prisma.techStack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechStackCreateManyArgs>(args?: SelectSubset<T, TechStackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TechStacks and returns the data saved in the database.
     * @param {TechStackCreateManyAndReturnArgs} args - Arguments to create many TechStacks.
     * @example
     * // Create many TechStacks
     * const techStack = await prisma.techStack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TechStacks and only return the `id`
     * const techStackWithIdOnly = await prisma.techStack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TechStackCreateManyAndReturnArgs>(args?: SelectSubset<T, TechStackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TechStack.
     * @param {TechStackDeleteArgs} args - Arguments to delete one TechStack.
     * @example
     * // Delete one TechStack
     * const TechStack = await prisma.techStack.delete({
     *   where: {
     *     // ... filter to delete one TechStack
     *   }
     * })
     * 
     */
    delete<T extends TechStackDeleteArgs>(args: SelectSubset<T, TechStackDeleteArgs<ExtArgs>>): Prisma__TechStackClient<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TechStack.
     * @param {TechStackUpdateArgs} args - Arguments to update one TechStack.
     * @example
     * // Update one TechStack
     * const techStack = await prisma.techStack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechStackUpdateArgs>(args: SelectSubset<T, TechStackUpdateArgs<ExtArgs>>): Prisma__TechStackClient<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TechStacks.
     * @param {TechStackDeleteManyArgs} args - Arguments to filter TechStacks to delete.
     * @example
     * // Delete a few TechStacks
     * const { count } = await prisma.techStack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechStackDeleteManyArgs>(args?: SelectSubset<T, TechStackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechStacks
     * const techStack = await prisma.techStack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechStackUpdateManyArgs>(args: SelectSubset<T, TechStackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechStacks and returns the data updated in the database.
     * @param {TechStackUpdateManyAndReturnArgs} args - Arguments to update many TechStacks.
     * @example
     * // Update many TechStacks
     * const techStack = await prisma.techStack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TechStacks and only return the `id`
     * const techStackWithIdOnly = await prisma.techStack.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TechStackUpdateManyAndReturnArgs>(args: SelectSubset<T, TechStackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TechStack.
     * @param {TechStackUpsertArgs} args - Arguments to update or create a TechStack.
     * @example
     * // Update or create a TechStack
     * const techStack = await prisma.techStack.upsert({
     *   create: {
     *     // ... data to create a TechStack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechStack we want to update
     *   }
     * })
     */
    upsert<T extends TechStackUpsertArgs>(args: SelectSubset<T, TechStackUpsertArgs<ExtArgs>>): Prisma__TechStackClient<$Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TechStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackCountArgs} args - Arguments to filter TechStacks to count.
     * @example
     * // Count the number of TechStacks
     * const count = await prisma.techStack.count({
     *   where: {
     *     // ... the filter for the TechStacks we want to count
     *   }
     * })
    **/
    count<T extends TechStackCountArgs>(
      args?: Subset<T, TechStackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechStackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TechStackAggregateArgs>(args: Subset<T, TechStackAggregateArgs>): Prisma.PrismaPromise<GetTechStackAggregateType<T>>

    /**
     * Group by TechStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackGroupByArgs} args - Group by arguments.
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
      T extends TechStackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechStackGroupByArgs['orderBy'] }
        : { orderBy?: TechStackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TechStackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechStackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TechStack model
   */
  readonly fields: TechStackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TechStack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechStackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    startup<T extends StartupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StartupDefaultArgs<ExtArgs>>): Prisma__StartupClient<$Result.GetResult<Prisma.$StartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TechStack model
   */
  interface TechStackFieldRefs {
    readonly id: FieldRef<"TechStack", 'Int'>
    readonly startupSlug: FieldRef<"TechStack", 'String'>
    readonly slug: FieldRef<"TechStack", 'String'>
    readonly category: FieldRef<"TechStack", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TechStack findUnique
   */
  export type TechStackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter, which TechStack to fetch.
     */
    where: TechStackWhereUniqueInput
  }

  /**
   * TechStack findUniqueOrThrow
   */
  export type TechStackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter, which TechStack to fetch.
     */
    where: TechStackWhereUniqueInput
  }

  /**
   * TechStack findFirst
   */
  export type TechStackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter, which TechStack to fetch.
     */
    where?: TechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechStacks to fetch.
     */
    orderBy?: TechStackOrderByWithRelationInput | TechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechStacks.
     */
    cursor?: TechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechStacks.
     */
    distinct?: TechStackScalarFieldEnum | TechStackScalarFieldEnum[]
  }

  /**
   * TechStack findFirstOrThrow
   */
  export type TechStackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter, which TechStack to fetch.
     */
    where?: TechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechStacks to fetch.
     */
    orderBy?: TechStackOrderByWithRelationInput | TechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechStacks.
     */
    cursor?: TechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechStacks.
     */
    distinct?: TechStackScalarFieldEnum | TechStackScalarFieldEnum[]
  }

  /**
   * TechStack findMany
   */
  export type TechStackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter, which TechStacks to fetch.
     */
    where?: TechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechStacks to fetch.
     */
    orderBy?: TechStackOrderByWithRelationInput | TechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TechStacks.
     */
    cursor?: TechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechStacks.
     */
    skip?: number
    distinct?: TechStackScalarFieldEnum | TechStackScalarFieldEnum[]
  }

  /**
   * TechStack create
   */
  export type TechStackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * The data needed to create a TechStack.
     */
    data: XOR<TechStackCreateInput, TechStackUncheckedCreateInput>
  }

  /**
   * TechStack createMany
   */
  export type TechStackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TechStacks.
     */
    data: TechStackCreateManyInput | TechStackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TechStack createManyAndReturn
   */
  export type TechStackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * The data used to create many TechStacks.
     */
    data: TechStackCreateManyInput | TechStackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TechStack update
   */
  export type TechStackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * The data needed to update a TechStack.
     */
    data: XOR<TechStackUpdateInput, TechStackUncheckedUpdateInput>
    /**
     * Choose, which TechStack to update.
     */
    where: TechStackWhereUniqueInput
  }

  /**
   * TechStack updateMany
   */
  export type TechStackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TechStacks.
     */
    data: XOR<TechStackUpdateManyMutationInput, TechStackUncheckedUpdateManyInput>
    /**
     * Filter which TechStacks to update
     */
    where?: TechStackWhereInput
    /**
     * Limit how many TechStacks to update.
     */
    limit?: number
  }

  /**
   * TechStack updateManyAndReturn
   */
  export type TechStackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * The data used to update TechStacks.
     */
    data: XOR<TechStackUpdateManyMutationInput, TechStackUncheckedUpdateManyInput>
    /**
     * Filter which TechStacks to update
     */
    where?: TechStackWhereInput
    /**
     * Limit how many TechStacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TechStack upsert
   */
  export type TechStackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * The filter to search for the TechStack to update in case it exists.
     */
    where: TechStackWhereUniqueInput
    /**
     * In case the TechStack found by the `where` argument doesn't exist, create a new TechStack with this data.
     */
    create: XOR<TechStackCreateInput, TechStackUncheckedCreateInput>
    /**
     * In case the TechStack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechStackUpdateInput, TechStackUncheckedUpdateInput>
  }

  /**
   * TechStack delete
   */
  export type TechStackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter which TechStack to delete.
     */
    where: TechStackWhereUniqueInput
  }

  /**
   * TechStack deleteMany
   */
  export type TechStackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechStacks to delete
     */
    where?: TechStackWhereInput
    /**
     * Limit how many TechStacks to delete.
     */
    limit?: number
  }

  /**
   * TechStack without action
   */
  export type TechStackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
  }


  /**
   * Model SyncState
   */

  export type AggregateSyncState = {
    _count: SyncStateCountAggregateOutputType | null
    _avg: SyncStateAvgAggregateOutputType | null
    _sum: SyncStateSumAggregateOutputType | null
    _min: SyncStateMinAggregateOutputType | null
    _max: SyncStateMaxAggregateOutputType | null
  }

  export type SyncStateAvgAggregateOutputType = {
    totalStartups: number | null
    detailsFetched: number | null
  }

  export type SyncStateSumAggregateOutputType = {
    totalStartups: number | null
    detailsFetched: number | null
  }

  export type SyncStateMinAggregateOutputType = {
    id: string | null
    lastListSyncAt: Date | null
    lastDetailSyncAt: Date | null
    detailCursor: string | null
    totalStartups: number | null
    detailsFetched: number | null
    updatedAt: Date | null
  }

  export type SyncStateMaxAggregateOutputType = {
    id: string | null
    lastListSyncAt: Date | null
    lastDetailSyncAt: Date | null
    detailCursor: string | null
    totalStartups: number | null
    detailsFetched: number | null
    updatedAt: Date | null
  }

  export type SyncStateCountAggregateOutputType = {
    id: number
    lastListSyncAt: number
    lastDetailSyncAt: number
    detailCursor: number
    totalStartups: number
    detailsFetched: number
    updatedAt: number
    _all: number
  }


  export type SyncStateAvgAggregateInputType = {
    totalStartups?: true
    detailsFetched?: true
  }

  export type SyncStateSumAggregateInputType = {
    totalStartups?: true
    detailsFetched?: true
  }

  export type SyncStateMinAggregateInputType = {
    id?: true
    lastListSyncAt?: true
    lastDetailSyncAt?: true
    detailCursor?: true
    totalStartups?: true
    detailsFetched?: true
    updatedAt?: true
  }

  export type SyncStateMaxAggregateInputType = {
    id?: true
    lastListSyncAt?: true
    lastDetailSyncAt?: true
    detailCursor?: true
    totalStartups?: true
    detailsFetched?: true
    updatedAt?: true
  }

  export type SyncStateCountAggregateInputType = {
    id?: true
    lastListSyncAt?: true
    lastDetailSyncAt?: true
    detailCursor?: true
    totalStartups?: true
    detailsFetched?: true
    updatedAt?: true
    _all?: true
  }

  export type SyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncState to aggregate.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncStates
    **/
    _count?: true | SyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncStateMaxAggregateInputType
  }

  export type GetSyncStateAggregateType<T extends SyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncState[P]>
      : GetScalarType<T[P], AggregateSyncState[P]>
  }




  export type SyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncStateWhereInput
    orderBy?: SyncStateOrderByWithAggregationInput | SyncStateOrderByWithAggregationInput[]
    by: SyncStateScalarFieldEnum[] | SyncStateScalarFieldEnum
    having?: SyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncStateCountAggregateInputType | true
    _avg?: SyncStateAvgAggregateInputType
    _sum?: SyncStateSumAggregateInputType
    _min?: SyncStateMinAggregateInputType
    _max?: SyncStateMaxAggregateInputType
  }

  export type SyncStateGroupByOutputType = {
    id: string
    lastListSyncAt: Date | null
    lastDetailSyncAt: Date | null
    detailCursor: string | null
    totalStartups: number
    detailsFetched: number
    updatedAt: Date
    _count: SyncStateCountAggregateOutputType | null
    _avg: SyncStateAvgAggregateOutputType | null
    _sum: SyncStateSumAggregateOutputType | null
    _min: SyncStateMinAggregateOutputType | null
    _max: SyncStateMaxAggregateOutputType | null
  }

  type GetSyncStateGroupByPayload<T extends SyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], SyncStateGroupByOutputType[P]>
        }
      >
    >


  export type SyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastListSyncAt?: boolean
    lastDetailSyncAt?: boolean
    detailCursor?: boolean
    totalStartups?: boolean
    detailsFetched?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastListSyncAt?: boolean
    lastDetailSyncAt?: boolean
    detailCursor?: boolean
    totalStartups?: boolean
    detailsFetched?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastListSyncAt?: boolean
    lastDetailSyncAt?: boolean
    detailCursor?: boolean
    totalStartups?: boolean
    detailsFetched?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectScalar = {
    id?: boolean
    lastListSyncAt?: boolean
    lastDetailSyncAt?: boolean
    detailCursor?: boolean
    totalStartups?: boolean
    detailsFetched?: boolean
    updatedAt?: boolean
  }

  export type SyncStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastListSyncAt" | "lastDetailSyncAt" | "detailCursor" | "totalStartups" | "detailsFetched" | "updatedAt", ExtArgs["result"]["syncState"]>

  export type $SyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lastListSyncAt: Date | null
      lastDetailSyncAt: Date | null
      detailCursor: string | null
      totalStartups: number
      detailsFetched: number
      updatedAt: Date
    }, ExtArgs["result"]["syncState"]>
    composites: {}
  }

  type SyncStateGetPayload<S extends boolean | null | undefined | SyncStateDefaultArgs> = $Result.GetResult<Prisma.$SyncStatePayload, S>

  type SyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncStateCountAggregateInputType | true
    }

  export interface SyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncState'], meta: { name: 'SyncState' } }
    /**
     * Find zero or one SyncState that matches the filter.
     * @param {SyncStateFindUniqueArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncStateFindUniqueArgs>(args: SelectSubset<T, SyncStateFindUniqueArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncStateFindUniqueOrThrowArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindFirstArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncStateFindFirstArgs>(args?: SelectSubset<T, SyncStateFindFirstArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindFirstOrThrowArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncStates
     * const syncStates = await prisma.syncState.findMany()
     * 
     * // Get first 10 SyncStates
     * const syncStates = await prisma.syncState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncStateWithIdOnly = await prisma.syncState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncStateFindManyArgs>(args?: SelectSubset<T, SyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncState.
     * @param {SyncStateCreateArgs} args - Arguments to create a SyncState.
     * @example
     * // Create one SyncState
     * const SyncState = await prisma.syncState.create({
     *   data: {
     *     // ... data to create a SyncState
     *   }
     * })
     * 
     */
    create<T extends SyncStateCreateArgs>(args: SelectSubset<T, SyncStateCreateArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncStates.
     * @param {SyncStateCreateManyArgs} args - Arguments to create many SyncStates.
     * @example
     * // Create many SyncStates
     * const syncState = await prisma.syncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncStateCreateManyArgs>(args?: SelectSubset<T, SyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncStates and returns the data saved in the database.
     * @param {SyncStateCreateManyAndReturnArgs} args - Arguments to create many SyncStates.
     * @example
     * // Create many SyncStates
     * const syncState = await prisma.syncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncStates and only return the `id`
     * const syncStateWithIdOnly = await prisma.syncState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SyncState.
     * @param {SyncStateDeleteArgs} args - Arguments to delete one SyncState.
     * @example
     * // Delete one SyncState
     * const SyncState = await prisma.syncState.delete({
     *   where: {
     *     // ... filter to delete one SyncState
     *   }
     * })
     * 
     */
    delete<T extends SyncStateDeleteArgs>(args: SelectSubset<T, SyncStateDeleteArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncState.
     * @param {SyncStateUpdateArgs} args - Arguments to update one SyncState.
     * @example
     * // Update one SyncState
     * const syncState = await prisma.syncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncStateUpdateArgs>(args: SelectSubset<T, SyncStateUpdateArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncStates.
     * @param {SyncStateDeleteManyArgs} args - Arguments to filter SyncStates to delete.
     * @example
     * // Delete a few SyncStates
     * const { count } = await prisma.syncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncStateDeleteManyArgs>(args?: SelectSubset<T, SyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncStates
     * const syncState = await prisma.syncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncStateUpdateManyArgs>(args: SelectSubset<T, SyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncStates and returns the data updated in the database.
     * @param {SyncStateUpdateManyAndReturnArgs} args - Arguments to update many SyncStates.
     * @example
     * // Update many SyncStates
     * const syncState = await prisma.syncState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SyncStates and only return the `id`
     * const syncStateWithIdOnly = await prisma.syncState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SyncStateUpdateManyAndReturnArgs>(args: SelectSubset<T, SyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SyncState.
     * @param {SyncStateUpsertArgs} args - Arguments to update or create a SyncState.
     * @example
     * // Update or create a SyncState
     * const syncState = await prisma.syncState.upsert({
     *   create: {
     *     // ... data to create a SyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncState we want to update
     *   }
     * })
     */
    upsert<T extends SyncStateUpsertArgs>(args: SelectSubset<T, SyncStateUpsertArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateCountArgs} args - Arguments to filter SyncStates to count.
     * @example
     * // Count the number of SyncStates
     * const count = await prisma.syncState.count({
     *   where: {
     *     // ... the filter for the SyncStates we want to count
     *   }
     * })
    **/
    count<T extends SyncStateCountArgs>(
      args?: Subset<T, SyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncStateAggregateArgs>(args: Subset<T, SyncStateAggregateArgs>): Prisma.PrismaPromise<GetSyncStateAggregateType<T>>

    /**
     * Group by SyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateGroupByArgs} args - Group by arguments.
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
      T extends SyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncStateGroupByArgs['orderBy'] }
        : { orderBy?: SyncStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncState model
   */
  readonly fields: SyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SyncState model
   */
  interface SyncStateFieldRefs {
    readonly id: FieldRef<"SyncState", 'String'>
    readonly lastListSyncAt: FieldRef<"SyncState", 'DateTime'>
    readonly lastDetailSyncAt: FieldRef<"SyncState", 'DateTime'>
    readonly detailCursor: FieldRef<"SyncState", 'String'>
    readonly totalStartups: FieldRef<"SyncState", 'Int'>
    readonly detailsFetched: FieldRef<"SyncState", 'Int'>
    readonly updatedAt: FieldRef<"SyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncState findUnique
   */
  export type SyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState findUniqueOrThrow
   */
  export type SyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState findFirst
   */
  export type SyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState findFirstOrThrow
   */
  export type SyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState findMany
   */
  export type SyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncStates to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState create
   */
  export type SyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data needed to create a SyncState.
     */
    data: XOR<SyncStateCreateInput, SyncStateUncheckedCreateInput>
  }

  /**
   * SyncState createMany
   */
  export type SyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncStates.
     */
    data: SyncStateCreateManyInput | SyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncState createManyAndReturn
   */
  export type SyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data used to create many SyncStates.
     */
    data: SyncStateCreateManyInput | SyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncState update
   */
  export type SyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data needed to update a SyncState.
     */
    data: XOR<SyncStateUpdateInput, SyncStateUncheckedUpdateInput>
    /**
     * Choose, which SyncState to update.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState updateMany
   */
  export type SyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncStates.
     */
    data: XOR<SyncStateUpdateManyMutationInput, SyncStateUncheckedUpdateManyInput>
    /**
     * Filter which SyncStates to update
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to update.
     */
    limit?: number
  }

  /**
   * SyncState updateManyAndReturn
   */
  export type SyncStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data used to update SyncStates.
     */
    data: XOR<SyncStateUpdateManyMutationInput, SyncStateUncheckedUpdateManyInput>
    /**
     * Filter which SyncStates to update
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to update.
     */
    limit?: number
  }

  /**
   * SyncState upsert
   */
  export type SyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The filter to search for the SyncState to update in case it exists.
     */
    where: SyncStateWhereUniqueInput
    /**
     * In case the SyncState found by the `where` argument doesn't exist, create a new SyncState with this data.
     */
    create: XOR<SyncStateCreateInput, SyncStateUncheckedCreateInput>
    /**
     * In case the SyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncStateUpdateInput, SyncStateUncheckedUpdateInput>
  }

  /**
   * SyncState delete
   */
  export type SyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter which SyncState to delete.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState deleteMany
   */
  export type SyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncStates to delete
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to delete.
     */
    limit?: number
  }

  /**
   * SyncState without action
   */
  export type SyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StartupScalarFieldEnum: {
    slug: 'slug',
    name: 'name',
    icon: 'icon',
    description: 'description',
    website: 'website',
    country: 'country',
    category: 'category',
    targetAudience: 'targetAudience',
    paymentProvider: 'paymentProvider',
    foundedDate: 'foundedDate',
    xHandle: 'xHandle',
    xFollowerCount: 'xFollowerCount',
    rank: 'rank',
    mrr: 'mrr',
    revenueTotal: 'revenueTotal',
    revenueLast30Days: 'revenueLast30Days',
    activeSubscriptions: 'activeSubscriptions',
    growth30d: 'growth30d',
    growthMRR30d: 'growthMRR30d',
    onSale: 'onSale',
    askingPrice: 'askingPrice',
    detailFetchedAt: 'detailFetchedAt',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type StartupScalarFieldEnum = (typeof StartupScalarFieldEnum)[keyof typeof StartupScalarFieldEnum]


  export const MarketingChannelScalarFieldEnum: {
    id: 'id',
    startupSlug: 'startupSlug',
    slug: 'slug',
    category: 'category'
  };

  export type MarketingChannelScalarFieldEnum = (typeof MarketingChannelScalarFieldEnum)[keyof typeof MarketingChannelScalarFieldEnum]


  export const TechStackScalarFieldEnum: {
    id: 'id',
    startupSlug: 'startupSlug',
    slug: 'slug',
    category: 'category'
  };

  export type TechStackScalarFieldEnum = (typeof TechStackScalarFieldEnum)[keyof typeof TechStackScalarFieldEnum]


  export const SyncStateScalarFieldEnum: {
    id: 'id',
    lastListSyncAt: 'lastListSyncAt',
    lastDetailSyncAt: 'lastDetailSyncAt',
    detailCursor: 'detailCursor',
    totalStartups: 'totalStartups',
    detailsFetched: 'detailsFetched',
    updatedAt: 'updatedAt'
  };

  export type SyncStateScalarFieldEnum = (typeof SyncStateScalarFieldEnum)[keyof typeof SyncStateScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type StartupWhereInput = {
    AND?: StartupWhereInput | StartupWhereInput[]
    OR?: StartupWhereInput[]
    NOT?: StartupWhereInput | StartupWhereInput[]
    slug?: StringFilter<"Startup"> | string
    name?: StringFilter<"Startup"> | string
    icon?: StringNullableFilter<"Startup"> | string | null
    description?: StringNullableFilter<"Startup"> | string | null
    website?: StringNullableFilter<"Startup"> | string | null
    country?: StringNullableFilter<"Startup"> | string | null
    category?: StringNullableFilter<"Startup"> | string | null
    targetAudience?: StringNullableFilter<"Startup"> | string | null
    paymentProvider?: StringNullableFilter<"Startup"> | string | null
    foundedDate?: DateTimeNullableFilter<"Startup"> | Date | string | null
    xHandle?: StringNullableFilter<"Startup"> | string | null
    xFollowerCount?: IntNullableFilter<"Startup"> | number | null
    rank?: IntNullableFilter<"Startup"> | number | null
    mrr?: FloatNullableFilter<"Startup"> | number | null
    revenueTotal?: FloatNullableFilter<"Startup"> | number | null
    revenueLast30Days?: FloatNullableFilter<"Startup"> | number | null
    activeSubscriptions?: IntNullableFilter<"Startup"> | number | null
    growth30d?: FloatNullableFilter<"Startup"> | number | null
    growthMRR30d?: FloatNullableFilter<"Startup"> | number | null
    onSale?: BoolFilter<"Startup"> | boolean
    askingPrice?: FloatNullableFilter<"Startup"> | number | null
    detailFetchedAt?: DateTimeNullableFilter<"Startup"> | Date | string | null
    updatedAt?: DateTimeFilter<"Startup"> | Date | string
    createdAt?: DateTimeFilter<"Startup"> | Date | string
    marketingChannels?: MarketingChannelListRelationFilter
    techStack?: TechStackListRelationFilter
  }

  export type StartupOrderByWithRelationInput = {
    slug?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    targetAudience?: SortOrderInput | SortOrder
    paymentProvider?: SortOrderInput | SortOrder
    foundedDate?: SortOrderInput | SortOrder
    xHandle?: SortOrderInput | SortOrder
    xFollowerCount?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    mrr?: SortOrderInput | SortOrder
    revenueTotal?: SortOrderInput | SortOrder
    revenueLast30Days?: SortOrderInput | SortOrder
    activeSubscriptions?: SortOrderInput | SortOrder
    growth30d?: SortOrderInput | SortOrder
    growthMRR30d?: SortOrderInput | SortOrder
    onSale?: SortOrder
    askingPrice?: SortOrderInput | SortOrder
    detailFetchedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    marketingChannels?: MarketingChannelOrderByRelationAggregateInput
    techStack?: TechStackOrderByRelationAggregateInput
  }

  export type StartupWhereUniqueInput = Prisma.AtLeast<{
    slug?: string
    AND?: StartupWhereInput | StartupWhereInput[]
    OR?: StartupWhereInput[]
    NOT?: StartupWhereInput | StartupWhereInput[]
    name?: StringFilter<"Startup"> | string
    icon?: StringNullableFilter<"Startup"> | string | null
    description?: StringNullableFilter<"Startup"> | string | null
    website?: StringNullableFilter<"Startup"> | string | null
    country?: StringNullableFilter<"Startup"> | string | null
    category?: StringNullableFilter<"Startup"> | string | null
    targetAudience?: StringNullableFilter<"Startup"> | string | null
    paymentProvider?: StringNullableFilter<"Startup"> | string | null
    foundedDate?: DateTimeNullableFilter<"Startup"> | Date | string | null
    xHandle?: StringNullableFilter<"Startup"> | string | null
    xFollowerCount?: IntNullableFilter<"Startup"> | number | null
    rank?: IntNullableFilter<"Startup"> | number | null
    mrr?: FloatNullableFilter<"Startup"> | number | null
    revenueTotal?: FloatNullableFilter<"Startup"> | number | null
    revenueLast30Days?: FloatNullableFilter<"Startup"> | number | null
    activeSubscriptions?: IntNullableFilter<"Startup"> | number | null
    growth30d?: FloatNullableFilter<"Startup"> | number | null
    growthMRR30d?: FloatNullableFilter<"Startup"> | number | null
    onSale?: BoolFilter<"Startup"> | boolean
    askingPrice?: FloatNullableFilter<"Startup"> | number | null
    detailFetchedAt?: DateTimeNullableFilter<"Startup"> | Date | string | null
    updatedAt?: DateTimeFilter<"Startup"> | Date | string
    createdAt?: DateTimeFilter<"Startup"> | Date | string
    marketingChannels?: MarketingChannelListRelationFilter
    techStack?: TechStackListRelationFilter
  }, "slug">

  export type StartupOrderByWithAggregationInput = {
    slug?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    targetAudience?: SortOrderInput | SortOrder
    paymentProvider?: SortOrderInput | SortOrder
    foundedDate?: SortOrderInput | SortOrder
    xHandle?: SortOrderInput | SortOrder
    xFollowerCount?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    mrr?: SortOrderInput | SortOrder
    revenueTotal?: SortOrderInput | SortOrder
    revenueLast30Days?: SortOrderInput | SortOrder
    activeSubscriptions?: SortOrderInput | SortOrder
    growth30d?: SortOrderInput | SortOrder
    growthMRR30d?: SortOrderInput | SortOrder
    onSale?: SortOrder
    askingPrice?: SortOrderInput | SortOrder
    detailFetchedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: StartupCountOrderByAggregateInput
    _avg?: StartupAvgOrderByAggregateInput
    _max?: StartupMaxOrderByAggregateInput
    _min?: StartupMinOrderByAggregateInput
    _sum?: StartupSumOrderByAggregateInput
  }

  export type StartupScalarWhereWithAggregatesInput = {
    AND?: StartupScalarWhereWithAggregatesInput | StartupScalarWhereWithAggregatesInput[]
    OR?: StartupScalarWhereWithAggregatesInput[]
    NOT?: StartupScalarWhereWithAggregatesInput | StartupScalarWhereWithAggregatesInput[]
    slug?: StringWithAggregatesFilter<"Startup"> | string
    name?: StringWithAggregatesFilter<"Startup"> | string
    icon?: StringNullableWithAggregatesFilter<"Startup"> | string | null
    description?: StringNullableWithAggregatesFilter<"Startup"> | string | null
    website?: StringNullableWithAggregatesFilter<"Startup"> | string | null
    country?: StringNullableWithAggregatesFilter<"Startup"> | string | null
    category?: StringNullableWithAggregatesFilter<"Startup"> | string | null
    targetAudience?: StringNullableWithAggregatesFilter<"Startup"> | string | null
    paymentProvider?: StringNullableWithAggregatesFilter<"Startup"> | string | null
    foundedDate?: DateTimeNullableWithAggregatesFilter<"Startup"> | Date | string | null
    xHandle?: StringNullableWithAggregatesFilter<"Startup"> | string | null
    xFollowerCount?: IntNullableWithAggregatesFilter<"Startup"> | number | null
    rank?: IntNullableWithAggregatesFilter<"Startup"> | number | null
    mrr?: FloatNullableWithAggregatesFilter<"Startup"> | number | null
    revenueTotal?: FloatNullableWithAggregatesFilter<"Startup"> | number | null
    revenueLast30Days?: FloatNullableWithAggregatesFilter<"Startup"> | number | null
    activeSubscriptions?: IntNullableWithAggregatesFilter<"Startup"> | number | null
    growth30d?: FloatNullableWithAggregatesFilter<"Startup"> | number | null
    growthMRR30d?: FloatNullableWithAggregatesFilter<"Startup"> | number | null
    onSale?: BoolWithAggregatesFilter<"Startup"> | boolean
    askingPrice?: FloatNullableWithAggregatesFilter<"Startup"> | number | null
    detailFetchedAt?: DateTimeNullableWithAggregatesFilter<"Startup"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Startup"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Startup"> | Date | string
  }

  export type MarketingChannelWhereInput = {
    AND?: MarketingChannelWhereInput | MarketingChannelWhereInput[]
    OR?: MarketingChannelWhereInput[]
    NOT?: MarketingChannelWhereInput | MarketingChannelWhereInput[]
    id?: IntFilter<"MarketingChannel"> | number
    startupSlug?: StringFilter<"MarketingChannel"> | string
    slug?: StringFilter<"MarketingChannel"> | string
    category?: StringNullableFilter<"MarketingChannel"> | string | null
    startup?: XOR<StartupScalarRelationFilter, StartupWhereInput>
  }

  export type MarketingChannelOrderByWithRelationInput = {
    id?: SortOrder
    startupSlug?: SortOrder
    slug?: SortOrder
    category?: SortOrderInput | SortOrder
    startup?: StartupOrderByWithRelationInput
  }

  export type MarketingChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    startupSlug_slug?: MarketingChannelStartupSlugSlugCompoundUniqueInput
    AND?: MarketingChannelWhereInput | MarketingChannelWhereInput[]
    OR?: MarketingChannelWhereInput[]
    NOT?: MarketingChannelWhereInput | MarketingChannelWhereInput[]
    startupSlug?: StringFilter<"MarketingChannel"> | string
    slug?: StringFilter<"MarketingChannel"> | string
    category?: StringNullableFilter<"MarketingChannel"> | string | null
    startup?: XOR<StartupScalarRelationFilter, StartupWhereInput>
  }, "id" | "startupSlug_slug">

  export type MarketingChannelOrderByWithAggregationInput = {
    id?: SortOrder
    startupSlug?: SortOrder
    slug?: SortOrder
    category?: SortOrderInput | SortOrder
    _count?: MarketingChannelCountOrderByAggregateInput
    _avg?: MarketingChannelAvgOrderByAggregateInput
    _max?: MarketingChannelMaxOrderByAggregateInput
    _min?: MarketingChannelMinOrderByAggregateInput
    _sum?: MarketingChannelSumOrderByAggregateInput
  }

  export type MarketingChannelScalarWhereWithAggregatesInput = {
    AND?: MarketingChannelScalarWhereWithAggregatesInput | MarketingChannelScalarWhereWithAggregatesInput[]
    OR?: MarketingChannelScalarWhereWithAggregatesInput[]
    NOT?: MarketingChannelScalarWhereWithAggregatesInput | MarketingChannelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MarketingChannel"> | number
    startupSlug?: StringWithAggregatesFilter<"MarketingChannel"> | string
    slug?: StringWithAggregatesFilter<"MarketingChannel"> | string
    category?: StringNullableWithAggregatesFilter<"MarketingChannel"> | string | null
  }

  export type TechStackWhereInput = {
    AND?: TechStackWhereInput | TechStackWhereInput[]
    OR?: TechStackWhereInput[]
    NOT?: TechStackWhereInput | TechStackWhereInput[]
    id?: IntFilter<"TechStack"> | number
    startupSlug?: StringFilter<"TechStack"> | string
    slug?: StringFilter<"TechStack"> | string
    category?: StringNullableFilter<"TechStack"> | string | null
    startup?: XOR<StartupScalarRelationFilter, StartupWhereInput>
  }

  export type TechStackOrderByWithRelationInput = {
    id?: SortOrder
    startupSlug?: SortOrder
    slug?: SortOrder
    category?: SortOrderInput | SortOrder
    startup?: StartupOrderByWithRelationInput
  }

  export type TechStackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    startupSlug_slug?: TechStackStartupSlugSlugCompoundUniqueInput
    AND?: TechStackWhereInput | TechStackWhereInput[]
    OR?: TechStackWhereInput[]
    NOT?: TechStackWhereInput | TechStackWhereInput[]
    startupSlug?: StringFilter<"TechStack"> | string
    slug?: StringFilter<"TechStack"> | string
    category?: StringNullableFilter<"TechStack"> | string | null
    startup?: XOR<StartupScalarRelationFilter, StartupWhereInput>
  }, "id" | "startupSlug_slug">

  export type TechStackOrderByWithAggregationInput = {
    id?: SortOrder
    startupSlug?: SortOrder
    slug?: SortOrder
    category?: SortOrderInput | SortOrder
    _count?: TechStackCountOrderByAggregateInput
    _avg?: TechStackAvgOrderByAggregateInput
    _max?: TechStackMaxOrderByAggregateInput
    _min?: TechStackMinOrderByAggregateInput
    _sum?: TechStackSumOrderByAggregateInput
  }

  export type TechStackScalarWhereWithAggregatesInput = {
    AND?: TechStackScalarWhereWithAggregatesInput | TechStackScalarWhereWithAggregatesInput[]
    OR?: TechStackScalarWhereWithAggregatesInput[]
    NOT?: TechStackScalarWhereWithAggregatesInput | TechStackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TechStack"> | number
    startupSlug?: StringWithAggregatesFilter<"TechStack"> | string
    slug?: StringWithAggregatesFilter<"TechStack"> | string
    category?: StringNullableWithAggregatesFilter<"TechStack"> | string | null
  }

  export type SyncStateWhereInput = {
    AND?: SyncStateWhereInput | SyncStateWhereInput[]
    OR?: SyncStateWhereInput[]
    NOT?: SyncStateWhereInput | SyncStateWhereInput[]
    id?: StringFilter<"SyncState"> | string
    lastListSyncAt?: DateTimeNullableFilter<"SyncState"> | Date | string | null
    lastDetailSyncAt?: DateTimeNullableFilter<"SyncState"> | Date | string | null
    detailCursor?: StringNullableFilter<"SyncState"> | string | null
    totalStartups?: IntFilter<"SyncState"> | number
    detailsFetched?: IntFilter<"SyncState"> | number
    updatedAt?: DateTimeFilter<"SyncState"> | Date | string
  }

  export type SyncStateOrderByWithRelationInput = {
    id?: SortOrder
    lastListSyncAt?: SortOrderInput | SortOrder
    lastDetailSyncAt?: SortOrderInput | SortOrder
    detailCursor?: SortOrderInput | SortOrder
    totalStartups?: SortOrder
    detailsFetched?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncStateWhereInput | SyncStateWhereInput[]
    OR?: SyncStateWhereInput[]
    NOT?: SyncStateWhereInput | SyncStateWhereInput[]
    lastListSyncAt?: DateTimeNullableFilter<"SyncState"> | Date | string | null
    lastDetailSyncAt?: DateTimeNullableFilter<"SyncState"> | Date | string | null
    detailCursor?: StringNullableFilter<"SyncState"> | string | null
    totalStartups?: IntFilter<"SyncState"> | number
    detailsFetched?: IntFilter<"SyncState"> | number
    updatedAt?: DateTimeFilter<"SyncState"> | Date | string
  }, "id">

  export type SyncStateOrderByWithAggregationInput = {
    id?: SortOrder
    lastListSyncAt?: SortOrderInput | SortOrder
    lastDetailSyncAt?: SortOrderInput | SortOrder
    detailCursor?: SortOrderInput | SortOrder
    totalStartups?: SortOrder
    detailsFetched?: SortOrder
    updatedAt?: SortOrder
    _count?: SyncStateCountOrderByAggregateInput
    _avg?: SyncStateAvgOrderByAggregateInput
    _max?: SyncStateMaxOrderByAggregateInput
    _min?: SyncStateMinOrderByAggregateInput
    _sum?: SyncStateSumOrderByAggregateInput
  }

  export type SyncStateScalarWhereWithAggregatesInput = {
    AND?: SyncStateScalarWhereWithAggregatesInput | SyncStateScalarWhereWithAggregatesInput[]
    OR?: SyncStateScalarWhereWithAggregatesInput[]
    NOT?: SyncStateScalarWhereWithAggregatesInput | SyncStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncState"> | string
    lastListSyncAt?: DateTimeNullableWithAggregatesFilter<"SyncState"> | Date | string | null
    lastDetailSyncAt?: DateTimeNullableWithAggregatesFilter<"SyncState"> | Date | string | null
    detailCursor?: StringNullableWithAggregatesFilter<"SyncState"> | string | null
    totalStartups?: IntWithAggregatesFilter<"SyncState"> | number
    detailsFetched?: IntWithAggregatesFilter<"SyncState"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"SyncState"> | Date | string
  }

  export type StartupCreateInput = {
    slug: string
    name: string
    icon?: string | null
    description?: string | null
    website?: string | null
    country?: string | null
    category?: string | null
    targetAudience?: string | null
    paymentProvider?: string | null
    foundedDate?: Date | string | null
    xHandle?: string | null
    xFollowerCount?: number | null
    rank?: number | null
    mrr?: number | null
    revenueTotal?: number | null
    revenueLast30Days?: number | null
    activeSubscriptions?: number | null
    growth30d?: number | null
    growthMRR30d?: number | null
    onSale?: boolean
    askingPrice?: number | null
    detailFetchedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    marketingChannels?: MarketingChannelCreateNestedManyWithoutStartupInput
    techStack?: TechStackCreateNestedManyWithoutStartupInput
  }

  export type StartupUncheckedCreateInput = {
    slug: string
    name: string
    icon?: string | null
    description?: string | null
    website?: string | null
    country?: string | null
    category?: string | null
    targetAudience?: string | null
    paymentProvider?: string | null
    foundedDate?: Date | string | null
    xHandle?: string | null
    xFollowerCount?: number | null
    rank?: number | null
    mrr?: number | null
    revenueTotal?: number | null
    revenueLast30Days?: number | null
    activeSubscriptions?: number | null
    growth30d?: number | null
    growthMRR30d?: number | null
    onSale?: boolean
    askingPrice?: number | null
    detailFetchedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    marketingChannels?: MarketingChannelUncheckedCreateNestedManyWithoutStartupInput
    techStack?: TechStackUncheckedCreateNestedManyWithoutStartupInput
  }

  export type StartupUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    xHandle?: NullableStringFieldUpdateOperationsInput | string | null
    xFollowerCount?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    mrr?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueLast30Days?: NullableFloatFieldUpdateOperationsInput | number | null
    activeSubscriptions?: NullableIntFieldUpdateOperationsInput | number | null
    growth30d?: NullableFloatFieldUpdateOperationsInput | number | null
    growthMRR30d?: NullableFloatFieldUpdateOperationsInput | number | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    askingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    detailFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketingChannels?: MarketingChannelUpdateManyWithoutStartupNestedInput
    techStack?: TechStackUpdateManyWithoutStartupNestedInput
  }

  export type StartupUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    xHandle?: NullableStringFieldUpdateOperationsInput | string | null
    xFollowerCount?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    mrr?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueLast30Days?: NullableFloatFieldUpdateOperationsInput | number | null
    activeSubscriptions?: NullableIntFieldUpdateOperationsInput | number | null
    growth30d?: NullableFloatFieldUpdateOperationsInput | number | null
    growthMRR30d?: NullableFloatFieldUpdateOperationsInput | number | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    askingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    detailFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketingChannels?: MarketingChannelUncheckedUpdateManyWithoutStartupNestedInput
    techStack?: TechStackUncheckedUpdateManyWithoutStartupNestedInput
  }

  export type StartupCreateManyInput = {
    slug: string
    name: string
    icon?: string | null
    description?: string | null
    website?: string | null
    country?: string | null
    category?: string | null
    targetAudience?: string | null
    paymentProvider?: string | null
    foundedDate?: Date | string | null
    xHandle?: string | null
    xFollowerCount?: number | null
    rank?: number | null
    mrr?: number | null
    revenueTotal?: number | null
    revenueLast30Days?: number | null
    activeSubscriptions?: number | null
    growth30d?: number | null
    growthMRR30d?: number | null
    onSale?: boolean
    askingPrice?: number | null
    detailFetchedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type StartupUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    xHandle?: NullableStringFieldUpdateOperationsInput | string | null
    xFollowerCount?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    mrr?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueLast30Days?: NullableFloatFieldUpdateOperationsInput | number | null
    activeSubscriptions?: NullableIntFieldUpdateOperationsInput | number | null
    growth30d?: NullableFloatFieldUpdateOperationsInput | number | null
    growthMRR30d?: NullableFloatFieldUpdateOperationsInput | number | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    askingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    detailFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StartupUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    xHandle?: NullableStringFieldUpdateOperationsInput | string | null
    xFollowerCount?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    mrr?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueLast30Days?: NullableFloatFieldUpdateOperationsInput | number | null
    activeSubscriptions?: NullableIntFieldUpdateOperationsInput | number | null
    growth30d?: NullableFloatFieldUpdateOperationsInput | number | null
    growthMRR30d?: NullableFloatFieldUpdateOperationsInput | number | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    askingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    detailFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingChannelCreateInput = {
    slug: string
    category?: string | null
    startup: StartupCreateNestedOneWithoutMarketingChannelsInput
  }

  export type MarketingChannelUncheckedCreateInput = {
    id?: number
    startupSlug: string
    slug: string
    category?: string | null
  }

  export type MarketingChannelUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    startup?: StartupUpdateOneRequiredWithoutMarketingChannelsNestedInput
  }

  export type MarketingChannelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startupSlug?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketingChannelCreateManyInput = {
    id?: number
    startupSlug: string
    slug: string
    category?: string | null
  }

  export type MarketingChannelUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketingChannelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startupSlug?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechStackCreateInput = {
    slug: string
    category?: string | null
    startup: StartupCreateNestedOneWithoutTechStackInput
  }

  export type TechStackUncheckedCreateInput = {
    id?: number
    startupSlug: string
    slug: string
    category?: string | null
  }

  export type TechStackUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    startup?: StartupUpdateOneRequiredWithoutTechStackNestedInput
  }

  export type TechStackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startupSlug?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechStackCreateManyInput = {
    id?: number
    startupSlug: string
    slug: string
    category?: string | null
  }

  export type TechStackUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechStackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startupSlug?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncStateCreateInput = {
    id?: string
    lastListSyncAt?: Date | string | null
    lastDetailSyncAt?: Date | string | null
    detailCursor?: string | null
    totalStartups?: number
    detailsFetched?: number
    updatedAt?: Date | string
  }

  export type SyncStateUncheckedCreateInput = {
    id?: string
    lastListSyncAt?: Date | string | null
    lastDetailSyncAt?: Date | string | null
    detailCursor?: string | null
    totalStartups?: number
    detailsFetched?: number
    updatedAt?: Date | string
  }

  export type SyncStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastListSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDetailSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailCursor?: NullableStringFieldUpdateOperationsInput | string | null
    totalStartups?: IntFieldUpdateOperationsInput | number
    detailsFetched?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastListSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDetailSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailCursor?: NullableStringFieldUpdateOperationsInput | string | null
    totalStartups?: IntFieldUpdateOperationsInput | number
    detailsFetched?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateCreateManyInput = {
    id?: string
    lastListSyncAt?: Date | string | null
    lastDetailSyncAt?: Date | string | null
    detailCursor?: string | null
    totalStartups?: number
    detailsFetched?: number
    updatedAt?: Date | string
  }

  export type SyncStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastListSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDetailSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailCursor?: NullableStringFieldUpdateOperationsInput | string | null
    totalStartups?: IntFieldUpdateOperationsInput | number
    detailsFetched?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastListSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastDetailSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailCursor?: NullableStringFieldUpdateOperationsInput | string | null
    totalStartups?: IntFieldUpdateOperationsInput | number
    detailsFetched?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type MarketingChannelListRelationFilter = {
    every?: MarketingChannelWhereInput
    some?: MarketingChannelWhereInput
    none?: MarketingChannelWhereInput
  }

  export type TechStackListRelationFilter = {
    every?: TechStackWhereInput
    some?: TechStackWhereInput
    none?: TechStackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MarketingChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TechStackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StartupCountOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    website?: SortOrder
    country?: SortOrder
    category?: SortOrder
    targetAudience?: SortOrder
    paymentProvider?: SortOrder
    foundedDate?: SortOrder
    xHandle?: SortOrder
    xFollowerCount?: SortOrder
    rank?: SortOrder
    mrr?: SortOrder
    revenueTotal?: SortOrder
    revenueLast30Days?: SortOrder
    activeSubscriptions?: SortOrder
    growth30d?: SortOrder
    growthMRR30d?: SortOrder
    onSale?: SortOrder
    askingPrice?: SortOrder
    detailFetchedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StartupAvgOrderByAggregateInput = {
    xFollowerCount?: SortOrder
    rank?: SortOrder
    mrr?: SortOrder
    revenueTotal?: SortOrder
    revenueLast30Days?: SortOrder
    activeSubscriptions?: SortOrder
    growth30d?: SortOrder
    growthMRR30d?: SortOrder
    askingPrice?: SortOrder
  }

  export type StartupMaxOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    website?: SortOrder
    country?: SortOrder
    category?: SortOrder
    targetAudience?: SortOrder
    paymentProvider?: SortOrder
    foundedDate?: SortOrder
    xHandle?: SortOrder
    xFollowerCount?: SortOrder
    rank?: SortOrder
    mrr?: SortOrder
    revenueTotal?: SortOrder
    revenueLast30Days?: SortOrder
    activeSubscriptions?: SortOrder
    growth30d?: SortOrder
    growthMRR30d?: SortOrder
    onSale?: SortOrder
    askingPrice?: SortOrder
    detailFetchedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StartupMinOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    website?: SortOrder
    country?: SortOrder
    category?: SortOrder
    targetAudience?: SortOrder
    paymentProvider?: SortOrder
    foundedDate?: SortOrder
    xHandle?: SortOrder
    xFollowerCount?: SortOrder
    rank?: SortOrder
    mrr?: SortOrder
    revenueTotal?: SortOrder
    revenueLast30Days?: SortOrder
    activeSubscriptions?: SortOrder
    growth30d?: SortOrder
    growthMRR30d?: SortOrder
    onSale?: SortOrder
    askingPrice?: SortOrder
    detailFetchedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StartupSumOrderByAggregateInput = {
    xFollowerCount?: SortOrder
    rank?: SortOrder
    mrr?: SortOrder
    revenueTotal?: SortOrder
    revenueLast30Days?: SortOrder
    activeSubscriptions?: SortOrder
    growth30d?: SortOrder
    growthMRR30d?: SortOrder
    askingPrice?: SortOrder
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
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StartupScalarRelationFilter = {
    is?: StartupWhereInput
    isNot?: StartupWhereInput
  }

  export type MarketingChannelStartupSlugSlugCompoundUniqueInput = {
    startupSlug: string
    slug: string
  }

  export type MarketingChannelCountOrderByAggregateInput = {
    id?: SortOrder
    startupSlug?: SortOrder
    slug?: SortOrder
    category?: SortOrder
  }

  export type MarketingChannelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarketingChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    startupSlug?: SortOrder
    slug?: SortOrder
    category?: SortOrder
  }

  export type MarketingChannelMinOrderByAggregateInput = {
    id?: SortOrder
    startupSlug?: SortOrder
    slug?: SortOrder
    category?: SortOrder
  }

  export type MarketingChannelSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TechStackStartupSlugSlugCompoundUniqueInput = {
    startupSlug: string
    slug: string
  }

  export type TechStackCountOrderByAggregateInput = {
    id?: SortOrder
    startupSlug?: SortOrder
    slug?: SortOrder
    category?: SortOrder
  }

  export type TechStackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TechStackMaxOrderByAggregateInput = {
    id?: SortOrder
    startupSlug?: SortOrder
    slug?: SortOrder
    category?: SortOrder
  }

  export type TechStackMinOrderByAggregateInput = {
    id?: SortOrder
    startupSlug?: SortOrder
    slug?: SortOrder
    category?: SortOrder
  }

  export type TechStackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SyncStateCountOrderByAggregateInput = {
    id?: SortOrder
    lastListSyncAt?: SortOrder
    lastDetailSyncAt?: SortOrder
    detailCursor?: SortOrder
    totalStartups?: SortOrder
    detailsFetched?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateAvgOrderByAggregateInput = {
    totalStartups?: SortOrder
    detailsFetched?: SortOrder
  }

  export type SyncStateMaxOrderByAggregateInput = {
    id?: SortOrder
    lastListSyncAt?: SortOrder
    lastDetailSyncAt?: SortOrder
    detailCursor?: SortOrder
    totalStartups?: SortOrder
    detailsFetched?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateMinOrderByAggregateInput = {
    id?: SortOrder
    lastListSyncAt?: SortOrder
    lastDetailSyncAt?: SortOrder
    detailCursor?: SortOrder
    totalStartups?: SortOrder
    detailsFetched?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateSumOrderByAggregateInput = {
    totalStartups?: SortOrder
    detailsFetched?: SortOrder
  }

  export type MarketingChannelCreateNestedManyWithoutStartupInput = {
    create?: XOR<MarketingChannelCreateWithoutStartupInput, MarketingChannelUncheckedCreateWithoutStartupInput> | MarketingChannelCreateWithoutStartupInput[] | MarketingChannelUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: MarketingChannelCreateOrConnectWithoutStartupInput | MarketingChannelCreateOrConnectWithoutStartupInput[]
    createMany?: MarketingChannelCreateManyStartupInputEnvelope
    connect?: MarketingChannelWhereUniqueInput | MarketingChannelWhereUniqueInput[]
  }

  export type TechStackCreateNestedManyWithoutStartupInput = {
    create?: XOR<TechStackCreateWithoutStartupInput, TechStackUncheckedCreateWithoutStartupInput> | TechStackCreateWithoutStartupInput[] | TechStackUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: TechStackCreateOrConnectWithoutStartupInput | TechStackCreateOrConnectWithoutStartupInput[]
    createMany?: TechStackCreateManyStartupInputEnvelope
    connect?: TechStackWhereUniqueInput | TechStackWhereUniqueInput[]
  }

  export type MarketingChannelUncheckedCreateNestedManyWithoutStartupInput = {
    create?: XOR<MarketingChannelCreateWithoutStartupInput, MarketingChannelUncheckedCreateWithoutStartupInput> | MarketingChannelCreateWithoutStartupInput[] | MarketingChannelUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: MarketingChannelCreateOrConnectWithoutStartupInput | MarketingChannelCreateOrConnectWithoutStartupInput[]
    createMany?: MarketingChannelCreateManyStartupInputEnvelope
    connect?: MarketingChannelWhereUniqueInput | MarketingChannelWhereUniqueInput[]
  }

  export type TechStackUncheckedCreateNestedManyWithoutStartupInput = {
    create?: XOR<TechStackCreateWithoutStartupInput, TechStackUncheckedCreateWithoutStartupInput> | TechStackCreateWithoutStartupInput[] | TechStackUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: TechStackCreateOrConnectWithoutStartupInput | TechStackCreateOrConnectWithoutStartupInput[]
    createMany?: TechStackCreateManyStartupInputEnvelope
    connect?: TechStackWhereUniqueInput | TechStackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MarketingChannelUpdateManyWithoutStartupNestedInput = {
    create?: XOR<MarketingChannelCreateWithoutStartupInput, MarketingChannelUncheckedCreateWithoutStartupInput> | MarketingChannelCreateWithoutStartupInput[] | MarketingChannelUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: MarketingChannelCreateOrConnectWithoutStartupInput | MarketingChannelCreateOrConnectWithoutStartupInput[]
    upsert?: MarketingChannelUpsertWithWhereUniqueWithoutStartupInput | MarketingChannelUpsertWithWhereUniqueWithoutStartupInput[]
    createMany?: MarketingChannelCreateManyStartupInputEnvelope
    set?: MarketingChannelWhereUniqueInput | MarketingChannelWhereUniqueInput[]
    disconnect?: MarketingChannelWhereUniqueInput | MarketingChannelWhereUniqueInput[]
    delete?: MarketingChannelWhereUniqueInput | MarketingChannelWhereUniqueInput[]
    connect?: MarketingChannelWhereUniqueInput | MarketingChannelWhereUniqueInput[]
    update?: MarketingChannelUpdateWithWhereUniqueWithoutStartupInput | MarketingChannelUpdateWithWhereUniqueWithoutStartupInput[]
    updateMany?: MarketingChannelUpdateManyWithWhereWithoutStartupInput | MarketingChannelUpdateManyWithWhereWithoutStartupInput[]
    deleteMany?: MarketingChannelScalarWhereInput | MarketingChannelScalarWhereInput[]
  }

  export type TechStackUpdateManyWithoutStartupNestedInput = {
    create?: XOR<TechStackCreateWithoutStartupInput, TechStackUncheckedCreateWithoutStartupInput> | TechStackCreateWithoutStartupInput[] | TechStackUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: TechStackCreateOrConnectWithoutStartupInput | TechStackCreateOrConnectWithoutStartupInput[]
    upsert?: TechStackUpsertWithWhereUniqueWithoutStartupInput | TechStackUpsertWithWhereUniqueWithoutStartupInput[]
    createMany?: TechStackCreateManyStartupInputEnvelope
    set?: TechStackWhereUniqueInput | TechStackWhereUniqueInput[]
    disconnect?: TechStackWhereUniqueInput | TechStackWhereUniqueInput[]
    delete?: TechStackWhereUniqueInput | TechStackWhereUniqueInput[]
    connect?: TechStackWhereUniqueInput | TechStackWhereUniqueInput[]
    update?: TechStackUpdateWithWhereUniqueWithoutStartupInput | TechStackUpdateWithWhereUniqueWithoutStartupInput[]
    updateMany?: TechStackUpdateManyWithWhereWithoutStartupInput | TechStackUpdateManyWithWhereWithoutStartupInput[]
    deleteMany?: TechStackScalarWhereInput | TechStackScalarWhereInput[]
  }

  export type MarketingChannelUncheckedUpdateManyWithoutStartupNestedInput = {
    create?: XOR<MarketingChannelCreateWithoutStartupInput, MarketingChannelUncheckedCreateWithoutStartupInput> | MarketingChannelCreateWithoutStartupInput[] | MarketingChannelUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: MarketingChannelCreateOrConnectWithoutStartupInput | MarketingChannelCreateOrConnectWithoutStartupInput[]
    upsert?: MarketingChannelUpsertWithWhereUniqueWithoutStartupInput | MarketingChannelUpsertWithWhereUniqueWithoutStartupInput[]
    createMany?: MarketingChannelCreateManyStartupInputEnvelope
    set?: MarketingChannelWhereUniqueInput | MarketingChannelWhereUniqueInput[]
    disconnect?: MarketingChannelWhereUniqueInput | MarketingChannelWhereUniqueInput[]
    delete?: MarketingChannelWhereUniqueInput | MarketingChannelWhereUniqueInput[]
    connect?: MarketingChannelWhereUniqueInput | MarketingChannelWhereUniqueInput[]
    update?: MarketingChannelUpdateWithWhereUniqueWithoutStartupInput | MarketingChannelUpdateWithWhereUniqueWithoutStartupInput[]
    updateMany?: MarketingChannelUpdateManyWithWhereWithoutStartupInput | MarketingChannelUpdateManyWithWhereWithoutStartupInput[]
    deleteMany?: MarketingChannelScalarWhereInput | MarketingChannelScalarWhereInput[]
  }

  export type TechStackUncheckedUpdateManyWithoutStartupNestedInput = {
    create?: XOR<TechStackCreateWithoutStartupInput, TechStackUncheckedCreateWithoutStartupInput> | TechStackCreateWithoutStartupInput[] | TechStackUncheckedCreateWithoutStartupInput[]
    connectOrCreate?: TechStackCreateOrConnectWithoutStartupInput | TechStackCreateOrConnectWithoutStartupInput[]
    upsert?: TechStackUpsertWithWhereUniqueWithoutStartupInput | TechStackUpsertWithWhereUniqueWithoutStartupInput[]
    createMany?: TechStackCreateManyStartupInputEnvelope
    set?: TechStackWhereUniqueInput | TechStackWhereUniqueInput[]
    disconnect?: TechStackWhereUniqueInput | TechStackWhereUniqueInput[]
    delete?: TechStackWhereUniqueInput | TechStackWhereUniqueInput[]
    connect?: TechStackWhereUniqueInput | TechStackWhereUniqueInput[]
    update?: TechStackUpdateWithWhereUniqueWithoutStartupInput | TechStackUpdateWithWhereUniqueWithoutStartupInput[]
    updateMany?: TechStackUpdateManyWithWhereWithoutStartupInput | TechStackUpdateManyWithWhereWithoutStartupInput[]
    deleteMany?: TechStackScalarWhereInput | TechStackScalarWhereInput[]
  }

  export type StartupCreateNestedOneWithoutMarketingChannelsInput = {
    create?: XOR<StartupCreateWithoutMarketingChannelsInput, StartupUncheckedCreateWithoutMarketingChannelsInput>
    connectOrCreate?: StartupCreateOrConnectWithoutMarketingChannelsInput
    connect?: StartupWhereUniqueInput
  }

  export type StartupUpdateOneRequiredWithoutMarketingChannelsNestedInput = {
    create?: XOR<StartupCreateWithoutMarketingChannelsInput, StartupUncheckedCreateWithoutMarketingChannelsInput>
    connectOrCreate?: StartupCreateOrConnectWithoutMarketingChannelsInput
    upsert?: StartupUpsertWithoutMarketingChannelsInput
    connect?: StartupWhereUniqueInput
    update?: XOR<XOR<StartupUpdateToOneWithWhereWithoutMarketingChannelsInput, StartupUpdateWithoutMarketingChannelsInput>, StartupUncheckedUpdateWithoutMarketingChannelsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StartupCreateNestedOneWithoutTechStackInput = {
    create?: XOR<StartupCreateWithoutTechStackInput, StartupUncheckedCreateWithoutTechStackInput>
    connectOrCreate?: StartupCreateOrConnectWithoutTechStackInput
    connect?: StartupWhereUniqueInput
  }

  export type StartupUpdateOneRequiredWithoutTechStackNestedInput = {
    create?: XOR<StartupCreateWithoutTechStackInput, StartupUncheckedCreateWithoutTechStackInput>
    connectOrCreate?: StartupCreateOrConnectWithoutTechStackInput
    upsert?: StartupUpsertWithoutTechStackInput
    connect?: StartupWhereUniqueInput
    update?: XOR<XOR<StartupUpdateToOneWithWhereWithoutTechStackInput, StartupUpdateWithoutTechStackInput>, StartupUncheckedUpdateWithoutTechStackInput>
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
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MarketingChannelCreateWithoutStartupInput = {
    slug: string
    category?: string | null
  }

  export type MarketingChannelUncheckedCreateWithoutStartupInput = {
    id?: number
    slug: string
    category?: string | null
  }

  export type MarketingChannelCreateOrConnectWithoutStartupInput = {
    where: MarketingChannelWhereUniqueInput
    create: XOR<MarketingChannelCreateWithoutStartupInput, MarketingChannelUncheckedCreateWithoutStartupInput>
  }

  export type MarketingChannelCreateManyStartupInputEnvelope = {
    data: MarketingChannelCreateManyStartupInput | MarketingChannelCreateManyStartupInput[]
    skipDuplicates?: boolean
  }

  export type TechStackCreateWithoutStartupInput = {
    slug: string
    category?: string | null
  }

  export type TechStackUncheckedCreateWithoutStartupInput = {
    id?: number
    slug: string
    category?: string | null
  }

  export type TechStackCreateOrConnectWithoutStartupInput = {
    where: TechStackWhereUniqueInput
    create: XOR<TechStackCreateWithoutStartupInput, TechStackUncheckedCreateWithoutStartupInput>
  }

  export type TechStackCreateManyStartupInputEnvelope = {
    data: TechStackCreateManyStartupInput | TechStackCreateManyStartupInput[]
    skipDuplicates?: boolean
  }

  export type MarketingChannelUpsertWithWhereUniqueWithoutStartupInput = {
    where: MarketingChannelWhereUniqueInput
    update: XOR<MarketingChannelUpdateWithoutStartupInput, MarketingChannelUncheckedUpdateWithoutStartupInput>
    create: XOR<MarketingChannelCreateWithoutStartupInput, MarketingChannelUncheckedCreateWithoutStartupInput>
  }

  export type MarketingChannelUpdateWithWhereUniqueWithoutStartupInput = {
    where: MarketingChannelWhereUniqueInput
    data: XOR<MarketingChannelUpdateWithoutStartupInput, MarketingChannelUncheckedUpdateWithoutStartupInput>
  }

  export type MarketingChannelUpdateManyWithWhereWithoutStartupInput = {
    where: MarketingChannelScalarWhereInput
    data: XOR<MarketingChannelUpdateManyMutationInput, MarketingChannelUncheckedUpdateManyWithoutStartupInput>
  }

  export type MarketingChannelScalarWhereInput = {
    AND?: MarketingChannelScalarWhereInput | MarketingChannelScalarWhereInput[]
    OR?: MarketingChannelScalarWhereInput[]
    NOT?: MarketingChannelScalarWhereInput | MarketingChannelScalarWhereInput[]
    id?: IntFilter<"MarketingChannel"> | number
    startupSlug?: StringFilter<"MarketingChannel"> | string
    slug?: StringFilter<"MarketingChannel"> | string
    category?: StringNullableFilter<"MarketingChannel"> | string | null
  }

  export type TechStackUpsertWithWhereUniqueWithoutStartupInput = {
    where: TechStackWhereUniqueInput
    update: XOR<TechStackUpdateWithoutStartupInput, TechStackUncheckedUpdateWithoutStartupInput>
    create: XOR<TechStackCreateWithoutStartupInput, TechStackUncheckedCreateWithoutStartupInput>
  }

  export type TechStackUpdateWithWhereUniqueWithoutStartupInput = {
    where: TechStackWhereUniqueInput
    data: XOR<TechStackUpdateWithoutStartupInput, TechStackUncheckedUpdateWithoutStartupInput>
  }

  export type TechStackUpdateManyWithWhereWithoutStartupInput = {
    where: TechStackScalarWhereInput
    data: XOR<TechStackUpdateManyMutationInput, TechStackUncheckedUpdateManyWithoutStartupInput>
  }

  export type TechStackScalarWhereInput = {
    AND?: TechStackScalarWhereInput | TechStackScalarWhereInput[]
    OR?: TechStackScalarWhereInput[]
    NOT?: TechStackScalarWhereInput | TechStackScalarWhereInput[]
    id?: IntFilter<"TechStack"> | number
    startupSlug?: StringFilter<"TechStack"> | string
    slug?: StringFilter<"TechStack"> | string
    category?: StringNullableFilter<"TechStack"> | string | null
  }

  export type StartupCreateWithoutMarketingChannelsInput = {
    slug: string
    name: string
    icon?: string | null
    description?: string | null
    website?: string | null
    country?: string | null
    category?: string | null
    targetAudience?: string | null
    paymentProvider?: string | null
    foundedDate?: Date | string | null
    xHandle?: string | null
    xFollowerCount?: number | null
    rank?: number | null
    mrr?: number | null
    revenueTotal?: number | null
    revenueLast30Days?: number | null
    activeSubscriptions?: number | null
    growth30d?: number | null
    growthMRR30d?: number | null
    onSale?: boolean
    askingPrice?: number | null
    detailFetchedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    techStack?: TechStackCreateNestedManyWithoutStartupInput
  }

  export type StartupUncheckedCreateWithoutMarketingChannelsInput = {
    slug: string
    name: string
    icon?: string | null
    description?: string | null
    website?: string | null
    country?: string | null
    category?: string | null
    targetAudience?: string | null
    paymentProvider?: string | null
    foundedDate?: Date | string | null
    xHandle?: string | null
    xFollowerCount?: number | null
    rank?: number | null
    mrr?: number | null
    revenueTotal?: number | null
    revenueLast30Days?: number | null
    activeSubscriptions?: number | null
    growth30d?: number | null
    growthMRR30d?: number | null
    onSale?: boolean
    askingPrice?: number | null
    detailFetchedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    techStack?: TechStackUncheckedCreateNestedManyWithoutStartupInput
  }

  export type StartupCreateOrConnectWithoutMarketingChannelsInput = {
    where: StartupWhereUniqueInput
    create: XOR<StartupCreateWithoutMarketingChannelsInput, StartupUncheckedCreateWithoutMarketingChannelsInput>
  }

  export type StartupUpsertWithoutMarketingChannelsInput = {
    update: XOR<StartupUpdateWithoutMarketingChannelsInput, StartupUncheckedUpdateWithoutMarketingChannelsInput>
    create: XOR<StartupCreateWithoutMarketingChannelsInput, StartupUncheckedCreateWithoutMarketingChannelsInput>
    where?: StartupWhereInput
  }

  export type StartupUpdateToOneWithWhereWithoutMarketingChannelsInput = {
    where?: StartupWhereInput
    data: XOR<StartupUpdateWithoutMarketingChannelsInput, StartupUncheckedUpdateWithoutMarketingChannelsInput>
  }

  export type StartupUpdateWithoutMarketingChannelsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    xHandle?: NullableStringFieldUpdateOperationsInput | string | null
    xFollowerCount?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    mrr?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueLast30Days?: NullableFloatFieldUpdateOperationsInput | number | null
    activeSubscriptions?: NullableIntFieldUpdateOperationsInput | number | null
    growth30d?: NullableFloatFieldUpdateOperationsInput | number | null
    growthMRR30d?: NullableFloatFieldUpdateOperationsInput | number | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    askingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    detailFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techStack?: TechStackUpdateManyWithoutStartupNestedInput
  }

  export type StartupUncheckedUpdateWithoutMarketingChannelsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    xHandle?: NullableStringFieldUpdateOperationsInput | string | null
    xFollowerCount?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    mrr?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueLast30Days?: NullableFloatFieldUpdateOperationsInput | number | null
    activeSubscriptions?: NullableIntFieldUpdateOperationsInput | number | null
    growth30d?: NullableFloatFieldUpdateOperationsInput | number | null
    growthMRR30d?: NullableFloatFieldUpdateOperationsInput | number | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    askingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    detailFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techStack?: TechStackUncheckedUpdateManyWithoutStartupNestedInput
  }

  export type StartupCreateWithoutTechStackInput = {
    slug: string
    name: string
    icon?: string | null
    description?: string | null
    website?: string | null
    country?: string | null
    category?: string | null
    targetAudience?: string | null
    paymentProvider?: string | null
    foundedDate?: Date | string | null
    xHandle?: string | null
    xFollowerCount?: number | null
    rank?: number | null
    mrr?: number | null
    revenueTotal?: number | null
    revenueLast30Days?: number | null
    activeSubscriptions?: number | null
    growth30d?: number | null
    growthMRR30d?: number | null
    onSale?: boolean
    askingPrice?: number | null
    detailFetchedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    marketingChannels?: MarketingChannelCreateNestedManyWithoutStartupInput
  }

  export type StartupUncheckedCreateWithoutTechStackInput = {
    slug: string
    name: string
    icon?: string | null
    description?: string | null
    website?: string | null
    country?: string | null
    category?: string | null
    targetAudience?: string | null
    paymentProvider?: string | null
    foundedDate?: Date | string | null
    xHandle?: string | null
    xFollowerCount?: number | null
    rank?: number | null
    mrr?: number | null
    revenueTotal?: number | null
    revenueLast30Days?: number | null
    activeSubscriptions?: number | null
    growth30d?: number | null
    growthMRR30d?: number | null
    onSale?: boolean
    askingPrice?: number | null
    detailFetchedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    marketingChannels?: MarketingChannelUncheckedCreateNestedManyWithoutStartupInput
  }

  export type StartupCreateOrConnectWithoutTechStackInput = {
    where: StartupWhereUniqueInput
    create: XOR<StartupCreateWithoutTechStackInput, StartupUncheckedCreateWithoutTechStackInput>
  }

  export type StartupUpsertWithoutTechStackInput = {
    update: XOR<StartupUpdateWithoutTechStackInput, StartupUncheckedUpdateWithoutTechStackInput>
    create: XOR<StartupCreateWithoutTechStackInput, StartupUncheckedCreateWithoutTechStackInput>
    where?: StartupWhereInput
  }

  export type StartupUpdateToOneWithWhereWithoutTechStackInput = {
    where?: StartupWhereInput
    data: XOR<StartupUpdateWithoutTechStackInput, StartupUncheckedUpdateWithoutTechStackInput>
  }

  export type StartupUpdateWithoutTechStackInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    xHandle?: NullableStringFieldUpdateOperationsInput | string | null
    xFollowerCount?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    mrr?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueLast30Days?: NullableFloatFieldUpdateOperationsInput | number | null
    activeSubscriptions?: NullableIntFieldUpdateOperationsInput | number | null
    growth30d?: NullableFloatFieldUpdateOperationsInput | number | null
    growthMRR30d?: NullableFloatFieldUpdateOperationsInput | number | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    askingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    detailFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketingChannels?: MarketingChannelUpdateManyWithoutStartupNestedInput
  }

  export type StartupUncheckedUpdateWithoutTechStackInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    foundedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    xHandle?: NullableStringFieldUpdateOperationsInput | string | null
    xFollowerCount?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    mrr?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    revenueLast30Days?: NullableFloatFieldUpdateOperationsInput | number | null
    activeSubscriptions?: NullableIntFieldUpdateOperationsInput | number | null
    growth30d?: NullableFloatFieldUpdateOperationsInput | number | null
    growthMRR30d?: NullableFloatFieldUpdateOperationsInput | number | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    askingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    detailFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketingChannels?: MarketingChannelUncheckedUpdateManyWithoutStartupNestedInput
  }

  export type MarketingChannelCreateManyStartupInput = {
    id?: number
    slug: string
    category?: string | null
  }

  export type TechStackCreateManyStartupInput = {
    id?: number
    slug: string
    category?: string | null
  }

  export type MarketingChannelUpdateWithoutStartupInput = {
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketingChannelUncheckedUpdateWithoutStartupInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketingChannelUncheckedUpdateManyWithoutStartupInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechStackUpdateWithoutStartupInput = {
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechStackUncheckedUpdateWithoutStartupInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechStackUncheckedUpdateManyWithoutStartupInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
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