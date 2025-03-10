import {
  multi as multiA,
  request as requestA,
  type Builder,
  type Options,
  type Stringifiable,
} from "@phalcode/ts-apicalypse";
import axios, { type AxiosPromise } from "axios";
import type {
  ExecutorMulti,
  IgdbRequest,
  InferMode,
  Routes,
  WebhooksRegister,
  WebhooksRegisterOptions,
} from "./types";

export {
  WhereFlags,
  WhereInFlags,
  and,
  exclude,
  fields,
  limit,
  offset,
  or,
  search,
  sort,
  where,
  whereIn
} from "@phalcode/ts-apicalypse";
export type {
  Builder,
  BuilderOperator,
  BuilderOperatorNarrow,
  Executor,
  ExecutorMulti,
  NamedBuilder,
  NamedBuilderOperator,
  Options,
  Pipe,
  PipeSub,
  ResultMultiMono,
  Stringifiable
} from "@phalcode/ts-apicalypse";
export type * from "../proto/compiled";
export { twitchAccessToken } from "./twitch";
export * from "./types";

const BASE_URL = "https://api.igdb.com/v4";
const BASE_URL_MULTI = `${BASE_URL}/multiquery`;

function buildUrl(key: string) {
  return `${BASE_URL}/${key}`;
}

function getFunctions(defaultHeaders: Record<string, string> = {}) {
  return {
    request<K extends keyof Routes>(key: K): IgdbRequest<K, InferMode<K>> {
      const x = requestA<Routes[K], InferMode<K>>();

      return {
        pipe(...steps) {
          const ex = x.pipe(...steps);

          return {
            ...ex,
            execute(options: Options = {}) {
              return ex.execute.bind(ex)(buildUrl(key), {
                ...options,
                headers: {
                  ...options?.headers,
                  ...defaultHeaders,
                },
              });
            },
          };
        },
        alias(alias) {
          return x.sub(key, alias);
        },
      };
    },

    multi<B extends Builder<any>[]>(
      ...builders: B
    ): Stringifiable & ExecutorMulti<B> {
      const ex = multiA(...builders);
      return {
        ...ex,
        execute(options: Options = {}) {
          return ex.execute.bind(ex)(BASE_URL_MULTI, {
            ...options,
            headers: {
              ...options?.headers,
              ...defaultHeaders,
            },
          });
        },
      };
    },

    webhooks: {
      register<K extends keyof Routes>(
        key: K,
        params: WebhooksRegisterOptions,
        options: Options = {}
      ): AxiosPromise<WebhooksRegister> {
        const encodedParams = new URLSearchParams(
          params as unknown as Record<string, string>
        );

        return axios.create()(buildUrl(`${key}/webhooks`), {
          method: "post",
          data: encodedParams.toString(),
          ...options,
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            ...options?.headers,
            ...defaultHeaders,
          },
        });
      },
      get(
        key?: string | number,
        options: Options = {}
      ): AxiosPromise<WebhooksRegister[]> {
        return axios.create()(buildUrl(key ? `webhooks/${key}` : "webhooks"), {
          method: "get",
          ...options,
          headers: {
            ...options?.headers,
            ...defaultHeaders,
          },
        });
      },
      delete(
        key: string | number,
        options: Options = {}
      ): AxiosPromise<[WebhooksRegister]> {
        return axios.create()(buildUrl(`webhooks/${key}`), {
          method: "delete",
          ...options,
          headers: {
            ...options?.headers,
            ...defaultHeaders,
          },
        });
      },
      test<K extends keyof Routes>(
        key: K,
        id: number | string,
        entityId: number | string,
        options: Options = {}
      ) {
        return axios.post(
          buildUrl(`${key}/webhooks/test/${id}?entityId=${entityId}`),
          null,
          {
            ...options,
            headers: {
              ...options?.headers,
              ...defaultHeaders,
            },
          }
        );
      },
    },
  };
}

const topLevelFns = getFunctions();

/**
 * Prepare a request to an IGDB endpoint.
 *
 * @example
 * ```ts
 * request('/games').pipe(
 *   fields(["name"]),
 *   sort("created_at", "asc"),
 *   where("created_at", ">",  now),
 * )
 * .execute()
 * .then(results => ...);
 * ```
 * @param key
 */
export function request<K extends keyof Routes>(
  key: K
): IgdbRequest<K, InferMode<K>> {
  return topLevelFns.request<K>(key);
}

/**
 * Prepare a multi-query request to an IGDB endpoint.
 *
 * @example
 * ```ts
 * multi(
 *   request('/games')
 *     .alias('alias') // mandatory for multi requests
 *     .pipe(
 *       fields(["name"]),
 *       sort("created_at", "asc"),
 *       where("created_at", ">",  now),
 *     ),
 *   request('/games')
 *     .alias('alias2') // mandatory for multi requests
 *     .pipe(
 *       fields(["name"]),
 *       sort("created_at", "asc"),
 *       where("created_at", "<",  now),
 *     )
 * )
 * .execute()
 * .then(response => ...);
 * ```
 * @see {@link https://api-docs.igdb.com/?shell#multi-query}
 * @param builders
 */
export function multi<B extends Builder<any>[]>(
  ...builders: B
): Stringifiable & ExecutorMulti<B> {
  return topLevelFns.multi<B>(...builders);
}

/**
 * Create an IGDB client with clientId and Twitch accessToken
 *
 * @example
 * ```ts
 * const twitchSecrets = {
 *   client_id: '...',
 *   client_secret: '...',
 * }
 *
 * // generate a twitch access token
 * const accessToken = await twitchAccessToken(twitchSecrets);
 *
 * // generate an IGDB client with twitch credentials
 * const client = igdb(twitchSecrets.client_id, accessToken);
 *
 * // build and execute a query
 * const { data } = await client.request(...).execute();
 * ```
 * @see {@link https://api-docs.igdb.com/?shell#authentication}
 * @param clientId
 * @param accessToken
 */
export function igdb(clientId: string, accessToken: string) {
  const headers = {
    "client-id": clientId,
    authorization: `Bearer ${accessToken}`,
  };

  const wrappedFns = getFunctions(headers);

  return {
    request<K extends keyof Routes>(key: K): IgdbRequest<K, InferMode<K>> {
      return wrappedFns.request<K>(key);
    },

    multi<B extends Builder<any>[]>(
      ...builders: B
    ): Stringifiable & ExecutorMulti<B> {
      return wrappedFns.multi<B>(...builders);
    },

    webhooks: wrappedFns.webhooks,
  };
}
