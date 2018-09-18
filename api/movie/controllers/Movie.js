'use strict';

/**
 * Movie.js controller
 *
 * @description: A set of functions called "actions" for managing `Movie`.
 */

module.exports = {

  /**
   * Retrieve movie records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.movie.search(ctx.query);
    } else {
      return strapi.services.movie.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a movie record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.movie.fetch(ctx.params);
  },

  /**
   * Count movie records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.movie.count(ctx.query);
  },

  /**
   * Create a/an movie record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.movie.add(ctx.request.body);
  },

  /**
   * Update a/an movie record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.movie.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an movie record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.movie.remove(ctx.params);
  }
};
